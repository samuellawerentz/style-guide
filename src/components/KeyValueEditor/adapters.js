export const stringTransform = (str) => {
  let hasNull = false
  let hasVariable = false
  if (typeof str !== 'string') return str
  let valueArray = [str]
  if (str.match(/^{{.+}}$/)) {
    if (str.match(/\|null}}$/)) hasNull = true
    if (str.length > 6) {
      str = str.replace(/[{}]|\|null/g, '')
      valueArray = str.split('|').map((s) => (s && s.length ? `{{${s}}}` : s))
    }
    hasVariable = true
  }
  return { valueArray, hasNull, hasVariable }
}

export const inputAdapter = (data) => {
  return data.map((item) => {
    item.value = stringTransform(item.value)
    return item
  })
}

export const outputAdapter = (data) => {
  return data.map(({ key, ...item }) => {
    const newItem = { key }
    if (item.value.hasVariable) {
      if (item.value.hasNull) item.value.valueArray.push('{{null}}')
      newItem.value = `{{${item.value.valueArray.map((s) => s.replace(/[{}]/g, '')).join('|')}}}`
    } else newItem.value = item.value.valueArray.join()
    return newItem
  })
}
