let menuButton = document.getElementById("menu-button");
let closeButton = document.getElementById("close-button");

menuButton.addEventListener("click", () => {
    toggleSidebar();
})

closeButton.addEventListener("click", () => {
    toggleSidebar()
})





function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let menuButton = document.getElementById("menu-button");
    let closeButton = document.getElementById("close-button");
    let overlay = document.getElementById("overlay");

    let isHidden = sidebar.classList.contains("hidden");

    sidebar.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
    menuButton.classList.toggle("hidden");
    closeButton.classList.toggle("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
    let menuButton = document.getElementById("menu-button");
    let sidebar = document.getElementById("sidebar");
    let closeButton = document.getElementById("close-button");
    let overlay = document.getElementById("overlay");

    if (sidebar.classList.contains("hidden")) {
        menuButton.classList.remove("hidden");
        closeButton.classList.add("hidden");
        overlay.classList.add("hidden");
    }
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




document.addEventListener('DOMContentLoaded', () => {
    let tabs = document.querySelectorAll('.tabs h4');

    tabs.forEach(tab => {
        tab.style.display = 'inline-block';
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



let sidebarLetters = document.querySelectorAll(".sidebarLetter");

sidebarLetters.forEach((letter) => {

    console.log(letter.innerText);


    letter.addEventListener("click", () => {

        if (letter.innerText === "All Courses") {
            window.location.href = "../../index.html"
        }
        else if (letter.innerText === "Events/Competition") {
            window.location.href = `../../src/pages/secondpage.html?value=${letter.innerText}`;
        }
        
    })



});


let aiChatBtn = document.getElementById("ai-chat-btn");

let aiChat = document.getElementById("ai-chat");

let aiCloseBtn = document.getElementById("ai-closeBtn");

aiChatBtn.addEventListener("click", () =>{
    aiChat.style.display = "flex";
});

aiCloseBtn.addEventListener("click", () =>{
    aiChat.style.display = "none";
})
