<?php
    include("../db_conection.php");
	extract($_POST);
	$st =1;
	$check_email_query="select * from user WHERE uname='$uname'";
    $run_query=mysqli_query($dbcon,$check_email_query);

    if(mysqli_num_rows($run_query)>0)
    {
		echo "Email-id already registered";
}
	else{
		echo "";
		//echo("<script>location.href = '../home.php';</script>");
	}
	

	?>