$(document).ready(function(){
    // KHAI BAO
    const LENGTH = $('.images-item').length ;
    const listSlide = Array.from($('.list-images ul .images-item'));
    let count = 0 ;

    // lặp lại các nút 
    for(let i = 2 ; i < LENGTH + 1; i++){
        $('.list-icon .dot').append(`
            <a  href="#">${i}</a>
        `);
    }

    const list_number = $('.list-icon .dot a');

    // FUNCTION
    function reset(){
        $('.list-icon .dot a').removeClass('active');
    }

    function nextImages(){
        let flag = false;
        $(".list-images ul li").animate({
            right : "+=800px",
        },
        {
            complete: function(){
                if(!flag){
                    flag=true;
                    let right = parseFloat(listSlide[count].style.right.slice(0,listSlide[count].style.right.length - 2))
                    right+=-(LENGTH)*800;
                    console.log(right)
                    console.log(listSlide[count])
                    listSlide[count].style.right = `${right}px`
                    if(count === LENGTH - 1) count=0
                    else count = count + 1 ;
                    reset();
                    $(list_number[count]).addClass('active');
                }
            }
        }
        )
        // listSlide[count].style.right = `${(LENGTH - 1)*800}px`
        // if(count === LENGTH - 1) count=0
        // else count = count + 1 ;
        // reset();
        // $(list_number[count]).addClass('active');
    }
    function setCss(element){
        element.css({
            'display' : 'list-item',
            'float'   : 'left',
            
        })
    }
    function removeCss(){

    }

    // function nextImages(){
    //     if(count == LENGTH - 1){
    //         $(".list-images ul").animate({
    //             right : "0",
    //         })
    //         count = -1 ;
    //     }else {
    //         $(".list-images ul").animate({
    //             right : "+=800px",
    //         })
    //     }
    //     count = count + 1 ;
    //     reset();
    //     $(list_number[count]).addClass('active');
    // }

    function prevImages(){
        if(count == 0){
            $(".list-images ul").animate({
                right : `${(LENGTH - 1) * 800}px`,
            })
            count = LENGTH - 1;
        }else {
            $(".list-images ul").animate({
                right : `-=800px`,
            })
            count = count - 1 ;
        }
        reset();
        $(list_number[count]).addClass('active');
    }

    // EVENT
    $('.next').click(nextImages);
    $('.prev').click(prevImages);

    $('.list-icon .dot a').click(function(e){
        e.preventDefault();
        count = $(this).text() - 1;
        let right  = count * 800 ;
        $(".list-images ul").animate({
            right : `+${right}px`,
        })
        reset();
        $(list_number[count]).addClass('active');
    })
    // SET TIME AUTO
    // setInterval(nextImages,3000);
})