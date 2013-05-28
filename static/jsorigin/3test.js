jQuery(document).ready(function()
{

    jQuery(".btn2").click(function()
    {
        jQuery('.D').each(function() {
            var color= turncolor('rgb(255, 255, 0)','rgb(255, 0, 0)',jQuery(this).css("background-color"));
            console.log(color);
            jQuery(this).css({"background-color": color});

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
    jQuery(".btn5").click(function()
    {   console.log("btn5 click");
        console.log(jQuery(".temA").val());
        var t = document.querySelector("#commentTemplate");
        //Populate the template here
      //  someElement.appendChild(t.content.cloneNode());
        jQuery(".temA").append(t.content.cloneNode());

    //    jQuery(".temA").append(
    //        jQuery('<div/>', {
    //        id:"drag1",

    //        draggable:"true",
    //        ondragstart:"return dragStart(event)",
    //        ondragend:"return dragEnd(event)"
    //    }));
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
