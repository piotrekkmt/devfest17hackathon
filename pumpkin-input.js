const keypress = require('keypress');
// const admin = require('firebase-admin');
// const config = require('./pumpkin.config.json');

const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
    projectId: 'devfest17hackathon',
    keyFilename: './DevFest17Hackathon-7765f4321f9f.json',
});

const document = firestore.doc('emotiv/nitwi8iUMRTTF6iAjQde');

// Read the document.
document.get().then(doc => {
    // Document read successfully.
    console.log('Read firebase doc', doc);
  });

let controls = ['f', 'h', 'n', 'p', 'space'];

function setEmotion(emotion) {
    document.update({
        emotion: emotion,
    }).then(() => {
    // Document updated successfully.
    console.log('Updated emotion with', emotion);
    });
}

function setPush(pushing) {
    document.update({
        push: pushing,
    }).then(() => {
    // Document updated successfully.
    console.log('Updated push with', pushing);
    });
}

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function(ch, key) {
    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
        process.exit();
    }

    if (key && key.name && (controls.includes(key.name))) {
        console.log('got "keypress"', key);

        switch(key.name) {
        case 'p':
            setPush(true);
            break;
        case 'n':
            setPush(false);
            setEmotion('pumpkin_normal');
            break;
        case 'f':
            setEmotion('pumpkin_angry');
            break;
        case 'h':
            setEmotion('pumpkin_happy');
            break;      
        }
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();

console.log('PID: ', process.pid);

// var moveRef = db.ref('move/');
// moveRef.on('value', function(snapshot) {
//     console.log('received from database', snapshot.val());
// });

