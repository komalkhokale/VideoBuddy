let Is_PROD = true;

const server = Is_PROD ?
    "https://videobuddybackend.onrender.com" : 
    "http://localhost:8000";

export default server;