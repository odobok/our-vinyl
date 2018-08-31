import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
      apiKey: "AIzaSyBa-Qo9jG04E781OtHg8tcwFHEoAbyxlJg",
      authDomain: "vinyl-collection-17c3c.firebaseapp.com",
      databaseURL: "https://vinyl-collection-17c3c.firebaseio.com",
      projectId: "vinyl-collection-17c3c",
      storageBucket: "vinyl-collection-17c3c.appspot.com",
      messagingSenderId: "133499986985"
    };

export default !firebase.apps.length
      ? firebase.initializeApp(config).firestore()
      : firebase.app().firestore();
