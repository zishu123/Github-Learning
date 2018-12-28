function validate(){
    var first_Name = form.fname.value;
    var middle_Name = form.mname.value;
    var last_Name = form.lname.value;
    var user_email = form.email.value;
    var atpos = user_email.indexOf("@");
    var dotpos = user_email.lastIndexOf(".");
    var user_phone =  form.phone.value;
    var first_pass = form.password.value;
    var confirm_pass = form.cpassword.value;


    if(first_Name.length == 0 || first_Name == ''){
        alert("Please enter first name");
        return false;
    }
        else if(middle_Name.length == 0 || middle_Name == ''){
            alert("Please enter middle name");
            return false;
        }
        else if(last_Name.length == 0 || last_Name == ''){
            alert("Please enter last name");
            return false;
        }
        else if(user_email.length == 0 || user_email == ''){
            alert("Please enter email");
            return false; 
        }
        else if(atpos<1 || (dotpos-atpos)<=3){
            alert("Invalid email id");
            return false;
        }
        else if(user_phone.length == 0 || user_phone == ''){
            alert("Please enter phone number");
            return false;
        }
        else if(user_phone.length != 10){
            alert("Invalid phone");
            return false;
        }
        else if(first_pass.length ==0 || first_pass == ''){
            alert("Please enter password");
            return false;
        }
        else if(confirm_pass.length ==0 || confirm_pass == ''){
            alert("re-enter password");
            return false;
        }
        else if(first_pass != confirm_pass){
            alert("Password not matching , Both should be same");
            return false;
        }
    else
    {
        alert("Form submitted successfully");
        return true;
    }
}