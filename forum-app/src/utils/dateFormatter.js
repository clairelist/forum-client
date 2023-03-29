//I take in a DATETIME and return it FORMATTED TO BE HUMAN READABLE

//for CREATED topics::
let today = new Date();
today.setDate(today.getDate());

let year = today.getFullYear();
let month = today.getMonth() + 1; //getMonth returns a ZERO-INDEXED NUMBERING! WHAT ???
let day = today.getDate();

function addZeros (args) {
    return args < 10 ? ('0' + args) : args;
}

function dateFinal(){
    return year + '-' + addZeros(month) + '-' + addZeros(day);
}

export default dateFinal;