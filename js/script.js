$(document).ready(function(e) {
    var txtinput = '';
    var f = 0;
    var val1, val2;
    var fd = 0;

    $("input[type='button']").click(function() {
        var v = this.value;
        if (v == '1' || v == '2' || v == '3' || v == '4' || v == '5' || v == '6' || v == '7' || v == '8' || v == '9' || v == '0' || v == '.') {
            if (txtinput.length + 1 <= 10) {
                if (v == '.' && $("#txt").val() == '') {
                    txtinput += '0.';
                } else
                    txtinput += this.value;
                $("#txt").val(txtinput);
            }
        }

        switch (v) {
            case '/': //-------- / ---------
                f = 1;
                val1 = $("#txt").val();
                $("#btn_c").click();
                $("#btn_dot").attr("Disabled", false);
                break;

            case '+': //--------  + ---------
                f = 2;
                val1 = $("#txt").val();
                $("#btn_c").click();
                $("#btn_dot").attr("Disabled", false);
                break;

            case '-': //--------  - ---------
                f = 3;
                val1 = $("#txt").val();
                $("#btn_c").click();
                $("#btn_dot").attr("Disabled", false);
                break;

            case '*': //--------  + ---------
                f = 4;
                val1 = $("#txt").val();
                $("#btn_c").click();
                $("#btn_dot").attr("Disabled", false);
                break;

            case 'Enter': //--------  Enter ---------
                var val2 = $("#txt").val();
                $("#btn_dot").attr("Disabled", false);

                if (parseInt(val2) != null)
                    $.post("ajax.php", { lblval1: val1, lblval2: val2, lblflag: f, send: true }, function(data) {
                        $("#txt").val(data);
                    });

                break;
        }

    });

    $("#btn_c").click(function() {
        txtinput = '';
        $("#txt").val('');
    });
});