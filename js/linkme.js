function enviar () {
  var emailValue =document.getElementById('emailTxt').value;
  var areaValue =document.getElementById('areaTxt').value;
  console.log(areaValue);
  
  var timestamp = new Date().getTime();
  console.log(timestamp);
  
 // A variavel database vai receber as funçoes de acesso ao banco de dados
  var database = firebase.database();
  database.ref(timestamp).set({
    email: emailValue,
    mensagem: areaValue
  });

}
