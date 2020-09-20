const { readFile } = require('../utils/readFile')

module.exports.searchAccounts = async (req, res, next) => {
    try {
        const accounts = await readFile();
        const result = accounts.filter(acc => acc.name === req.params.name);
        res.status(200).send({
            status: 200,
            data: result
        })
    } catch (error) {
        next(error);
    }
}