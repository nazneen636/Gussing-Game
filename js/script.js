// ========================box-1 selector========================
let container= document.querySelector('.container')

let box1= document.querySelector('.box1')
let input1= document.querySelector('.box1 input')
let error1= document.querySelector('.box1 span')
let button1= document.querySelector('.box1 button')

// ========================box-2 selector========================
let box2= document.querySelector('.box2')
let heading2= document.querySelector('.box2 h1')
let input2= document.querySelector('.box2 input')
let error2= document.querySelector('.box2 span')
let button2= document.querySelector('.box2 button')

// ========================box-3 selector========================
let box3= document.querySelector('.box3')
let input3= document.querySelector('.box3 input')
let error3= document.querySelector('.box3 span')
let button3= document.querySelector('.box3 button')

// ========================box-4 selector========================
let box4= document.querySelector('.box4')
let heading4= document.querySelector('.box4 h1')
let chance= document.querySelector('.box4 p')
let input4= document.querySelector('.box4 input')
let error4= document.querySelector('.box4 span')
let button4= document.querySelector('.box4 button')

// ========================box-4 selector========================
let box5= document.querySelector('.box5')
let heading5= document.querySelector('.box5 h1')
let pAgainBtn= document.querySelector('#pAgainBtn')
let numBtn= document.querySelector('#numBtn')

let winnerNum= document.querySelector('.box6')
let count= 6
// ==================selector end====================


// ========================box-1 button start========================
button1.addEventListener('click', function(){
    if(input1.value==''){
        error1.innerHTML= 'Please enter your name'
    }else if(!(isNaN(input1.value))){
        input1.value=''
        error1.innerHTML= 'Please enter a valid name'
    }
    else{
            box1.style.display='none'
            box2.style.display='flex'
            heading2.innerHTML= input1.value
            heading2.style.textTransform= 'Capitalize'
    }
})
// ========================box-1 button end========================


// ========================box-2 button start========================
button2.addEventListener('click', function(){
    if(input2.value==''){
        error2.innerHTML= 'Input field is empty'
    }else if(input2.value>=0 && input2.value<=20){
            box2.style.display='none'
            box3.style.display='flex'
    }else{
        error2.innerHTML= 'Please provide a number 0 to 20' 
        input2.value='' 
    }
})
// ========================box-2 button end========================

// ========================box-3 button start========================
button3.addEventListener('click', function(){
    if(input3.value==''){
        error3.innerHTML= 'Please enter your name'
        input3.value=''
    }else if(!(isNaN(input3.value))){
        error3.innerHTML= 'Please enter a valid name'
        input3.value=''
    }
    else{
        box3.style.display='none'
        box4.style.display='flex'
        heading4.innerHTML= input3.value
        heading4.style.textTransform= 'Capitalize'
        chance.innerHTML= `Chance : ${count}`
    }
})
// ========================box-3 button end========================

// ========================box-4 button start========================
button4.addEventListener('click', function(){
    if(input4.value==''){
        error4.innerHTML='Input field is empty'
        error4.style.color= 'red'
    }
    else if(isNaN(input4.value)){
        error4.innerHTML='Please Enter a Number'
        error4.style.color= 'red'
        input4.value=''
    }else if(Number(input4.value>20) || Number(input4.value<0)){
        error4.innerHTML='Please Guess the Number 0 to 20'
        error4.style.color= 'red'
        input4.value=''
    }
    else{
        error4.innerHTML=''
        if(input2.value==input4.value){
            box4.style.display='none'
            box5.style.display='flex'
            container.style.background= 'url(image/celebration.jpg) no-repeat center / cover'
            heading5.innerHTML= `${input3.value}`
            heading5.style.fontStyle='normal'
        }else{
            count--
            chance.innerHTML= `Chance : ${count}`

            if(Number(input4.value)>Number(input2.value)){
                error4.innerHTML='Please try a lower number'
                input4.value=''
                error4.style.color= 'green'
            }else if(Number(input4.value)<Number(input2.value)){
                error4.innerHTML='Please try a higher number'
                input4.value=''
                error4.style.color= 'green'
            }

            if(count==0){
                box4.style.display='none'
                box5.style.display='flex'
                container.style.background= 'url(image/celebration.jpg) no-repeat center / cover'
                heading5.innerHTML= `${input1.value}`
                heading5.style.fontStyle='normal'
                // winnerNum.innerHTML= `${input3.value} is lost. The hidden number is: '${input2.value}'`
                // winnerNum.classList.add('winner-num')
            }
        }
    }
})
// ========================box-4 button end========================

// ========================box-5 button start========================
pAgainBtn.addEventListener('click', function(){
    container.style.background= 'url(image/mbackground.jpg) no-repeat center / cover'
    box5.style.display='none'
    box1.style.display='flex'
    input1.value=''
    input2.value=''
    input3.value=''
    input4.value=''
    error1.innerHTML=''
    error2.innerHTML=''
    error3.innerHTML=''
    error4.innerHTML=''
    count=5
})
// ========================numBtn start========================
numBtn.addEventListener('click', function(){
    winnerNum.innerHTML= `The Number ${input1.value} Enter is: '${input2.value}'`
    winnerNum.style.display= 'block'
    setTimeout(function(){
        winnerNum.style.display= 'none'
    }, 3000)
})
