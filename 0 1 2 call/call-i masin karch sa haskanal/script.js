

//   call
let btn1 = document.querySelector('#btn')
//btn1.onclick = f1
function f1(){
    console.log(this)
    this.style.color = "red"
}

f1()
//hima ete f1()=@ coment anenq u 
//bacenq btn1.onclick-@
























/*
$(document).ready(function(){
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 2;
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
   let x = 400
   let y;
    btnPrev.click(function(){
         y = y + x
        track.css({
            transform:`translateY(${y}px)`
        })
    })
    btnNext.click(function(){
         y = y - x
        track.css({
            transform:`translateY(${y}px)`
        })
    })
})
*/