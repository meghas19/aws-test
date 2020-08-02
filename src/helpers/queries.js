import firebase from './firebase';
import { auth } from 'firebase';
const db = firebase.firestore();

export const applicationForm1Query = async (
    father_fname,
    father_lname,
    mother_fname,
    mother_lname,
    gender,
    dob,
    address,
    category,
    State,
    district,
    pincode
) => {
    try {
        var data = db.collection('Candidate_Profile').doc(firebase.auth().currentUser.uid);
        data.set({
            father_fname: father_fname,
            father_lname: father_lname,
            mother_fname: mother_fname,
            mother_lname: mother_lname,
            gender: gender,
            dob: dob,
            address: address,
            category: category,
            State: State,
            district: district,
            pincode: pincode,
        });

        window.location.reload();
    } catch (error) {
        console.log('here');
        console.log(error);
        alert(error.message);
    }
};

// Function to be written in file:
// import {applicationForm1Query} from ''//path to queries file
// applicationForm1 = () => {
//     applicationForm1Query(this.state.father_fname,
//         this.state.father_lname,
//         this.state.mother_fname,
//         this.state.mother_lname,
//         this.state.gender,
//         this.state.dob,
//         this.state.address,
//         this.state.category,
//         this.state.State,
//         this.state.district,
//         this.state.pincode);
// };

export const applicationForm2Query = async (
    disability,
    disability_type,
    papers,
    language1,
    language2,
    paper2subj,
    center1,
    center2,
    center3
) => {
    try {
        var data = db.collection('Candidate_Exam_Details').doc(firebase.auth().currentUser.uid);
        data.set({
            disability: disability,
            disability_type: disability_type,
            papers: papers,
            language1: language1,
            language2: language2,
            paper2subj: paper2subj,
            center1: center1,
            center2: center2,
            center3: center3,
        });

        window.location.reload();
    } catch (error) {
        console.log('applicationForm2Query');
        console.log(error);
        alert(error.message);
    }
};

// Function to be written in file:
// import {applicationForm2Query} from ''//path to queries file
// applicationForm2 = () => {
//     applicationForm2Query(this.state.father_fname,
//         this.state.disability,
//         this.state.disability_type,
//         this.state.papers,
//         this.state.language1,
//         this.state.language2,
//         this.state.paper2subj,
//         this.state.center1,
//         this.state.center2,
//         this.state.center3);
// };

export const applicationForm3Query = async (
    board10,
    reg10,
    yop10,
    marks10,

    board12,
    reg12,
    yop12,
    marks12,

    nameofdeg1,
    boarddeg1,
    degree1status,
    regdeg1,
    yopdeg1,
    marksdeg1,

    degree2present,
    nameofdeg2,
    boarddeg2,
    degree2status,
    regdeg2,
    yopdeg2,
    marksdeg2
) => {
    try {
        var data = db.collection('Candidate_Education').doc(firebase.auth().currentUser.uid);
        data.set({
            board10: board10,
            reg10: reg10,
            yop10: yop10,
            marks10: marks10,

            board12: board12,
            reg12: reg12,
            yop12: yop12,
            marks12: marks12,

            nameofdeg1: nameofdeg1,
            boarddeg1: boarddeg1,
            degree1status: degree1status,
            regdeg1: regdeg1,
            yopdeg1: yopdeg1,
            marksdeg1: marksdeg1,

            degree2present: degree2present,
            nameofdeg2: nameofdeg2,
            boarddeg2: boarddeg2,
            degree2status: degree2status,
            regdeg2: regdeg2,
            yopdeg2: yopdeg2,
            marksdeg2: marksdeg2,
        });

        window.location.reload();
    } catch (error) {
        console.log('applicationForm3Query');
        console.log(error);
        alert(error.message);
    }
};

// Function to be written in file:
// import {applicationForm3Query} from ''//path to queries file
// applicationForm3 = () => {
//     applicationForm3Query(this.state.board10,
// this.state.reg10,
// this.state.reg10,
// this.state.reg10,
// this.state.reg10,
// this.state.reg10,
// this.state.reg10,
// this.state.yop10,
// this.state.marks10,
// this.state.cert10,
// this.state.board12,
// this.state.reg12,
// this.state.yop12,
// this.state.marks12,
// this.state.cert12,
// this.state.nameofdeg1,
// this.state.boarddeg1,
// this.state.degree1status,
// this.state.regdeg1,
// this.state.yopdeg1,
// this.state.marksdeg1,
// this.state.certdeg1,
//         this.state.degree2present,
//         this.state.nameofdeg2,
//         this.state.boarddeg2,
//         this.state.degree2status,
//         this.state.regdeg2,
//         this.state.yopdeg2,
//         this.state.marksdeg2,
//         this.state.certdeg2);
// };

export const adminExamCentreInsert = async (centerNo, centerName, centerAddress, centerVacancies, centerCity) => {
    try {
        var data = db.collection('Admin_Exam_Centre').doc();
        data.add({
            'centerNo ': centerNo,
            centerName: centerName,
            centerAddress: centerAddress,
            'centerVacancies ': centerVacancies,
            centerCity: centerCity,
        });

        window.location.reload();
    } catch (error) {
        console.log('adminExamCentreInsert');
        console.log(error);
        alert(error.message);
    }
};

// Function to be written in file:
// import {adminExamCentreInsert} from ''//path to queries file
// adminExamCentre = () => {
//     adminExamCentreInsert(this.state.centerNo,
// this.state.centerName,
// this.state.centerAddress,
// this.state.centerCity,
// this.state.centerVacancies );
// };

export const adminNotification = async (subject, body) => {
    try {
        var data = db.collection('Admin_Notifications').doc();
        data.add({
            date: Date.now(),
            subject: subject,
            body: body,
        });

        window.location.reload();
    } catch (error) {
        console.log('adminNotification');
        console.log(error);
        alert(error.message);
    }
};

// Function to be written in file:
// import {adminNotification} from ''//path to queries file
// adminExamCentre = () => {
//     adminNotification(this.state.subject,
//         this.state.body);
// };

// export const applicationForm0Query = async (
//     disability,
//     disability_type,
//     papers,
//     language1,
//     language2,
//     paper2subj,
//     center1,
//     center2,
//     center3) => {
//     try {
//         var data = db.collection('Candidate_Profile').doc(firebase.auth().currentUser.uid);
//         data.set({
//             "disability":disability,
//             "disability_type":disability_type,
//             "papers":papers,
//             "language1":language1,
//             "language2":language2,
//             "paper2subj":paper2subj,
//             "center1":center1,
//             "center2":center2,
//             "center3":center3
//         });

//         window.location.reload();
//     } catch (error) {
//         console.log('applicationForm0Query');
//         console.log(error);
//         alert(error.message);
//     }
// };

// // Function to be written in file:
// import {applicationForm0Query} from ''//path to queries file
// applicationForm0 = () => {
//     applicationForm0Query(this.state.father_fname,
//         this.state.disability,
//         this.state.disability_type,
//         this.state.papers,
//         this.state.language1,
//         this.state.language2,
//         this.state.paper2subj,
//         this.state.center1,
//         this.state.center2,
//         this.state.center3);
// };

export const CandidateProfileFetchQuery = () => {
    db
        .collection('Global_Variables')
        .doc('currentApplicationNumber')
        .get()
        .then(function (doc) {
            if (doc.exists) {
                return doc.data();
            } else {
                // doc.data() will be undefined in this case
                console.log('No such document!');
                return 0;
            }
        }).catch = (err) => {
        return err;
    };
};

// Function to be written in file:
// import {CandidateProfileFetchQuery} from ''//path to queries file
// CandidateProfileFetch = () => {
//     CandidateProfileFetchQuery();
// };

// const storage = firebase.storage();

// const storageRef = storage.ref();

// var imagesRef = storageRef.child(auth.currentUser.uid);
// var file = this.state.cert10;
// ref.put(file).then(function(snapshot) {
//     console.log('Uploaded a blob or file!');
// });
