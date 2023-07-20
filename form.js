function formValidation()
{
var uname = document.registration.username;
var unamee = document.registration.usernamee;
var passid = document.registration.passid;
var uadd = document.registration.address;
var uemail = document.registration.email;if(allLetter(uname))
{
if(allLetters(unamee))
{
if(passid_validation(passid,7,12))
{
if(alphanumeric(uadd))
{ 
if(ValidateEmail(uemail))
{
}  
}
}
}
}
return false;

} 

function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function allLetters(unamee)
{ 
var letterss = /^[A-Za-z]+$/;
if(unamee.value.match(letterss))
{
return true;
}
else
{
alert('User last name must have alphabet characters only');
unamee.focus();
return false;
}
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("tel should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}


function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}

{
 alert('Form Succesfully Submitted');
 window.location.reload()
 return true;
 
}
}
