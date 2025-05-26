let menuButton = document.getElementById("menu-button");
let closeButton = document.getElementById("close-button");

menuButton.addEventListener("click", () => {
    toggleSidebar();
})

closeButton.addEventListener("click", () => {
    toggleSidebar()
})





function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const overlay = document.getElementById("overlay");

    const isHidden = sidebar.classList.contains("hidden");

    sidebar.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    menuButton.classList.toggle("hidden");
    closeButton.classList.toggle("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const sidebar = document.getElementById("sidebar");
    const closeButton = document.getElementById("close-button");
    const overlay = document.getElementById("overlay");

    if (sidebar.classList.contains("hidden")) {
        menuButton.classList.remove("hidden");
        closeButton.classList.add("hidden");
        overlay.classList.add("hidden");
    }
});




let courseHeading = document.querySelector(".courseHeading");

let params = new URLSearchParams(window.location.search);
let value = params.get("value");

courseHeading.innerText = value;



let sidebarLetters = document.querySelectorAll(".sidebarLetter h5");

sidebarLetters.forEach((letter) => {

    console.log(letter.innerText);

    letter.addEventListener("click", () => {

        if (letter.innerText = "All Courses") {
            window.location.href = "../../index.html"
        }
        else {
            window.location.href = `../../src/pages/secondpage.html?value=${letter.innerText}`;
        }

    });
});



let image = document.getElementById("image");

let count = 1;

setInterval(() => {

    if (count === 1) {
        image.setAttribute("src", `../../images/banner-2.png`);
        count++;
    }
    else if (count === 2) {
        image.setAttribute("src", `../../images/banner-3.png`);
        count++;
    }
    else if (count === 3) {
        image.setAttribute("src", `../../images/banner-4.png`);
        count++;
    }
    else {
        image.setAttribute("src", `../../images/banner-1.png`);
        count = 1;
    }

}, 4000);




document.addEventListener('DOMContentLoaded', () => {
    let tabs = document.querySelectorAll('.tabs h4');

    tabs.forEach(tab => {
        tab.style.paddingBottom = '5px';
    });

    if (tabs.length > 0) {
        tabs[0].style.color = '#3ec2a6';
        tabs[0].style.borderBottom = '2px solid #3ec2a6';
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.style.color = '';
                t.style.borderBottom = '';
            });

            tab.style.color = '#3ec2a6';
            tab.style.borderBottom = '2px solid #3ec2a6';
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let langToggle = document.getElementById("language-toggle");
    let langDropdown = document.getElementById("language-dropdown");
    let selectedLang = document.getElementById("selected-language");
    let langOption = document.getElementById("lang-option");

    langToggle.addEventListener("click", () => {
        langDropdown.classList.toggle("hidden");
    });

    langOption.addEventListener("click", function () {
        let current = selectedLang.textContent;
        let next = this.textContent;

        selectedLang.textContent = next;
        langOption.textContent = current;

        langDropdown.classList.add("hidden");
    });

    document.addEventListener("click", function (e) {
        if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.add("hidden");
        }
    });
});
