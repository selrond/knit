import type from 'type-detect'

function knit(arg, item) {
  if (!Array.isArray(arg)) {
    throw TypeError(`I can't knit with ${type(arg)}`)
  }
  if (arg.length <= 1) return arg

  const knittedItems = arg.reduce(
    (acc, element, index, array) => [
      ...acc,
      element,
      ...(index + 1 === array.length ? [] : [item]),
    ],
    []
  )

  return knittedItems
}

export { knit }
