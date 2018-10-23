(function () {
    var submitActor = null;
    var numUses = 0;

    $(document).ready(function () {
        $('#form1-add').on('click', function () {
            submitActor = this;
        });

        $('#form1-subtract').on('click', function () {
            submitActor = this;
        });

        $('#form1').on('submit', function () {

            var $arg1 = $('#form1-arg1');
            var $arg2 = $('#form1-arg2');
            var result;

            if (submitActor.id == 'form1-add') {
                result = parseInt($arg1.val()) + parseInt($arg2.val());
            }
            else if (submitActor.id == 'form1-subtract') {
                result = parseInt($arg1.val()) - parseInt($arg2.val());
            }

            $('#form1-result').val(result);
            $('#form1-num-uses').val(++numUses);

            return false;
        });

    });

})();
