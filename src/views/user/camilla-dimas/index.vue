<script setup>
import NavOne from '../../components/NavOne.vue'
</script>

<template>
    <div>
        <!-- NavOne -->
        <NavOne />
        <!-- Main -->
        <div>
            <div class='anima'>
                <h1>Leandro Cesar</h1>
                <router-link to="/user/2"></router-link>
                <router-link to="/user/2"></router-link>
                <RouterView />
            </div>
        </div>

        <!-- NavBottom -->
        <div class="nav-bottom">
            <RouterLink to='/:id/' @click.native="scrollToTop()">
                <i class="fas fasi-nav fa-home"></i>
                <h5>INÍCIO</h5>
            </RouterLink>
            <RouterLink to='/:id/treino' @click.native="scrollToTop()">
                <i class="fa-solid fa-dumbbell"></i>
                <h5>SÉRIES</h5>
            </RouterLink>
            <RouterLink to='/:id/avaliacao' @click.native="scrollToTop()">
                <i class="fa-solid fa-clipboard-check"></i>
                <h5>AVALIAÇÕES</h5>
            </RouterLink>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
    head: {
        title: 'Leandro Cesar',
        htmlAttrs: {
            lang: 'pt-br'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Professor Leandro Cesar Ramos da Costa | Site para Conteúdos e Serviços => Personal Trainer | Consultoria Online e Presencial | Acupuntura | Atendimentos em Niterói e São Gonçalo - RJ' },
            { hid: 'keywords', name: 'description', content: 'Personal trainer, Acupuntura, Consultoria' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
            { rel: 'shortcut icon', type: 'image/x-icon', href: '/img/favicon.svg' },
            { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', size: '32x32', href: '/img/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', size: '16x16', href: '/img/favicon-16x16.png' },
            { rel: 'apple-touch-icon', size: '180x180', href: '/img/apple-touch-icon.png' },
            { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#002937' }
        ],
    }
}
</script>

<style scoped>
/*  */

/* Nav-One */
.nav-one {
    height: 35px;
    position: sticky;
    top: -2px;
    background: #fff;
    z-index: 10;
    border-radius: 0% 0% 10% 10%;
    box-shadow: 0px .5px 5px #eee;
    z-index: 10;
}

.nav-one div {
    display: flex;
    justify-content: center;
    flex-direction: row;
}

.nav-one h1 {
    color: #095d62;
    transition: all .3s linear;
    cursor: pointer;
    font-size: 1.1em;
    margin: 5px 0 0 0;
    text-align: center;
}

.nav-one a {
    text-decoration: none;
    cursor: pointer;
    margin: 0 14px 0 6px;
    font-size: 1.2em;
}

.nav-one i {
    color: #aaa;
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
}

.nav-one i:hover {
    color: #fadb41;
    margin-top: 8px;
    display: flex;
    justify-content: flex-end;
}

i {
    font-size: 1.1em;
}

/* Nav-Bottom */
h5 {
    margin: 9px 0 13px 0;
    font-size: .6em;
}

i {
    font-size: 1.1em;
}

.nav-bottom {
    position: fixed;
    bottom: .1px;
    width: 100%;
    background-color: #fff;
    color: #dbd1d1;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    align-self: center;
    line-height: 0;
    border-radius: 10% 10% 0% 0%;
    box-shadow: 0px 2px 3px #000;
}

.nav-bottom div {
    cursor: pointer;
}

.nav-bottom div h5 {
    margin: 0;
    padding: 0;
    font-size: 1em;
}

.nav-bottom a {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    align-self: center;
    color: #888;
    font-size: .9em;
    margin: 10px 0 0px 0;
}

.nav-bottom a:hover {
    text-shadow: 0px 0px .5px black;
}


.nav-bottom a.RouterLink-exact-active {
    color: #000;
}
</style>