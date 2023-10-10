<template>
    <div class="console-container">
        <div class="console-header"></div>
        <div class="console-body">
            <div class="console-text" id="console-text">
                <p class="console-text-0">></p>
            </div>
            </div>
        </div>
</template>

<style scoped>
@import url('../assets/styles/fakeConsoleStyle.css');
</style>

<script>
    const consoleText = [
        "run HelloWorld.exe",
        "...",
        "Hello World!",
        "Welcome to my website.",
        "-----",
        "run programming.exe",
        "Starting Visual Studio...",
        "Opening GitHub",
        "Ready to begin.",
        ">"
    ]
    const typeSpeed = 50;
    const newLineSpeed = 1000;
    let wordIndex = 0
    let textIndex = 0
    let endFunction = false
    var currentTimeOut 

    function typeWriter(){
        if(document.getElementById(`console-text-${wordIndex}`) == null){
            createLine()
        }

        if(endFunction){
            return
        }

        if(wordIndex > 0){
            let index = wordIndex - 1
            document.getElementById(`cursor-span-${index}`).innerHTML = "<span></span>"
        }

        document.getElementById(`console-text-${wordIndex}`).innerHTML = consoleText[wordIndex].substring(0, textIndex) + `<span id="cursor-span-${wordIndex}">|</span>`

        if(textIndex++ != consoleText[wordIndex].length){
            currentTimeOut = setTimeout(typeWriter, typeSpeed)
        }
        else if (wordIndex < 9){
            textIndex = 0
            wordIndex++
            currentTimeOut = setTimeout(typeWriter, newLineSpeed)
        }
    }

    function createLine(){
        const newLine = document.createElement("p")
        newLine.id = `console-text-${wordIndex}`
        if(document.getElementById("console-text") == null){
            endFunction = true
            clearTimeout(currentTimeOut)
            return
        }
        document.getElementById("console-text").appendChild(newLine)
    }

    function resetConsole(){
        wordIndex = 0
        textIndex = 0
        endFunction = false
        if(document.getElementById("console-text") != null){
            document.getElementById("console-text").innerHTML = '<p class="console-text-0">></p>'
        }
        clearTimeout(currentTimeOut)
    }
    window.addEventListener("load", typeWriter)

    export default{
        inject: ['$bus'],
        created(){
            this.$bus.$on('navbarLinkActivated', (pageName) => {
                if(pageName == 'home'){
                    resetConsole()
                    currentTimeOut = setTimeout(typeWriter, typeSpeed)
                }
            })
        }
    }
</script>