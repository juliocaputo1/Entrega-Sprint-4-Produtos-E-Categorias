import listOneProductService from "../../services/productsServices/listOneProduct.services"

const listOneProductController = async (request, response) => {

    const { id } = request.params

    try {
        const product = await listOneProductService(id)

        return response.status(200).json(product)
    }
    catch (err) {
        return response.status(400).json({ message: err.message })
    }

}

export default listOneProductController