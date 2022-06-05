import excuteQuery from './db'
import uniqid from 'uniqid'

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
        const result = await excuteQuery({
            query: 'UPDATE game_historys SET rounds=?, time_spent=? WHERE code=? AND user_id=?',
            values: [data.round, data.timeSpent, data.gameCode, data.userId],
        })
        return result
    } catch (error) {
        throw error
    }
}
