// Aside Navigation
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a"); // Select `a` inside each `li`
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active"); // Remove active class
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionToggler();
    }
  });
}
// Event listener for the logo to navigate to Home section
const logo = document.querySelector(".logo a");
logo.addEventListener("click", function () {
  const homeLink = nav.querySelector('a[href="#home"]');
  homeLink.click(); 
});

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

// hire me
function updateNav(element) {
  for (let i = 0; i < totalSection; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target[i] ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionToggler();
});
function asideSectionToggler() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// show more services text
function toggleText() {
  const text = document.querySelector(".service-text");
  const seeMore = document.querySelector(".see-more");

  text.classList.toggle("expanded"); // Toggle the expanded class to show more text
  seeMore.textContent = text.classList.contains("expanded")
    ? "... See Less"
    : "... See More";
}

// cv download
// document.getElementById("downloadCv").addEventListener("click", function (event) {
//   // Prevent the default behavior
//   event.preventDefault();

//   // Download the file
//   const link = document.createElement("a");
//   link.href = "./file/mahabub-cv.pdf";
//   link.download = "mahabub-cv.pdf"; // Specify the file name
//   link.click();

// });
