<script>
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
    if(fn.length <=2){
        alert('Your Nname is too short');
        document.getElementById('FirstName').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('FirstName').style.borderColor = "green";
    }
}
    </script>