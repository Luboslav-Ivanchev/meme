function register(event) {

    event.preventDefault();
    history.pushState('registered','','/registered');


    let allInputs=document.querySelectorAll('input');
    let i=Array.from(allInputs);
    let inputUserName=i[0];
    let inputEmail=i[1];
    let inputPassword=i[2];
    let inputRepeatPassword=i[3];
    let inputFemale=i[4];
    let inputMale=i[5];

    let btnFemale=document.getElementById('female');
    let btnMale=document.getElementById('male');


    let pattern=/[a-z]+@[a-z]+[a-z]/;

    if(btnFemale.checked===true){

        if(pattern.test(inputEmail.value)){

            let promiseFemale=fetch(`https://register-1edf7-default-rtdb.firebaseio.com/register.json`,{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({userName:inputUserName.value,email:inputEmail.value,password:inputPassword.value,
                    repeatPassword:inputRepeatPassword.value,female:'Female'
                })
            });

        }else if(inputUserName.value==='' &&inputEmail.value==='' &&inputPassword.value==='' &&inputRepeatPassword.value==='' && inputFemale.value===''){

            inputUserName.style.border='solid red 3px';
            inputPassword.style.border='solid red 3px';
            inputRepeatPassword.style.border='solid red 3px';
            inputFemale.style.border='solid red 3px';
            inputMale.style.border='solid red 3px';

        }

    }else if(btnMale.checked===true){

         if(pattern.test(inputEmail.value)){
             let promiseMale=fetch(`https://register-1edf7-default-rtdb.firebaseio.com/register.json`,{
                 method:'POST',
                 headers:{'Content-type':'application/json'},
                 body:JSON.stringify({userName:inputUserName.value,email:inputEmail.value,password:inputPassword.value,
                     repeatPassword:inputRepeatPassword.value,male:'Male'
                 })
             });
         }else if(inputUserName.value==='' &&inputEmail.value==='' &&inputPassword.value==='' &&inputRepeatPassword.value==='' && inputFemale.value===''){

             inputUserName.style.border='solid red 3px';
             inputPassword.style.border='solid red 3px';
             inputRepeatPassword.style.border='solid red 3px';
             inputFemale.style.border='solid red 3px';
             inputMale.style.border='solid red 3px';

         }

     }

    inputUserName.value='';
    inputEmail.value='';
    inputPassword.value='';
    inputRepeatPassword.value='';
    inputFemale.value='';
    inputMale.value='';

}