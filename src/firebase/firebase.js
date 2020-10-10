import * as firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9iA7b1tXRzqtUHDMFOysSdpOH2rp58pc",
  authDomain: "my-react-chatapp.firebaseapp.com",
  databaseURL: "https://my-react-chatapp.firebaseio.com",
  projectId: "my-react-chatapp",
  storageBucket: "my-react-chatapp.appspot.com",
  messagingSenderId: "800213710850",
  appId: "1:800213710850:web:787c78fa16e0d463268f1b",
  measurementId: "G-TPTG70FEXF"
};

firebase.initializeApp(firebaseConfig)

export default firebase