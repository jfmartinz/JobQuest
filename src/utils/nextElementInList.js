const nextElementInList = (lists, value) => {
  const currentValueIndex = lists.indexOf(value)
  const nextVerbIndex = (currentValueIndex + 1) % lists.length
  const nextValue = lists[nextVerbIndex]
  return nextValue
}

export default nextElementInList
