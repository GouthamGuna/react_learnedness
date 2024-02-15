$(document).on('focus', ':input', function () {
    $(this).attr('autocomplete', 'off');
});
$(document).ready(function () {
    $('#sessionModal').modal({
        backdrop: 'static',
        keyboard: false,
        show: false
    })
    $('#sessionModal').on('show.bs.modal', function (event) {
        var $modalDiv = $(event.delegateTarget);
        $('.sessionmodal_body').html("");
        $.ajax({
            type: "POST",
            url: baseurl + "admin/admin/getSession",
            dataType: 'text',
            data: {},
            beforeSend: function () {
                $modalDiv.addClass('modal_loading');
            },
            success: function (data) {
                $('.sessionmodal_body').html(data);
            },
            error: function (xhr) { // if error occured
                $modalDiv.removeClass('modal_loading');
            },
            complete: function () {
                $modalDiv.removeClass('modal_loading');
            },
        });
    })
    $(document).on('click', '.submit_session', function () {
        var $this = $(this);
        var datastring = $("form#form_modal_session").serialize();
        $.ajax({
            type: "POST",
            url: baseurl + "admin/admin/updateSession",
            dataType: "json",
            data: datastring,
            beforeSend: function () {
                $this.button('loading');
            },
            success: function (data) {
                if (data.status == 1) {
                    $('#sessionModal').modal('hide');
                    window.location.href = baseurl + "admin/admin/dashboard";
                    successMsg("Session change successful");
                }
            },
            error: function (xhr) {
                $this.button('reset');
            },
            complete: function () {
                $this.button('reset');
            },
        });
    });

    //=============Sticky header==============
    $('#alert').affix({
        offset: {
            top: 10,
            bottom: function () { }
        }
    })
    $('#alert2').affix({
        offset: {
            top: 20,
            bottom: function () { }
        }
    })
    //========================================
    //==============User Quick session============
    $('#user_sessionModal').modal({
        backdrop: 'static',
        keyboard: false,
        show: false
    })
    $('#user_sessionModal').on('show.bs.modal', function (event) {
        var $modalDiv = $(event.delegateTarget);
        $('.user_sessionmodal_body').html("");
        $.ajax({
            type: "POST",
            url: baseurl + "common/getSudentSessions",
            dataType: 'text',
            data: {},
            beforeSend: function () {
                $modalDiv.addClass('modal_loading');
            },
            success: function (data) {
                $('.user_sessionmodal_body').html(data);
            },
            error: function (xhr) { // if error occured
                $modalDiv.removeClass('modal_loading');
            },
            complete: function () {
                $modalDiv.removeClass('modal_loading');
            },
        });
    });
    $(document).on('click', '.submit_usersession', function () {
        var $this = $(this);
        var datastring = $("form#form_modal_usersession").serialize();
        $.ajax({
            type: "POST",
            url: baseurl + "common/updateSession",
            dataType: "json",
            data: datastring,
            beforeSend: function () {
                $this.button('loading');
            },
            success: function (data) {
                if (data.status == 1) {
                    $('#sessionModal').modal('hide');
                    window.location.href = baseurl + "user/user/dashboard";
                    successMsg("Session change successful");
                }
            },
            error: function (xhr) {
                $this.button('reset');
            },
            complete: function () {
                $this.button('reset');
            },
        });
    });
    //====================
    $('#commanSessionModal').modal({
        backdrop: 'static',
        keyboard: false,
        show: false
    });
    $('#commanSessionModal').on('show.bs.modal', function (event) {
        var $modalDiv = $(event.delegateTarget);
        $('.commonsessionmodal_body').html("");
        $.ajax({
            type: "POST",
            url: baseurl + "common/getAllSession",
            dataType: 'text',
            data: {},
            beforeSend: function () {
                $modalDiv.addClass('modal_loading');
            },
            success: function (data) {
                $('.commonsessionmodal_body').html(data);
            },
            error: function (xhr) { // if error occured
                $modalDiv.removeClass('modal_loading');
            },
            complete: function () {
                $modalDiv.removeClass('modal_loading');
            },
        });
    });
    $(document).on('click', '.submit_common_session', function () {
        var $this = $(this);
        var datastring = $("form#form_modal_commonsession").serialize();
        $.ajax({
            type: "POST",
            url: baseurl + "common/updateSession",
            dataType: "json",
            data: datastring,
            beforeSend: function () {
                $this.button('loading');
            },
            success: function (data) {
                if (data.status == 1) {
                    $('#sessionModal').modal('hide');
                    window.location.href = data.redirect_url;
                    successMsg("Session change successful");
                }
            },
            error: function (xhr) {
                $this.button('reset');
            },
            complete: function () {
                $this.button('reset');
            },
        });
    });
    $("#purchase_code").submit(function (e) {
        var form = $(this);
        var url = form.attr('action');
        var $this = $(this);
        var $btn = $this.find("button[type=submit]");
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            dataType: 'JSON',
            beforeSend: function () {
                $('.lic_modal-body .error_message').html("");
                $btn.button('loading');
            },
            success: function (response, textStatus, xhr) {


                if (xhr.status != 200) {
                    var $newmsgDiv = $("<div/>") // creates a div element              
                        .addClass("alert alert-danger") // add a class
                        .html(response.response);
                    $('.lic_modal-body .error_message').append($newmsgDiv);
                } else if (xhr.status == 200) {

                    if (response.status == 2) {
                        $.each(response.error, function (key, value) {
                            $('#input-' + key).parents('.form-group').find('#error').html(value);
                        });
                    } else if (response.status == 1) {
                        successMsg(response.message);
                        window.location.href = baseurl + 'admin/admin/dashboard';
                        //  $('#activelicmodal').modal('hide');
                    }
                }

            },
            error: function (xhr, status, error) {
                $btn.button('reset');
                var r = jQuery.parseJSON(xhr.responseText);
                var $newmsgDiv = $("<div/>") // creates a div element              
                    .addClass("alert alert-danger") // add a class
                    .html(r.response);
                $('.lic_modal-body .error_message').append($newmsgDiv);

            },
            complete: function () {
                $btn.button('reset');
            },
        });
        e.preventDefault();
    });
});

$(document).ready(function () {
    if (!window.location.pathname.includes("quick_links") && !window.location.pathname.includes("management_dashboard")) {
        toastr.options = {
            "closeButton": true, // true/false
            "debug": false, // true/false
            "newestOnTop": false, // true/false
            "progressBar": false, // true/false
            "positionClass": "toast-top-right", // toast-top-right / toast-top-left / 
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300", // in milliseconds
            "hideDuration": "1000", // in milliseconds
            "timeOut": "5000", // in milliseconds
            "extendedTimeOut": "1000", // in milliseconds
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }

        var table = $('.example').DataTable({
            "aaSorting": [],

            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            //responsive: 'false',
            dom: "Bfrtip",
            buttons: [

                {
                    extend: 'copyHtml5',
                    text: '<i class="fa fa-files-o"></i>',
                    titleAttr: 'Copy',
                    title: $('.download_label').html(),
                    exportOptions: {
                        columns: ':visible'
                    }
                },

                {
                    extend: 'excelHtml5',
                    text: '<i class="fa fa-file-excel-o"></i>',
                    titleAttr: 'Excel',

                    title: $('.download_label').html(),
                    exportOptions: {
                        columns: ':visible'
                    }
                },

                {
                    extend: 'csvHtml5',
                    text: '<i class="fa fa-file-text-o"></i>',
                    titleAttr: 'CSV',
                    title: $('.download_label').html(),
                    exportOptions: {
                        columns: ':visible'
                    }
                },

                {
                    extend: 'pdfHtml5',
                    text: '<i class="fa fa-file-pdf-o"></i>',
                    titleAttr: 'PDF',
                    title: $('.download_label').html(),
                    exportOptions: {
                        columns: ':visible'

                    }
                },

                {
                    extend: 'print',
                    text: '<i class="fa fa-print"></i>',
                    titleAttr: 'Print',
                    title: $('.download_label').html(),
                    customize: function (win) {
                        $(win.document.body)
                            .css('font-size', '10pt');

                        $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');
                    },
                    exportOptions: {
                        columns: ':visible'
                    }
                },

                {
                    extend: 'colvis',
                    text: '<i class="fa fa-columns"></i>',
                    titleAttr: 'Columns',
                    title: $('.download_label').html(),
                    postfixButtons: ['colvisRestore']
                },
            ]
        });
    }
});

function successMsg(msg) {
    toastr.success(msg);
}

function errorMsg(msg) {
    toastr.error(msg);
}

function infoMsg(msg) {
    toastr.info(msg);
}

function warningMsg(msg) {
    toastr.warning(msg);
}
