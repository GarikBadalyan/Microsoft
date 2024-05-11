/*
function MyClass(){
    let name = "Garik"
    this.hello = function(){
        return name
    }
}
let myclass = new MyClass()
console.log(myclass.name)// stex undefined ktpi
console.log(myclass.hello())  // stex arden Garik ktpi
*/
function MyClass(){
    let name = "Garik"
    this.hello = function(){
        return name
    }
}
let myclass = new MyClass()
console.log(myclass.name)
console.log(myclass.hello())
myclass.name = "Aram"  // aystex menq voch te dashti arjeq@ poxecinq ayl menq nor dasht stexcecinq
console.log(myclass.name)// stex tpum e Aram -@ ays gorc@ntac@ kochvum e obyektneri @ndlaynum
console.log(myclass.hello())  // hello()-n tpum e noric Garik@














































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