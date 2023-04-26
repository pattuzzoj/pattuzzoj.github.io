document.body.onload = () => {
    ApplyTheme();
    typeWriterContainer();
}

window.onscroll = () => {
    resetScroll();
    checkSectionActive();
}