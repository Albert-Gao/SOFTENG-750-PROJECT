const axios = require('axios')
const { JSDOM } = require('jsdom')

const wikiPage = 'https://en.wikipedia.org/wiki/University_College_Cork'

function getPageShortDescription(html) {
    const pageDOM = new JSDOM(html)
    const pTags = pageDOM.window.document.querySelectorAll('p')

    if (pTags.length < 2) {
        return ''
    }

    let shortDescription = pTags[1].textContent.toString()
    shortDescription = shortDescription.replace(/\[\d+\] /g, '')
    return shortDescription
}

function getPageTitle(html) {
    const pageDOM = new JSDOM(html)
    let title = pageDOM.window.document.title
    title = title.replace(' - Wikipedia', '')
    return title
}

async function getPage(wikiUrl) {
    const page = await axios.get(wikiUrl)
    const html = page.data
    console.log(getPageShortDescription(html))
    console.log(getPageTitle(html))
}

getPage(wikiPage)
