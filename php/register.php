<?php
//注册接口，前端发送给我数据，我把数据存储在数据库
//发送方式：POST
require("./connect.php");
$username = $_POST["username"];
$pwd = $_POST["pwd"];
$pwd2 = $_POST["pwd2"]
//对密码进行MD5加密
// $pwd = md5($pwd1);
// $pwd2 = md5($pwd2);
//插入数据
 $sql = "INSERT INTO 
        user_list(username,pwd,pwd2)
        VALUES
        ('{$username}','{$pwd}','{$pwd2}')";
$res = mysqli_query($conn,$sql);
if(!$res){
        die("无法插入数据")
}
echo "数据插入成功";

$result = $conn->query($sql); 
echo $result;


?>