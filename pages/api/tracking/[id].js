import { createHistory, updateHistory } from '../../../lib/gamesHistory'
import { decrypt } from '../../../lib/crypto'

const MAX_ROUND = 5

const handler = async (req, res) => {
    const {query: {id}} = req
    const decryptData = JSON.parse(decrypt(id))
    if (!id) {
        res.status(400).json({error: 'Bad request'})
    }

    if (req.method === 'GET' && decryptData.userId) {
        try {
            const gameCode = await createHistory({decryptData, gameId: 1})
            res.status(200).json({gameCode})
        } catch (err) {
            res.status(500).json({error: err.sqlMessage || 'failed to load data'})
        }
    } else if (req.method === 'PUT' && decryptData.userId && decryptData.gameCode && decryptData.round <= MAX_ROUND && decryptData.timeSpent) {
        try {
            await updateHistory(decryptData)
            res.status(200).json({msg: 'Save tracking success'})
        } catch (err) {
            res.status(500).json({error: err.sqlMessage || 'failed to load data'})
        }
    } else {
        res.status(400).json({error: 'Bad request'})
    }
}

export default handler
