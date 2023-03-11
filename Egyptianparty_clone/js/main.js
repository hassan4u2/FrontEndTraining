// main variables
const $eventSidebar = $('#event-sidebar');
const $eventSidebarOpenBtn = $('#event-sidebar-open-btn');
const $eventOverlay = $('.event-overlay');

// hide the sidebar and overlay
$eventSidebar.css('left', '-100%');
$eventOverlay.css('width', '0').css('left', '0');

// open/close sidebar
$eventSidebarOpenBtn.click(() => {
    if ($eventSidebar.css('left') === '0px') { // close sidebar
        $eventSidebar.animate({ left: '-100%' }, 600);
        $eventOverlay.animate({ width: '0', left: '0' }, 600);
        $eventSidebarOpenBtn.html('<i class="fas fa-bars"></i> Open');
    } else { // open sidebar
        $eventSidebar.animate({ left: '0' }, 600);
        $eventOverlay.animate({ width: '75%', left: $eventSidebar.css('width') }, 600);
        $eventSidebarOpenBtn.html('<i class="fas fa-times"></i> Close');
    }
});

// close sidebar when close button is clicked
$('#event-sidebar-close-btn').click(() => {
    $eventSidebar.animate({ left: '-100%' }, 600);
    $eventOverlay.animate({ width: '0', left: '0' }, 600);
    $eventSidebarOpenBtn.html('<i class="fas fa-bars"></i> Open');
});
