// ---------- Elements ----------
const wax = document.getElementById("wax");
const mail = document.getElementById("mail");
const letter = document.getElementById("letter");
const paper = document.getElementById("paper");
const valentineText = document.getElementById("valentineText");
const continueBtn = document.getElementById("continueBtn"); // Continue button element

let hasOpened = false; // prevent double clicking

// ---------- Wax Click ----------
wax.addEventListener("click", function () {

    if (hasOpened) return;
    hasOpened = true;

    mail.style.display = "none";
    letter.style.display = "block";

    // Lift paper slightly after showing envelope
    setTimeout(() => {
        paper.classList.add("show");
    }, 300);

    // Start typing after paper finishes sliding
    setTimeout(() => {
        startTyping();
    }, 1200);
});

// ---------- Typing Function ----------
function startTyping() {

    const message = `Happpy Valentines Mahal koo!

First i want to say that i love how goofy and hyper you are 24/7. i know you may think of it as a flaw but thats one of the many reasons why i love you.

I also want to say thank you for your efforts — tiny efforts like how you stay up late even when your tired just to spend time with me, or creating the proposal video with your goofy cycy twist to it.

I know its last year lang but i also really cherish the time you came to my house and really planned arrangements with jona just to make sure that i received stuff for valentines — those gestures really made me feel special.

The thought that you would drive all that way just to see me for less than 5 minutes makes me happy and feel really giddy.

I cant wait for the day where we don’t have to sneak around and we get to spend time together longer ALONE.

I also wanna add that i admire you alot. I admire how you manage to still be a happy person even after going home from a tiring day from work. I love how even when your tired you never fail to take care of me and my feelings. I love how independent you are.

Sometimes when we have misunderstandings i forget that you’re also young and still learning — i forget that because of how mature and responsible you are.

With that i wanted to express how grateful i am to have someone — not only someone but a best friend and a partner that i can rely on.

Im so happy we got to see so many stages of ourselves together, and personally i loved watching you grow from a boy to a man — my man*.

SAKEN KA LANG.

Anyways thats all happpyy valentines day mahall kooww asawa koww i lovee youu so muchhh 💌`;

    let index = 0;
    valentineText.innerHTML = "";

    function type() {
        if (index < message.length) {

            const char = message.charAt(index);

            if (char === "\n") {
                valentineText.innerHTML += "<br><br>";
            } else {
                valentineText.innerHTML += char;
            }

            index++;

            const paperContent = document.querySelector(".paper-content");
            paperContent.scrollTop = paperContent.scrollHeight;

            setTimeout(type, 30); 

        } else {
            continueBtn.style.display = "inline-block"; 
        }
    }

    type();
}

// ---------- Continue Button ----------
continueBtn.addEventListener("click", function () {
    window.location.href = "journal.html"; 
});

document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.addEventListener('click', function () {
        window.location.href = 'OurMusic.html'; 
    });
});



