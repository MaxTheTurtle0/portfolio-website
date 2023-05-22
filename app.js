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
    const isVisible = navigationbar.getAttribute("data-visible");
    if (isVisible === "false")
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