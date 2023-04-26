const dataTheme = document.firstElementChild;

document.getElementById("switch_theme").onclick = () => {
    if (dataTheme.getAttribute("data-theme") == "light") {
        ApplyDarkTheme();
        localStorage.setItem("theme", "dark");
    }
    else {
        ApplyLightTheme();
        localStorage.setItem("theme", "light");
    }
}

function ApplyDarkTheme() {
    dataTheme.setAttribute("data-theme", "dark");
}

function ApplyLightTheme() {
    dataTheme.setAttribute("data-theme", "light");
}

window.onstorage = event => {
    if (event.key == "theme") {
        if (event.newValue == "dark") {
            ApplyDarkTheme();
        }
        else {
            ApplyLightTheme();
        }
    }
}

function ApplyTheme() {
    if (localStorage.getItem("theme") == "dark") {
        ApplyDarkTheme();
    }
    else {
        ApplyLightTheme();
    }
}