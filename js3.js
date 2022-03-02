// 3)	Дан массив arr с именами, 
// напишите функцию которая будет принимать массив и 
// сможет отобразить 
// самое короткое имя и 
// самое длинное имя

const arr = [
    "Иван",
    "Игнат",
    "Александр",
    "Ира",
    "Света",
    "Настя",
  ]

  const minLength=(arr)=>
  {
    let str=arr[0]
      for (let i of arr){
        if(i.length<str.length){
          str=i
        }
      }
      alert(`Самое короткое имя: ${str}`)
  }

  const maxLength=(arr)=>
  {
    let str=arr[0]
      for (let i of arr){
        if(i.length>str.length){
          str=i
        }
      }
      alert(`Самое длинное имя: ${str}`)
  }

  const minMaxName=(arr)=>
  {
    let minName=arr[0]
    let maxName=arr[0]

      for (let i of arr){
        if(i.length<minName.length){
          minName=i
        }
        if(i.length>maxName.length){
          maxName=i
        }
      }
      alert(`Самое короткое имя: ${minName}\nСамое длинное имя: ${maxName}`)
  }

minLength(arr)
maxLength(arr)
minMaxName(arr)