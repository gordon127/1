// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const loginForm = document.getElementById('loginForm');
const fileUpload = document.getElementById('fileUpload');
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');

const correctPassword = 'yourpassword'; // Replace with your password

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    if (password === correctPassword) {
        fileUpload.style.display = 'block';
    } else {
        alert('Incorrect password');
    }
});

uploadButton.addEventListener('click', () => {
    const file = fileInput.files[0];
    if (file) {
        const storageRef = storage.ref(`files/${file.name}`);
        storageRef.put(file).then(() => {
            alert('File uploaded successfully');
        }).catch((error) => {
            console.error('Upload error:', error);
        });
    } else {
        alert('Please select a file');
    }
});
