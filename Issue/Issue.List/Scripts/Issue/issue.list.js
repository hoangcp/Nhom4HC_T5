﻿
$(document).ready(function () {
    $.ajax({
        type: 'POST',
        url: '/Issue/List/GetList',        
        timeout: 10000
    }).done(function (data) {
        // console.log(data);
        var source = document.getElementById('Issue-template').innerHTML;
        var template = Handlebars.compile(source);
        var html = template(data);
        // console.log(html);
        $('#ListIssue').html(html);
    });
});

$('#ListIssue').on('click', '.del', function () {
    // alert('msg');
    var trToBeDel = $(this).closest('tr');
    var VanDeID = $(this).data('id');
    if (VanDeID > 0 && confirm("Xác nhận xóa vấn đề") ) {
        $.ajax({
            type: 'POST',
            url: '/Issue/List/CapNhatTinhTrang',
            data: { "VanDeID": VanDeID },
            timeout: 10000
        }).done(function (data) {
            console.log(data.ResultDesc);
            trToBeDel.remove();
        }).fail(function (xhr, status, err) {
            console.log(status);
            console.log(err);
        });
    }
})

