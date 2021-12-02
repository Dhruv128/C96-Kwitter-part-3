//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCYXE897whI1VLLi7fkv30xOmEpOy-0G-g",
      authDomain: "kwitter-51ce7.firebaseapp.com",
      databaseURL: "https://kwitter-51ce7-default-rtdb.firebaseio.com",
      projectId: "kwitter-51ce7",
      storageBucket: "kwitter-51ce7.appspot.com",
      messagingSenderId: "421041234352",
      appId: "1:421041234352:web:bbb16109d3be3cc5f87675"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  });

}
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}