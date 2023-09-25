<template>
  <div :class="[defaultClass, activeScroll]">
    <div class="navbar__content">
      <router-link to="/" class="navbar__content__link">
        Работы
      </router-link>
      <router-link to="/about" class="navbar__content__link">
        Обо мне
      </router-link>
      <router-link to="/hobby" class="navbar__content__link">
        Хобби
      </router-link>
      <div class="navbar__content__link ">Контакты</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultClass: 'navbar content-overlay',

    };
  },
  computed: {
    activeScroll() {
      return this.isScrolled ? 'active' : '';
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = 10;

      if (scrollTop > scrollThreshold) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    handleClick(linkName) {
      this.prevActiveLink = this.activeLink;
      this.activeLink = linkName;
    },
  },
};
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

    transition: background 0.3s ease;
    display: flex;
    justify-content: center;
    width: min(70%, 500px);
    z-index: 10000000000000000000000;
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
    padding: 1.5% min(5%, 1vw);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(197, 197, 197);
    font-weight: 500;
    white-space: nowrap;
    border-radius: var(--radius-nav) !important;
    cursor: pointer;
    text-decoration: none;
    font-size: min(16px, 3vw);

}

.content-overlay {
    backdrop-filter: blur(10px);
    /* Размытие заднего фона */
    transition: backdrop-filter 0.3s ease;
}
.active{
  background: rgba(59, 189, 145, 0.92) ;
}


.router-link-active {
  background: rgba(87, 141, 121, 0.6);
  border-radius: var(--radius-nav);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-beige);
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  padding: 1.5% 3%;
  transition: background 1s ease, color 1s ease;
}


</style>