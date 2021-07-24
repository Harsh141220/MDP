function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="Harsh" && password=="Harsh"){
        window.open('lab.html')
        return false;
    } 
    else{
        alert("login failed")
    }
}