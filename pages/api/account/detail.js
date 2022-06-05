import { findUser } from '../../../lib/accounts'

const handler = async (req, res) => {
    if (req.method === 'GET' && req.query.username) {
        try {
            const result = await findUser(req.query)
            res.status(200).json({result})
        } catch (err) {
            res.status(500).json({error: err.sqlMessage || 'failed to load data'})
        }
    } else {
        res.status(400).json({error: 'Bad request'})
    }
}

export default handler
