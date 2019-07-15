document.getElementById('HamBurger').onclick = function () {
    if (document.getElementById('NavSkill').style.display == "none") {

        document.getElementById('NavSkill').style.display = "block";
    } else {
        document.getElementById('NavSkill').style.display = "none"
    };

};

$(document).ready(function () {

    $('#MainForm').validate(

        {
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