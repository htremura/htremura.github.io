$('.menu-item, #menu-core').hide();
$('#menu-item-toggle-closed').show();
$('#menu-item-toggle, #menu-item-toggle-closed')
    .click( function () {
            $('.menu-item, #menu-core').toggle(0);
    });