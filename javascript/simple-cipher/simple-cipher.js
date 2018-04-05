const Cipher = function (key = this._randomKey()) {
    if (this._isValidKey(key)) {
        this.key = key
        this.cipher = this._cipherGen(key)
    }
}

Cipher.prototype._alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

Cipher.prototype._distance = function(c){this._alpha.indexOf(c)}

Cipher.prototype._cipherGen = function(seq){[...seq].map(v => {
    return this._distance(v)
})}

Cipher.prototype._randomKey = function(){
    let key = ''
    while (key.length < 100) {
        key += this._alpha[Math.floor(Math.random() * 27)]
    }   
    return key
}

Cipher.prototype.encode = function(message){
    for(i=0;i < message.length;i++){
        
    }
}

Cipher.prototype._isValidKey = function(){
    if (key.length > 0 && [...key].every(
        v => { return this._alpha.includes(v) }
    )) {
        return true
    }
    throw new Error('Bad key')
}

module.exports = Cipher