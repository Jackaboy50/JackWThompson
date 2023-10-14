<template>
    <div>
        <div class="container" v-if="position == 'right'">
            <h1 class="title-right">{{ title }}</h1>
            <p class="content-right">{{ firstContent }} </p>
            <p class="content-right">{{ secondContent }}</p>
            <div v-if="imgW !== null">
                <img class="image-right" :src="imagePath" alt="Winforms chess" :style="{width: imgW + 'px', marginLeft: 62 - ((imgW - 500) / 25) + 'rem'}">
            </div>
            <div v-else>
                <img  class="image-right" :src="imagePath" alt="Winforms chess">
            </div>
            <p class="github-text-right">{{ githubText }}</p>
            <a :href="githubLink" target="_blank" class="github-link-text">{{ githubLink }}</a>
        </div>
        <div class="container" v-if="position == 'left'">
            <h1 class="title-left">{{ title }}</h1>
            <div v-if="imgW !== null">
                <img class="image-left" :src="imagePath" alt="Winforms chess" width="">
            </div>
            <div v-else>
                <img  class="image-left" :src="imagePath" alt="Winforms chess">
            </div>
            <p class="content-left content-margin-top">{{ firstContent }} </p>
            <p class="content-left content-margin-bottom">{{ secondContent }}</p>
            <p class="github-text-left">{{ githubText }}</p>
            <a :href="githubLink" target="_blank" class="github-link-text">{{ githubLink }}</a>
        </div>
        <hr class="divider">
    </div>
</template>

<script>
export default{
    props: ['title', 'firstContent', 'secondContent', 'githubText','githubLink', 'image', 'position', 'imgW'],
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
</style>
