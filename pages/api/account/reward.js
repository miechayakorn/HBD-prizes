import { myReward } from '../../../lib/reward'
import { decrypt } from '../../../lib/crypto'

const handler = async (req, res) => {
    if (req.method === 'POST' && req.body.uid) {
        const decryptData = decrypt(req.body.uid)
        try {
            const result = await myReward(decryptData)
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json({error: err.sqlMessage || 'failed to load data'})
        }
    } else {
        res.status(400).json({error: 'Bad request'})
    }
}

export default handler
