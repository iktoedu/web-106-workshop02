(function () {
    var submitActor = null;
    var numUses = 0;

    onLoadHandlers[onLoadHandlers.length] = function () {
        document.getElementById('form1-add').onclick = function () {
            submitActor = this;
        };

        document.getElementById('form1-subtract').onclick = function () {
            submitActor = this;
        };

        document.getElementById('form1').onsubmit = function () {

            var arg1 = document.getElementById('form1-arg1');
            var arg2 = document.getElementById('form1-arg2');
            var result;

            if (submitActor.id == 'form1-add') {
                result = parseInt(arg1.value) + parseInt(arg2.value);
            }
            else if (submitActor.id == 'form1-subtract') {
                result = parseInt(arg1.value) - parseInt(arg2.value);
            }

            document.getElementById('form1-result').value = result;
            document.getElementById('form1-num-uses').value = ++numUses;

            return false;
        };

    };

})();
