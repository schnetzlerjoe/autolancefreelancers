const admin = require('firebase-admin');
const serviceAccount = require('./credentials.json');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
 } else {
    admin.app();
 }

const db = admin.firestore();

function getFreelancersMatchDocs(uid) {
    return new Promise((resolve, reject) => {
        db.collection("Freelancers_Dev").doc(uid).get().then((doc) => {
            resolve(doc.data()['Matches']);
        })
    })
}

function getAllFreelancersMatchDocs(uid) {
    return new Promise((resolve, reject) => {
        getFreelancersMatchDocs(uid).then((matches) => {
            var data = [];
            matches.forEach((match) => {
                match.get().then((newDoc) => {
                    data.push(newDoc.data())
                }).then(() => {
                    resolve(data);
                })
            });
        })
    })
}

module.exports = (req, res) => {
    getAllFreelancersMatchDocs(req.query.uid).then((data) => {
        res.status(200).json(data);
    })
  };