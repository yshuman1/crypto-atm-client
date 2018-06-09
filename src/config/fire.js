import firebase from "firebase/app";
import "firebase/auth";
const apiKeyFirebase = process.env.API_KEY;
const config = {
  apiKey: `${apiKeyFirebase}`,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJ_ID,
  storageBucket: process.env.STOR_BUCKET,
  messagingSenderId: process.env.MSG_SENDER_ID
};

const fire = firebase.initializeApp(config);
export default fire;
