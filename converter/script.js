import countryList from "./codes.js";

const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";


const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");
const arrow=document.getElementById("arrow");

let currCode;

for(let select of dropdown){
    for (currCode in countryList ){
       let newOption=document.createElement("option");
       newOption.innerText=currCode;
       newOption.value=currCode;
       
       select.append(newOption);
   }
   select.addEventListener("change",(e)=>{
    updateFlag(e.target);
   });
}

const updateFlag=(element)=>{
   let currCode=element.value;
   let countryCode=countryList[currCode];
   let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
   let img=element.parentElement.querySelector("img");
   img.src=newSrc;
};
arrow.addEventListener("click", () => {
    const temp = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = temp;
    updateFlag(fromCurr);
    updateFlag(toCurr);
  });


btn.addEventListener("click", async(e)=>{
    e.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal=1;
        amount.value="1";
    }

    //const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    console.log(rate);
   

    // let rate=data[toCurr.value.toLowerCase()];
    // console.log(rate);
     msg.innerText=`${amtVal} ${fromCurr.value} = ${amtVal*rate} ${toCurr.value}`;
});
