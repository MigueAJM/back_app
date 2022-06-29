export default(req, res) => {
    const response ={}, data = res.response
    response.status = true
    response.statusCode = data.data.length ? 200 : data.code
    response.message = data.data.length ? 'OK' : data.message
    response.content = data.data
    res.json(response)
}