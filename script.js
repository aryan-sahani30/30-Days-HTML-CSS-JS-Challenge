function validateInput(){
  let inpField =  document.getElementById("inpField");
  let inpValue = inpField.value.trim();
  //alert(inpValue);

  const errMsg = document.getElementById("errormsg");

  if(inpValue === ""){
    inpField.classList.add("shake");
    errMsg.style.visibility = "visible";
    setTimeout(function() {
      inpField.classList.remove("shake");
      errMsg.style.visibility="hidden";
    }, 500);
  }
  else{
    alert("Valid Input");
  }
}