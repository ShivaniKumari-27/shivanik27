//for toggle menu
    var MenuItems=document.getElementById("MenuItems");
    MenuItems.style.maxHeight="0px";


    function menutoggle(){
        if(MenuItems.style.maxHeight=="0px")
        {
            MenuItems.style.maxHeight="200px";

        }
        else{
            MenuItems.style.maxHeight="0px";

        }

    }
//for product gallery
var ProductImg=document.getElementById("productImg");
var SmallImg=document.getElementsByClassName("small-img");
SmallImg[0].onclick=function()
{
  ProductImg.src=SmallImg[0].src;
}
SmallImg[1].onclick=function()
{
  ProductImg.src=SmallImg[1].src;
}
SmallImg[2].onclick=function()
{
  ProductImg.src=SmallImg[2].src;
}
SmallImg[3].onclick=function()
{
  ProductImg.src=SmallImg[3].src;
}
//js for toggle form
//  var LoginForm=document.getElementById("LoginForm");
// var RegForm=document.getElementById("RegistrationForm");
//  var Indicator=document.getElementById("Indicator");
// function Register(){
//   RegForm.style.transform="translateX(0px)";
//   LoginForm.style.transform="translateX(0px)";
//  }
//  function Login(){
//  RegForm.style.transform="translateX(300px)";
//     LoginForm.style.transform="translateX(300px)";
//  }

    // var LoginForm=document.getElementById("LoginForm");
    // var RegForm=document.getElementById("RegForm");
    // var Indicator=document.getElementById("Indicator");
    // function Register(){
    //     RegForm.style.transform = "translateX(0px)";
    //     LoginForm.style.transform = "translateX(0px)";
    // }
    // function Login(){
    //     RegForm.style.transform = "translateX(300px)";
    //     LoginForm.style.transform = "translateX(300px)";
    // }





















































