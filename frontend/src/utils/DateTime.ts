import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import relativeTime from 'dayjs/plugin/relativeTime'
import calendar from 'dayjs/plugin/calendar'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(isToday)
dayjs.extend(calendar)
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)
dayjs.locale('en-nz')

function utc2LocalRelative(dateTimeString: string) {
    const dayjsObj = dayjs(dateTimeString)
    if (dayjsObj.isToday()) {
        return dayjsObj.fromNow()
    }
    return dayjsObj.calendar()
}

function formatToLocal(dateTimeString: string) {
    return dayjs(dateTimeString).format('HH:mm:ss D/MMM/YY')
}

export const DateTime = {
    utc2LocalRelative,
    formatToLocal,
}
