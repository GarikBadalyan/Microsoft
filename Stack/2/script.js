const stackCreate = () => {
  let arr = []
  return (item) => {
    if (typeof item !== 'undefined') {
      return arr.push(item)
    } else {
      return arr.pop(item)
    }
  }
}
const myStack = stackCreate()
myStack(6)
myStack(55)
myStack(65)
myStack(76)
while(true){
  let nextItem = myStack()
if(typeof nextItem === 'undefined'){
console.log("tver@ verjacav")
break
}
console.log(nextItem)
}