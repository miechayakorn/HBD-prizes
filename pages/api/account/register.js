import { createUser } from '../../../lib/accounts'

const handler = async (req, res) => {
    if (req.method === 'POST' && req.body) {
        try {
            await createUser(req.body)
            res.status(200).json({msg: 'Submit Success!'})
        } catch (err) {
            res.status(500).json({error: err.sqlMessage || 'failed to load data'})
        }
    } else {
        res.status(400).json({error: 'Bad request'})
    }
}

export default handler
