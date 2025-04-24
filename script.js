const btn = document.querySelector("#btn");
const birthday = document.querySelector("#birthday");
const result = document.querySelector("#result");

//console.log(birthday)
function calculateAge(){
    const birthvalue = birthday.value;
    if(birthvalue===" "){
        alert("please enter your birthday");
    }else{
        const age = getAge(birthvalue);
        result.innerText=`your age is ${age} year old`
    }
}

function getAge(birthvalue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthvalue);
    let age = currentDate.getFullYear()-birthdayDate.getFullYear();
    let month = currentDate.getMonth()-birthdayDate.getMonth();
    if(month<0 || (month===0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }

return age ;
}

btn.addEventListener('click',calculateAge)
