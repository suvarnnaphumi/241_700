/*//ทำการ import โมดูล http
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่า sever
const reqestListener = function(req,res){
    res.writeHead(200);
    res.end("Hello, World! This is my first sever.");
}

// run sever
const sever = http.createServer(reqestListener);
sever.listen(port,host,() =>{
    console.log(`Sever is running on http://${host}:${port}`);
})*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
let users = [];
let counter = 1;
app.use(bodyParser.json());

/**
 GET /users - ดึงข้อมูลผู้ใช้ทั้งหมด
 POST /users - เพิ่มผู้ใช้ใหม่
 GET /users/:id - ดึงข้อมูลผู้ใช้ตาม id
 PUT /users/:id - แก้ไขข้อมูลผู้ใช้ตาม id ที่บันทึก
 DELETE /users/:id - ลบผู้ใช้ตาม id ที่บันทึก
 */

// path: = POST /user
app.post('/user',(req, res)=>{
    let user = req.body;
    user.id = counter
    counter +=1; //นับ id

    users.push(user);
    res.json({message:'User added successfully',users: user});
});

//path: = PUT /user/:id
app.patch('/user/:id',(req,res)=>{
    let id = req.params.id;
    let updateUser = req.body;
    
    // หา user จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user =>user.id == id);
    
    // update ข้อมูล user นั้น
    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;

    if(updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if(updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }

    res.json({
        massage:'User update successfully',
        data:{
            user: updateUser,
            indexUpdate: selectedIndex
        }
    });
    // ส่งตัว users update เสร็จกลับไป
    
})

app.delete('/users/:id',(req,res)=>{
    let id = req.params.id;
    let selectedIndex = users.findIndex(user=>user.id == id);
    delete users[selectedIndex];

    res.json({
        message: 'User deleted successfully!',
        indexDelete: selectedIndex
    })
})

// path: GET / users
app.get('/users',(req,res)=>{
    res.json(users);
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
