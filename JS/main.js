
/*-------------------------------------------------
// (let , console.log , const)
//String (let = ประกาศตัวแปร , console.log = พิมพ์ค่า)
let fname = 'John'
console.log('name',fname)

//Const is cannot be changed (const = ประกาศค่าคงที่)
const idcard = '123' 

//Number
let age = 30
let height = 150.0 

//Value = Tom because code run from top to down
fname = 'Tom'

//idcard = '456' (เปลี่ยนไม่ได้เพราะ idcard เป็นค่าคงที่)
console.log('idcard = ',idcard)

//get value into variable (รวม console กันได้)
console.log('name = ',fname,'\nage = ',age)
-------------------------------------------------*/


/*------------------------------------------------
// (+ , - , * , / , %)
let number1 = 'Suvarnnaphumi'
let number2 = 'Pradkham'
let number3 = number1+' '+number2
console.log('Number3 = ',number3)
------------------------------------------------*/


/*------------------------------------------------------
// (if , else)
/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>= มากกว่าเท่ากับ
< น้อยกว่า
<= น้อยกว่าเท่ากับ
*/
/* !!
let number1 = 5
let number2 = 3
let condition1 = number1>=number2
// console.log('Condition is = ',condition1) (value = true)

if (number1>number2){
    console.log('Condition is number1 > number2')
}
else if(number1==number2){
    console.log("Condition is number1 = number2")
}
else{
    console.log("Condition is number1 < number2")
}
/*
Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
<=49 F
*/
/* !!!
let score = prompt("ใส่ตัวเลข") //prompt = รับค่าตัวเลขทางหน้าจอเว็บ
if(score>=80){
    console.log("Grade = A")
}
else if(score>=70){
    console.log("Grade = B")
}
else if(score>=60){
    console.log("Grade = C")
}
else if(score>=50){
    console.log("Grade = D")
}
else{
    console.log("Grade = F")
}
------------------------------------------------------*/


/*----------------------------------------------------
// (เครื่องหมาย and or)
/*
&& และ
|| หรือ
! ตรงกันข้าม
*/
/* !!!
let number1 = 5
let number2 = 10
//T || F
let condition = !(number1 >= 3 || number2 >=11)
console.log('result of condition = ',condition)

//แยกเลขคู่เลขคี่
let number = 20
if (number%2==0){
    console.log("The number is even.")
}
else{
    console.log("The number is odd.")
}
----------------------------------------------------*/


/*----------------------------------------------------
// (Loop)
/*
while
for
*/
/* !!!
let counter = 0

//while
//while
while(counter<10){
    console.log('Hi')
    counter = counter+1
}

//for
for(let counter=0;counter<10;counter++){
    console.log("Hi")
}
----------------------------------------------------*/


/*----------------------------------------------------
// (Array)
let age1 = 20
let age2 = 25
let age3 = 30
let age = [25,20,30]

console.log("age1 = ",age1,"\tage2 = ",age2,"\tage3 = ",age3)
console.log("-------------------------")

console.log('array = ',age)
console.log("-------------------------")

console.log('age1 = ',age[0])
console.log('age2 = ',age[1])
console.log('age3 = ',age[2])
console.log("-------------------------")

for(i=0;i<=2;i++){
    console.log('array',i+1,' = ',age[i])
}
console.log("-------------------------")

// ต่อ array เพิ่ม ใช้ .push
age.push(35)
console.log("Push array = ",age)
console.log("-------------------------")

// ลบ array ตัวท้าย ใช้ .pop
age.pop()
console.log("Delete array = ",age)
console.log("-------------------------")

// เช็คข้อมูลใน array ว่ามีไหม ใช้ .include
if(age.includes(30)){
    console.log("มีเลข 30 อยู่ใน array")
}
console.log("-------------------------")

// เรียงตัวเลขใน array ใช้ .sort
age.sort()
console.log("sort age = ",age)
console.log("-------------------------")

let name_list = ["aa","bb","cc"]
console.log("name_list = ",name_list)
console.log("-------------------------")

name_list.push('dd')
console.log("push name_list = ",name_list)
console.log("-------------------------")

name_list.pop()
console.log("pop name_list = ",name_list)
console.log("-------------------------")

// จำนวนข้อมูลใน array ใช้ .length
console.log("length of name_list = ",name_list.length)
console.log("-------------------------")

for(i=0;i<=2;i++){
    console.log("name list",i+1,"=",name_list[i])
}
----------------------------------------------------*/


/*----------------------------------------------------
// (Object) เก็บข้อมูลไว้ในบล็อก
let student = {
    age:30,
    name:'aa',
    grade: 'A'
}

console.log(student)
console.log("-------------------")

//เข้าถึงข้อมูลที่อยู่ภายใน object ใช้ .(หัวข้อของข้อมูล)
console.log("Age of student is ",student.age)
console.log("-------------------")

//ข้อมูลหลายชุดใน object เดียว ใช้ [ คลุม {
let student1 = [{
    age:30,
    name:"aa",
    grade:"A"
},
{
    age:35,
    name:"bb",
    grade:"B"
}]

for(i=0;i<student1.length;i++){
    console.log("Student Number: ",i+1)
    console.log("Name: ",student1[i].name)
    console.log("Age: ",student1[i].age)
    console.log("Grade: ",student1[i].grade)
}
----------------------------------------------------*/


/*----------------------------------------------------
// (function) 
let score1 = 55
let score2 = 65
let grade = ''

// คำนวณเกรดใน function
function calculate_grade(score){
    if(score>=80){
        grade = "A"
    }
    else if(score>=70){
        grade = "B"
    }
    else if(score>=60){
        grade = "C"
    }
    else if(score>=50){
        grade = "D"
    }
    else{
        grade = "F"
    }
return grade
}

// เรียกใช้ function
let show_grade = calculate_grade(score1)
console.log(show_grade)
// สามารถเรียกใช้ซ้ำได้
let show_grade2 = calculate_grade(score2)
console.log(show_grade2)
----------------------------------------------------*/


/*----------------------------------------------------
// (Array (ต่อ))
let score = [20,30,40,50]
for(i=0;i<score.length;i++){
    console.log("score",i+1,":",score[i])
}
console.log("------------------------")


// loop array แบบง่าย ใช้ .forEach((ชื่อตัวแปรที่จะใช้เก็บค่า) => {คำสั่งที่จะให้ทำ})
score.forEach((x) => {
    console.log("Score:",x)
})
console.log("------------------------")

// update ค่า array ได้ โดยใช้ .map
score = score.map((x)=>{
    return x*2
})

score.forEach((x) => {
    console.log("Score:",x)
})
console.log("------------------------")


// เก็บค่า score ที่ >=50 ไว้ที่ newScore
let newScore = []
for(i=0;i<score.length;i++){
    console.log("score",i+1,":",score[i])
    if (score[i]>=50){
        newScore.push(score[i])
    }
}

// .......
let newScore1 = score.filter((s) => {
    return s>=90
})

newScore.forEach((ns) => {
    console.log("New Score:",ns)
})
console.log("------------------------")
----------------------------------------------------*/


/*----------------------------------------------------
// (Object function)
let student = [
    {
        name:'aa',
        score:50,
        grade:'D'
    },
    {
        name:'bb',
        score:80,
        grade:'A'

    }
]


// หา student ที่ชื่อ aa ใน student object ใช้ .find((ชื่อตัวแปรที่จะใช้เก็บค่า) => {คำสั่งที่จะให้ทำ})
let student1 = student.find((s) => {
    if (s.name=='aa'){
        return true
    }
})
console.log(student1)
console.log("------------------------")

// เอา score *2 ของทุกคน ใช้ .map((ชื่อตัวแปรที่จะใช้เก็บค่า) => {คำสั่งที่จะให้ทำ})
let double_score = student.map((s)=>{
    s.score = s.score*2
    return s
})

console.log(double_score)
console.log("------------------------")

// หา high score 
let highScore = student.filter((s)=>{
    if(s.score>100){
        return true
    }
})
console.log(highScore)
----------------------------------------------------*/
