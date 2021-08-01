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

function putFreelancers(freelancer, body) {
    return new Promise((resolve, reject) => {
        var ref = db.collection("Freelancers_Dev").doc(freelancer);
        var data = {};

        if(typeof(body.description) != "undefined") {data["Description"] = body.description};
        if(typeof(body.main_skill) != "undefined") {data["Main Skill"] = body.main_skill};
        if(typeof(body.name) != "undefined") {data["Name"] = body.name};
        if(typeof(body.rate) != "undefined") {data["Rate"] = body.rate};
        if(typeof(body.skills) != "undefined") {data["Skills"] = body.skills};
        if(typeof(body.links) != "undefined") {data["Links"] = body.links};
        if(typeof(body.industries) != "undefined") {data["Industries"] = body.industries};
        if(typeof(body.logo) != "undefined") {data["Logo"] = body.logo};
        if(typeof(body.accepting) != "undefined") {data["Accepting_Projects"] = body.accepting};
        if(typeof(body.subscription) != "undefined") {data["Subscription"] = body.subscription};
        if(typeof(body.availability) != "undefined") {data["Availability"] = body.availability};
        if(typeof(body.deliverables) != "undefined") {data["Deliverables"] = body.deliverables};
        if(typeof(body.fixedDeliverable) != "undefined") {data["Fixed_Deliverable"] = body.fixedDeliverable};

        ref.update(data).then((ret) => {
            resolve({ret: ret, data: data})
        })
    })
}

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function put(req) {
  try {
      const user = await firebase.auth().verifyIdToken(req.headers["authorization"]);
      var data = await putFreelancers(user.uid, req.body);
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