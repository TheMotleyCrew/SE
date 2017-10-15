
<?php

include("../db_conection.php");
$username = $_POST['name'];
$pwd = $_POST['pass'];


$sql ="INSERT INTO user (uname,password,wallet)
 VALUES('$username','$pwd',0)";
$result=mysqli_query($dbcon,$sql);
//header("Location: login.php");
echo("<script>location.href = './login.php';</script>");
?>

