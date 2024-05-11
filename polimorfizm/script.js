const rectangle = {
    a:1,
    b:2,
    area:function(){
        return this.a *this.b;
    }
}
const triangle = {
    a:1,
    b:2,
    area: function(){
        return (this.a * this.b) / 2
    }
}

function area1(elements){
    console.log(elements.area())
}
area1(rectangle)
area1(triangle)