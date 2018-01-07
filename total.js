
let total = (arr) => {
  let data = [0, 0, 0] // this array: SubTotal, Taxes, FinalTotal

  data[0] = arr.reduce((pv, cv) => { return pv + cv }, 0)

  data[1] = data[0] * 0.7

  data[2] = data[0] + data[1]

  return data
}

module.exports = total
