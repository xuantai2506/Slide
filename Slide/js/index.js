var list_images = document.querySelectorAll('.images-item');
var list_number = document.querySelectorAll('.list-number')
var list_slide = document.getElementsByClassName('list-slide');

const LENGTH = list_images.length ;
var count = 0 ;

list_images[count].style.display = "block";

let next_images = document.getElementById('next-images');
let prev_images = document.getElementById('prev-images');

next_images.addEventListener('click',nextImages);
prev_images.addEventListener('click',prevImages);

function reset(){
    for(let i = 0 ; i < LENGTH; i++){
        list_images[i].style.display = "none";
        if(list_number[i].classList.contains('active')){
            list_number[i].classList.remove('active');
        }
    }
}
function nextImages(){
    reset();
    if(count == LENGTH - 1){
        count = -1 ;
    }
    count = count + 1 ;
    list_images[count].style.display = "block";
    list_number[count].classList.add('active');
    list_images[count].style.transition = "all 3s ease-in";
}
function prevImages(){
    reset();
    if(count == 0){
        count = LENGTH ;
    }
    count = count - 1 ;
    list_images[count].style.display = "block";
    list_number[count].classList.add('active');
}
let x = setInterval(nextImages,3000);
