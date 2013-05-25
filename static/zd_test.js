jQuery(document).ready(function()
{
    jQuery(".btn2").click(function() {



          jQuery('.D').each(function() {
            var color= turncolor("red","yellow",jQuery(this).css("background-color"));
            jQuery(this).css({"background-color": color});
        //    alert( this.id );
        });

    });
    jQuery(".btn4").click(function()
    {
     jQuery("#container").find(':last-child').not(':only-child').remove();
     var curre="[seldef='" + "1" + "']";

     console.log(curre);

     jQuery("#bcont").find(curre).each(function(){
         alert(this.className);
     })
    });

    jQuery(".btn3").click(function() {
        jQuery("#container").append(jQuery('<div/>', {
            id: 'boxD',
            class: 'D'
        }));
    });

    jQuery(".btn1").click(function() {
        var input_string = jQuery("#word").val();
        jQuery.ajax(
            {
                type: "POST",
                data: {good: input_string},
                success: function(myg)
                {

                        var obj = JSON.parse(myg);
                        jQuery("#lst").html(genli(obj));


                }
            });
        return false;
    });



});




//jQuery(".btn2").click(function(){
//    jQuery("#boxC").css("background-color","red");
//});


