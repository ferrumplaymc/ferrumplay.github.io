document.getElementById("copyButton").addEventListener("click", function() {
    const textToCopy = "ferrumplay.su";

    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const button = document.getElementById("copyButton");
        const originalText = button.innerText;

        button.innerText = "IP Скопирован!";

        setTimeout(() => {
            button.innerText = originalText;
        }, 1000);
    }).catch(err => {
        console.error("Ошибка при копировании текста: ", err);
    });
});

