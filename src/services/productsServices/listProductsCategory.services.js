import database from "../../database"

const listProductsCategoryService = async (category_id) => {
    try {
        const res = await database.query(
            'SELECT products.name, products.price, categories.name AS category FROM products JOIN categories ON products.category_id = categories.id WHERE category_id = $1',
            [category_id]
        )
        return res.rows
    }
    catch (err) {
        throw new Error(err)
    }
}

export default listProductsCategoryService

