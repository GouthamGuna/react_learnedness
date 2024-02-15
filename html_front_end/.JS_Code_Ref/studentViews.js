   $(document).ready(function (e) {

        $("#timelineform").on('submit', (function (e) {
            var student_id = $("#student_id").val();

            e.preventDefault();
            $.ajax({
                url: "https://school.compupandit.in/admin/timeline/add",
                type: "POST",
                data: new FormData(this),
                dataType: 'json',
                contentType: false,
                cache: false,
                processData: false,
                success: function (data) {

                    if (data.status == "fail") {

                        var message = "";
                        $.each(data.error, function (index, value) {

                            message += value;
                        });
                        errorMsg(message);
                    } else {

                        successMsg(data.message);

                        $.ajax({
                            url: 'https://school.compupandit.in/admin/timeline/student_timeline/' + student_id,
                            success: function (res) {
                                $('#timeline_list').html(res);

                                $('#myTimelineModal').modal('toggle');
                            },
                            error: function () {
                                alert("Fail")
                            }
                        });
                        window.location.reload(true);
                    }

                },
                error: function (e) {
                    alert("Fail");
                    console.log(e);
                }
            });


        }));
    });

    function delete_timeline(id) {

        var student_id = $("#student_id").val();
        if (confirm('Are you want to delete this record?')) {

            $.ajax({
                url: 'https://school.compupandit.in/admin/timeline/delete_timeline/' + id,
                success: function (res) {
                    $.ajax({
                        url: 'https://school.compupandit.in/admin/timeline/student_timeline/' + student_id,
                        success: function (res) {
                            $('#timeline_list').html(res);

                        },
                        error: function () {
                            alert("Fail")
                        }
                    });

                },
                error: function () {
                    alert("Fail")
                }
            });
        }

    }

    function disable_student(id) {
        if (confirm("Are you sure you want to disable this record.")) {
            $('#disstudent_id').val(id);
            $('#disable_modal').modal('show');
        }
    }

    $("#disable_form").on('submit', (function (e) {
        e.preventDefault();
        var id = $('#disstudent_id').val();
        var $this = $(this).find("button[type=submit]:focus");

        $.ajax({
            url: "https://school.compupandit.in/student/disable_reason",
            type: "POST",
            data: new FormData(this),
            dataType: 'json',
            contentType: false,
            cache: false,
            processData: false,
            beforeSend: function () {
                $this.button('loading');

            },
            success: function (res)
            {

                if (res.status == "fail") {

                    var message = "";
                    $.each(res.error, function (index, value) {

                        message += value;
                    });
                    errorMsg(message);

                } else {

                    successMsg(res.message);

                    window.location.reload(true);
                }
            },
            error: function (xhr) { // if error occured
                alert("Error occured.please try again");
                $this.button('reset');
            },
            complete: function () {
                $this.button('reset');
            }

        });
    }));
    function disable(id) {


        if (confirm("Are you sure you want to disable this record.")) {
            var student_id = '430';
            $.ajax({
                type: "post",
                url: base_url + "student/getUserLoginDetails",
                data: {'student_id': student_id},
                dataType: "json",
                success: function (response) {

                    var userid = response.id;



                    changeStatus(userid, 'no', 'student');

                }
            });

        } else {
            return false;
        }

    }

    function enable(id, status, role) {
        if (confirm("Are you sure you want to enable this record.")) {
            var student_id = '430';
          
            $.ajax({
                type: "post",
                url: base_url + "student/getUserLoginDetails",
                data: {'student_id': student_id},
                dataType: "json",
                success: function (response) {
                    
                    var userid = response.id;



                    changeStatus(userid, 'yes', 'student');
                   

                }
            });

             $.ajax({
                type: "post",
                url: base_url + "student/enablestudent/"+student_id,
                data: {'student_id': student_id},
                dataType: "json",
                success: function (data) {
    
                 window.location.reload(true);

                }
            });
            
            
            
        } else {
            return false;
        }

    }

    function changeStatus(rowid, status = 'no', role = 'student') {

         
        var base_url = 'https://school.compupandit.in/';

        $.ajax({
            type: "POST",
            url: base_url + "admin/users/changeStatus",
            data: {'id': rowid, 'status': status, 'role': role},
            dataType: "json",
            success: function (data) {
                successMsg(data.msg);
            }
        });
    }
    $(document).ready(function () {
        $.extend($.fn.dataTable.defaults, {
            searching: false,
            ordering: false,
            paging: false,
            bSort: false,
            info: false
        });
    });

    function send_password() {
        var base_url = 'https://school.compupandit.in/';
        var student_id = '430';
        var username = 'std430';
        var password = '0laafb';
        var contact_no = '';
        var email = '';
        
        var guardian_username = 'parent430';
        var guardian_password = 'm2sdcr';
        var guardian_contact_no = '9998588352';
        var guardian_email = '';

        //alert(student_id);
        $.ajax({
            type: "post",
            url: base_url + "student/sendpassword",
            data: {guardian_email:guardian_email, guardian_contact_no:guardian_contact_no, guardian_username:guardian_username,guardian_password:guardian_password,student_id: student_id, username: username, password: password, contact_no: contact_no, email: email},
            // dataType: "json",
            success: function (response) {
                successMsg('Message successfully sent');
            }
        });

    }

    function send_parent_password() {
        var base_url = 'https://school.compupandit.in/';
        var student_id = '430';
        var username = 'parent430';
        var password = 'm2sdcr';
        var contact_no = '';
        var email = '';
        //alert(student_id);
        $.ajax({
            type: "post",
            url: base_url + "student/send_parent_password",
            data: {student_id: student_id, username: username, password: password, contact_no: contact_no, email: email},
            // dataType: "json",
            success: function (response) {
                successMsg('Message successfully sent');
            }
        });
    }


    $(document).on('click', '.schedule_modal', function () {
        $('.modal-title_logindetail').html("");
        $('.modal-title_logindetail').html("Login Details");
        var base_url = 'https://school.compupandit.in/';
        var student_id = '430';
        var student_first_name = 'SIDDH';
        var student_last_name = 'PATEL';
        $.ajax({
            type: "post",
            url: base_url + "student/getlogindetail",
            data: {'student_id': student_id},
            dataType: "json",
            success: function (response) {
                var data = "";
                data += '<div class="col-md-12">';
                data += '<div class="table-responsive">';
                data += '<p class="lead text text-center">' + student_first_name + ' ' + student_last_name + '</p>';
                data += '<table class="table table-hover">';
                data += '<thead>';
                data += '<tr>';
                data += '<th>' + "User Type" + '</th>';
                data += '<th class="text text-center">' + "Username" + '</th>';
                data += '<th class="text text-center">' + "Password" + '</th>';
                data += '</tr>';
                data += '</thead>';
                data += '<tbody>';
                $.each(response, function (i, obj)
                {
                    data += '<tr>';
                    data += '<td><b>' + firstToUpperCase(obj.role) + '</b></td>';
                    data += '<input type=hidden name=userid id=userid value=' + obj.id + '>';
                    data += '<td class="text text-center">' + obj.username + '</td> ';
                    data += '<td class="text text-center">' + obj.password + '</td> ';
                    data += '</tr>';
                });
                data += '</tbody>';
                data += '</table>';
                // data += '<b class="lead text text-danger" style="font-size:14px;"> ' + "Login Url" + ': ' + base_url + 'site/userlogin</b>';
                data += '</div>  ';
                data += '</div>  ';
                $('.modal-body_logindetail').html(data);
                $("#scheduleModal").modal('show');
            }
        });
    });

    function firstToUpperCase(str) {
        return str.substr(0, 1).toUpperCase() + str.substr(1);
    }

    $(document).ready(function () {
        // getExamResult();
        $('.detail_popover').popover({
            placement: 'right',
            title: '',
            trigger: 'hover',
            container: 'body',
            html: true,
            content: function () {
                return $(this).closest('td').find('.fee_detail_popover').html();
            }
        });
        var date_format = 'dd/mm/yyyy';

        $("#timeline_date").datepicker({
            format: date_format,
            autoclose: true

        });
    });
    function getExamResult(student_session_id) {
        if (student_session_id != "") {
            $('.examgroup_result').html("");

            $.ajax({
                type: "POST",
                url: baseurl + "admin/examresult/getStudentCurrentResult",
                data: {'student_session_id': 17},
                dataType: "JSON",
                beforeSend: function () {

                },
                success: function (data) {


                    $('.examgroup_result').html(data.result);
                },
                complete: function () {

                }
            });
        }
    }
</script>
<script type="27c5138c8829ffaaf590c4a4-text/javascript">

    $(document).on('change', '#exam_group_id', function () {
        var exam_group_id = $(this).val();
        if (exam_group_id != "") {
            $('#exam_id').html("");

            var div_data = '<option value="">Select</option>';
            $.ajax({
                type: "POST",
                url: baseurl + "admin/examgroup/getExamsByExamGroup",
                data: {'exam_group_id': exam_group_id},
                dataType: "JSON",
                beforeSend: function () {
                    $('#exam_id').addClass('dropdownloading');
                },
                success: function (data) {
                    console.log(data);
                    $.each(data.result, function (i, obj)
                    {

                        div_data += "<option value=" + obj.id + ">" + obj.exam + "</option>";
                    });
                    $('#exam_id').append(div_data);
                },
                complete: function () {
                    $('#exam_id').removeClass('dropdownloading');
                }
            });
        }
    });

// this is the id of the form
    $("form#form_examgroup").submit(function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        var form = $(this);
        var url = form.attr('action');
        var submit_button = $("button[type=submit]");
        $.ajax({
            type: "POST",
            url: url,
            dataType: 'JSON',
            data: form.serialize(), // serializes the form's elements.
            beforeSend: function () {
                submit_button.button('loading');
            },
            success: function (data)
            {

                $('.examgroup_result').html(data.result);
            },
            error: function (xhr) { // if error occured
                alert("Error occured.please try again");
                submit_button.button('reset');
            },
            complete: function () {
                submit_button.button('reset');
            }
        });

 
    });
                        $(document).ready(function (e) {

                                            $("#form1").on('submit', (function (e) {

                                                e.preventDefault();
                                                $.ajax({
                                                    url: "https://school.compupandit.in/student/create_doc",
                                                    type: "POST",
                                                    data: new FormData(this),
                                                    dataType: 'json',
                                                    contentType: false,
                                                    cache: false,
                                                    processData: false,
                                                    success: function (res)
                                                    {

                                                        if (res.status == "fail") {

                                                            var message = "";
                                                            $.each(res.error, function (index, value) {

                                                                message += value;
                                                            });
                                                            errorMsg(message);

                                                        } else {

                                                            successMsg(res.message);

                                                            window.location.reload(true);
                                                        }
                                                    }
                                                });

                                            }));

                                        });