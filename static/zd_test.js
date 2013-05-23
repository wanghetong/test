jQuery(document).ready(function()
{
    jQuery(".btn1").click(function() {
        var input_string = $("input#word").val();
        jQuery.ajax(
            {
                type: "POST",
                data: {good: input_string},
                success: function(myg)
                {

                        var obj = JSON.parse(myg);
                        jQuery('#lst').html(genli(obj));


                }
            });
        return false;
    });
});
