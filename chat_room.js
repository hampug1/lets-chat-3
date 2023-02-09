var firebaseConfig = {
    apiKey: "AIzaSyDNFDE3DuEhNSFv_5UJpX6wxMqsWkSLsiY",
    authDomain: "kwitter-2345b.firebaseapp.com",
    databaseURL: "https://kwitter-2345b-default-rtdb.firebaseio.com",
    projectId: "kwitter-2345b",
    storageBucket: "kwitter-2345b.appspot.com",
    messagingSenderId: "662071087725",
    appId: "1:662071087725:web:f07f0bd7de93ee42276564"
  };   
firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  
  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
  
  }
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;

  console.log("Room Name - " + Room_names);

  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

  document.getElementById("output").innerHTML += row;
 });});}
getData();

function redirectToRoomName(name){
console.log("we are redirecting to" + name);

localStorage.setItem("room_name", name);

window.location = "chat_page.html";
}
