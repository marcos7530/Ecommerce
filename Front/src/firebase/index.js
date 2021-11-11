import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJLln-pqjNcSRzh4_ybKktiL1DNLd0F-o",
  authDomain: "ecommerce-e4e6c.firebaseapp.com",
  projectId: "ecommerce-e4e6c",
  storageBucket: "ecommerce-e4e6c.appspot.com",
  messagingSenderId: "1040611516041",
  appId: "1:1040611516041:web:21b3ff13346db595d87058",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export const uploadImage = (file) => {
  return new Promise((resolve, eject) => {
    const uploadProcess = storage
      .ref(`images/${file.name}-${file.lastModified}`)
      .put(file);

    uploadProcess.on(
      "state_changed",
      (snapshot) => console.log("la imagen se esta subiendo", snapshot),
      eject,
      () => {
        console.log("enter", file);
        storage
          .ref("images")
          .child(`${file.name}-${file.lastModified}`)
          .getDownloadURL()
          .then(resolve);
      }
    );
  });
};
