function login(){
    var email=document.getElementById('email').value;
    var pass=document.getElementById('pass').value;
    
    if(email=='vaibhav.r@olaorg.com' && pass=='7040')
    {
        location.assign('new.html');
    }else{
        window.alert('Please Enter Valid Email and pass');
        document.getElementById('email').value='';
        document.getElementById('pass').value='';
    }

}


function reset(){  
    document.getElementById("myForm").reset();  
  } 
  
  











