<template>
    <div :class="[defaultClass, activeScroll]">
        <div class="navbar__content">
            <div class="navbar__content__link active">Обо мне</div>
            <div class="navbar__content__link ">Работы</div>
            <div class="navbar__content__link ">Технологии</div>
            <div class="navbar__content__link ">Хобби</div>
            <div class="navbar__content__link ">Контакты</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            defaultClass: 'navbar',
            isScrolled: false,
        }
    },
    computed: {
        activeScroll() {
            return this.isScrolled ? 'slideon' : ''; // Условное добавление класса
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
            const scrollThreshold = 50;

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
    width: 30vw;
    border-radius: var(--radius-nav);
    background: none;
    margin-top: 1%;
    padding: 1rem;
    z-index: var(--zindex-navbar);
    transition: background 0.3s ease;
}

.slideon {
    background: #203A30 !important;
    opacity: 0.96;
}

.navbar__content {
    display: flex;
    justify-content: space-between;
    gap: 4%;
}

.navbar__content__link {
    width: 25%;
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

.active {
    background: rgb(43, 76, 64, 0.8);
    border-radius: var(--radius-nav);
}
</style>