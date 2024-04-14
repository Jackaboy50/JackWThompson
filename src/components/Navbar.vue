<template>
    <div>
        <div class="navbar-container">
            <div class="nav-item-container grow">
                <router-link class="navbar-item" to="Home" @click.prevent="$bus.$emit('navbarLinkActivated', 'home')"><h1 class="navbar-number">01.</h1>Home</router-link>
            </div>
            <p class="navbar-item navbar-splitter">|</p>
            <div class="nav-item-container grow">
                <router-link class="navbar-item" to="Portfolio"><h1 class="navbar-number">02.</h1>Portfolio</router-link>
            </div>
            <p class="navbar-item navbar-splitter">|</p>
            <div class="nav-item-container grow">
                <router-link class="navbar-item" to="About"><h1 class="navbar-number">03.</h1>About</router-link>
            </div>
            <p class="navbar-item navbar-splitter">|</p>
            <div class="nav-item-container grow">
                <router-link class="navbar-item" to="Contact"><h1 class="navbar-number">04.</h1>Contact</router-link>
            </div>
            <hr class="navbar-divider">
        </div>
    </div>
</template>

<style scoped>
    @import '../assets/styles/navbarStyle.css';
</style>

<script>
export default{
    inject: ['$bus']
}
</script>

