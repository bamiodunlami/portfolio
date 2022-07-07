// alert("hellow there");
$(document).ready(function(){
    console.log("Hello there");
    val= $('#flexSwitchCheckChecked');
    // $('#flexSwitchCheckChecked').change('click', function(){
    //     console.log(typeof($(val).val()));
    // });
    // if($('#checkbox1').prop('checked', true).change()){
    //     alert("ok");
    // }

    $('#flexSwitchCheckChecked').click(function() 
    {
        var is_checked = $(this).is(':checked');
        console.log('is_checked: ' + is_checked); 

        if (is_checked==true){
           
            $("<link/>", {
                rel: "stylesheet",
                type: "text/css",
                href: "dark.css"
             }).appendTo("head");

        } else{
            $("<link/>", {
                rel: "stylesheet",
                type: "text/css",
                href: "style.css"
             }).appendTo("head");
        }
    });
});