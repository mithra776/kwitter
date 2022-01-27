var firebaseConfig = {
      apiKey: "AIzaSyDCIL4cBcyHN8wSZsGyA3RwvQTk7srih1o",
      authDomain: "kwitter-c8e32.firebaseapp.com",
      databaseURL: "https://kwitter-c8e32-default-rtdb.firebaseio.com",
      projectId: "kwitter-c8e32",
      storageBucket: "kwitter-c8e32.appspot.com",
      messagingSenderId: "997910517099",
      appId: "1:997910517099:web:8dc7737ecbcb15cfd0682e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

document.getElementById("user_name").innerHTML= "Welcome" + " " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room names =" + Room_names);
       row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' > " + Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
