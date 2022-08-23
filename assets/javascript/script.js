const work = document.getElementById("myWork");

function buildCards() {
    for (let i = 0; i < links.length; i++) {
        imgCard = (
            `
            <a href=${links[i].link} target="_blank" class="imgFlex">
          <img src=${links[i].img} alt=${links[i].altText} class="img">
        </a>
            `
        );

        work.innerHTML += imgCard;
    }
}



const links = [
    {
        link: "https://github.com/SteveWeed79/ku-code-refactor",
        img: "./assets/images/weatherproject.JPG",
        altText: "A weather application",
    },
    {
        link: "https://github.com/SteveWeed79/project-1-beats-on-the-street",
        img: "./assets/images/beatsproject.JPG",
        altText: "Music application",
    },
    {
        link: "https://github.com/SteveWeed79/Javascript-quiz-project",
        img: "./assets/images/javascriptquizproject.JPG",
        altText: "A time javascript quiz",
    },
    {
        link: "https://github.com/SteveWeed79/calendar-keeper-work-day",
        img: "./assets/images/calendarproject.JPG",
        altText: "A single day calendar",
    },

]

buildCards()
