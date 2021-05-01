const url = 'http://localhost:4050'

export const getHistorial = async () => {
  try {
    const request = await fetch(url + '/history')
    const response = await request.json()
    console.log(response)
    return response
  } catch (error) {
    console.log()
  }
}

export const getActualPrices = async () => {
  try {
    const request = await fetch(url + '/history')
    const response = await request.json()
    console.log(response)
    return response
  } catch (error) {
    console.log()
  }
}
