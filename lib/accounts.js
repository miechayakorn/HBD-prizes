import excuteQuery from './db'

export const createUser = async (data) => {
    try {
        const result = await excuteQuery({
            query: 'INSERT INTO accounts (username) VALUES(?)',
            values: [data.username],
        })
        return result
    } catch (error) {
        throw error
    }
}

export const findUser = async ({username}) => {
    try {
        const result = await excuteQuery({
            query: 'SELECT * FROM accounts WHERE username = ?',
            values: [username]
        })
        return result[0]
    } catch (error) {
        throw error
    }
}

