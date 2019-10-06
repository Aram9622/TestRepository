$(function () {
    let arrayImage = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'];
    $('.slider').addClass('bg_image');
    $('.slider').css('background', 'url(' + arrayImage[0] + ')')
    var i = 1;
    // right 
    $('.right').on('click', function () {
        $('.slider').addClass('bg_image animated bounceOut');
        setTimeout(function () {
            $('.slider').removeClass('animated bounceOut');
            $('.slider').addClass('animated bounceIn');
        }, 600)
        setTimeout(function () {
            $('.slider').removeClass('animated bounceIn');
        }, 200)
        $('.slider').css('background', 'url(' + arrayImage[i] + ')')
        if (i == arrayImage.length) {
            $('.slider').css('background', 'url(' + arrayImage[0] + ')')
            i = 0;
        }
        console.log(i);
        i++;

    });
    // left
    var bool = true;
    $('.left').on('click', function () {
        if (bool) {
            $('.slider').addClass('bg_image');
            $('.slider').css('background', 'url(' + arrayImage[i--] + ')');
            i--;
            bool = false;
        } else {
            $('.slider').addClass('bg_image');
            $('.slider').css('background', 'url(' + arrayImage[i--] + ')');
        }
        if (i == -1) {
            $('.slider').css('background', 'url(' + arrayImage[0] + ')');
            i = 0;
        }
        $('.slider').addClass('bg_image');
        $('.slider').css('background', 'url(' + arrayImage[i] + ')');

    });
    // play
    var idArray = [];
    $('.play').on('click', function () {
        $('.block').each(function () {
            var dataImgId = $(this).data('id');
            idArray.push(dataImgId);
        })
        clearSlider = setInterval(function () {
//            $('.slider').addClass('bg_image animated bounceIn');
//            setTimeout(function () {
//                $('.slider').removeClass('animated bounceIn');
//            }, 500)
//            $('.slider').addClass('bg_image');
            $('.slider').css({'transition':"all 1s cubic-bezier(0.68,-0.55, 0.51, 1.54)",'opacity':'0'});
            setTimeout(function () {
                $('.slider').css({'transition':"all 0.5s cubic-bezier(0.68,-0.55, 0.51, 1.54)",'opacity':'1'});
            }, 500)
            $('.slider').css('background', 'url(' + arrayImage[i] + ')')
            if (i == arrayImage.length) {
                $('.slider').css('background', 'url(' + arrayImage[0] + ')')
                i = 0;
            }
            if (idArray[i] == i) {
                $('.block_' + idArray[i] + '').css({'filter':'blur(0px)','z-index':'999'});
                $('.block_' + idArray[i] + '').next().css({'filter':'blur(5px)','z-index':'0'})
                $('.block_' + idArray[i] + '').prev().css({'filter': 'blur(5px)','z-index':'0'})
                $('.block_' + idArray[i] + '').addClass('animated bounceIn');
                setTimeout(function () {
                    $('.block_' + idArray[i] + '').removeClass('animated bounceIn');
                }, 1000)
            }
            if (idArray[i] == 0) {
                $('.block_' + idArray[i] + '').addClass('animated bounceIn');
                setTimeout(function () {
                    $('.block_' + idArray[i] + '').removeClass('animated bounceIn');
                })
                $('.block').last().css({'filter': 'blur(5px)','z-index':'0'})
            }
            i++;
        }, 1500);

    });
    // stop
    $('.stop').on('click', function () {
        clearInterval(clearSlider);
    });
    // show blocks
    for (var k = 0; k < arrayImage.length; k++) {
        var randomK = Math.floor(Math.random() * arrayImage.length);
        console.log(randomK);
        $('.main-block').append('<div class="block block_' + k + '" style="background:url(' + arrayImage[k] + ')" data-id="' + k + '"></div>');
    }
    
    
    var x = 5;
    if(x == 5){
       const y = 10;
    }
    console.log(y);
})
