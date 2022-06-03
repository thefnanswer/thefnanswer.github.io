var $menu_opener = document.getElementById( 'nav-jump' ),
    $menu_closer = document.getElementById( 'menu-close' );
    $menu_opener
        .addEventListener( 'click', toggleDrawerNav, false );
    $menu_closer
        .addEventListener( 'click', toggleDrawerNav, false );
    
var setTimeout(
        Function(){
            toggleDrawerNav_running = false;
        },
        500
    );
