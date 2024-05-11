/*
function MyClass(){
    let name = "Garik"
    this.hello = function(){
        return name
    }
}
let myclass = new MyClass()
myclass = Object.preventExtensions(myclass) // ay es hramanov menq tuyl chenq talis vor karoxananq eli dasht 
console.log(myclass.name)  // avelacnenq aysinqn consolum el Aram@ chi tpi bayc ete es preventExtensions-@ 
console.log(myclass.hello()) // chgrenq apa Aram@ ktpi
myclass.name = "Aram"  
console.log(myclass.name)
console.log(myclass.hello()) 
*/
/*
function MyClass(){
    this.name = "Garik"
    let age = 45
    this.hello = function(){
       return age
    }
}
let myclass = new MyClass()
myclass = Object.preventExtensions(myclass)
myclass.name = "Aram";
console.log(myclass.name)
delete myclass.name;// aysinqn preventExtensions-@ chtoxec nor dasht avelacnenq bayc toxe
console.log(myclass)  // vor jnjenq hima consolum vor nayenq arden this.name = "Garik" dasht@ aylevs chka
*/
// vorpisi nayev chkaroxananq delete ogtagorcenq ka seal functian
/*
function MyClass(){
    this.name = "Garik"
    let age = 45
    this.hello = function(){
       return age
    }
}
let myclass = new MyClass()
myclass = Object.seal(myclass)
delete myclass.name
console.log(myclass)
*/
// hima vorpisi voch karoxananq avelacnenq voch karoxananq jnjel voch el karoxananq poxenq dashteric voreve
// meki arjeq@ ogtagorcum enq freeze functian

function MyClass(){
    this.name = "Garik"
    let age = 45
    this.hello = function(){
       return age
    }
}
let myclass = new MyClass()
myclass = Object.freeze(myclass)
delete myclass.name
myclass.name = "Arsen"
console.log(myclass)






































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