// 1)	Напишите функцию , 
// которая будет задавать вопросы пользователю и 
// затем сохранять ответы в массиве, 
// в конце отобразите на экране ответы.

let user = {
    name:'Как вас зовут',
    age:'Сколько вам лет',
    city:'В каком городе вы живете',
    like:'Frontend или Backend',
    about:'Разскажите о себе'
}

const getQuestions =(obj)=>{
    user1={...user}
    for (let i in obj){
       user1[i]=prompt(obj[i])
    }
    creatArray(user1)
}

let userArr=[]
const creatArray =(obj)=>{
    for (let i in obj){
        userArr.push(obj[i])
    }
}

getQuestions(user)
alert(userArr.join(', '))
console.log(userArr)

