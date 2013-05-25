jQuery(document).ready(function()
{
    jQuery(".btn2").click(function() {
        var ds  = $('.D')
        for(d in ds){
            var di = ds[d];
            var color= turncolor("red","yellow",jQuery(di).css("background-color"));
            jQuery(di).css({"background-color": color});
            //do whatever you want
        }


        //  jQuery('.D').each(function() {
        //    var color= turncolor("red","yellow",this.css("background-color"));
        //    this.css({"background-color": color});
        //    alert( this.id );
      //  });

    });
    jQuery(".btn4").click(function()
    {
     jQuery("#container").find(':last-child').not(':only-child').remove();
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


