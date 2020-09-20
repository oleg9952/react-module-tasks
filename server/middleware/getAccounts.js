const { readFile } = require('../utils/readFile')

module.exports.getAccounts = async (req, res, next) => {
    try {
        const accounts = await readFile();
        res.status(200).send({
            status: 200,
            data: accounts
        })
    } catch (error) {
        next(error);
    }
}