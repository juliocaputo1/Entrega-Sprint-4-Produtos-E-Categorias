import createCategoriesService from "../../services/categoriesServices/createCategories.services"

const createCategoriesController = async (request, response) => {

    const { name } = request.body
    try {
        const category = await createCategoriesService(name)
        return response.status(201).json({ message: 'user Created', category })
    }
    catch (err) {
        return response.status(400).json({ message: err.message })
    }
}

export default createCategoriesController