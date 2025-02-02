const messages = [
    "Sure kana?",
    "Wehhh di ngaa?",
    "No parinnnnn?",
    "Ang Angasss mo naman bes....",
    "Ako na ito ohhh jusq",
    "No talaga? :<<",
    "Ehem ehem ehem......",
    "Sure na sure na sure na talaga?",
    "Pumayag kana kasi eto naman oh pinapa no mo pa :>",
    "Sige bes. dI nAmaN m4sHak3t :<<",
    "Mag yes kana po honeybunchsugarplumplum, i love youuuuu hihi❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}