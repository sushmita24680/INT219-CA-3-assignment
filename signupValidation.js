function validate()
{
	let uName = document.getElementById('username').value;
	let eMail = document.getElementById('email').value;
	let passWord = document.getElementById('password').value;

	if(uName==="" || eMail==="" || passWord==="")
	{
		alert('Please fill all the fields');
		return false;
	}

	const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if (!emailRegex.test(eMail)) {
		alert('Email is not correct');
		return false;
	}

	if(passWord.match(/[a-z]/g) && passWord.match(/[A-Z]/g) && passWord.match(/[0-9]/g) && passWord.match(/[^a-zA-Z\d]/g) && passWord.length >= 8)
	{document.querySelector('.wrapper').style.display = 'none';
	document.querySelector('#cover').style.display = 'none';
		alert('You have signed up successfully');
		return true;
	}
	else
	{
		if(passWord.length<8)
		{
			alert('Password length must be minimum of 8 characters');
			return false;
		}
		else
		{
			alert('Password format is not correct');
			return false;
		}
	}
}