function Check()
{
    //Check Fullname
    button = document.getElementById("bt1");
    fullname = document.getElementById("fullname");
    errorName = document.getElementById("errorName");
    re1 = /^[a-zA-Z]+(\s[a-zA-Z]+){1,4}$/;
	if(fullname.value=="")
	{
		errorName.innerHTML = "This field is required.";
		errorName.setAttribute("style","color:#CC0000;");
		fullname.style.border = "1px red solid";
		button.disabled = true;
		fullname.focus();
		return false;
	}
	else if(re1.test(fullname.value)==false)
	{
		errorName.innerHTML = "Please enter full name format.";
		errorName.setAttribute("style","color:#CC0000");
		fullname.style.border = "1px red solid";
		button.disabled = true;
		fullname.select();
		return false;
	}
    errorName.innerHTML = "";
    fullname.style.border = "1px #0080FF solid";
    //button.disabled = false;
    //Check Mail
    email = document.getElementById("email");
    errorMail = document.getElementById("errorMail");
    re2 = /^\w+([\.\-]?\w+)*@\w+(\.\w+){1,3}$/;
	if(email.value=="")
	{
		errorMail.innerHTML = "This field is required";
		errorMail.setAttribute("style","color:#CC0000");
		email.style.border = "1px red solid";
		button.disabled = true;
		email.focus();
		return false;
	}
	else if(re2.test(email.value)==false)
	{
		errorMail.innerHTML = "Please enter email format";
		errorMail.setAttribute("style","color:#CC0000");
		email.style.border = "1px red solid";
		button.disabled = true;
		email.select();
		return false;
	}

    else
    errorMail.innerHTML = "";
    email.style.border = "1px #0080FF solid";
    //button.disabled = false;
    //Check Title
    title = document.getElementById("title");
    errorTitle = document.getElementById("errorTitle");
    if(title.value=="")
    {
        errorTitle.innerHTML = "This field is required.";
        errorTitle.setAttribute("style","color:#CC0000;");
        title.style.border = "1px red solid";
        button.disabled = true;
		title.focus();
        return false;
    }
    if(title.value.length < 10)
    {
        errorTitle.innerHTML = "Please enter at least 10 characters";
        errorTitle.setAttribute("style","color:#CC0000");
        title.style.border = "1px red solid";
        button.disabled = true;
		title.select();
        return false;
    }
    errorTitle.innerHTML = "";
    title.style.border = "1px #0080FF solid";
    //button.disabled = false;
    //Check textarea
    area = document.getElementById("area");
    errorArea = document.getElementById("errorArea");
    if(area.value=="")
    {
        errorArea.innerHTML = "This field is required.";
        errorArea.setAttribute("style","color:#CC0000;");
        area.style.border = "1px red solid";
        button.disabled = true;
		area.focus();
        return false;
    }
    if(area.value.length < 10)
    {
        errorArea.innerHTML = "Please enter at least 10 characters";
        errorArea.setAttribute("style","color:#CC0000");
        area.style.border = "1px red solid";
        button.disabled = true;
		area.select();
        return false;
    }
    errorArea.innerHTML = "";
    area.style.border = "1px #0080FF solid";
    button.disabled = false;
    return true;
}