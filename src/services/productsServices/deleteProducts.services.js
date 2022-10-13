import database from "../../database"

const deleteProductsService = async (id) => {

    try {
        const res = await database.query(
            'DELETE FROM products WHERE id = $1 RETURNING *',
            [id]
        )

        if (res.rows.length === 0) {
            throw "product not found"
        }
        return 'product deleted'

    }
    catch (err) {
        throw new Error(err)
    }
}

export default deleteProductsService