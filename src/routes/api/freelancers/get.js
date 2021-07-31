import firebase from 'firebase-admin';
import serviceAccount from '/credentials.json';

if (!firebase.apps.length) {
    firebase.initializeApp({
        credential: firebase.credential.cert(serviceAccount)
      });
 } else {
    firebase.app();
 }

const db = firebase.firestore();

function getFreelancer(uid) {
    return new Promise((resolve, reject) => {
        db.collection("Freelancers_Dev").doc(uid).get().then((doc) => {
            resolve(doc.data());
        })
    })
}

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get(req) {
  try {
      const user = await firebase.auth().verifyIdToken(req.headers["authorization"])
      var data = await getFreelancer(user.uid);
      return {
        body: data,
        status: 200
      }
    } catch (error) {
      console.log(error)
      return {
            body: error,
            status: 401
          }
    }
  }