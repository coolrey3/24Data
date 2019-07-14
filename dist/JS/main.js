
function FormValidation() {

//First Name Validation 
    var validate=document.getElementById('FirstName').value;
    if(validate == ""){
        document.getElementById('FirstName').style.borderColor = "red";
        document.getElementById('FormAlert').innerHTML = 'Please Enter Your First Name!';
        return false;
    }else{
        document.getElementById('FirstName').style.borderColor = "green";
        document.getElementById('FormAlert').innerHTML = '';
    }
    if (/^[0-9]+$/.test(document.getElementById("FirstName").value)) {
        document.getElementById('FormAlert').innerHTML = 'Your first name should not contain numbers!';
        document.getElementById('FirstName').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('FirstName').style.borderColor = "green";
    }
    if(validate.length > 20){
        document.getElementById('FormAlert').innerHTML = 'Your First name is too long!';
        document.getElementById('FirstName').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('FirstName').style.borderColor = "green";
    }


    //Last Name Validation 
    var validate=document.getElementById('LastName').value;
    if(validate == ""){
        document.getElementById('LastName').style.borderColor = "red";
        document.getElementById('FormAlert').innerHTML = 'Please Enter Your Last Name!';
        return false;
    }else{
        document.getElementById('LastName').style.borderColor = "green";
    }
    if (/^[0-9]+$/.test(document.getElementById("FirstName").value)) {
        alert("Last Name Contains Numbers!");
        document.getElementById('LastName').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('LastName').style.borderColor = "green";
    }
    if(validate.length > 20){
        alert('Your Last Name is too long');
        document.getElementById('LastName').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('LastName').style.borderColor = "green";
    }

    //Email Validation 
    var validate=document.getElementById('Email').value;
    if(validate == ""){
        document.getElementById('Email').style.borderColor = "red";
        document.getElementById('FormAlert').innerHTML = 'Please Enter Your Email!';
        return false;
    }else{
        document.getElementById('Email').style.borderColor = "green";
    }


    //Phone Validation 
    var validate=document.getElementById('Phone').value;
    if(validate == ""){
        document.getElementById('Phone').style.borderColor = "red";
        document.getElementById('FormAlert').innerHTML = 'Please Enter Your Phone!';
        return false;
    }else{
        document.getElementById('Phone').style.borderColor = "green";
    }

    if(validate.length > 10){
        document.getElementById('Phone').style.borderColor = "red";
        document.getElementById('FormAlert').innerHTML = 'Your Phone is too long!';
        return false;
    }else{
        document.getElementById('Phone').style.borderColor = "green";
    }


    //Zip Validation 
    var validate=document.getElementById('Zip').value;

    if(validate == ""){
        document.getElementById('Zip').style.borderColor = "red";
        document.getElementById('FormAlert').innerHTML = 'Please Enter Your Zip!';
        return false;
    }else{
        document.getElementById('Zip').style.borderColor = "green";
    }

    if(validate.length > 5){
        document.getElementById('Zip').style.borderColor = "red";
        document.getElementById('FormAlert').innerHTML = 'Your Zip is too long!';
        return false;
    }else{
        document.getElementById('Zip').style.borderColor = "green";
    }

}
