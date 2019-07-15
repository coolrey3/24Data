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
            rules: {
                // email: {
                //     required: true,
                //     email: true
                // },

                // firstname: {
                //     required: true
                // firstname: true
                // length: true
                // }

                //     lastname: {
                //         required: true,
                //         lastname: true,
                //         length: true
                //     },

                //     zip: {
                //         required: true,
                //         zip: true
                //     },

                //     phone: {
                //         required: true,
                //         phone: true
                //     },

                //     consentbox: {
                //         required: true,
                //         consentbox: true
                //     }


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

            highlight: function (element, errorClass, validClass) {
                $(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            },
            success: function (element) {
                $(element).nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
                element.closest('.form-group').removeClass('has-error').addClass('has-success');
                $(element).remove();
            }
        });
});