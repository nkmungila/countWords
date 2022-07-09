// This program search the given word in the given file and giving you how many times
// the given word appears in the file. It will search in exact case.
const {readFileSync} = require('fs');



const run = () =>{
    const fileName = 'sample.txt'
    const findword = 'one'
    const filecontent = syncReadFile(fileName);
    const wordsInFile = getWords(filecontent)
    const occurence = occurenceInFile(wordsInFile,findword)
    console.log("In the given file the word "+findword+' occured '+occurence+" times. ")
}


function syncReadFile(filename) {
  try{
        const contents = readFileSync(filename, 'utf-8');
        return contents;
        }   catch(e){
            console.log('File Not Found')
           }
}

function getWords(text){
    let x = text.replace(/[^A-Za-z0-9]+/g, " ");
    let newArr = x.trim().split(" ");
    return newArr;
}

function occurenceInFile(listOfWord,findWord){
    let count = 0;
    listOfWord.forEach(element => {
        if (element === findWord) {
        count += 1;
        }
})
    return count
}

run();