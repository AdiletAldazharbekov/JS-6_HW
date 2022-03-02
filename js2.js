// 2)	Дан массив 
// напишите функцию которая будет удалять каждый 3 элемент в массиве
const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ]
  console.log(arr)
  let arr2=[]

const deleteEach3=(arr)=>{
    for (let i=0; i<arr.length; i+=3){
            arr2.push(arr[i])
    }
}
deleteEach3(arr)
console.log(arr2)
