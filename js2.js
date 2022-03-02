// 2)	Дан массив 
// напишите функцию которая будет удалять каждый 3 элемент в массиве
const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ]
  console.log(arr)
  let arr2=[]

const deleteEach3=(arr, n)=>{
    for (let i=n-1; i<arr.length; i+=n){
        delete arr[i]
    }
}
let n = prompt('Число',3)
deleteEach3(arr,3)
console.log(arr)
