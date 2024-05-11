const stackCreate = ()=>{
    let arr = [] // stex es masiv@ baci es functiayi mijic urish voch mi tex hasaneliutyun chuni aysinqn voch mek
    return (item) =>{              // dzerq chi kara ta es masivin 
        if(typeof item !== 'undefined'){
            return arr.push(item)
        }else{
            return arr.pop(item)
        }
    }
}
const myStack = stackCreate()
myStack(5)
myStack(56)
myStack(500)
myStack(55)
console.log(myStack())





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