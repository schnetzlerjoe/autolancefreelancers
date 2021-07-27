const admin = require('firebase-admin');
const serviceAccount = require('../../credentials.json');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
 } else {
    admin.app();
 }

const db = admin.firestore();

function getFreelancer(uid) {
    return new Promise((resolve, reject) => {
        db.collection("Freelancers_Dev").doc(uid).get().then((doc) => {
            resolve(doc.data());
        })
    })
}

module.exports = async (req, res) => {
    admin
    .auth()
    .verifyIdToken(req.headers["authorization"]).then((user) => {
        getFreelancer(user.uid).then((data) => {
            res.status(200).json(data);
            return data;
        })
    })
    .catch((error) => {
        res.status(401).json(error.message);
        return error
    });
  };