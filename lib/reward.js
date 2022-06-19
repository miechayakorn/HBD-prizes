import excuteQuery from './db'

export const myReward = async (uid) => {
    try {
        const result = await excuteQuery({
            query: 'SELECT * FROM rewards WHERE user_id = ?',
            values: [uid]
        })
        return result
    } catch (error) {
        throw error
    }
}

