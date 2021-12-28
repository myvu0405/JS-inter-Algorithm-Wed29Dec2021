//Wednesday : Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
    let words = str.split(' ');
    let result="";
    words.forEach(x => {
        x= x.toLowerCase();
        x=x.charAt(0).toUpperCase()+x.slice(1);
        console.log(x);
        result= result+x+' ';
    })

    return result;

}

let X="I'm a little tea pot";
console.log(titleCase(X));