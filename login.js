let loginInfo=JSON.parse(localStorage.getItem("signupin"));

document.querySelector("form").addEventListener("submit",loginFun);

function loginFun(event){
    event.preventDefault();
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value

   loginInfo.forEach(function(el){
        if(el.email==email){
            if(el.pass==password){
                alert("Regitration Successful")

                window.location.href="./home.html"
                
            
            }
        }else if(el.email!==email){alert("Regitration Failed , Incorrect Email or Password")};

        
    })
    


}
