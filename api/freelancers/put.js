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

function putFreelancers(freelancer, body) {
    return new Promise((resolve, reject) => {
        var ref = db.collection("Freelancers_Dev").doc(freelancer);
        var data = {};

        if(body.description) {data["Description"] = body.description};
        if(body.main_skill) {data["Main Skill"] = body.main_skill};
        if(body.name) {data["Name"] = body.name};
        if(body.rate) {data["Rate"] = body.rate};
        if(body.skills) {data["Skills"] = body.skills};
        if(body.links) {data["Links"] = body.links};
        if(body.industries) {data["Industries"] = body.industries};

        ref.update(data).then((ret) => {
            resolve({ret: ret, data: data})
        })
    })
}

module.exports = async (req, res) => {
    const user = await admin.auth().verifyIdToken(req.headers["authorization"]);
    const { body } = req;
    putFreelancers(user.uid, body).then((data) => {
        res.status(200).json(data);
    })
};