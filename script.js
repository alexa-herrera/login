function validateForm(){
   
    var name = document.getElementbyId("name").value;
    var password= document.getElementbyId("password").value;
     if(name=="" && password=="" ) {
      //alert("Usuario y contraseña validos")
      window.open('sanvalentinesDay.html');
     } else {
            alert("intenta de nuevo");
        }

}