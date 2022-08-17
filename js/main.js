const ratingCard = document.querySelector("main .rate-card");
const thankCard = document.querySelector("main .thank-card");
const submitButton = document.querySelector("#submit-button");
const rateForm = document.querySelector(".card-rating")
const rateFormValue = rateForm.value;

rateForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(rateFormValue);
    if(rateFormValue == ""){
        console.log("giremezsiniz yazısı koy");
    }else{
        
        ratingCard.style.display = "none";
        thankCard.style.display = "flex";
    }
   
})