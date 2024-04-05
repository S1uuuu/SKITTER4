var firebaseConfig = {
    apiKey: "AIzaSyCbI7tXzDUiuoKqr5m7Nee36Nkq9iymMBM",
    authDomain: "skitter-2ec9e.firebaseapp.com",
    databaseURL: "https://skitter-2ec9e-default-rtdb.firebaseio.com",
    projectId: "skitter-2ec9e",
    storageBucket: "skitter-2ec9e.appspot.com",
    messagingSenderId: "634638465489",
    appId: "1:634638465489:web:e842275a6eadf5fb0588f0",
    measurementId: "G-ZV8806VS43"
  };
  
  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Bienvenido "+ user_name+":)";
function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "index3.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="index3.html";
  } 