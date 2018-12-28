function login(){
    var uid = form1.email.value;
    var upass =  form1.password.value;
    if(uid.length == 0 || uid == ''){
        alert("please enter email");
        return false;
    }
        else if(uid != 'user@gmail.com')
        {
            alert("Please enter valid email");
            return false;
        }
        else if(upass.length == 0 || upass == '')
        {
            alert("please enter password");
            return false;
        }
        else if(upass != '123456')
        {
            alert("Password wrong");
            return false;
        }
    else
    {
        alert("Login success");
        return true;
    }
}