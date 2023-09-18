// gnb
$('.hammenu img').click(() => {
    if ($('.gnb_menu').css('left') === '0px') {
        $('.gnb_menu').css({ left: '-340px' });
        $('.hammenu').css({left : 0});
        $('.hammenu img').attr('src', './images/icon/menu_mark.png');
    } else if ($('.gnb_menu').css('left') === '-340px') {
        $('.gnb_menu').css({ left: 0 });
        $('.hammenu').css({left : '260px'});
        $('.hammenu img').attr('src', './images/icon/menu_close.png');
    }
});

// 오늘 하루 그만보기
$('.close').click(()=>{
    $('.top_fixed').hide();
    // $('#wrap').css({paddingTop:"34px"});
    $('.gnb_box h2').css({top:0});
})
// a태그 막기
$("a[href='#']").click(function(e) {
    e.preventDefault();
});

$(window).resize(() => {
    const windowHeight = $(window).height();
    $('.gnb_menu').css({ height: windowHeight });
});

$(window).scroll(() => {
    const scrollPosition = $(window).scrollTop();
    const gnbMenu = $('.gnb_menu');
    const hammenu = $('.hammenu');
    if (scrollPosition > 0) {
        gnbMenu.addClass('fixed');
        hammenu.addClass('fixed');
    } else {
        gnbMenu.removeClass('fixed');
        hammenu.removeClass('fixed');
    }
});



$('.mov_container h3').hide();
$('.mov1').show();

$('.mov_list p').click(function() {
    // 클릭된 탭의 인덱스를 가져옵니다.
    var index = $(this).index();
    
    // 모든 .mov_container 하위의 h3 요소를 숨깁니다.
    $('.mov_container h3').hide();
    
    // 클릭된 탭과 동일한 인덱스를 가진 .mov_container 하위의 h3 요소를 표시합니다.
    $('.mov_container h3:eq(' + index + ')').show();
    
    // 클릭된 탭에 mov_selected 클래스를 추가하고, 다른 탭에서 해당 클래스를 제거합니다.
    $(this).addClass('mov_selected').siblings().removeClass('mov_selected');
});


// const tab = $('.mov_list p');
// $(tab).click(function(){
//     if(!$(this).hasClass('mov_selected')){
//         $(this).siblings('p').removeClass('mov_selected');
//         $(this).addClass('mov_selected');
//     }
// })

// 이미지 클릭시 원본 크기로 볼 수 있도록 하는 법
// $('.gallery img').click(function(){
//     window.open(this.src);
// })

// var currentIndex = 0;
// var totalImages = $('.gallery_box img').length;

// $('.gallery_box img').click(function(){
//     currentIndex = $('.gallery_box img').index(this);
//     showImage(currentIndex);
// });

// function showImage(index) {
//     var imageUrl = $('.gallery_box img').eq(index).attr('src');
//     window.open(imageUrl);
// }

// // 이전 이미지 보기
// $('#prevBtn').click(function(){
//     currentIndex = (currentIndex - 1 + totalImages) % totalImages;
//     showImage(currentIndex);
// });

// // 다음 이미지 보기
// $('#nextBtn').click(function(){
//     currentIndex = (currentIndex + 1) % totalImages;
//     showImage(currentIndex);
// });

// $('.gallery_box img').click(function(){
//     var imageUrl = $(this).attr('src');
//     showModal(imageUrl);
// });


// $('.close').click(function(){
//     closeModal();
// });

// 이미지 클릭시 원본 크기로 볼 수 있도록 하는 법
// $('.gallery img').click(function(){
//     window.open(this.src);
// })
$('.gallery_box img').click(function(){
    var imageUrl = $(this).attr('src');
    showModal(imageUrl);
});

$('#modal').click(function(event) {
    if (event.target === this) {
        closeModal();
    }
});
function showModal(imageUrl) {
    $('#modal-image').attr('src', imageUrl);
    $('#modal').fadeIn();
}

// 이미지 바깥영역 클릭시 모달창 종료
function closeModal() {
    $('#modal').fadeOut();
}

// 모든 이미지 요소 가져오기
var currentIndex = 0;
var images = $('.gallery_box img');

$('.img_btn img').click(function() {
    var btnType = $(this).attr('alt');

    if (btnType === 'prev_btn') {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
    } else if (btnType === 'next_btn') {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
    }

    var clickedImageOrder = currentIndex + 1;
    console.log("클릭한 이미지 순서: " + clickedImageOrder);

    var imageUrl = images.eq(currentIndex).attr('src');
    showModal(imageUrl);
});

$('.gallery_box img').click(function() {
    currentIndex = $('.gallery_box img').index(this);
    var clickedImageOrder = currentIndex + 1;

    console.log("클릭한 이미지 순서: " + clickedImageOrder);

    var imageUrl = $(this).attr('src');
    showModal(imageUrl);
});

console.log($('.gallery_box img').length);

