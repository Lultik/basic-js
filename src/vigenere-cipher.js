const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
class VigenereCipheringMachine {
    encrypt(message, key) {
        let count = 0;
        key = key.repeat(message.length/key.length + 1 ).toLowerCase()
        return message.toLowerCase().split('').map((item,index) => {
            if(/[A-Za-z]/.test(item)) {
                let letterNumber = alphabet.indexOf(item)+alphabet.indexOf(key[count]);
                count++;
                return alphabet[letterNumber%26]
            }else return item
        }).join('').toUpperCase()

    }

    decrypt(code, key) {
        let count = 0;
        key = key.repeat(code.length/key.length + 1 ).toLowerCase()
        return code.toLowerCase().split('').map((item,index) => {
            if(/[A-Za-z]/.test(item)) {
                let letterNumber = 26 + alphabet.indexOf(item)-alphabet.indexOf(key[count]);
                count++;
                return alphabet[letterNumber%26]
            }else return item
        }).join('').toUpperCase()
    }
}

module.exports = VigenereCipheringMachine;
