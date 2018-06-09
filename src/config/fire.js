import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAlEcysmtEdU9xV3NFoqRD9jF7BFty1Fbo",
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJ_ID,
  storageBucket: process.env.STOR_BUCKET,
  messagingSenderId: process.env.MSG_SENDER_ID
};

const fire = firebase.initializeApp(config);
export default fire;
