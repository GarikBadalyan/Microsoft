// public
function MyClass(){
    this.hello = function(){
        return "ok"
    }
    let bar = function(){
        return "my name is Narek"
    }
}
let myclass = new MyClass()
console.log(myclass.hello()) // stex ktpe ok vorovhetev public e
console.log(myclass.bar()) // stex ktpe error vorovhetev private e














/*
// call
let btn1 = document.querySelector('#btn')
let btn2 = document.querySelector('#btn2')
btn1.onclick = f1
function f1(color,num){
    console.log(this)
    console.log(num)
    this.style.background = color
}


    f1.call(btn1,"red",55555)
*/
























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