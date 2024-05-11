function test(x,y){
  if(y==0){
return 1
  }else{
    return x*test(x,y-1)
  }
  }
  console.time("test")
  test(255,516)
  console.timeEnd("test")