$(document).ready(function(){
    
    let count = 0 ;
    const list_images = $('.images-item');
    const LENGTH = $('.images-item').length ;

    // list number
    for(let i = 2 ; i < LENGTH + 1; i++){
        $('.list-slide').append(`
            <div class="list-number">
                ${i}
            </div>
        `);
    }

    const list_number = $('.list-number');

    $(list_images[count]).show();

    function reset(){
        $(list_images).hide('slow');
        // for(let i = 0 ; i < LENGTH; i++){
        //     if($(list_number[i]).hasClass('active')){
        //         $(list_number[i]).removeClass('active');
        //     }
        // }
        $('.list-number.active').removeClass('active');
    }
    function nextImages(){
        reset();
        if(count == LENGTH - 1){
            count = -1 ;
        }
        count = count + 1;
        $(list_images[count]).show(500);
        $(list_number[count]).addClass('active');
    }
    $('#next-images').click(nextImages)

    $('#prev-images').click(function(){
        reset();
        if(count == 0){
            count = LENGTH ;
        }
        count = count - 1 ;
        $(list_images[count]).show(500);
        $(list_number[count]).addClass('active');
    })

    setInterval(nextImages,2000);
})