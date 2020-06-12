function login(){
    var user= document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    console.log(user);
    console.log(pass);
    var url="http://localhost:8080";
    var loginurl=url+'/login?username='+user+'&password='+pass;
    var loginres="";
    var promise=fetch(loginurl)
        
    promise.then(response=>{
        if (response.status == 200) {
         var promiseOfData = response.json();
         promiseOfData.then(stringData => {
             loginres = stringData;
              console.log(loginres);
              if(loginres.access==="true")
              {
                  var htmlelement=document.getElementById("contain");
                
                  location.href="index.html";
              }
              else{
                var htmlelement=document.getElementById("heading");
                htmlelement.innerHTML=`Invalid username or password`;
                
              }
            
         });
        }
            
         });

}
function register(){
    var username=document.getElementById("newuser").value;
    var password=document.getElementById("newpass").value;
    var urlreg="http://localhost:8080/register?username="+username+"&password="+password;
    var promise=fetch(urlreg);
    var data=[];
    promise.then(response=>{
        if (response.status == 200) {
         var promiseOfData = response.json();
         promiseOfData.then(stringData => {
             data = stringData;
              console.log(data);
              if(data.access==="true")
              location.href="login.html";
              else
              {
                document.getElementById("userhead").innerHTML="Username already exists";
              }

              
        });
    }
    } );

}


//rgistration form

function newuser(){
    var form=document.getElementById("form");
    var registerform=`<div>
    <div><h3 id="userhead" style="font-weight: bold; text-align: center; margin-top:0px;">Register</h3></div>
    <div>
    <label style="font-weight:bold;margin-bottom:10px;">Enter your name</label>
<br><br>
    <input style="border:1px solid #888;border-radius: 5px;height:30px;width:100%;background-color:#fff" type="text" placeholder="Name">

<br><br>
    </div>
    <div>
    <label style="font-weight:bold;margin-bottom:10px;">Enter username</label>
<br><br>
    <input style="border:1px solid #888;border-radius: 5px;height:30px;width:100%;background-color:#fff" type="text" placeholder="username" id="newuser">
<br>
<br>
    </div>
    <div>
    <label style="font-weight:bold;margin-bottom:10px;">Enter password</label><br>
        <br>
    <input style="border:1px solid #888;border-radius: 5px;height:30px;width:100%;background-color:#fff" type="password" placeholder="Password" id="newpass">
    </div>
<br>
    <div><button style="background-color:teal;color:floralwhite; height: 40px; width:100%" onclick="register()">Register</button></div>
                </div>`
                form.innerHTML=registerform;
}