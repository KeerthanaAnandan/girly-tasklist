const form = document.querySelector('.task-form');
const entireList = document.querySelector('.collection');
const clrBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const addBtn = document.querySelector('#addbtn');
const taskEnteringArea = document.querySelector('#taskarea');


//DOM load event
document.addEventListener('DOMContentLoaded' , getTaskFromLocaltorage);
document.addEventListener('DOMContentLoaded' , changeBabyQuotes);
addBtn.addEventListener('click' , addTask);
entireList.addEventListener('click' , removeSingle);
clrBtn.addEventListener('mousedown' , clrTask);
filter.addEventListener('keyup' , filterTask);

function getTaskFromLocaltorage(){
    let manyTask ;
    if(localStorage.getItem('manyTask') === null){
        manyTask = [];

    }
    else{
        manyTask = JSON.parse(localStorage.getItem('manyTask'));
    }
    manyTask.forEach(function(singleTask){
        const lis = document.createElement('li')
    lis.className='collection-item';
    lis.appendChild(document.createTextNode(singleTask));
    entireList.appendChild(lis);

    const link = document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>';
     lis.appendChild(link);

     

    })

}


function  addTask(e){
    if (taskEnteringArea.value===''){
        alert('enter something bae');
        
    }  else{

let lis = document.createElement('li')
    lis.className='collection-item';
    lis.appendChild(document.createTextNode(taskEnteringArea.value));
    entireList.appendChild(lis);

    const link = document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>';
     lis.appendChild(link);

     storeTaskInLocalStorage(taskEnteringArea.value);

    taskEnteringArea.value='';
    e.preventDefault();
}

function storeTaskInLocalStorage(singleTask){
    let manyTask ;
    if(localStorage.getItem('manyTask') === null){
        manyTask = [];

    }
    else{
        manyTask = JSON.parse(localStorage.getItem('manyTask'));
    }
    manyTask.push(singleTask);
    localStorage.setItem('manyTask' , JSON.stringify(manyTask));

}}

function clrTask(e){
    if(confirm('Are you sure babe?')){
        entireList.innerHTML='';
        e.preventDefault();
  localStorage.clear();
    }
}

function removeSingle(e){
    if (e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
    removeTaskLocalStorage(e.target.parentElement.parentElement);
    e.preventDefault();
}

function removeTaskLocalStorage(anything){
    let manyTask ;
    if(localStorage.getItem('manyTask') === null){
        manyTask = [];

    }
    else{
        manyTask = JSON.parse(localStorage.getItem('manyTask'));
    }
    manyTask.forEach(function(singleTask , index){
        if(anything.textContent === singleTask ){
            manyTask.splice(index , 1);


        }
    })
    localStorage.setItem('manyTask' , JSON.stringify(manyTask))
    
}

function filterTask(e){
    let val = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(function(item){
      let  bla = item.firstChild.textContent;
        if(bla.toLowerCase().indexOf(val) != -1){
            item.style.display = 'block';}
            else{
            item.style.display = 'none';}
            e.preventDefault();
        
    })
}


function changeBabyQuotes(){
const babyQuotes = ['YOU GOT THIS BABY GIRL!','SLAY THEM WITH SWEETNESS','BE A BEAUTIFUL CUPCAKE IN A WORLD FULL OF MUFFINS','DARLING, DON\'T FORGET TO FALL IN LOVE WITH YOURSELF','DON\'T LET ANYONE EVER DULL YOUR SPARKLE','CONFIDENCE.WEAR IT LIKE MAKEUP','TOO GLAM TO GIVA A DAMN' ,'HUSTLE HARD GIRL!' , 'LIFE IS TOUGH,SO DO YOU!', 'KEEP \'EM GUESSING!' , 'GET UP , DRESS UP , AND NEVER GIVE UP!' , 'STOP WAITING GIRL.GO GET WHAT IS YOURS', 'YOU ARE A BADASS!'];
let max= 12;
let min = 0;
let val = Math.floor(Math.random()*(max-min+1)+min);
let bossBabeQuotes = babyQuotes[val];
document.querySelector('#quotesbae').innerHTML= bossBabeQuotes;
console.log(bossBabeQuotes);
console.log(val);

}



