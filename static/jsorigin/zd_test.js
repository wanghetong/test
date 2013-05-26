jQuery(document).ready(function()
{

    jQuery(".btn2").click(function()
    {

        alert(jQuery('.D').length);

          jQuery('.D').each(function() {
            tc=jQuery(this).css("background-color");
            co= turncolor('rgb(255, 255, 0)','rgb(255, 0, 0)',tc);

            jQuery(this).css({"background-color": co});
            console.log(co);
        //    alert( this.id );
        });

    });
    jQuery(".btn4").click(function()
    {
     jQuery(".container").find(':last-child').not(':only-child').remove();
     var curre="[seldef='" + "1" + "']";

     console.log(curre);

     jQuery(".bcont").find(curre).each(function(){
         console.log(this.className);
     })
    });

    jQuery(".btn3").click(function() {
        jQuery(".container").append(jQuery('<div/>', {
            id: 'boxD',
            className: 'D'
        }));
    });

    jQuery(".btn1").click(function() {
        var input_string = jQuery(".word").val();

        jQuery.ajax(
            {
                type: "POST",
                data: {good: input_string},
                success: function(myg)
                {

                        var obj = JSON.parse(myg);
                        jQuery(".lst").html(genli(obj));


                }
            });
        return false;
    });



});




//jQuery(".btn2").click(function(){
//    jQuery("#boxC").css("background-color","red");
//});


