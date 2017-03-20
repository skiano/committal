
const TIME_RE = /(\d+):(\d+)\s*(AM|PM)/
const MERIDIAN_RE = /am/i
const NOON = 12 * 60
const DAY = 24 * 60

export function getTime (timeStringOrValue) {
  if (typeof timeStringOrValue === 'string') {
    return timeFromString(timeStringOrValue)
  } else {
    return timeStringOrValue
  }
}

export function timeFromString (timeString) {
  const parts = timeString.match(TIME_RE)

  if (!parts) {
    throw new Error(`Bad time format: ${timeString}, should be like "6:30 PM"`)
  }

  let hours
  if (MERIDIAN_RE.test(parts[3])) {
    hours = parseInt(parts[1], 10)
    if (hours === 12) { hours = 0 } // special case for 12am
  } else {
    hours = parseInt(parts[1], 10) + 12
    if (hours === 24) { hours = 12 } // special case for 12pm
  }

  const minutes = parseInt(parts[2], 10)
  return (hours * 60) + minutes
}

export function timeToString (time) {
  if (time > DAY || time < 0) {
    throw new Error(`Time is out of bounds: ${time}`)
  }

  const minutes = time % 60
  let hours
  if (time <= NOON) {
    hours = Math.floor(time / 60)
    if (hours === 0) { hours = 12 } // special case for 12am
  } else {
    hours = Math.floor(time / 60) - 12
  }
  const meridaian = time < NOON ? 'AM' : 'PM'

  return `${hours}:${twoDigit(minutes)} ${meridaian}`;
}

function twoDigit (n) {
  return ('0' + n).slice(-2)
}
