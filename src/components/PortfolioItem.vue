<template>
    <div>
        <div  v-if="position == 'right'">
            <h1 class="title-right">{{ title }}</h1>
            <p class="content-right">{{ firstContent }} </p>
            <p class="content-right">{{ secondContent }} </p>
            <img class="image-right" :src="imagePath" :alt="imagePath" :style="'--width: ' + imgW">
            <p v-if="githubText" class="github-text-right">{{ githubText }}</p>
            <a v-if="githubLink" :href="githubLink" target="_blank" class="github-link-text">{{ githubLink }}</a>
        </div>
        <div v-if="position == 'left'">
            <h1 class="title-left">{{ title }}</h1>
            <img class="image-left" :src="imagePath" :alt="imagePath" :style="'--width: ' + imgW">
            <p class="content-left">{{ firstContent }} </p>
            <p class="content-left second-content">{{ secondContent }}</p> 
            <p v-if="githubText" class="github-text-left">{{ githubText }}</p>
            <a v-if="githubLink" :href="githubLink" target="_blank" class="github-link-text">{{ githubLink }}</a>
        </div>
        <hr class="divider">
    </div>
</template>

<script>
export default{
    props: ['title', 'firstContent', 'secondContent', 'githubText','githubLink', 'image', 'position', 'imgW', 'imgH'],
    computed: {
        imagePath() {
            if (this.image !== '') {
                return require(`@/assets/images/${this.image}`)
            }
        }
    }
}
</script>

<style scoped>
@import url('../assets/styles/portfolioItemStyle.css');
.image-left,
.image-right{
    width: 0px;
    height: 0px;
}
@media (min-width: 1280px){
.container{
    max-width: 1280px;
}
.title-right{
    font-family: PoppinsBold;
    color: #cbd0d8;
    padding: 0;
    margin-top: 50px;
    margin-left: 150px;
    font-size: 30px;
}
.image-right{
    width: var(--width);
    height: 400px;
    margin-top: -300px;
    margin-left: calc(1800px - var(--width));
    margin-bottom: 30px;
}
.content-right{
    font-family: PoppinsBold;
    color: #abb2bf;
    margin-left: 150px;
    font-size: 20px;
    display: inline-block;
}
.github-text-right{
    font-family: PoppinsBold;
    color: #abb2bf;
    font-size: 15px;
    margin-left: 150px;
    display: inline;
}



.title-left{
    font-family: PoppinsBold;
    color: #cbd0d8;
    padding: 0;
    margin-left: 550px;
    margin-top: 50px;
    margin-bottom: -50px;
    width: 100%;
    font-size: 30px;
}
.image-left{
    width: var(--width);
    height: 400px;
    margin-left: 100px;
    margin-bottom: -350px;
}
.content-left{
    font-family: PoppinsBold;
    color: #abb2bf;
    margin-left: 550px;
    font-size: 20px;
    width: 900px;
}
.second-content{
    margin-bottom: 150px;
}
.github-text-left{
    font-family: PoppinsBold;
    color: #abb2bf;
    font-size: 15px;
    display: inline;
    margin-left: 550px;
}
.github-link-text{
    font-size: 15px;
    color: #e75e03;
    font-weight: normal;
    font-family: PoppinsBold;
    display: inline;
    margin-left: 0px;
}
}
</style>
