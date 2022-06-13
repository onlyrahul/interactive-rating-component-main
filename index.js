const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
let rated = false;
const box1 = document.querySelector(".box-content-1");
const box2 = document.querySelector(".box-content-2");
let score = 5;
const showScore = document.querySelector(".score");
// rating buttons

const handleClick = (event) => {
  ratingBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (event.target.classList.contains("rating-btn")) {
    event.target.classList.add("active");
  } else {
    event.target.parentElement.classList.add("active");
  }
  rated = true;
  score = event.target.innerText;
};

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

// submit button

const changePage = () => {
  if (rated) {
    box1.classList.add("hide");
    showScore.textContent = score;
    box2.classList.remove("hide");
  } else {
    console.log("please rate first");
  }
};

submitBtn.addEventListener("click", changePage);
