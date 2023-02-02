const boxContainer = document.querySelector(".boxContainer");
const saluteTextContainer = document.querySelector(".saluteTextContainer");
const saluteImgContainer = document.querySelector(".saluteImgContainer");
const Authorname = document.querySelector(".name");
const jobContainer = document.querySelectorAll(".jobTitleContainer");
const jobTitle = document.querySelectorAll(".jobTitle");
const ProjectTitle = document.querySelector(".ProjectTitle");
const phone = document.querySelectorAll(".phone");
const laptop = document.querySelector(".laptop");

for (let i = 0; i < 365; i++) {
  let el = document.createElement("div");

  el.classList = "box";
  boxContainer.appendChild(el);
}

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  let offsetX = window.scrollX;

  saluteTextContainer.style.transform = `translateY(${offsetY * 0.1}px)`;
  saluteImgContainer.style.transform = `translate(${offsetY * 0.4}px, ${
    offsetY * 0.7
  }px)`;
  Authorname.style.transform = `translateY( calc(90vh - ${offsetY}px))`;

  jobTitle[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`;
  jobTitle[1].style.transform = `translateX( calc(-300vh + ${offsetY}px))`;

  jobContainer[0].style.backgroundPositionY = `${offsetY * 0.5}px`;
  jobContainer[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;

  ProjectTitle.style.transform = `translateY(calc(400vh - ${offsetY}px)) `;

  phone[0].style.transform = `translateX( calc(-480vh + ${offsetY}px))`;
  // phone[1].style.transform = `translateX( calc(450vh - ${offsetY}px))`;

  laptop.style.transform = `translateX(calc(-600vh + ${offsetY}px))`;
});



