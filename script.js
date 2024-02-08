const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I like you too";
  gif.src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/smiling-face-with-hearts_1f970.gif";
  noBtn.hidden = true
  question.style.color = "#e94d58"
  yesBtn.style.background = "#e94d58"
  yesBtn.style.border = "#e94d58"
  
  if (size == 10) {
    alert("Naa raman diay na")
  }
});
let size = 0
noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  size++
  let size2 = 150 / size
  if (size == 5) {
    alert("Di jud ka crush?")
    alert("🥺")
  }
  else if (size == 8) {
    alert("Ge lang kay delete koning No button")
  }
  else if (size == 10) {
    noBtn.hidden = true
  }
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  noBtn.style.heigth = size2 + "px"
  noBtn.style.width = size2 + "px"
});
