// This program search the given word in the given file and giving you how many times
// the given word appears in the file. 
const {readFileSync} = require('fs');
const run = () =>{
    const fileName = 'sample.txt'
    const findword = 'one'
    const filecontent = syncReadFile(fileName);
    const wordsInFile = getWords(filecontent)
    const occurence = occurenceInFile(wordsInFile,findword)
    console.log(`In the given file the word ${findword} occured ${occurence} times.`)
}


const syncReadFile = (filename)=>{
  try{
        filehandle = await fsPromises.open(filename, 'r');
        const contents = readFileSync(filename, 'utf-8');
        return contents;
    } catch(e){
        console.log('File Not Found')
    }
}

const getWords = (text) =>{
    const w = text.toLowerCase();
    const x = w.replace(/[^A-Za-z0-9]+/g, " ");
    const newArr = x.trim().split(" ");
    return newArr;
}

const occurenceInFile = (listOfWord,findWord) =>{
    let count = 0;
    listOfWord.forEach(element => {
        if (element === findWord) {
            count += 1;
        }
    })
    return count
}

run();