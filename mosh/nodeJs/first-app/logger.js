
const url = 'http://mylogger.io/log';
function log(message){
    //send an HTTP request
    console.log(message);
}
module.exports = log; // the first log is the name that will be exported and second log is the reference to the funtion to be exported.