import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

var config = {
    apiKey: "AIzaSyCXhiowgGPqW9RUONqOPfXCpejlhfuWBXg",
    authDomain: "mobile-f1765.firebaseapp.com",
    databaseURL: "https://mobile-f1765.firebaseio.com",
    projectId: "mobile-f1765",
    storageBucket: "mobile-f1765.appspot.com",
    messagingSenderId: "884944881484",
    appId: "1:884944881484:web:d7da19bc283059d63e71e9",
    measurementId: "G-46K04B74WJ"
  };

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout(){
        return this.auth.signOut()
    }

     register(username, email, password) {
        return  this.auth.createUserWithEmailAndPassword(email, password)
        
    }
}

export default new Firebase()