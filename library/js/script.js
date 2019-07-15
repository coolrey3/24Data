$(document).ready(function () {


    // Toggle display of Skill Text in mobile
    document.getElementById('HamBurger').onclick = function () {
        if (document.getElementById('NavSkill').style.display == "none") {

            document.getElementById('NavSkill').style.display = "block";
        } else {
            document.getElementById('NavSkill').style.display = "none"
        };

    };

    // Validation Error Messages
    $('#MainForm').validate({
        rules: {

        },

        messages: {
            email: {
                required: 'Please enter an email address',
                email: 'Please enter a <em>valid</em> email address.'
            },

            firstname: {
                required: 'Please enter your first name'
            },

            lastname: {
                required: 'Please enter your last name'
            },

            phone: {
                required: 'Please enter your phone'
            },

            zip: {
                required: 'Please enter your zip code'
            },

            consentbox: {
                required: 'Consent required!'
            }
        },
    });

    // Prevent Submit & Display Success
    $("#MainForm").on('submit', function (event) {
            event.preventDefault();
            if ($('#CheckBox').is(':checked')) {
                document.getElementById('FormAlert').innerHTML = "Form submitted successfully! We'll get back to you soon. Thank you";
                var nameValue = document.getElementById("FirstName").value;
                console.log(nameValue);
                $('#exampleModal').modal('show');
                document.getElementById("ModalBody").innerHTML = "Thanks " +nameValue+ "! Your submission succeeded";
            }
    });
});