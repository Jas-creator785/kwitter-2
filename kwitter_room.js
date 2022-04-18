const firebaseConfig = {
      apiKey: "AIzaSyC2_lXg28IzL814ghjCMZlz6fUgmNslEnY",
      authDomain: "kwitter-web-app-e9e4d.firebaseapp.com",
      databaseURL: "https://kwitter-web-app-e9e4d-default-rtdb.firebaseio.com",
      projectId: "kwitter-web-app-e9e4d",
      storageBucket: "kwitter-web-app-e9e4d.appspot.com",
      messagingSenderId: "230590392214",
      appId: "1:230590392214:web:d9215489ccc49902585fb7",
      measurementId: "G-19PNT017FR"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
uname=localStorage.getItem("user_name_key");
document.getElementById("uname").innerHTML=uname;

function add_room(){
room_name=document.getElementById("room_name").value;
      localStorage.setItem("room_name_key",room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      });
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name_key");
      localStorage.removeItem("user_name_key");
      window.location="index.html";
}

function getData()
 {
       firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id='"+Room_names+"'onclick='redirect_to_room(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect_to_room(name){
      console.log(name);
      localStorage.setItem("room_name_key",name);
      window.location="kwitter_page.html";
}