var a = 2;
var arr=[1,2,3,4,5,6,7,8,9,10]
console.log(arr)

var filt = arr.filter((el) => {
  if(el > 5){
    return true;
  }
  return false
})
console.log(filt)
