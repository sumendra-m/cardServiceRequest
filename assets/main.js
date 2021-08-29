// $(document).ready(function(){
//     $("select").change(function(){
//         $(this).find("option:selected").each(function(){
//             var optionValue = $(this).attr("value");
//             if(optionValue){
//                 $(".box").not("." + optionValue).hide();
//                 $(".box" + optionValue).show();
//             } else{
//                 $(".box").hide();
//             }
//         });
//     }).change();
// });



// overlay

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }