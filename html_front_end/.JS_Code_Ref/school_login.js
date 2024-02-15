$(function() {
        'use strict';

        $("#forgot_password_admin").submit(function (e) {
            e.preventDefault();
            var form = $(this);
            var url = form.attr('action');
            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(),
                dataType: "JSON",
                success: function (data)
                {   
                    if (!data.status) {
                        $.each(data.error, function(index, value) {
                            var errorDiv = '#' + index + '_error';
                            $(errorDiv).html(value);
                            $(errorDiv).show();
                        });
                    } else {
                        $(".forgot_alert").html(data.success.phone).show();
                    }
                    $("#phone").val("");
                },
                error: function(xhr) { // if error occured
                    alert("Something went wrong.");
                    $("#phone").val("");
                },
            });


        });

        $('.signup-section').addClass('compu-open');
        $('.signup-section').removeClass('section-close');
        $('.login-section').addClass('section-close');
        $('.login-section').removeClass('compu-open');
        $('.login-form').slideDown();
        $('.forget-form').slideUp();
        $('.forgot_alert').hide();

        $('input').focusout(function() {
            if ($(this).val() != "") {
                $(this).next().hide();
            }
        });

        $('a').click(function (e) {
            e.preventDefault();                   // prevent default anchor behavior
            var goTo = this.getAttribute("href"); // store anchor href
            setTimeout(function(){
                window.location = goTo;
            }, 2000);                             // time in ms
        });

        $('.login-section').on('click', function() {
            $(this).addClass('compu-open');
            $('.login-section').removeClass('section-close');
            $('.signup-section').addClass('section-close');
            $('.signup-section').removeClass('compu-open');
            $('.login-form').slideDown();
            $('.forget-form').slideUp();
            $('.forgot_alert').hide();
        });

        $('.signup-section').on('click', function() {
            $(this).addClass('compu-open');
            $('.signup-section').removeClass('section-close');
            $('.login-section').addClass('section-close');
            $('.login-section').removeClass('compu-open');
            $('.forgot_alert').hide();
        });

        //// forget password

        $('.login-page_forget a').on('click', function(e) {
            e.preventDefault();
            $('.login-form').slideUp();
            $('.forget-form').slideDown();
            $(".alert-danger").hide();
            $('.forgot_alert').hide();
            $(".small-form-title").text("Forgot Password");
        });
        $('.back_to_login').on('click', function(e) {
            e.preventDefault();
            $('.login-form').slideDown();
            $('.forget-form').slideUp();
            $(".alert-danger").hide();
            $('.forgot_alert').hide();
            $(".small-form-title").text("Login");
        });



    });