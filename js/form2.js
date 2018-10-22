var numUses = 0;
var words = ['hello', 'guys', 'good', 'morning', 'these', 'words', 'are', 'not', 'random'];
var wordsPosition = 0;

window.onload = function () {
    document.getElementById('form2').onsubmit = function () {

        document.getElementById('form2-result').value = words[wordsPosition];

        wordsPosition++;
        if (wordsPosition >= words.length) {
            wordsPosition = 0;
        }

        document.getElementById('form2-num-uses').value = ++numUses;
        return false;
    };
};
