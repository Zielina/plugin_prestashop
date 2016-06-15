$(document).ready(function () {
    $('.payMethodEnable .payMethodLabel').click(function () {
        $('.payMethod').removeClass('payMethodActive');
        $(this).closest('.payMethod').addClass('payMethodActive');
    });

    $('#HOOK_PAYMENT').on('click', 'a.payu', function () {
        return doubleClickPrevent(this);
    });

    $('#payuForm').submit(function () {
        return doubleClickPrevent(this);
    })
});

function doubleClickPrevent(object) {
    if ($(object).data('clicked')) {
        return false;
    }
    $(object).data('clicked', true);
    return true;
}