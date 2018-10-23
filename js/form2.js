(function () {
    var numUses = 0;
    var words = ['hello', 'guys', 'good', 'morning', 'these', 'words', 'are', 'not', 'random'];
    var wordsPosition = 0;

    $(document).ready(function () {
        $('#form2').on('submit', function () {

            $('#form2-result').val(words[wordsPosition]);

            wordsPosition++;
            if (wordsPosition >= words.length) {
                wordsPosition = 0;
            }

            $('#form2-num-uses').val(++numUses);
            return false;
        });
    });

})();
