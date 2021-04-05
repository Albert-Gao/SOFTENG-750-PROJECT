import { BadRequest, GeneralError } from '@feathersjs/errors'
import { HookContext } from '@feathersjs/feathers'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import url from 'url'

const wikiPage = 'https://en.wikipedia.org/wiki/University_College_Cork'

function getPageShortDescription(html: string) {
    const pageDOM = new JSDOM(html)
    const pTags = pageDOM.window.document.querySelectorAll('p')

    if (pTags.length < 2) {
        return ''
    }

    let shortDescription = (pTags[1].textContent ?? '').toString()
    shortDescription = shortDescription.replace(/\[\d+\] /g, '')
    return shortDescription
}

function getPageTitle(html: string) {
    const pageDOM = new JSDOM(html)
    let title = pageDOM.window.document.title
    title = title.replace(' - Wikipedia', '')
    return title
}

export const getWikiPageInfo = async (context: HookContext) => {
    if (
        !context.data.wikipediaUrl ||
        typeof context.data.wikipediaUrl !== 'string' ||
        !context.data.wikipediaUrl
    ) {
        throw new BadRequest('no wikiUrl found in the request')
    }

    try {
        const userUrl = new url.URL(context.data.wikipediaUrl)

        if (!userUrl.host.endsWith('wikipedia.org')) {
            throw new BadRequest('must be a wikipedia URL')
        }
    } catch (e) {
        throw new BadRequest('not valid URL')
    }

    try {
        const page = await axios.get(context.data.wikipediaUrl)
        const html = page.data
        context.data.title = getPageTitle(html)
        context.data.description = getPageShortDescription(html)
        context.data.author = context.params.user?._id
    } catch (e) {
        console.log(e)
        throw new GeneralError(
            'Error when getting WikiPedia page, please try again later',
        )
    }

    return context
}
