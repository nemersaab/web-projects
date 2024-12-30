const accessKey = 'mGMfTokG0Zfqsam0flzwPQ33q5hYXdWWaG5sdHXGTA4';
const imgDiv = document.getElementById('imgDiv');
const queryInp = document.getElementById('query');
async function fetchData() {
    let myData;
    let query = queryInp.value;
  await  fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${accessKey}`)
        .then(response=>response.json())
        .then(data=>myData=data)
        .catch(err=>console.error(err));
        console.log(myData);
return myData;
}
async function addmyImg() {
let data=await fetchData();
let myimg = document.createElement('img');
let h6 = document.createElement('h6');
let myDiv = document.createElement('div');
h6.textContent=data.description
myimg.src=data.urls.regular;
myimg.alt="random"
myDiv.appendChild(myimg);
myDiv.appendChild(h6)
imgDiv.innerHTML="";
imgDiv.appendChild(myDiv)
console.log("ok");

}
