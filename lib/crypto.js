import CryptoJS from 'crypto-js'

export const encrypt = (data) => {
    return CryptoJS.AES.encrypt(data, 'miearcade').toString()
}

export const decrypt = (ciphertext) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, 'miearcade')
    return bytes.toString(CryptoJS.enc.Utf8)
}
