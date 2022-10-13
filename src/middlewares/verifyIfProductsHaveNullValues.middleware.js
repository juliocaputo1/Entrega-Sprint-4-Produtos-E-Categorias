const verifyIfProductsHaveNullValues = (request, response, next) => {
    const { name } = request.body
    const { price } = request.body


    if (name == undefined || price == undefined) {
        return response.status(400).json({ message: 'product must not have null values' })
    }

    next()

}

export default verifyIfProductsHaveNullValues