
function FormValidation() {

//First Name Validation 
    var fn=document.getElementById('FirstName').value;
    if(fn == ""){
        alert('Please Enter First Name');
        document.getElementById('FirstName').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('FirstName').style.borderColor = "green";
    }
    if (/^[0-9]+$/.test(document.getElementById("FirstName").value)) {
        alert("First Name Contains Numbers!");
        document.getElementById('FirstName').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('FirstName').style.borderColor = "green";
    }
    if(fn.length > 20){
        alert('Your First Name is too long');
        document.getElementById('FirstName').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('FirstName').style.borderColor = "green";
    }


    //Last Name Validation 
    var fn=document.getElementById('LastName').value;
    if(fn == ""){
        alert('Please Enter Last Name');
        document.getElementById('LastName').style.borderColor = "red";
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
    if(fn.length > 20){
        alert('Your Last Name is too long');
        document.getElementById('LastName').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('LastName').style.borderColor = "green";
    }

    //Email Validation 
    var fn=document.getElementById('Email').value;
    if(fn == ""){
        alert('Please enter your Email');
        document.getElementById('Email').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('Email').style.borderColor = "green";
    }
    if (/^[@]+$/.test(document.getElementById("Email").value)) {
        alert("First Name Contains Numbers!");
        document.getElementById('Email').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('Email').style.borderColor = "green";
    }
    if(fn.length <=2){
        alert('Your Nname is too short');
        document.getElementById('Email').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('Email').style.borderColor = "green";
    }


}

// $(document).ready(function(){
//     var $form = $('form');
//     $form.submit(function(){
//        $.post($(this).attr('action'), $(this).serialize(), function(response){
//              // do something here on success
//        },'json');
//        return false;
//     });
//  });

    // </script>