import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_8fFnVxtmYM-IcNMeX5l4PbRqG50OVRo",
    authDomain: "crwn-db-3215c.firebaseapp.com",
    databaseURL: "https://crwn-db-3215c.firebaseio.com",
    projectId: "crwn-db-3215c",
    storageBucket: "crwn-db-3215c.appspot.com",
    messagingSenderId: "534799069607",
    appId: "1:534799069607:web:158ba84da46d9937468682",
    measurementId: "G-GG27N7F052"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    
    if(!snapshot.exists){
        const { displayName, email }  = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error){
            console.log('Error createing user', error.message);
        }
    }
    return userRef;
  }

  export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj)
    });

    return await batch.commit();

  };

  export const convertCollectionsSnapShotToMap = collections => {
      const transformedCollection = collections.docs.map(doc => {
          const {title,items} = doc.data();
          return {
              routeName:encodeURI(title.toLowerCase()),
              id:doc.id,
              title,
              items
          };
      });
      return transformedCollection.reduce((accumulator,collection) =>  {
          accumulator[collection.title.toLowerCase()] = collection;
          return accumulator;
      }, {})
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;