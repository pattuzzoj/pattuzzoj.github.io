const scroll_active = document.getElementById("scroll_reset");

scroll_active.onclick = () => {
    document.documentElement.scrollTop = 0;
}

function resetScroll() {
    if (document.documentElement.scrollTop > 300) {
        scroll_active.classList.add("active");
    }
    else {
        scroll_active.classList.remove("active");
    }
}