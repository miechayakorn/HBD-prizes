import excuteQuery from './db'
import uniqid from 'uniqid'

export const selectHistory = async () => {
    try {
        const result = await excuteQuery({
            query: 'SELECT game_historys.user_id, accounts.username, MIN(game_historys.time_spent) AS time_spent ' +
                'FROM game_historys ' +
                'INNER JOIN accounts ON game_historys.user_id=accounts.id ' +
                'WHERE rounds = 5 GROUP BY game_historys.user_id ORDER BY MIN(game_historys.time_spent) ASC LIMIT 12'
        })
        return result
    } catch (error) {
        throw error
    }
}

export const createHistory = async (data) => {
    try {
        const uniqId = uniqid.process()
        await excuteQuery({
            query: 'INSERT INTO game_historys (code, user_id, game_id, rounds, time_spent) VALUES(?,?,?,?,?)',
            values: [uniqId, data.userId, data.gameId, data.rounds, data.timeSpent],
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
