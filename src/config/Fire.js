import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCN7IvHCDXpFOUVeGnehzuc4ktdEfurT-M",
  authDomain: "myfirst-43b8c.firebaseapp.com",
  databaseURL: "https://myfirst-43b8c.firebaseio.com",
  projectId: "myfirst-43b8c",
  storageBucket: "myfirst-43b8c.appspot.com",
  messagingSenderId: "513496028130",
  appId: "1:513496028130:web:52d01f56a430a26c085fbb"
};

const fire = firebase.initializeApp(config);

export default fire;
