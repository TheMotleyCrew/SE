flag = 0

function checkUser()
{
	user=document.getElementById('reguname').value;
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if(this.readyState==4 && this.status==200)
		{
			if(this.responseText.localeCompare('False')==0)
			{
				document.getElementById('errorbox').innerHTML='<center>Username Already Taken<center>';
				document.getElementById('errorbox').style='font-size: 25px; color: white; background-color: red';
				flag = 0
			}
			else
			{	
				document.getElementById('errorbox').innerHTML='<center>Username Available<center>';
				document.getElementById('errorbox').style='font-size: 25px; color: black; background-color: #99ff99';
				flag = 1
			}
		}
	};
	xhr.open('POST','./Scripts/CheckUser.php',false);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send('user='+user);
}

function signIn()
{
	user=document.getElementById('loginuname').value;
	pass=document.getElementById('loginpass').value;
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if(this.readyState==4 && this.status==200)
		{
			if(this.responseText.localeCompare('False')==0)
			{
				document.getElementById('errorbox').innerHTML='<center>Wrong Username or Password<center>';
				document.getElementById('errorbox').style='font-size: 25px; color: white; background-color: red';
			}
			else if(this.responseText.localeCompare('user')==0)
			{	
				sessionStorage.setItem("username", user);
				sessionStorage.setItem("role", this.responseText);
				document.location.href = './UserHome.html';
			}
			else if(this.responseText.localeCompare('admin')==0)
			{	
				sessionStorage.setItem("username", user);
				sessionStorage.setItem("role", this.responseText);
				document.location.href = './AdminHome.html';
			}
			else if(this.responseText.localeCompare('retail')==0)
			{	
				sessionStorage.setItem("username", user);
				sessionStorage.setItem("role", this.responseText);
				document.location.href = './RetailHome.html';
			}
		}
	};
	xhr.open('POST','./Scripts/Login.php',true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send('user='+user+'&pass='+pass);
}

function signUp()
{
	if(flag==1)
	{	
		user=document.getElementById('reguname').value;
		pass=document.getElementById('regpass').value;
		name=document.getElementById('regname').value;
		role=document.getElementById('regrole').value;
		if(name.localeCompare('')==0 || name==null)
		{
			document.getElementById('errorbox').innerHTML='<center>Enter Name<center>';
			document.getElementById('errorbox').style='font-size: 25px; color: white; background-color: red';		
		}
		else
		{
			xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function()
			{
				if(this.readyState==4 && this.status==200)
				{
					if(this.responseText.localeCompare('False')==0)
					{
						document.getElementById('errorbox').innerHTML='<center>Error in Registration<center>';
						document.getElementById('errorbox').style='font-size: 25px; color: white; background-color: red';
					}
					else if(this.responseText.localeCompare('True')==0 && role.localeCompare('retail')==0)
					{	
						document.getElementById('errorbox').innerHTML='<center>Waiting for Admin approval<center>';
						document.getElementById('errorbox').style='font-size: 25px; color: black; background-color: #99ff99';
					}
					else if(this.responseText.localeCompare('True')==0 && role.localeCompare('user')==0)
					{	
						sessionStorage.setItem("username", user);
						sessionStorage.setItem("role", role);
						document.location.href = './UserHome.html';
					}
				}
			};
			xhr.open('POST','./Scripts/Register.php',true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send('user='+user+'&pass='+pass+'&name='+name+'&role='+role);
		}
	}
}