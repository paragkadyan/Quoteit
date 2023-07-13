let readData = "";

const quote = document.getElementById("quote-container");
const newQ = document.getElementById("newq")
const getNewQuotes = () => {
    let rnum = Math.floor(Math.random()*1000);
    console.log(readData[rnum]);
    quote.querySelector("#quote").textContent = readData[rnum].text;
    if(readData[rnum].author==null){
        quote.querySelector("#author").textContent = "Unknown"
    }
    else{
    quote.querySelector("#author").textContent = readData[rnum].author;
    }

}
const getQuotes = async () => {
 const api = "https://type.fit/api/quotes";

    try{
        let data = await fetch(api);
        readData=  await data.json();
        getNewQuotes();
        
        }  catch (error) {}
    
};
newQ.addEventListener("click", getNewQuotes);

getQuotes();