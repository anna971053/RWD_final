$(document).ready(function(){
    $('.showmenu').on('click', function(e){
      e.preventDefault();/*停止默認動作 */
      $('body').toggleClass('menu-show');/* add class menu-show */
    });
  });
  
function getvalue(obj){
    var veganvalue = document.getElementById("veganvalue");
    return obj;

    var value = obj.value;
    veganvalue.value = value;
}

function btnSubmit (){
    var name = document.getElementById("txtname");
    var phone = document.getElementById("txtphone");
    var email = document.getElementById("txtemail");
    var number = document.getElementById("txtnumber");
    var vegan = document.getElementsByName("vegan");
    var re_name = /^[\u4e00-\u9fa5]+$/
    var re_phone = /^09[0-9]{8}$/;
    var re_email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    var allwhite = "";
    var mistake = "";

    //驗證姓名
    if(name.value != ""){
        if(re_name.test(name.value)){

        }else{
            mistake += "姓名請輸入中文，"
        }   
    }else{
        allwhite += "請輸入姓名，"
    }

    //驗證手機
    if(phone.value != ""){
        if(re_phone.test(phone.value)){

        }else{
            mistake += "手機格式錯誤，";
        }
    }else{
        allwhite += "請輸入手機號碼，";
    }

    //驗證信箱
    if(email.value != ""){
        if(re_email.test(email.value)){

        }else{
            mistake += "信箱格式錯誤，";
        }
    }else{
        allwhite += "請輸入信箱，";
    }

    //驗證人數
    if(number.value != ""){
        if(number.value > 0){

        }else{
            mistake += "訂位人數最少為1，請重新數入";
        }
    }else{
        allwhite += "請輸入人數，";
    }
    //驗證是否吃素
    var veganTrue = document.getElementById("vegan_true");
    var veganFalse = document.getElementById("vegan_false");
    if(veganTrue.checked){
        veganvalue.value = "是";

    }else if(veganFalse.checked){
        veganvalue.value = "否";

    }else{
        allwhite += "請選擇是否吃素";
    }
    var result = "姓名: " + name.value + "\n手機: " + phone.value + "\n信箱: " + email.value + "\n人數: " + number.value
    +"\n是否吃素: " + veganvalue.value;
    if(mistake == "" && allwhite == ""){
        alert(result);
    }else{
        alert(mistake + "\n" + allwhite);
    }
   
}

//按下取消時，清空內容
function btnCancel(){
    var name = document.getElementById("txtname");
    var phone = document.getElementById("txtphone");
    var email = document.getElementById("txtemail");
    var number = document.getElementById("txtnumber");
    var veganTrue = document.getElementById("vegan_true");
    var veganFalse = document.getElementById("vegan_false");

    name.value = "";
    phone.value = "";
    email.value = "";
    number.value = "";
    veganTrue.checked = false;
    veganFalse.checked = false;
}
function removeIcon(){    
    document.getElementById("envelope").style.visibility = 'hidden';
    document.getElementById("lock").style.visibility = 'hidden';
}
function seeIcon(){    
    document.getElementById("envelope").style.visibility = 'visible';
    document.getElementById("lock").style.visibility = 'visible';
}
function openRegister(){
    window.open("register.html");
}