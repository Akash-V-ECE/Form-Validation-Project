const form=document.querySelector("#form")
const username=document.querySelector("#username")
const password=document.querySelector("#password")
const email=document.querySelector("#email")
const cpassword=document.querySelector("#cpassword")



form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})
function validateInputs(){
    const userval=username.value.trim()
    const emailval=email.value.trim()
    const passwordval=password.value.trim()
    const cpasswordval=cpassword.value.trim()
    let succ=true
//Username Validation
    if(userval==''){
        succ=false
        setError(username,'Username is required')
        
    }
    else
        setSuccess(username)
//Email validation
    if(emailval==''){
        succ=false
        setError(email,'Email is required')  
    }
    else if(!validateEmail(emailval)){
        succ=false
        setError(email,'Please enter a valid email')
    }
    else
        setSuccess(email)
//Password validation
    if(passwordval==''){
        succ=false
        setError(password,'Password is required')
        
    }
    else if(passwordval.length<8){
        succ=false
        setError(password,'Password must contain atleast 8 characters')
    }
    else
        setSuccess(password)
//confirm password validation
    if(cpasswordval==''){
        succ=false
        setError(cpassword,'Confirm Password is required')
    }
    else if(cpasswordval!=passwordval){
        succ=false
        setError(cpassword,'Password does not match')
    }
    else
        setSuccess(cpassword)
    return succ;
}
function setError(elm,mes){
    const ipgroup=elm.parentElement;
    const erelement= ipgroup.querySelector('.error')
    erelement.innerText=mes;
    ipgroup.classList.add('error')
    ipgroup.classList.remove('success')
}

function setSuccess(elm){
    const ipgroup=elm.parentElement;
    const erelement= ipgroup.querySelector('.error')
    erelement.innerText='';
    ipgroup.classList.add('success')
    ipgroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };