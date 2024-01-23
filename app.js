const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("show", entry.isIntersecting));
});

const hiddenElements = document.querySelectorAll(".hidden-transition");
hiddenElements.forEach((element) => observer.observe(element));

const description = ["software engineer.", "student.", "gamer.", "musician."];
const descriptionElement = document.getElementById("description");

let j = 0;

const typeWriter = (text, element, delay) => {
    let i = 0;
    element.textContent = "";
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    j++;
 
    if (j >= description.length) j = 0;
    type();
};

typeWriter(description[j], descriptionElement, 75);

setInterval(() => typeWriter(description[j], descriptionElement, 75), 4500);
