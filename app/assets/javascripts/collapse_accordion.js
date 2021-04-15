// $(document).ready(function() {
//     $('#toggle-collapse').click(function(){
//         $('#collapseExample').slideToggle(); 
//     });
// });
// eso es para un slide, para acordeon debemos hacer q al clickear uno, los otros dos suban.

$(document).ready(function() {
    $('#headingOne').click(function(){
        $('#collapseOne').slideToggle(); 
        $('#collapseTwo').slideUp();
        $('#collapseThree').slideUp();
    });
    $('#headingTwo').click(function(){
        $('#collapseTwo').slideToggle();
        $('#collapseOne').slideUp();
        $('#collapseThree').slideUp(); 
    });
    $('#headingThree').click(function(){
        $('#collapseThree').slideToggle();
        $('#collapseTwo').slideUp();
        $('#collapseOne').slideUp(); 
    });
});
