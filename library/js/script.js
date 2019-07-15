$(document).ready(function () {

    document.getElementById('HamBurger').onclick = function () {
        if (document.getElementById('NavSkill').style.display == "none") {

            document.getElementById('NavSkill').style.display = "block";
        } else {
            document.getElementById('NavSkill').style.display = "none"
        };

    };

    $("#MainForm").on('submit', function (event) {
        event.preventDefault(); // to prevent default page reloading
        var dataString = $(this).serialize(); // to get the form data

        $.ajax({
            type: "POST",
            // url: "form-to-email.php",
            data: dataString,
            success: function (data) {
                $('#MainForm')[0].reset(); // to reset form data
            }
        }).done(function (data) {
            setTimeout(function () {
                alert("Form submitted successfully! We'll get back to you soon. Thank you.");
            }, 2000);
            //alert("Form submitted successfully! We'll get back to you soon. Thank you."); // This will be called after the ajax executed
        });

    });



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
});