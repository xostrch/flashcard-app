const addFlashcardBtn = document.getElementById("addFlashcardBtn");
const closeModalBtn = document.getElementById("closeModalBtn")
const modal = document.getElementById("modal");

addFlashcardBtn.addEventListener("click",()=>{
    modal.classList.remove("hide");
})

closeModalBtn.addEventListener("click",()=>{
    modal.classList.add("hide");
})


const saveFlashcard = document.getElementById("saveFlashcard");
const flashcardContainer = document.getElementById("flashcardContainer")

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
    deleteBtnBox.classList.add("flashcard-mini-button")
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
    
    inputQuestion.value = "";
    inputAnswer.value = "";
    modal.classList.add("hide");

    showHideBtn.addEventListener("click",()=>{
        answerFlashcard.classList.toggle("hide");
    })
})
