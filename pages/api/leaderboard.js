import { selectHistory } from '../../lib/gamesHistory'

const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const result = await selectHistory(req.query)
            res.status(200).json({result})
        } catch (err) {
            res.status(500).json({error: err.sqlMessage || 'failed to load data'})
        }
    } else {
        res.status(400).json({error: 'Bad request'})
    }
}

export default handler
