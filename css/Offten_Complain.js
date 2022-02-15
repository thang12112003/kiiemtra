function kiemtra() 
{
    user= document.getElementById("f1");
    tb1= document.getElementById("tb1");
    email= document.getElementById("f2");
    tb2= document.getElementById("tb2");
    textar= document.getElementById("f5");
    tb4= document.getElementById("tb4");
    checkbox= document.getElementById("checkbox1");
    tb5= document.getElementById("tb5");




    if(user.value=="") {
        tb1.innerHTML="<i>This value should not be overlooked!</i>";
        tb1.style.color="red";
        return false;
    }

    else {
        tb1.innerHTML="";
    }

    if(email.value=="")
    {
        tb2.innerHTML="<i>This value should not be overlooked!</i>";
        tb2.style.color="red";
        return false;
    }

    else {
        tb2.innerHTML=""
    }

    if(textar.value=="") {
        tb4.innerHTML="<i>This value should not be overlooked!</i>";
        tb4.style.color="red";
        return false;
    }

    else {
        tb4.innerHTML="";    
    }

    if(checkbox.checked== false) {
        tb5.innerHTML="<i>You have read carefully and agree to our terms! </i>";
        tb5.style.color="red";
        return false;
    }

    else {
        tb5.innerHTML="";
    }

}