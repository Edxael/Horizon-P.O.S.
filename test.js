const chai = require('chai')
const should = chai.should()
const total = require('./total.js')

describe('Testing function for adding the total', () => {

  it('should return an array when input: array', () => {
    const input = [5, 3, 7]
    const output = total(input)

    output.should.be.a('array')
  })

  it('should return an array with length of: 3', () => {
    const input = [5, 3, 7]
    const output = total(input)

    output.should.have.lengthOf(3)
  })

  it('should return a number "Sub-Total" in array output[0]', () => {
    const input = [5, 3, 7]
    const output = total(input)

    output[0].should.be.a('number')
  })

  it('should return a number "Taxes" in array output[1]', () => {
    const input = [5, 3, 7]
    const output = total(input)

    output[1].should.be.a('number')
  })

  it('should return a number "Final-Total" in array output[2]', () => {
    const input = [5, 3, 7]
    const output = total(input)

    output[2].should.be.a('number')
  })

  it('should return:"15" as "Sub-Total" in array output[0]', () => {
    const input = [5, 3, 7]
    const output = total(input)

    output[0].should.equal(15)
  })

  it('should return:"11.86" as "Sub-Total" in array output[1]', () => {
    const input = [5.99, 3.45, 7.50]
    const output = Math.round(total(input)[1] * 100) / 100

    output.should.equal(11.86)
  })

  it('should return:"15" as "Sub-Total" in array output[0]', () => {
    const input = [5.99, 3.45, 7.50]
    const output = Math.round(total(input)[2] * 100) / 100

    output.should.equal(28.8)
  })

})




// it('should return a subtotal, array output[0] = 15')
