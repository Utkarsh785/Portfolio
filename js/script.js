let typingText = document.querySelector(".change-txt");
let Designation = ['Front End Developer', 'Web Designer', 'App Developer', 'Freelancer'];

let arrayIndex = 1;
function ChangingText() {
    if(arrayIndex<Designation.length){
        typingText.innerHTML = Designation[arrayIndex];
        arrayIndex= arrayIndex+1;
}
else{
    arrayIndex = 0;
    typingText.innerHTML = Designation[arrayIndex];
    arrayIndex= arrayIndex+1;
  }
}
setInterval(ChangingText, 5000);
ChangingText();
