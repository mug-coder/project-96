  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBAcIg5n0_kwr-38yirxNoHmzoRiP64XC0",
    authDomain: "kwitter-app-project-faa6e.firebaseapp.com",
    projectId: "kwitter-app-project-faa6e",
    storageBucket: "kwitter-app-project-faa6e.appspot.com",
    messagingSenderId: "312932985781",
    appId: "1:312932985781:web:af0ca287dc1768d0f3c7fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    
    function addroom(){
       room_name=document.getElementById("room_name").value;
       firebaseConfig.database().ref("/").child(room_name).update({
         purpose:"adding room name"
       })
       localStorage.setItem("room_name",room_name);
       window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  firebase_message_id=childKey;
  message_data = childData;
 //Start code
 console.log(firebase_message_id);
 console.log(message_data);
 name=message_data['name'];
 message=message_data['message'];
 like=message_data['like'];
 name_with_tag="<h4>"+name+"</h4>";
 message_with_tag="<h4>"+name+"</h4>";
 console.log("room name-"+Room_names);
 row="<div class='room_name' id="+ Room_names +" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML=row;
 //End code
 });});}
getData();

function redirecttoroomname(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

