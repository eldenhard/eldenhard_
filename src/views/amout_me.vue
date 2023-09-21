<template>
    <div style=" display: flex;
    flex-direction: column;">

        <transition name="fade">
            <div v-if="isTitleVisible" class="test">
                <div class="title">
                    <h1 class="title__text">
                        <span class="title__text__first underline">

                            <span class="underline-text title__text__first">
                                Frontend-Developer

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

                    <img src="../assets//images//I.JPG" alt="my_photo">


                </div>

                <div class="about_description">

                    <h2 class="intro">Меня зовут Алексей. Мне {{ new Date().getFullYear() - 1998 }} лет<br>
                        Родом из г.Новочеркасска, Россия. Сейчас я живу в Москве.
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

        <h2 class="chavo">Где был ? Чаво видел?</h2>

        <div class="timeline-main">
            <div class="timeline-wrap">
                <div class="timeline-card">
                    <div class="timeline-card-wrap">
                        <div class="card-head-wrap">
                            <h2 class="timeline-card-head">ООО "Ай-Пи-Эм Групп"</h2>
                            <h6 class="timeline-card-subhead">Май 2021 — Март 2022</h6>
                        </div>
                        <ul class="timeline-card-text">
                            <li>Написание скриптов для легаси кода, выполняющих функции выгрузки, преобразования и загрузки данных; </li>
                            <li>Разработка макетов и графических элементов интерфейсов для
                            пользователя; </li>
                            <li>Контроль качества реализации интерфейса;</li>
                            <li>Разработка программного обеспечения обработки данных; </li>
                            <li>Проектирование и прототипирование интерфейсов программных решений</li>
                        </ul>
                    </div>
                </div>
                <div class="timeline-card">
                    <div class="timeline-card-wrap">
                        <div class="card-head-wrap">
                            <h2 class="timeline-card-head">ООО "ЛИДЕКС"</h2>
                            <h6 class="timeline-card-subhead">Март 2022 по наст. время</h6>
                        </div>
                        <ul class="timeline-card-text">
                            <li>Разработка Frontend с нуля;</li>
                            <li>Проектирование пользовательских интерфейсов;</li>
                            <li>Кроссбраузерная и адаптивная верстка;</li>
                            <li>Оптимизация, баг-фиксинг, рефакторинг;</li>
                            <li>Разработка клиент-серверных приложений;</li>
                            <li>SPA;</li>
                            <li>Адаптивная, кроссбраузерная вёрстка;</li>
                            <li>Ведение проектов;</li>


                        </ul>
                    </div>
                </div>

            </div>
        </div>


        <div class="voronka" :class="{ 'voronka-visible': isVoronkaVisible }">
            <div class="left_block">
                <p class="intro">
                    Давайте <a class="open_contacts" @click="showContats = !showContats">сотрудничать</a>, если вы
                    привержены
                    принципам устойчивого развития,
                    образования, равенства и ростом
                    над самим собой <br>
                </p>
                <p class="intro_mini">
                    Я считаю, что мы должны сохранить нашу планету в состоянии, которое не уступает текущему или, возможно,
                    даже
                    сделать ее лучше для будущих поколений. <br>
                    Моя цель - внести свой вклад в достижение этих целей любыми
                    доступными средствами. Если вы разделяете это убеждение, то нам с Вами по пути
                </p>
            </div>
            <transition name="right_blockfade">
                <div class="right_block" v-if="showContats">
                    <a href="https://t.me/Eldenhard" target="_blank"><img src="../assets//images/telegram.png" alt=""
                            width="60"></a>
                    <a href="https://vk.com/id61505095" target="_blank"><img src="../assets//images/vk.png" alt=""
                            width="60"></a>
                    <a href="https://github.com/eldenhard" target="_blank"><img src="../assets//images/github.png" alt=""
                            width="60"></a>
                    <p class="right_block__text">Контакты</p>
                </div>
            </transition>
        </div>


        <footer>
            <h4>© 2023 ELDENHARD <br>
                <h1 style="font-size: 12px; text-align: center; color: rgb(240, 248, 255, 0.5);">Решетило Алексей</h1>
            </h4>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isTitleVisible: false,
            hoveredImages: [false, false, false, false],
            showContats: false,
            isVoronkaVisible: false, // Добавляем новое состояние
            isTimelineVisible: false, // Добавл
        };
    },
    mounted() {
        this.isTitleVisible = true;
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        showHoverImage(index) {
            this.hoveredImages[index] = true;
        },
        hideHoverImage(index) {
            this.hoveredImages[index] = false;
        },
        openBlockContacts() {
            if (this.showContats == false) {
                console.log(document.querySelector('.right_block'))
            }
        },
        handleScroll() {
            // Получите позицию элемента .voronka относительно верха страницы
            const elementPosition = this.$el.querySelector('.voronka').getBoundingClientRect().top;

            // Вычислите высоту окна браузера
            const windowHeight = window.innerHeight;

            // Проверьте, виден ли элемент .voronka в окне браузера
            if (elementPosition < windowHeight) {
                this.isVoronkaVisible = true;
                // Удалите обработчик скролла после отображения элемента
                window.removeEventListener('scroll', this.handleScroll);
            }
        },
    },
    beforeDestroy() {
        // Удалите обработчик скролла при уничтожении компонента
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style lang="scss" scoped>
footer {
    flex: 0 0 auto;
    height: 10vh;
    width: 100%;
    z-index: 1;
    // background: black;
    font-family: var(--bodyFont);
    color: var(--color-beige);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6%;

}

.chavo {
    text-align: center;
    font-size: var(--font-h2);
    margin-top: 6%;
    color: var(--color-green400);
    font-family: 'Salwey';
    z-index: 5;
}

.timeline-main {
    width: 65%;
    padding: 25px;
    position: relative;
    left: 50%;
    margin-top: 2%;
    transform: translate(-50%, 0);

    .timeline-wrap {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 30px;

        &::before {
            content: "";
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: calc(100% - 10px);
            background-color: rgb(0, 40, 58, 0.8);
            animation: line 5s linear;

            @media (max-width: 767px) {
                left: 95%;
            }
        }

        .timeline-card {
            width: 50%;
            margin-right: auto;
            position: relative;

            @media (max-width: 767px) {
                width: 95%;
            }

            &::after {
                content: "";
                position: absolute;
                top: 10px;
                right: -10px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border: 3px solid #fff;
                background: rgb(0, 40, 58, 0.8);
                animation: fadeIn 1.5s;
                animation-fill-mode: both;
            }

            .timeline-card-wrap {
                height: 100%;
                margin-right: 35px;
                background-color: rgb(0, 40, 58, 0.8);
                border-radius: 10px;
                position: relative;
                padding: 30px;
                animation: fadeInRight 2.5s;
                animation-fill-mode: both;

                @media (max-width: 767px) {
                    padding: 20px;
                }

                &::before {
                    content: "";
                    position: absolute;
                    left: 30px;
                    top: -8px;
                    height: 8px;
                    width: calc(100% - 60px);
                    background-color: rgb(0, 40, 58, 0.8);
                    border-radius: 5px 5px 0 0;
                    opacity: 0.3;
                }

                // &::after {
                //   content: "";
                //   position: absolute;
                //   top: 10px;
                //   right: -8px;
                //   width: 20px;
                //   height: 20px;
                //   background-color:  rgb(0, 40, 58, 0.8);
                //   border-radius: 5px;
                //   transform: rotate(45deg);
                // }
                .card-head-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;

                    @media (max-width: 1199px) {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 10px;
                    }

                    .timeline-card-head {
                        font-size: 28px;
                        line-height: 38px;
                        font-weight: 500;
                        color: #fff;
                        margin-bottom: 0;

                        @media (max-width: 767px) {
                            font-size: 18px;
                            line-height: 28px;
                        }
                    }

                    .timeline-card-subhead {
                        font-size: 16px;
                        line-height: 26px;
                        font-weight: 400;
                        color: #bdbdbd;
                        margin-bottom: 0;
                        font-style: italic;

                        @media (max-width: 767px) {
                            font-size: 14px;
                            line-height: 24px;
                        }
                    }
                }

                .timeline-card-text {
                    font-size: var(--16px);
                    line-height: 24px;
                    font-weight: 400;
                    color: var(--color-beige);
                    line-height: 20px;
                    margin: 25px 0 0 4%;

                    @media (max-width: 767px) {
                        font-size: 12px;
                        line-height: 22px;
                    }
                }
            }

            &:nth-child(even) {
                @media (min-width: 768px) {
                    margin-left: auto;
                    margin-right: 0;

                    &::after {
                        right: unset;
                        left: -10px;
                        animation-delay: 2.6s;
                    }

                    .timeline-card-wrap {
                        margin-right: 0;
                        margin-left: 35px;
                        animation: fadeInLeft 2.5s;
                        animation-fill-mode: both;
                        animation-delay: 2.5s;

                        &::after {
                            right: unset;
                            border-left: none;
                            left: -8px;
                            border-right: 10px solid rgb(0, 40, 58, 0.8);
                        }
                    }
                }
            }
        }
    }
}

@keyframes line {
    0% {
        height: 0;
    }

    100% {
        height: calc(100% - 10px);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translateX(20px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-20px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.open_contacts {
    animation: blink 1s linear infinite;
    cursor: pointer;
    font-style: italic;
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.8;
    }

    100% {
        opacity: 1;
    }
}


.voronka {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 2s, transform 2s;
    padding: 20px;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Стили для видимого блока .voronka */
.voronka-visible {
    opacity: 1;
    transform: translateY(0);
}

/* Добавьте стили для анимации появления .right_block */
.right_blockfade-enter-active,
.right_blockfade-leave-active {
    transition: opacity 0.5s;
}

.right_blockfade-enter,
.right_blockfade-leave-to {
    opacity: 0;
}

.voronka {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    width: 60%;
    margin-top: 6%;
    text-align: left;
    display: flex;
    justify-content: space-between;


    .left_block {
        width: 70%;

        .intro_mini {
            margin-top: 2%;
            font-size: var(--24px);
            color: var(--color-beige);
        }
    }

    .right_block {

        width: 30%;
        display: flex;
        flex-direction: column;
        margin-top: 4%;
        gap: 8%;
        align-items: center;
        align-content: center;

        .right_block__text {
            color: var(--color-green400);
            font-family: 'Salwey';
            font-size: 35px;
            display: flex;
            justify-content: flex-end;
        }
    }
}


.voronka-hidden {
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
    /* Чтобы элемент не был интерактивным при скрытии */
}

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
    text-transform: uppercase;
    color: var(--color-green400);
    background-image: linear-gradient(45deg, rgb(143, 220, 194), rgb(86, 181, 184));
    -webkit-background-clip: text;
    /* меняет цвет текста заголовка на прозрачный что бы можно было увидеть градиент*/
    -webkit-text-fill-color: transparent;
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
    height: 63vh;
    width: 50%;
    border-radius: 10px;
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