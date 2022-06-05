import excuteQuery from './db'
import uniqid from 'uniqid'

const MAX_ROUND = 5

export const createHistory = async (data) => {
    try {
        const uniqId = uniqid.process()
        await excuteQuery({
            query: 'INSERT INTO game_historys (code, user_id, game_id) VALUES(?,?,?)',
            values: [uniqId, data.userId, data.gameId],
        })
        return uniqId
    } catch (error) {
        throw error
    }
}

export const updateHistory = async (data) => {
    try {
        if (data.round === MAX_ROUND) {
            const result = await excuteQuery({
                query: 'UPDATE game_historys SET ROUND=? WHERE code=? AND user_id=?',
                values: [data.round, data.gameCode, data.userId],
            })
            return result
        } else {
            //Todo Plus TimeSent!!
            const result = await excuteQuery({
                query: 'UPDATE game_historys SET ROUND=? WHERE code=? AND user_id=?',
                values: [data.round, data.gameCode, data.userId],
            })
            return result
        }
    } catch (error) {
        throw error
    }
}
