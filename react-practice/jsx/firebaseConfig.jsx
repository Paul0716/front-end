import * as firebase from 'firebase';

const isDev = true;
if(isDev){
    var config = {
        apiKey: "AIzaSyAUBGgl0kS8zcYbh8Iqe5w4XMLtjaf5rhw",
        authDomain: "costco-help-buy-dev.firebaseapp.com",
        databaseURL: "https://costco-help-buy-dev.firebaseio.com",
        storageBucket: "costco-help-buy-dev.appspot.com",
    };
} else {

}

// const fb = firebase.initializeApp(config);

export default config;