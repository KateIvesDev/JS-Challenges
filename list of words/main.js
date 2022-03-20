
document.getElementById('submit-btn').addEventListener('click', addWord)




let listOfWords = []
function addWord(){
    let word = document.getElementById('input').value
    console.log(word)
    listOfWords.push(word)
    console.log(listOfWords)


    if (listOfWords[listOfWords.length-1].toLowerCase() == "stop") {
      listOfWords.pop();
      console.log(listOfWords)
      listOfWords.forEach(value => {
        document.getElementById('list').innerHTML += `<p>${value}</p>`
      })
     
      }
     
    
}

