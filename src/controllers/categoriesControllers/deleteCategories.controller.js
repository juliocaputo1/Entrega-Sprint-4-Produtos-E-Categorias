import deleteCategoriesService from "../../services/categoriesServices/deleteCategories.services"

const deleteCategoriesController = async (request, response) => {

    const { id } = request.params

    try {
        const deletedCategory = await deleteCategoriesService(id)
        return response.status(204).json(deletedCategory)
    }
    catch (err) {
        return response.status(400).json({ message: err.message })
    }
}

export default deleteCategoriesController