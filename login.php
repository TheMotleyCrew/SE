<?php
session_start();//session starts here

?>



<html>
<head lang="en">
    <meta charset="UTF-8">
    
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/prettyPhoto.css" rel="stylesheet">
    <link href="css/price-range.css" rel="stylesheet">
    <link href="css/animate.css" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">
	<link href="css/responsive.css" rel="stylesheet">
    <script src="js/bootstrap.min.js"></script>
   <!-- <link type="text/css" rel="stylesheet" href="bootstrap-3.2.0-dist\css\bootstrap.css">-->
    <title>Login</title>
</head>
<style>
    .login-panel {
	margin-top: 150px;}
body {background-color:white;
</style>

<body>
<div>

</div>
<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
            <div class="login-panel panel panel-success">
                <div class="panel-heading">
                    <h3 class="panel-title">Sign In</h3>
                </div>
                <div class="panel-body">
                    <form role="form" method="post" action="login.php">
                        <fieldset>
                            <div class="form-group"  >
                                <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus >
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="Password" name="pass" type="password" value="">
                            </div>
							

                                <input class="btn btn-lg btn-success btn-block" type="submit" value="login" name="login" >

                            <!-- Change this to a button or input when using this as a form -->
                          <!--  <a href="index.html" class="btn btn-lg btn-success btn-block">Login</a> -->
                        </fieldset>
                    </form>
                  <center><b>Don'thave an account ?</b> <br></b><a href="signup.html">Register here</a></center><!--for centered text-->
                </div>
            </div>
        </div>
    </div>
</div>


</body>

</html>

<?php

include("../db_conection.php");

if(isset($_POST['login']))
{
    $user_email=$_POST['email'];
    $user_pass=$_POST['pass'];
    
   // $check_user="select * from users WHERE user_email='$user_email'AND user_pass='$user_pass'";
    $uid = "select user_id from users WHERE username='$user_email' AND password='$user_pass'";
	console.log('hello');
    $run=mysqli_query($dbcon,$uid);
    if(mysqli_num_rows($run))
    {
		
        echo "<script>window.open('/login/login/gg.php','_self')</script>";	
        $_SESSION['login']=true;
        $_SESSION['username']=$user_email;//here session is used and value of $user_email store in $_SESSION.

    }
    else
    {
        echo "<div> AA</div>";
    }
}
?>