const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
});


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const description = ["software engineer.", "student.", "gamer.", "musician."];
let descriptionElement = document.getElementById("description");

let j = 0;

const typeWriter = (text, element, delay) => {
    let i = 0;
    element.innerHTML = "";
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    j++;
    if (j >= description.length) j = 0;
    type();
}

typeWriter(description[j], descriptionElement, 75);

setInterval(() => {
    typeWriter(description[j], descriptionElement, 75);
}, 4500);
