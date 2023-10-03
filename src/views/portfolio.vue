<template>
    <div class="gradient-container">


        <transition name="fade">
            <div v-if="isTitleVisible" class="test">
                <div class="title">
                    <h1 class="title__text">
                        <span class="title__text__first">
                            Привет. <span class="upper">Я</span> <span class="upper">А</span>лексей.
                            <transition name="star"><img src="../assets/images/star-2.svg" alt="star"
                                    class="title__text__icon" v-if="isStar1"></transition>
                        </span>

                        <span class="title__text__second">
                            Frontend-<span class="upper">D</span>eveloper.
                            <transition name="star"><img src="../assets/images/star-2.svg" alt="star"
                                    class="title__text__icon_second" v-if="isStar2"></transition>
                        </span>
                    </h1>
                </div>

                <div class="quote">
                    <!-- <blockquote cite="http://www.world.org/zenit/index.html"> Большинство хороших программистов делают свою работу
                не потому, что ожидают оплаты или признания, а потому что получают удовольствие от программирования.
                .</blockquote> -->
                    <blockquote>
                        <p> Большинство хороших программистов делают свою работу
                            не потому, что ожидают оплаты или признания, а потому что получают удовольствие от
                            программирования.
                        </p>
                        <footer>— <cite>Linus Torvalds</cite></footer>
                    </blockquote>
                </div>
            </div>
        </transition>


        <div class="my_portfolio">
            <section class="section1">
                <aestheticaVue />
            </section>
            <section class="section2">
                <transtachVue />
            </section>
        </div>


        <!-- <div class="my_portfolio_second">
            <section class="section3">
                <elldenhardViewVue />
            </section>
            <section class="section4">
                <transtachVue />
            </section>
        </div> -->

    </div>
</template>

<script>
import aestheticaVue from '../components/common/aesthetica.vue';
import elldenhardViewVue from '../components/common/elldenhardView.vue';
import transtachVue from '../components/common/transtach.vue';

export default {
    components: { aestheticaVue, transtachVue, elldenhardViewVue },
    data() {
        return {
            isTitleVisible: false,
            isStar1: false,
            isStar2: false
        }
    },
    mounted() {
        this.isTitleVisible = true;
        setTimeout(() => {
            this.isStar1 = true;
            this.isStar2 = true;

            // Ждем завершения анимации (200ms), после чего выполняем дополнительный код
            // setTimeout(() => {
            //     let element = document.getElementById("about_block");
            //     if (element) {
            //         element.scrollIntoView({ behavior: "smooth" });
            //     }
            // }, 300);
        }, 600);
    },
    methods: {
        delay(ms) {
            return new Promise((resolve, reject) => setTimeout(resolve, ms))
        }
    }
}
</script>

<style lang="scss" scoped>
.my_portfolio_second{
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 85vw;
    margin-top: 10vh;
    gap: 5%;
    display: flex;

    // background: white;
    .section3{
        width: 60%;
    }
    .section4{
        width: 40%;

    }
}
.my_portfolio{
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 85vw;
    margin-top: 10vh;
    gap: 5%;
    display: flex;

    // background: white;
    .section1{
        width: 40%;
    }
    .section2{
        width: 60%;

    }
}
.quote {
    // z-index: 30000000 !important;
    width: 41vw;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 5%;
    font-size: var(--16px);
    font-family: var(--bodyFont);
    color: var(--color-description);
}

.title {
    z-index: 30000000 !important;
    opacity: 1;
    position: relative;
    left: 50%;
    transform: translateX(-50%) translateY(-20px);
    margin-top: 8%;
    display: flex;
    justify-content: center;
}

.fade-enter-active {
    transition: all .3s ease-out;
}

.fade-leave-active {
    transition: all 1.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter-from,
.fade-leave-to {
    transform: translateY(-2%);
    opacity: 0;
}

// .fade-enter-active,
// .fade-leave-active {
//     transition: opacity 2s ease;
// }

// .fade-enter-from,
// .fade-leave-to {
//     opacity: 0;
// }


.star-enter-active,
.star-leave-active {
    transition: opacity 1s ease-in;
}

.star-enter-from,
.star-leave-to {
    opacity: 0;
}


blockquote {
    margin: 0;
    color: var(--color-description);
    padding: 30px 30px 30px 90px;
    position: relative;
    font-family: 'Lato', sans-serif;
    font-weight: 200;
    white-space: normal;
}

blockquote:before {
    content: "\201C";
    font-family: serif;
    position: absolute;
    left: 20px;
    top: 20px;
    color: white;
    // background: #FB6652;
    border: 1px solid white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 50px;
    line-height: 1.35;
    text-align: center;
}

blockquote p {
    margin: 0 0 16px;
    font-size: 20px;
    letter-spacing: .05em;
    line-height: 1.4;
}

blockquote cite {
    font-style: normal;
}

footer {
    position: absolute;
    bottom: 0;
    right: 5%;
}

.title__text {
    display: flex;
    flex-direction: column;
}

.title__text__first {
    text-align: center;
    font-size: 6vw;
}

.title__text__second {
    font-size: 5vw;
    line-height: 0.8;
    text-align: center;
}

.title__text__first,
.title__text__second {
    // font-family: 'ambidexter';
    font-family: var(--titleFont);
    color: var(--color-green400);
    background-image: linear-gradient(45deg, rgb(143, 220, 194), rgb(86, 181, 184));
    -webkit-background-clip: text;
    /* меняет цвет текста заголовка на прозрачный что бы можно было увидеть градиент*/
    -webkit-text-fill-color: transparent;
    position: relative;
}

.upper {
    font-size: 7vw;
}

.title__text__first:first-letter {
    font-size: 9vw
}

.title__text__second:first-letter {
    font-size: 7vw;
}

.title__text__icon {
    position: absolute;
    top: -7%;
    right: -10%;
}

.title__text__icon_second {
    position: absolute;
    left: -10%;
    bottom: -25%;

}
</style>