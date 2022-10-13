import database from "../../database"

const listOneProductsService = async (id) => {

    try {
        const res = await database.query(
            'SELECT * FROM products WHERE id = $1',
            [id]
        )
        if (res.rows.length === 0) {
            throw new Error('product not found')
        }
        return res.rows[0]
    }
    catch (err) {
        throw new Error(err)
    }
}

export default listOneProductsService