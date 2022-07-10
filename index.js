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
                $(".form-check-label").text("Light Mode")
            $("<link/>", {
                rel: "stylesheet",
                type: "text/css",
                href: "dark.css"
             }).appendTo("head");

        } else{
            $(".form-check-label").text("Dark Mode")
            $("<link/>", {
                rel: "stylesheet",
                type: "text/css",
                href: "style.css"
             }).appendTo("head");
        }
    });
});