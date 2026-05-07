const form = {
    sidebar: () => document.querySelector("#sidebar"),
    btnMenu: () => document.querySelector("#btn-menu")
}

const toggleMenu = () => {
    if (form.sidebar().style.display === "flex") {
        form.sidebar().style.display = "none"
        form.btnMenu().src = "IMG/menu.svg"
    } else {
        form.sidebar().style.display = "flex"
        form.btnMenu().src = "IMG/close.svg"
    }
}

form.btnMenu().addEventListener("click");

