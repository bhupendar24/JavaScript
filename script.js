document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.getElementById("text-input");
    const wordCountDisplay = document.getElementById("word-count");

    textArea.addEventListener("input", function () {
        let text = textArea.value.trim();
        let wordCount = text.length > 0 ? text.split(/\s+/).length : 0;
        wordCountDisplay.textContent = `Word Count: ${wordCount}`;
    });
});