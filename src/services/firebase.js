const config = {
    apiKey: 'AIzaSyA7gNktUQMDNmc5ixb2y5B68U8JiJPOesk',
    authDomain: 'shitty-chit-chat.firebaseapp.com',
    databaseURL: 'https://shitty-chit-chat.firebaseio.com',
    projectId: 'shitty-chit-chat',
    storageBucket: 'shitty-chit-chat.appspot.com',
    messagingSenderId: '782820132732',
    appId: '1:782820132732:web:28ba7a981cb990af'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const roomsRef = db.ref('shitty-chit-chat');