let xhr = new XMLHttpRequest();

document.getElementById("submit").onclick = () => {
    xhr.open("POST", `script/php/index.php`);
    xhr.send();
};

xhr.onload = () => {
    if (xhr.status == 200) {
        let template = xhr.response;
    }
}

xhr.onerror = () => {
    alert("Problema de conexão. Verifique sua conexão e tente novamente.");
} 