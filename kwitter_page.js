//YOUR FIREBASE LINKS
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

user_name= localStorage.getItem("user_name_key");
room_name= localStorage.getItem("room_name_key");
document.getElementById("room_name").innerHTML=" Welcome in room "+ room_name;
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
uname=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+ uname  +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+ "</h4>";
like_button="<button class='btn btn-success' id='"+firebase_message_id+"'  vaule='"+like+"' onclick='update_like(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span> </button>";
row= name_with_tag+message_with_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();


function logout(){
    localStorage.removeItem("room_name_key");
    localStorage.removeItem("user_name_key");
    window.location="index.html";
}

function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value=" ";
}

function update_like(message_id){
    console.log(message_id);
button_id=message_id;
 likes=document.getElementById(button_id).value;
updated_likes=Number(likes) + 1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
});
}