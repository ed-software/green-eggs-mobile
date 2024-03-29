import { UserFragment } from './types/graphql'

/**
 * Function that takes a string and returns that string with the first character capitalised
 */
export function toTitleCase(input: string): string {
  return `${input.toUpperCase()[0]}${input.toLowerCase().slice(1)}`
}

/**
 * Converts date format returned by GraphQL queries to printable string (3 hours, 2 days, etc.)
 * Used when duration should be calculated from now backwards.
 */
export function convertSubmittedAt(submittedAt: string): string {
  const timeInMilliseconds = Date.now() - Number(submittedAt)
  return convertTimeInMilliseconds(timeInMilliseconds)
}

/**
 * Converts date format returned by GraphQL queries to printable string (3 hours, 2 days, etc.)
 * Used when duration should be calculated from unix epoch time forwards.
 */
export function convertTimeEstimate(timeEstimate: string): string {
  const timeInMilliseconds = Number(timeEstimate)
  return convertTimeInMilliseconds(timeInMilliseconds)
}

/**
 * Helper function for time conversion functions that converts date format returned by GraphQL
 * queries to a string (3 hours, 2 days, etc.)
 */
function convertTimeInMilliseconds(timeInMilliseconds: number): string {
  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour
  const week = 7 * day
  const month = 30 * day
  const year = 365.25 * day

  if (Number.isNaN(timeInMilliseconds)) {
    return '0 sec'
  }
  if (timeInMilliseconds < hour) {
    return `${Math.floor(timeInMilliseconds / minute)} mins`
  }
  if (timeInMilliseconds === hour) {
    return '1 hour'
  }
  if (timeInMilliseconds < day) {
    return `${Math.floor(timeInMilliseconds / hour)} hours`
  }
  if (timeInMilliseconds < week) {
    return `${Math.floor(timeInMilliseconds / day)} days`
  }
  if (timeInMilliseconds < month) {
    return `${Math.floor(timeInMilliseconds / week)} weeks`
  }
  if (timeInMilliseconds < year) {
    return `${Math.floor(timeInMilliseconds / month)} months`
  }
  return `${Math.floor(timeInMilliseconds / year)} years`
}

/**
 * Takes a user fragment and returns a concatenated full name (first name + last name)
 */
export function convertUserToFullName(user: UserFragment): string {
  return `${user.firstName} ${user.lastName}`
}

// export const AlphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',  'Z'] as const
// export type Alphabet = typeof AlphabetArray[number]

interface RGBAValues {
  red: number
  green: number
  blue: number
  alpha: number
}

function getRBBAValues(color: string): RGBAValues {
  const isHex = color.startsWith('#') && color.length === 7
  const isRGBA = color.startsWith('rgba')

  if (isHex) {
    const red = parseInt(color.slice(1, 3), 16)
    const green = parseInt(color.slice(3, 5), 16)
    const blue = parseInt(color.slice(5, 7), 16)
    return { red, green, blue, alpha: 1 }
  }

  if (isRGBA) {
    const [red, green, blue, alpha] = color
      .slice(5, color.length - 1)
      .split(',')
      .map(Number)
    return { red, green, blue, alpha }
  }
  throw new Error('Could not convert input into hex or rgba')
}

export function alpha(color: string, opacity: number) {
  const { red, green, blue } = getRBBAValues(color)
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}
