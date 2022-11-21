const form =document.getElementById('form');
const nome=document.getElementById('nome');
const sobrenome =document.getElementById('sobrenome');
const email =document.getElementById('email');
const error = document.querySelector('.error');
const ul =document.querySelector('ul')
form.adEdventListener(submit,()=>{

    e.preventDefault()
    checkInputs()
}
)
function checkInputs()
{
    var nomeValue =nomeValue.trim()
    var sobrenomeValue =sobrenomeValue.trim()
    var emailValue =emailValue.trim()
   
    if(nomeValue ===''){
        errorValidation(nome, 'preencha esse campo')
    }else{
        success.Validation(nome)
    }
    if(sobrenomeValue==='') {
    errorValidation(sobrenome, 'preencha esse campo')

    } else{
success.Validation(sobrenome)
    }
   
    if(emailValue ===''){
        errorValidation(email, 'preencha esse campo')
    }else
    {
        success.Validation(email)
    
}
function ValidarEmail(){
    var email=document.querySelector('#email');
    var error = document.querySelector('#error');
    if(!email.checkValidity()){
        error.innerHTML ="email invalido";

    }
}
function redefinirMsg(){
    var error = document.querySelector('#error-email');
    if(error.innerHTML=="email invalido"){
        error.innerHTML="";
    }
}
function errorValidation(input, message){
    const formControl = input.parentElement;
    const small =formControl.querySelector('small')
    small.innerText= message
    formControl.className= 'form-control success'
}

function errorValidation(input, message){
  const formControl = input.parentElement;
  const small =formControl.querySelector('small')
  small.innerText= message
  formControl.className= 'form-control error'
}
}
function getApiGitHub(){
    fetch('https://api.github.com/users/diengadama/repos')
    .then(async assync => {
            if (!res.ok) {
                throw new Error(res.status);

            }
            var data = await res.json();
            data.map(item => {
                let li = document.createElement('li');
                li.innerHTML =
                    <><Strong>${item.name.toUpperCase()}</Strong>
                        <span>Url: ${item.url}</span>
                        <span>Data criacao:
                            ${Intl.DateTimeFormat('pt-Br')
                                .format(new DataTransfer(item.created - at))}
                        </span></>;
                ul.appendChild(li);
            });
        })
    .catch(e =>console.log(e))
}
getApiGitHub()

        
