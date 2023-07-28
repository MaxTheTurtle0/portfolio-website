const observer = new  IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
        {
            entry.target.classList.add("show");
        }
        else
        {
            entry.target.classList.remove("show");
        }
    });
});


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


const navigationbar = document.querySelector(".navigationbar");
const mobile_burger_menu = document.querySelector(".mobile-burger-menu");

mobile_burger_menu.addEventListener("click", () => {
    const is_visible = navigationbar.getAttribute("data-visible");
    if (is_visible === "false")
    {
        navigationbar.setAttribute("data-visible", "true");
        mobile_burger_menu.setAttribute("aria-expanded", "true");
    }
    else
    {
        navigationbar.setAttribute("data-visible", "false");
        mobile_burger_menu.setAttribute("aria-expanded", "false")
    }
});


/*const descriptionElement = document.querySelector("#short-description");
const desctiption = "I am an aspiring software engineer."

const typeWriter = (text, element, delay) => {
    let i = 0;
    const type = () => {
        if (i < text.length)
        {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}

typeWriter(desctiption, descriptionElement, 75);
*/