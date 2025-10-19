$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // When the envelope is clicked, navigate to the readmore page
    envelope.on('click', function(e) {
        // prevent any other handlers from running
        e.preventDefault();
        window.location.href = 'readmore.html';
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

    // Prevent clicks on the readmore link from bubbling up to the envelope
    // so the link can navigate normally.
    $(document).on('click', '.readmore-button', function(e) {
        e.stopPropagation();
        // allow the default action (navigation) to proceed
    });

})
