function kiemtra() {
    user= document.getElementById("rUser");
    tb1= document.getElementById("tb1");
    email= document.getElementById('rEmail');
    tb2= document.getElementById('tb2');
    pass= document.getElementById("rPass");
    tb3= document.getElementById("tb3");
    rpass= document.getElementById("rEnter");
    tb4= document.getElementById("tb4");
    checkbox= document.getElementById("remeber");
    tb5= document.getElementById("huy");

    if(user.value=="") {
        tb1.innerHTML="<span>This value should not be overlooked!</span>";
        document.getElementById('rUser').style.borderColor="red";
        tb1.style.color="red";
        return false;
    }
    else{
        document.getElementById('rUser').style.borderColor="blue";
        tb1.innerHTML=""
    }

    re1 = /^\w+@\w+(\.\w+){1,3}$/;

    if(email.value=="") {
        tb2.innerHTML="<span>This value should not be overlooked!</span>";
        document.getElementById('rEmail').style.borderColor="red";
        tb2.style.color="red";
        return false;
    }

    else if(re1.test(email.value)==false) {
        tb2.innerHTML="<span>Invalid email</span>";
        document.getElementById('rEmail').style.borderColor="red";
        tb2.style.color="red";
        return false;
    }

    else {
        document.getElementById('rEmail').style.borderColor="blue";
        tb2.innerHTML="";
    }

    if(pass.value=="") {
        tb3.innerHTML="<span>This value should not be overlooked!</span>";
        document.getElementById('rPass').style.borderColor="red";
        tb3.style.color="red";
        return false;
    }


     else if(pass.value.length<6) {
        tb3.innerHTML="<span>More than 6 characters!</span>";
        document.getElementById('rPass').style.borderColor="red";
        tb3.style.color="red";
        return false;
    }

    else {
        document.getElementById('rPass').style.borderColor="blue";
        tb3.innerHTML="";
    }



     if(rpass.value==""){
        tb4.innerHTML="<span>This value should not be overlooked!</span>";
        document.getElementById('rEnter').style.borderColor="red";
        tb4.style.color="red";
        return false;
    }

    else if(pass.value!=rpass.value) {
        tb4.innerHTML="<span>Mismatched!</span>";
        document.getElementById('rEnter').style.borderColor="red";
        tb4.style.color="red";
        return false;
    }

    else {
        document.getElementById('rEnter').style.borderColor="blue";
        tb4.innerHTML="";
    }

    

    if(checkbox.checked==false) {
        tb5.innerHTML="<span>This value should not be overlooked!</span>";
        tb5.style.color="red";
        return false;
    }
    
    else {
        tb5.innerHTML="";
    }


    

}