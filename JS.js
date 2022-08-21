//console. log('hello world');  says X
//console.error('This is an error') error message
//console.warn('This is a warning') Warning message


// var/let/const

//const X = 30;
//X = 31;  bad
//let age = 30;
//console.log(age)


//string, Numbers, Boolean, Null, Undefined

/*const name = 'Dj';
const age=30;
const rating=4.5;
const isCool=true;
const x=null;
const y=undefined;
let z;
console.log(typeof );*/


/*const name = 'Dj';
const age = 30;
const hello = `My name is ${name} and I am ${age}`;
console.log('My name is '+ name+ ' and I am '+ age);  concatenation
console.log(`My name is ${name} and I am ${age}`);    template string
console.log(hello);*/


//const s = '1, 2, 3, 4, 5, 6,';
//console.log(s.length);
//console.log(s.toUpperCase());
//console.log(s.toLowerCase());
//console.log(s.substring(0, 5));
//console.log(s.substring(0, 5).toUpperCase());
//console.log(s.split(''));
//console.log(s.split(', '));


//Arays - vars that hold muilt val

//const numbers = new Array(1,2,3,4,5);
//console.log(numbers)

/*const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
fruits.push('mangos')
fruits.unshift('strawberries')
fruits.pop();
console.log(Array.isArray('Hello'))
console.log(fruits.indexOf('oranges'))
console.log(fruits);*/


//Object litarals

/*const person = {
    firstName: 'Dj',
    lastName: 'sco',
    age: 13,
    hobbies: ['music', 'codeing', 'gameing'],
    address: {
        street: '123 main st',
        city: 'Eureka',
        state: 'Cal',
    }
}
//console.log(person.firstName, person.lastName);
//const { firstName, lastName, address: { city }} = person;
//console.log(city)
person.email = 'name@gmail.com';
console.log(person)*/

/*const todos = [
    {
        id: 1,
        text: 'Take a shower',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Take trash out',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Do the dishes',
        isCompleted: false
    },
];*/
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON)

/*For

for(let i = 0; i<10; i++) {
    console.log(`For loop Number: ${i}`);
}

while

let i = 0;
while(i < 10){
    console.log(`While loop number: ${i}`);
    i++;
}


for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}


for(let todo of todos){
    console.log(todo.text);
}*/


/*foreach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText)


const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true
}).map(function (todo) {
    return todo.text;
})
console.log(todoCompleted)*/




/*const x = 6;
const y = 11;
if (x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10');
}
if(x > 5){
    if(y > 10){}
}


else if (x > 10) {
    console.log('x is greater than 10')
}
else {
    console.log('x is less than 10')
}*/



//Formating
/*const x = 11;
const color = x > 10 ? 'red':'blue';
console.log(color);*/





//Switch!!!!!!
/*const x = 10;
const color = x > 10 ? 'red' : 'blue';
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('Color is not blue or red');
        break;
}*/




/*function addNums(num1 = 1, num2 = 1){
console.log(num1 + num2);
}
addNums(40,2);*/


/*function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
    }
    console.log(addNums(40,2));*/


/*const addNums = (num1 = 1, num2 = 1) => {
    console.log(num1 + num2);
}
addNums(40, 2);*/


//constructor


/*function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}


//Class samething^^^
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);

    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}




//Instantiate object
const person1 = new Person('John', 'Doe', '10/17/22');
const person2 = new Person('Dylan', 'Scofield', '10/17/22');
console.log(person1);
console.log(person2.getFullName());
console.log(person1.getBirthYear());
console.log(person1.getFullName());*/



//Single element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1')); do this


//Multiple element
//console.log(document.querySelectorAll('.item')); do this
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

//const items = document.querySelectorAll('.item')
//items.forEach((item)=> console.log(item));


/*const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Dj';
ul.lastElementChild.innerHTML = '<h1>HI</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';*/


//Events


/*const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) =>{ //Mouseover/out
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>WEE</h1>';
});*/




const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000)
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        //Clear feilds
        nameInput.value = '';
        emailInput.value = '';
    }
}


const LinkButton = document.querySelector('#Links');
Links.addEventListener('click', () => { //Mouseover/out
    const Link = document.createElement('button');
    Link.innerHTML = '<a href = "file:///C:/Users/lills/OneDrive/Desktop/First%20Time%20Messing%20With%20HTML/Main%20Testing.html" Target = "_blank">HTML Testing.html</a>';
    document.body.appendChild(Link);
    const Link2 = document.createElement('button');
    Link2.innerHTML = '<a href = "file:///C:/Users/lills/OneDrive/Desktop/First%20Time%20Messing%20With%20HTML/HTML5.html" Target = "_blank">HTML5 Testing.html</a>';
    const Link3 = document.createElement('button');
    Link3.innerHTML = '<a href = "file:///C:/Users/lills/OneDrive/Desktop/First%20Time%20Messing%20With%20CSS/CSS%20Testing.html" Target = "_blank">CSS Testing.html</a>';
    document.body.appendChild(Link);
    document.body.appendChild(Link2);
    document.body.appendChild(Link3);
    LinkButton.remove('#Links')


});

