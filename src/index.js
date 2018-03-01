module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map(pair => pair.join(''));
    let foundSmth = true;
    while (str.length && foundSmth) {
        foundSmth = false;        
        for (let i = 0; i < brackets.length; i++) {
            let foundedPos = str.indexOf(brackets[i]);
            if (foundedPos != -1) {
                str = str.slice(0, foundedPos) + str.slice(foundedPos + 2);
                foundSmth = true;
            }
        }
    }
    return str.length ? false : true;
}
