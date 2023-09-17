<template>
    <div :class="[defaultClass, activeScroll]">
        <div class="navbar__content">
            <div class="navbar__content__link active_link">Обо мне</div>
            <div class="navbar__content__link ">Работы</div>
            <div class="navbar__content__link ">Хобби</div>
            <div class="navbar__content__link ">Контакты</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            defaultClass: 'navbar content-overlay',
            isScrolled: false,
        }
    },
    computed: {
        activeScroll() {
            return this.isScrolled ? 'active' : ''; // Условное добавление класса
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Вычислите, насколько прокручен пользователь
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            //  после которого смена класса
            const scrollThreshold = 10;

            // прокрутил ли пользователь достаточно, чтобы изменить класс
            if (scrollTop > scrollThreshold) {
                this.isScrolled = true;
            } else {
                this.isScrolled = false;

            }
        },

    },
}

</script>


<style lang="scss" scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: var(--radius-nav);
    background: none;
    margin-top: 1%;
    padding: 1rem;
    z-index: var(--zindex-navbar);
    transition: background 0.3s ease;
    display: flex;
    justify-content: center;
    width: 25vw;
    /* Ширина навбара */
}

.navbar__content {
    display: flex;
    justify-content: space-between;
    gap: 2%;
    flex-wrap: wrap;
    /* Разрешаем перенос элементов */
    width: 100%;
    /* Ширина контейнера для элементов, чтобы они переносились при уменьшении */
}

.navbar__content__link {
    flex: 1;
    /* Распределение пространства между элементами */
    max-width: calc(20% - 1rem);
    /* Максимальная ширина каждого элемента */
    padding: 1.5% 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(197, 197, 197);
    font-weight: 500;
    white-space: nowrap;
    border-radius: var(--radius-nav) !important;
    cursor: pointer;
}

.content-overlay {
    backdrop-filter: blur(15px);
    /* Размытие заднего фона */
    transition: backdrop-filter 0.3s ease;
}

.active {
    background: rgb(43, 76, 64, 0.8);
    border-radius: var(--radius-nav);
}

.active_link {
    background: #b9cac4;
    border-radius: var(--radius-nav);
    color: black;
}

// .navbar {
//     position: fixed;
//     top: 0;
//     left: 50%;
//     transform: translate(-50%, 0);

//     border-radius: var(--radius-nav);
//     background: none;
//     margin-top: 1%;
//     padding: 1rem;
//     z-index: var(--zindex-navbar);
//     transition: background 0.3s ease;
// }

// .slideon {
//     background: #203A30 !important;
//     backdrop-filter: blur(5px) !important;
// }

// .navbar__content {
//     display: flex;
//     justify-content: space-between;
//     gap: 4%;
// }

// .navbar__content__link {
//     width: 25%;
//     padding: 1.5% 3%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: rgb(197, 197, 197);
//     font-weight: 500;
//     white-space: nowrap;
//     border-radius: var(--radius-nav) !important;
//     cursor: pointer;
// }

// .active {
//     background: rgb(43, 76, 64, 0.8);
//     border-radius: var(--radius-nav);
// }</style>