// alert("hellow there");
$(document).ready(function(){
    
    // section slide
    $('.section-two').hide();
    $('.section-three').hide();

    $('#profile-btn').on('click', function(){
        $('.section-one').slideUp();
        $(".section-two").show();
    });

        $('#work-btn').on('click', function(){
         $('.section-two').hide();
        $(".section-three").show();
        });

    // val= $('#flexSwitchCheckChecked');
    // // $('#flexSwitchCheckChecked').change('click', function(){
    // //     console.log(typeof($(val).val()));
    // // });
    // // if($('#checkbox1').prop('checked', true).change()){
    // //     alert("ok");
    // // }

    // $('#flexSwitchCheckChecked').click(function() 
    // {
    //     var is_checked = $(this).is(':checked');
    //     console.log('is_checked: ' + is_checked); 

    //     if (is_checked==true){
    //             // $(".form-check-label").text(" Dark mode")
    //         $("<link/>", {
    //             rel: "stylesheet",
    //             type: "text/css",
    //             href: "dark.css"
    //          }).appendTo("head");

    //     } else{
    //         // $(".form-check-label").text("Light theme")
    //         $("<link/>", {
    //             rel: "stylesheet",
    //             type: "text/css",
    //             href: "style.css"
    //          }).appendTo("head");
    //     }
    // });

    // //slide effects

    // $('#contact-me-btn').on('click', ()=>{
        
    // })

});