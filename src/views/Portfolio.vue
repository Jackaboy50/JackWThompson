<template>
    <div>
        <h1 class="portfolio-info">Portfolio</h1>
        <hr class="portfolio-divider">
    </div>
    <div>
        <portfolioItem
        title="Winforms Chess - C# / Winforms / Git"
        image='winformsChess.png'
        firstContent="This C# Winforms implementation of chess works using dynamically created buttons generated at runtime.
        It contains all the typical chess features and will have fully complete Win and Loss menus to compliment the start menu."
        secondContent="I do plan to add my own AI to play against but currently only two local players are supported."
        githubText="This project can be found on my GitHub page here: "
        githubLink="https://github.com/Jackaboy50/Winforms-Chess"
        position="right"
        ></portfolioItem>

        <portfolioItem
        title="Naughts and Crosses - C# / Winforms / Git"
        image='winformsOX.png'
        firstContent="This C# Winforms implementation of naughts and crosses works similarly to the previous chess project.
        It currently has a fully functional Win/Loss/Draw menu and can be replayed in a loop"
        secondContent="I also plan to add different levels of AI using the minimax algorithm to go into varying depths,
        simulating different skill levels."
        githubText="This project can be found on my GitHub page here: "
        githubLink="https://github.com/Jackaboy50/Naughts-and-Crosses"
        position="right"
        ></portfolioItem>

        <portfolioItem
        title="This Website - Vue JS / Javascript / HTML / CSS / Web Design / NPM"
        image='website.png'
        firstContent="I custom coded this website myself using Vue JS. This website is my first time using HTML, Javascript and CSS
        so it was quite an experience using and applying them. "
        secondContent="All components were created by myself apart from the router used to route different content into a single
        page application. The router is an NPM package that I installed into the project."
        position="left"
        ></portfolioItem>

        <portfolioItem
        title="Minesweeper - C# / Winforms / Git"
        image='minesweeper.png'
        firstContent="Minesweeper is the first project I ever created in C# Winforms. It gave me perspective into
        how winforms can be used to make a variety of different applications."
        secondContent="The board is randomly generated each time and there are four different difficulty levels
        which increase the amount of mines and tiles on the board. Although the project doesn't look the nicest
        it is fully functional."
        githubText="This project can be found on my GitHub page here: "
        githubLink="https://github.com/Jackaboy50/Minesweeper"
        position="left"
        ></portfolioItem>

        <portfolioItem
        title="Notepad Application - C# / Winforms / Git"
        image='notepad.png'
        firstContent="This is a Note taking application made in C# Winforms. It uses a procedurally generated
        graphical user interface (GUI) and .txt files to create, edit and store notes."
        secondContent="Notes are created by adding a title and text, then you can save the note locally or create a new note.
        Any notes created will be added to the list of notes on the right and can be removed from there as well."
        githubText="This project can be found on my GitHub page here: "
        githubLink="https://github.com/Jackaboy50/NotePad-App"
        position="right"
        imgW="600"
        ></portfolioItem>
    
    </div>
</template>

<script>
import portfolioItem from '../components/PortfolioItem.vue'
export default{
    components: {
        portfolioItem
    }
}
</script>


<style scoped>
@import url('../assets/styles/portfolioStyle.css');
</style>