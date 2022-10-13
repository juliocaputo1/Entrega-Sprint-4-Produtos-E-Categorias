import database from "../../database"

const updateProductsService = async (id, name) => {

    try {
        const res = await database.query(
            'UPDATE products SET name = $2 WHERE id = $1 RETURNING *;',
            [id, name]
        )

        if (res.rowCount === 0) {
            throw "Product not found"
        }
        return res.rows[0]
    }
    catch (err) {
        throw new Error(err)
    }

}

export default updateProductsService