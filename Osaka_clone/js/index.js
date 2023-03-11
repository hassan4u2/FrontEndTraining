let navSelector = $('#main-nav');
let aboutOffset = $('#about').offset();


// change nav color on scroll
const navChange = () => {
    let scroll = $(window).scrollTop();
    if (scroll > aboutOffset.top - 50) {
        navSelector.css('background-color', 'rgba(0, 0, 0, 0.6)');
    }
    else {
        navSelector.css('background-color', 'rgba(0, 0, 0, 0)');

    }

    if (scroll > 100) {
        $('#scroll-top-btn').fadeIn(300);
    } else {
        $('#scroll-top-btn').fadeOut(300);
    }

}

// Smooth scroll to section 
const sectionScroll = () => {
    $('.nav-item a').on('click', (event) => {
        const section = $(event.currentTarget).attr('href'); // section ID
        const sectionOffset = $(section).offset().top;
        $('html, body').animate({
            scrollTop: sectionOffset
        }, 500);
    });
};

// scroll to top
const scrollToTop = () => {
    $('#scroll-top-btn').click(() => {
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
        // wow 
        new WOW().init(
        );
    });
}

// nav items color active
const navItemsColorActive = () => {
    $('.nav-item a[href^="#"]').on('click', (event) => {
        // console.log(event.currentTarget);
        $('.nav-item a[href^="#"]').removeClass('myActiveLink');
        $(event.currentTarget).addClass('myActiveLink');
    });
}

// nav items color active on scroll
const navItemsColorActiveOnScroll = () => {
    $(window).scroll(() => {
        let scroll = $(window).scrollTop();
        $('.nav-item a[href^="#"]').each((index, element) => {
            let section = $(element).attr('href');
            let sectionOffset = $(section).offset().top;
            if (scroll > sectionOffset - 50) {
                $('.nav-item a[href^="#"]').removeClass('myActiveLink');
                $(element).addClass('myActiveLink');
            }
        });
    });
};


// settings for colors

const colorSettings = () => {
    const spanItems = $('#colorsBox .color-item')
    const colors = ['#5F73D5', '#FF7F50', '#2ED573', '#FFC312', '#ff206e'];
    for (let i = 0; i < colors.length; i++) {
        spanItems.eq(i).css('background-color', colors[i]);
    }

    spanItems.click(function () {
        let color = $(this).css('background-color');
        $(':root').css('--main-color', color); // this is the isses
        console.log(`change color to ${color} clicked`);
        // set local storage
        localStorage.setItem('themeColor', color);
    });
}

// toggle settings box
const toggleSettingsBox = () => {
    let closeBtn = $('#settings-icon');
    let settingsBox = $('#slideBox');
    let left = false;
    $('#slideBox').animate({
        left: `-${$('#colorsBox').width()}`
    }, 0);
    closeBtn.click(() => {
        // console.log(left);
        if (left) {
            settingsBox.animate({
                left: `-${$('#colorsBox').width()}`
            }, 300);
            left = false
        } else {
            settingsBox.animate({
                left: 0
            }, 300);
            left = true
        }
    });
}

const fadeOutLoader = () => {
    $('#loading-screen').fadeOut(800, () => {
        $('body').css('overflow', 'auto');
    });
}

const carouselInit = () => {
    all_images = ``;
    for (let i = 0; i < 5; i++) {
        all_images += `<div class="p-1 shadow-sm"><img  src="./images/profile/${i + 1}.jpg"  alt="randomimg"></div>`;
    }
    $('.owl-carousel').html(all_images);
    $(".owl-carousel").owlCarousel(
        {
            touchDrag: true,
            mouseDrag: true,

            dots: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            },
        }
    );

}

const skitterInit = () => {
    $('.skitter-large').skitter(
        {
            preview: true
        }
    );

}

const typedJsInit = () => {

    let homeSectionT = new Typed('.type-desc', {
        strings: ['I am a web developer', 'I am a web designer', 'I am a freelancer'],
        loop: true,
        typeSpeed: 8,
        smartBackspace: true,
    });

    let priceSectionT = new Typed('.type-price', {
        strings: ['Price...', 'hhhhhhhhhhhhhhhhhhhhhh'],
        smartBackspace: true,
        loop: true,
        typeSpeed: 8
    });

}

/**************************MAIN*****************************/
const jsInit = () => {
    // plugins
    // wow js
    new WOW().init();

    // owl carousel
    carouselInit();

    // skitter
    skitterInit();

    // typed js
    typedJsInit();

    // when window onload
    $(window).on('load', () => {
        // fade out loader
        fadeOutLoader();
    });

    // when page loaded
    $(document).ready(() => {

        // get color from local storage
        let themeColor = localStorage.getItem('themeColor');
        if (themeColor !== null) {
            $(':root').css('--main-color', themeColor);
            console.log('themeColor', themeColor);
        }
        // settings for colors
        colorSettings();


        // toggle settings box
        toggleSettingsBox();
        // def settings close

        // scroll to section
        sectionScroll();

        // nav items color active
        navItemsColorActive();

        // nav items color active on scroll
        navItemsColorActiveOnScroll();

        // scroll to top
        scrollToTop();

        // change navbar if page loaded not on top
        navChange();

        // change navbar color on scroll
        $(window).scroll(() => {
            navChange();
        });


    });

}


// run js
jsInit();
