/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */

let justify = function (str, len) {

    let words = str.split(" ").filter(word => word !== " ");
    let result = "";
    let done = false;
    do {
        let acc = []
        let line_done = false;
        acc.push(words.shift());
        if (words.length !== 0)
            do {
                let test = words[0];
                if (function (arr) {
                    return arr.map(v => v.length).reduce((a, v) => a + v + 1)
                }(acc) + test.length < len) {
                    acc.push(words.shift());
                } else {
                    line_done = true
                    result += function (arr, len) {
                        let length = arr.join(' ').length
                        if (length < len) {
                            let diff = len - length
                            let index = 0
                            do {
                                diff--
                                arr[index] += ' '
                                index++
                                if (index == arr.length - 1)
                                    index = 0
                            } while (diff > 0)
                            return arr.join(' ')
                        }
                    }(acc, len) + "\n"
                }
            } while (line_done !== true);
        if (words.length === 0)
            result += acc[0]
    } while (words.length !== 0);
    return result
};

const Text = function (text = '') {
    this.text = text
}

Text.prototype.justify = function (len) {
    return justify(this.text, len)
}

module.exports = Text