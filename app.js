(function() {
 var exclamationInput;
var adjectiveInput;
var adverbInput;
var nounInput1;
var nounInput2;
var database;
//Inicializar Firebase
  const config = {
	 apiKey: "AIzaSyANEXY1MYviwc_9ewgfWf9EQliJ8ZOAoWE",
    authDomain: "prueba-web-7c2ec.firebaseapp.com",
    databaseURL: "https://prueba-web-7c2ec.firebaseio.com",
    projectId: "prueba-web-7c2ec",
    storageBucket: "prueba-web-7c2ec.appspot.com",
    messagingSenderId: "649855130818"
  };
  firebase.initializeApp(config);
    database=firebase.database();
    
  var params = getURLParams();
  if (params.id) {
    loadOne(params.id);
  }
    
// Esta funcion se usa para recibir los datos
function sendFirebase() {
  // Make an object with data in it
  var data = {
    exclamation: exclamationInput.value(),
    adjective: adjectiveInput.value(),
    adverb: adverbInput.value(),
    noun1: nounInput1.value(),
    noun2: nounInput2.value()
  }    
    
    
     
 var ref  = database.ref('reportes');
 ref.on('value',gotData,errData);
}
 

 
function gotData(){
    
console.log(data);    
}
    
function errData(){
    
console.log('Error!') ;
    console.log('err');
    
}
        
    
 var params = getURLParams();
  if (params.id) {
    loadOne(params.id);
  }    
    

  //Obtener elementos
  const preObject = document.getElementById('objeto');

  //Crear Referencias
  const dbRefObject = firebase.database().ref().child('objeto');

  // Sincronizar cambios objeto
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(),null, 3);
  });


} ());













