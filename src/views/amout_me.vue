<template>
    <div>

        <transition name="fade">
            <div v-if="isTitleVisible" class="test">
                <div class="title">
                    <h1 class="title__text">
                        <span class="title__text__first underline">

                            <span class="underline-text title__text__first">
                                <span class="upper">F</span>rontend-<span class="upper">D</span>eveloper

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                                    <path d="M5,125.4c30.5-3.8,137.9-7.6,177.3-7.6c117.2,0,252.2,4.7,312.7,7.6"></path>
                                    <!-- <path d="M26.9,143.8c55.1-6.1,126-6.3,162.2-6.1c46.5,0.2,203.9,3.2,268.9,6.4"></path> -->
                                </svg></span>




                        </span>
                    </h1>
                </div>

            </div>
        </transition>
        <transition name="fade">
            <div class="about" id="about_block">

                <div class="about_picture">
                    <div></div>
                    <img src="../assets//images//me.png" alt="my_photo">


                </div>

                <div class="about_description">

                    <h2 class="intro">Меня зовут Алексей. Мне {{ new Date().getFullYear() - 1998 }} лет<br>
                        Родом из г.Новочеркасска, Ростовской области. Сейчас я живу в Москве.
                    </h2>
                    <h4 class="descriptio_about_me">
                        За последние 2.5 с лишним года я работал в различных областях цифрового дизайна, включая
                        фронтенд-разработку, электронную почту, маркетинг и UI/UX приложений. Я горжусь тем, что носил много
                        шляп.
                        <br><br>
                        В настоящее время я занимаюсь созданием внутренней корпоративной системы железнодорожной компании
                        Транспортные Технологии
                        в качестве Frontend-разработчика.
                    </h4>

                    <div class="mystack">
                        <p class="mystack_description">Мой стэк</p>
                        <div class="mystack_icon">
                            <div class="hover-container" @mouseover="showHoverImage(0)" @mouseout="hideHoverImage(0)">
                                <img src="../assets//images/vue.png" alt="">
                                <ul v-if="hoveredImages[0]" class="hover-list">
                                    <li>Vue 2-3</li>
                                    <li>VueX</li>
                                    <li>VueRouter</li>
                                </ul>
                            </div>
                            <div class="hover-container" @mouseover="showHoverImage(1)" @mouseout="hideHoverImage(1)">
                                <img src="../assets//images/html.png" alt="">
                                <ul v-if="hoveredImages[1]" class="hover-list">
                                    <li>HTML5</li>
                                </ul>
                            </div>
                            <div class="hover-container" @mouseover="showHoverImage(2)" @mouseout="hideHoverImage(2)">
                                <img src="../assets//images/css.png" alt="">
                                <ul v-if="hoveredImages[2]" class="hover-list">
                                    <li>CSS3</li>
                                    <li>Sass/SCSS</li>
                                </ul>
                            </div>
                            <div class="hover-container" @mouseover="showHoverImage(3)" @mouseout="hideHoverImage(3)">
                                <img src="../assets//images/js.png" alt="">
                                <ul v-if="hoveredImages[3]" class="hover-list">
                                    <li>JavaScript</li>
                                    <li>ES6-10</li>
                                    <li>AmCharts</li>
                                    <li>Axios</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <!-- <gameVue /> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            isTitleVisible: false,
            hoveredImages: [false, false, false, false],
        };
    },
    mounted() {
        this.isTitleVisible = true;
    },
    methods: {
        showHoverImage(index) {
            this.hoveredImages[index] = true;
        },
        hideHoverImage(index) {
            this.hoveredImages[index] = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.hover-container {
    position: relative;
    display: inline-block;
}

.hover-list {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: transparent;
    padding: 10px;
    color: var(--color-beige);
    font-weight: normal;
    margin-top: 4%;
    font-size: 22px;
    list-style: '✔ ';
    margin: 0;
    display: none;
}

.hover-container:hover .hover-list {
    transition: 0.5 ease;
    display: block;
}

.mystack {
    margin-top: 2%;
}

.mystack_description {
    text-align: left;
    font-family: 'Salwey';
    color: var(--color-green400);
    font-size: var(--42px);
}

.mystack_icon {
    margin-top: 2%;
    width: 50%;
    display: flex;
    justify-content: space-between;
    position: relative;

    img {
        filter: grayscale(90%);
    }

    :hover {
        filter: grayscale(0);
        transition: 1s ease;
        cursor: pointer;
    }

}

.upper {
    text-transform: uppercase;
}

.descriptio_about_me {
    color: var(--color-beige);
    font-weight: normal;
    margin-top: 4%;
    font-size: 22px;
    line-height: 26px;
    font-family: gt, -apple-system, BlinkMacSystemFont, «Segoe UI», Roboto, Oxygen, Ubuntu, Cantarell, «Open Sans», «Helvetica Neue», sans-serif;
}

.quote {
    width: 41vw;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 4%;
    font-size: var(--16px);
    font-family: var(--bodyFont);
    color: var(--color-description);
}

.title {
    opacity: 1;
    position: relative;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    margin-top: 8%;
    display: flex;
    justify-content: center;

    .about_description {
        justify-content: end;
    }
}

.fade-enter-active {
    transition: all .5s ease-out;
}

.fade-leave-active {
    transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateY(-2%);
    opacity: 0;
}


.title__text {
    display: flex;
    flex-direction: column;
}

.title__text__first {
    text-align: center;
    font-size: 6vw;
}



.upper {
    font-size: 7vw;
}



.about {
    margin-top: 8%;
    position: relative;
    width: 65%;
    display: flex;
    left: 50%;
    transform: translate(-50%, 0);
    gap: 5%;
    z-index: 30000000 !important;
}

.about_picture {
    height: 50vh;
    width: 30%;
    // clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 15%);


    resize: both;
    // border-radius: 50% 50% 0 0;
    // border: 5px solid var(--color-green300);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
}

.intro {
    color: var(--color-green400);
    font-family: 'Salwey';
    font-size: var(--font-h2);
}

.about_description {
    width: 70%;
}


.underline {
    font-family: var(--titleFont);
    color: var(--color-green400);
    font-size: 32px;
    line-height: 50px;
    // margin: 20px 0;
    text-align: center;
}

.underline span {
    position: relative;
}

.underline svg {
    position: absolute;
    width: 100%;
    height: 200px;
    left: 0;
    top: 0;
    z-index: -1;
}

.underline svg path {
    stroke: rgb(250, 250, 250);
    stroke-width: 9;
    fill: none;
    animation: underline 10s infinite;
    animation-delay: 0s;
    opacity: 0;
}

.underline svg path+path {
    animation-delay: 0.5s;
}

@keyframes underline {
    0% {
        stroke-dasharray: 0 1500;
        opacity: 1;
    }

    15% {
        stroke-dasharray: 1500 1500;
    }

    85% {
        opacity: 1;
    }

    90% {
        stroke-dasharray: 1500 1500;
        opacity: 0;
    }

    100% {
        stroke-dasharray: 0 1500;
        opacity: 0;
    }
}
</style>