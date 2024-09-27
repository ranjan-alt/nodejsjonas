const getAllProductsStatic = async (req, res) => {
    res.status(200).json({
        status: "success",
        message: "product testing route"
    })
}

const getAllProducts = async (req, res) => {
    res.status(200).json({
        status: "success",
        message: "product testing route"
    })
}


module.exports = {

    getAllProducts,
    getAllProductsStatic
}