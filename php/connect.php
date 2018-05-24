<?php
//测试数据库连接文件
//（在服务器环境下，直接把php文件拖拽到浏览器中，将www后面的换成本地服务器名以及端口）
$servername = "localhost:3306";
$username = "root";
$password = "123";
$dbname = "user";
$conn = new mysqli($servername,$username,$password,$dbname);

// $conn=mysqli_connect("localhost","root","123","user",3306);

// $sql="setmysqli_qu names utf8";

// mysqli_query($conn,$sql);

// echo json_encode($conn);
if($conn->connect_error){
    die("连接失败：".$conn->connect_error);
}
echo "连接成功";
?>