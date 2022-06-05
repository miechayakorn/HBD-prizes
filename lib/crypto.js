import CryptoJS from 'crypto-js'

export const encrypt = (data) => {
    return CryptoJS.AES.encrypt(data, `${process.env.SECRET_KEY}`).toString()
}

export const decrypt = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, `${process.env.SECRET_KEY}`)
    return bytes.toString(CryptoJS.enc.Utf8)
}
