const admin = require('firebase-admin');
const serviceAccount = require('C:/Users/bigkn/OneDrive/Documents/autolancefreelancers-1/credentials.json');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
 } else {
    admin.app();
 }

const db = admin.firestore();

function putFreelancers(freelancer, description = null, main_skill = null, name = null, rate = null, skills = null, links = null, industries = null) {
    return new Promise((resolve, reject) => {
        var ref = db.collection.doc(freelancer);
        var data = {};

        console.log(skills)

        if(description != null) {data["description"] = description};
        if(main_skill != null) {data["main_skill"] = main_skill};
        if(name != null) {data["name"] = name};
        if(rate != null) {data["rate"] = rate};
        if(skills != null) {data["skills"] = skills};
        if(links != null) {data["links"] = links};
        if(industries != null) {data["industries"] = industries};

        ref.update(data).then((ret) => {
            resolve({ret: ret, data: data})
        })
    })
}

module.exports = (req, res) => {
    admin.auth().verifyIdToken(req.get('Authorization').split(' ')[1]).then((token) => {
        putFreelancers(token.uid, req.body.description, req.body.main_skill, req.body.name, req.body.rate, req.body.skills).then((data) => {
            res.status(200).json(data);
        })
    })
};