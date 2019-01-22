window.onload = function() { 

	$('input[type="checkbox"]').on('change', function() {
		$('input[type="checkbox"]').not(this).prop('checked', false);
	 });
	document.getElementById("nextstep").onclick = nextStep;
	document.querySelector(".laststep1").onclick = lastStep1;
	document.querySelector(".laststep2").onclick = lastStep1;
	document.querySelector(".nextstep1").onclick = nextStep1;
	document.querySelector(".nextstep2").onclick = nextStep1;
	document.querySelector("#cancel").onclick = Cancel;
	document.querySelector("#navbar").onclick = displaySignup;
	document.my_form.onsubmit = function()  { return checkForm(); }
	document.my_form.lastNameInput.onblur = lastNameValidate; 
	document.my_form.firstNameInput.onblur = firstNameValidate; 
	document.getElementById("emailInput").onblur = emailValidate; 
	document.getElementById("passwordInput").onblur = passwordValidate; 
	document.getElementById("informationInput").onblur = function() { informationValidate(); }; 
    
} 
function displaySignup(){
	document.my_form.style.display = "block"
}
function Cancel(){
	if(document.getElementById("teacherInput").checked){
		document.getElementById("privacy").style.display="none";
		document.getElementById("signup").style.display="block";
	 }
	 if(document.getElementById("studentInput").checked){
		document.getElementById("privacy").style.display="none";
		document.getElementById("signup").style.display="block";;
	 }
}

function lastStep1(){
	if(document.getElementById("teacherInput").checked){
		document.getElementById("option-teacher").style.display="none";
	document.getElementById("signup").style.display = "block"

	 }
	 if(document.getElementById("studentInput").checked){
		document.getElementById("option-student").style.display="none";
	document.getElementById("signup").style.display = "block"

	 }
}

function nextStep(){
 if(document.getElementById("teacherInput").checked){
	document.getElementById("option-teacher").style.display="block";
	document.getElementById("studentInput").checked = false;
 }
 if(document.getElementById("studentInput").checked){
	document.getElementById("option-student").style.display="block";
	document.getElementById("teacherInput").checked = false;
 }
 if(!document.getElementById("teacherInput").checked && !document.getElementById("studentInput").checked){
	 
	document.getElementById("signup").style.display = "block"
	document.getElementById("option-student").style.display="none";
	document.getElementById("option-teacher").style.display="none";
	alert("bạn chưa chọn type account")


	  

 }else{
	document.getElementById("signup").style.display = "none"

 }

}

function nextStep1(){
	if(document.getElementById("teacherInput").checked){
	   document.getElementById("privacy").style.display="block";
	   document.getElementById("option-teacher").style.display="none";
	}
	if(document.getElementById("studentInput").checked){
	   document.getElementById("option-student").style.display="none";
	   document.getElementById("privacy").style.display="block";
	}
	
   }

function firstNameValidate() { 

	var firstNameInput = document.getElementById("firstNameInput"); 

	if(firstNameInput.value == "") {  
		document.getElementById("firstNameInputStatus").style.display = "block";
		firstNameInput.parentNode.className = "form-group has-error has-feedback"; 
		document.getElementById("firstNameIcon").className = "glyphicon glyphicon-remove form-control-feedback"; 
		return false; 
	} else if(!validFirstname(firstNameInput.value)){
		document.getElementById("firstNameInputStatus").style.display = "block";
		document.getElementById("firstNameInputStatus").innerHTML="you haved entered more than 40 charcter"
		firstNameInput.parentNode.className = "form-group has-error has-feedback"; 
		document.getElementById("firstNameIcon").className = "glyphicon glyphicon-remove form-control-feedback"; 
		return false; 
	
	} else { 
			document.getElementById("firstNameInputStatus").style.display = "none"; 
			firstNameInput.parentNode.className = "form-group has-success has-feedback"; 
			document.getElementById("firstNameIcon").className = "glyphicon glyphicon-ok form-control-feedback"; 
			return true; 
		}
}

function lastNameValidate() { 

	var lastNameInput = document.getElementById("lastNameInput");

	if(lastNameInput.value == "") { 
		document.getElementById("lastNameInputStatus").style.display = "block"; 
		lastNameInput.parentNode.className = "form-group has-error has-feedback"; 
		document.getElementById("lastNameIcon").className = "glyphicon glyphicon-remove form-control-feedback";
		return false; 
	}else if(!validLastname(lastNameInput.value)){
		document.getElementById("lastNameInputStatus").style.display = "block"; 
		document.getElementById("lastNameInputStatus").innerHTML = "you haved entered more than 40 charcter"
		lastNameInput.parentNode.className = "form-group has-error has-feedback"; 
		document.getElementById("lastNameIcon").className = "glyphicon glyphicon-remove form-control-feedback";
		return false; 
	}else { 
		document.getElementById("lastNameInputStatus").style.display = "none"; 
		lastNameInput.parentNode.className = "form-group has-success has-feedback";
		document.getElementById("lastNameIcon").className = "glyphicon glyphicon-ok form-control-feedback";
		return true; 
	}
}

function emailValidate() { 

	if(emailInput.value == "") { 
		document.getElementById("emailInputStatus").innerHTML = "Email address is required!"; 
		document.getElementById("emailInputStatus").style.display = "block"; 
		emailInput.parentNode.className = "form-group has-error has-feedback"; 
		document.getElementById("emailIcon").className = "glyphicon glyphicon-remove form-control-feedback";
		return false; 
	} else if(!validEmailAddress(emailInput.value)) { 
		document.getElementById("emailInputStatus").innerHTML = "Incorrect email address format!"; 
		document.getElementById("emailInputStatus").style.display = "block"; 
		emailInput.parentNode.className = "form-group has-warning has-feedback";
		document.getElementById("emailIcon").className = "glyphicon glyphicon-warning-sign form-control-feedback";
		return false; 
	} else { 
		document.getElementById("emailInputStatus").style.display = "none"; 
		emailInput.parentNode.className = "form-group has-success has-feedback";
		document.getElementById("emailIcon").className = "glyphicon glyphicon-ok form-control-feedback";
		return true; 
	}
}

function passwordValidate() { 

	if(passwordInput.value == "") { 
		document.getElementById("passwordInputStatus").innerHTML = "password address is required!"; 
		document.getElementById("passwordInputStatus").style.display = "block"; 
		passwordInput.parentNode.className = "form-group has-error has-feedback"; 
		document.getElementById("passwordIcon").className = "glyphicon glyphicon-remove form-control-feedback";
		return false; 
	} else if(!validpasswordAddress(passwordInput.value)) { 
		document.getElementById("passwordInputStatus").innerHTML = "Incorrect password address format!"; 
		document.getElementById("passwordInputStatus").style.display = "block"; 
		passwordInput.parentNode.className = "form-group has-warning has-feedback";
		document.getElementById("passwordIcon").className = "glyphicon glyphicon-warning-sign form-control-feedback";
		return false; 
	} else { 
		document.getElementById("passwordInputStatus").style.display = "none"; 
		passwordInput.parentNode.className = "form-group has-success has-feedback";
		document.getElementById("passwordIcon").className = "glyphicon glyphicon-ok form-control-feedback";
		return true; 
	}
}


function checkForm() { 

	var valid = true; 
 
	var emailInput = document.getElementById("emailInput"); 
	var passwordInput = document.getElementById("passwordInput"); 

	if(!firstNameValidate()) valid = false;  
	if(!lastNameValidate()) valid = false; 
	if(!emailValidate()) valid = false; 
	if(!passwordValidate()) valid = false; 


	//alert(valid); 
	return valid; 
}

function validEmailAddress(email) { 
	
	// this regular expression could be better 
	var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
	return pattern.test(email); 
}

function validpasswordAddress(password){
	var pattern = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/
	return pattern.test(password); 
  
}
function validFirstname(firstname){
	var pattern = /^(?=.{0,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/
	return pattern.test(firstname); 

}

function validLastname(lastname){
	var pattern = /^(?=.{0,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/
	return pattern.test(lastname); 

}

