<?php
//登录相当于查询功能，此时数据来源于前端
//当前的PHP接口：http://localhost:81/program1/php/login.php

//连接数据库
require("./connect.php");

//接口文档：1.字段名 2.字段值 登录时以POST的方式进行发送

//$_POST取得表单中的数据
$username = @$_POST["username"];
$pwd = @$_POST["password"];
if($username == "" || $pwd ==""){
    die("请输入完整的用户信息");
}
//执行查询语句
$sql = "SELECT id,username,pwd FROM user_list";
$result = mysqli_query($conn,$sql);
//查询数据库中共有几条数据
//echo $result->num_rows;

// $res=mysqli_fetch_row($result);

// if($result->num_rows<=0){
//     die("数据库中没有数据");
// }
// echo json_encode($res);

//mysqli_fetch_assoc()函数是从结果集中取得一行作为关联数组
while($row = $result->fetch_assoc()){
    //json_encode将数值转换成json数据存储格式
    // echo json_encode($row);
    // echo $row["username"];
    if($row["username"] == $username && $row["pwd"] == md5($pwd)){
        die("1");
    }
}
die("0");
?>