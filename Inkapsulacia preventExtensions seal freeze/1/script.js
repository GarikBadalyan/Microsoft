function MyClass(){
    this.a = 4
    let item = 5;
    this.getitem = function(){
        return item
    }
}
//let p  = new MyClass()
//console.log(p.item)// sa undefined ktpi qani vor private e (aranc this - i e)
//console.log(p.getitem()) // isk aystex ktpi 5 - @ publik e (this -ov e)
//p.item = 444
//console.log(p.item)
//console.log(p.getitem())
//aystex voch te dashti arjeqn e poxvum ayl arhestakan kerpov stexcvum e nor publik dasht : ays gorc@ntacn
// anvanum en obyektneri @ndlaynum :ed arhestakan kerpov stexcvac item@ kap chuni nersum stexcvac item - i 
//het nman iravichakic xusapelu hamar kan functianer voronq bacarum en ayd @ndlaynum@ orinak
//preventExtensions-@ ays functian tuyl chi talis vor voreve nor dasht avelacvi arka obyektin orinak
let k = MyClass()
k = Object.preventExtensions(k)
//k.item = 444
console.log(k.item) // undefined
// bayc ays metod@ tuyl e talis mer MyClass -i mijic jnjenq orinak a:4 dasht@   orinak
delete k.a
console.log(k)
// mek ayl functia e seal-@ vor@ i tarberutyun preventExtensions- i chi toxnum delete anel
//isk freeze functian naxord erku functianeri miavorumn e ays depqum voch miayn hnaravor che nor dashter
// avelacnel ev heracnel ayl nayev hnaravor che poxel exac dashteric voreve mek@