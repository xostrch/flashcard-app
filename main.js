const addFlashcardBtn = document.getElementById("addFlashcardBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalAddFlashcard = document.getElementById("modalAddFlashcard");

addFlashcardBtn.addEventListener("click",()=>{
    modalAddFlashcard.classList.remove("hide");
})

closeModalBtn.addEventListener("click",()=>{
    modalAddFlashcard.classList.add("hide");
})


const saveFlashcard = document.getElementById("saveFlashcard");
const flashcardContainer = document.getElementById("flashcardContainer");

saveFlashcard.addEventListener("click",()=>{
    let inputQuestion = document.getElementById("inputQuestion");
    let inputAnswer = document.getElementById("inputAnswer");

    const boxFlashcard = document.createElement('div');
    boxFlashcard.classList.add("flashcard");

    let questionFlashcard = document.createElement('span');
    questionFlashcard.classList.add("flashcard-question");
    questionFlashcard.textContent = inputQuestion.value;

    const showHideBtn = document.createElement("div");
    showHideBtn.classList.add("flashcard-button");
    showHideBtn.textContent = "Show/Hide";

    let answerFlashcard = document.createElement('span');
    answerFlashcard.classList.add("flashcard-answer", "hide");
    answerFlashcard.textContent = inputAnswer.value;

    const miniButtonsBox = document.createElement("div");
    miniButtonsBox.classList.add("flashcard-mini-buttons");

    const editBtnBox = document.createElement('div');
    editBtnBox.classList.add("flashcard-mini-button");
    const editBtn = document.createElement("img");
    editBtn.src = "images/edit-icon.png";
    editBtn.classList.add("icons-style");
    editBtnBox.appendChild(editBtn);

    const deleteBtnBox = document.createElement("div");
    deleteBtnBox.classList.add("flashcard-mini-button");
    const deleteBtn = document.createElement("img");
    deleteBtn.src = "images/bin-icon.png";
    deleteBtn.classList.add("icons-style");
    deleteBtnBox.appendChild(deleteBtn);

    miniButtonsBox.appendChild(editBtnBox);
    miniButtonsBox.appendChild(deleteBtnBox);

    boxFlashcard.appendChild(questionFlashcard);
    boxFlashcard.appendChild(showHideBtn);
    boxFlashcard.appendChild(answerFlashcard);
    boxFlashcard.appendChild(miniButtonsBox);

    flashcardContainer.appendChild(boxFlashcard);
    
    let editQuestion = document.getElementById("editQuestion");
    let editAnswer = document.getElementById("editAnswer");
    editQuestion.value = inputQuestion.value;
    editAnswer.value = inputAnswer.value;

    modalAddFlashcard.classList.add("hide");

    showHideBtn.addEventListener("click",() => {
        answerFlashcard.classList.toggle("hide");
    });

    deleteBtnBox.addEventListener("click",() => {
        boxFlashcard.remove();
    });

    const modalEditFlashcard = document.getElementById("modalEditFlashcard");
    const modalEditFlashcardClose = document.getElementById("modalEditFlashcardClose");

    modalEditFlashcardClose.addEventListener("click",() => {
        modalEditFlashcard.classList.add("hide");
    })

let currentFlashcard = null;

    editBtnBox.addEventListener("click", () =>{
        currentFlashcard = { question: questionFlashcard, answer: answerFlashcard };
        editQuestion.value = questionFlashcard.textContent;
        editAnswer.value = answerFlashcard.textContent;
        modalEditFlashcard.classList.remove("hide");
    })

    const saveEditFlashcard = document.getElementById("saveEditFlashcard");

    saveEditFlashcard.addEventListener("click", () => {
        if(currentFlashcard){
            currentFlashcard.question.textContent = editQuestion.value;
            currentFlashcard.answer.textContent = editAnswer.value;
        }
        modalEditFlashcard.classList.add("hide");
    })
    
    inputQuestion.value = "";
    inputAnswer.value = "";
})
