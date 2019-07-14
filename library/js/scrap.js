


document.getElementById('HamBurger').onclick = function(){
    if(document.getElementById('NavSkill').style.display == "none" ) {

        document.getElementById('NavSkill').style.display = "block";
    } else {
        document.getElementById('NavSkill').style.display = "none"
    };

};


$(document).ready(function() {


    $.validator.addMethod('length' , function (value,element) {
        return value.length <= 20;
    }, 'Your name must be less than 20 characters')

    $('#MainForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            },

            firstname: {
                required: true,
                firstname: true,
                length: true
            },

            lastname: {
                required: true,
                lastname: true,
                length: true
            },

            zip: {
                required: true,
                zip: true
            },

            phone: {
                required: true,
                phone: true
            },
        },

        messages: {
            email: {
                required: 'Please enter an email address',
                email: 'Please enter a <em>valid</em> email address.'
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

