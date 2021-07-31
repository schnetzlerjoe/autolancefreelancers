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

function getFreelancersMatchDocs(uid) {
    return new Promise((resolve, reject) => {
        db.collection("Freelancers_Dev").doc(uid).get().then((doc) => {
            resolve(doc.data()['Matches']);
        })
    })
}

function getCompanyInfoFromReference(reference) {
    return new Promise((resolve, reject) => {
        reference.get().then((doc) => {
            resolve(doc.data());
        })
    })
}

async function getAllFreelancersMatchDocs(uid) {
    return new Promise((resolve, reject) => {
        getFreelancersMatchDocs(uid).then((matches) => {
            var data = [];
            var rawData = [];
            matches.forEach((match) => {
                match.get().then((newDoc) => {
                    rawData = newDoc.data()
                    getCompanyInfoFromReference(rawData["Company"]).then((comp) => {
                    })
                }).then(() => {
                    data.push(rawData)
                }).then(() => {
                    resolve(data);
                })
            });
        })
    })
}

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get(req) {
  try {
      const user = await firebase.auth().verifyIdToken(req.headers["authorization"])
      var data = await getAllFreelancersMatchDocs(user.uid);
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