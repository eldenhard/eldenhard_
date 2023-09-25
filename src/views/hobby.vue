<template>
  <div style=" display: flex;flex-direction: column;">


    <transition name="fade">
      <div v-if="isTitleVisible" class="test">
        <div class="title">
          <h1 class="title__text">
            <span class="title__text__first">
              Чем живу.
              <transition name="star"><img src="../assets/images/star-2.svg" alt="star" class="title__text__icon"
                  v-if="isStar1"></transition>
            </span>

          </h1>
        </div>

      </div>
    </transition>

    <!-- <div class="hobby_description">
            <div class="hobby_description_one">
                <div class="hobby_description__text">Путешествия</div>
                <div class="hobby_description__text">Сапборд</div>
                <div class="hobby_description__text">Программирование</div>
            </div>
            <div class="hobby_description_one">
                <div class="hobby_description__text">Гитара</div>
                <div class="hobby_description__text">Акробатика</div>
                <div class="hobby_description__text">Лонгборд</div>
            </div>
        </div> -->

    <transition class="fade">
      <div id="gallery">
        <div><img src="../assets//images//hobby/IMG_1081.JPG" /><a href="#lightbox-1">Горный Алтай</a></div>
        <div><img src="../assets//images//hobby/IMG_1630.JPG" /><a href="#lightbox-2">Горный Алтай</a></div>
        <div><img src="../assets//images//hobby/IMG_2453.png" /><a href="#lightbox-3">р. Дон</a></div>
        <div><img src="../assets//images//hobby/IMG_0449.JPG" /><a href="#lightbox-4">Баботов Кук</a></div>
        <div><img src="../assets//images//hobby/IMG_5621.png" /><a href="#lightbox-5">516</a></div>
        <div><img src="../assets//images//hobby/IMG_5121.png" /><a href="#lightbox-6">517</a></div>
        <div><img src="../assets//images//hobby/IMG_5023.JPG" /><a href="#lightbox-7">518</a></div>
        <div><img src="../assets//images//hobby/IMG_7252.png" /><a href="#lightbox-8">519</a></div>
        <div><img src="../assets//images//hobby/IMG_5582.JPG" /><a href="#lightbox-9">520</a></div>
        <div><img src="../assets//images//hobby/IMG_8618.png" /><a href="#lightbox-10">521</a></div>
        <div><img src="../assets//images//hobby/GOPR9783.JPG" /><a href="#lightbox-11">522</a></div>
        <div><img src="../assets//images//hobby/IMG_2290.png" /><a href="#lightbox-12">523</a></div>
        <div><img src="../assets//images//hobby/photo_4_2023-09-22_16-11-06.jpg" /><a href="#lightbox-13">524</a></div>
        <div><img src="../assets//images//hobby/GOPR9541.JPG" /><a href="#lightbox-14">525</a></div>
        <div><img src="../assets//images//hobby/GOPR9487.JPG" /><a href="#lightbox-15">526</a></div>
        <div><img src="../assets//images//hobby/IMG_4709.png" /><a href="#lightbox-16">527</a></div>
        <div><img src="../assets//images//hobby/photo_5_2023-09-22_16-11-06.jpg" /><a href="#lightbox-17">528</a></div>
        <div><img src="../assets//images//hobby/photo_5_2023-09-22_16-11-06.jpg" /><a href="#lightbox-18">528</a></div>
      </div>
    </transition>
    <div class="lightbox" id="lightbox-1">
      <div class="content"><img src="../assets//images//hobby/IMG_1081.JPG" />
        <div class="title">No. <b>512</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-2">
      <div class="content"><img src="../assets//images//hobby/IMG_1630.JPG" />
        <div class="title">No. <b>513</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-3">
      <div class="content"><img src="../assets//images//hobby/IMG_2453.JPG" />
        <div class="title">No. <b>514</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-4">
      <div class="content"><img src="../assets//images//hobby/IMG_0449.JPG" />
        <div class="title">No. <b>515</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-5">
      <div class="content"><img src="../assets//images//hobby/IMG_5621.png" />
        <div class="title">No. <b>516</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-6">
      <div class="content"><img src="../assets//images//hobby/IMG_5121.png" />
        <div class="title">No. <b>517</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-7">
      <div class="content"><img src="../assets//images//hobby/IMG_5023.JPG" />
        <div class="title">No. <b>518</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-8">
      <div class="content"><img src="../assets//images//hobby/IMG_7252.png" />
        <div class="title">No. <b>519</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-9">
      <div class="content"><img src="../assets//images//hobby/IMG_5582.JPG" />
        <div class="title">No. <b>520</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-10">
      <div class="content"><img src="../assets//images//hobby/IMG_8618.png" />
        <div class="title">No. <b>521</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-11">
      <div class="content"><img src="../assets//images//hobby/GOPR9783.JPG" />
        <div class="title">No. <b>522</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-12">
      <div class="content"><img src="../assets//images//hobby/IMG_2290.png" />
        <div class="title">No. <b>523</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-13">
      <div class="content"><img src="../assets//images//hobby/photo_4_2023-09-22_16-11-06.jpg" />
        <div class="title">No. <b>524</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-14">
      <div class="content"><img src="../assets//images//hobby/GOPR9541.JPG" />
        <div class="title">No. <b>525</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-15">
      <div class="content"><img src="../assets//images//hobby/GOPR9487.JPG" />
        <div class="title">No. <b>526</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-16">
      <div class="content"><img src="../assets//images//hobby/IMG_4709.png" />
        <div class="title">No. <b>527</b> </div><a class="close" href="#gallery"></a>
      </div>
    </div>
    <div class="lightbox" id="lightbox-17">
      <div class="content"><img src="../assets//images//hobby/photo_5_2023-09-22_16-11-06.jpg" />
        <div class="title">No. <b>528</b> </div><a class="close" href="#gallery"></a>
      </div>
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
      isStar1: false,
      isStar2: false,
    }
  },
  mounted() {
    this.isTitleVisible = true;

    setTimeout(() => {
      this.isStar1 = true;
      this.isStar2 = true;
      // setTimeout(() => {
      //   this.showGalery = true
      // }, 250)
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
.fade{
  animation-duration: 3s;
  animation-name: animate;
}
@keyframes animate {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
  
}
// .fade-enter-active, .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter-active, .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active в версии ниже 2.1.8 */ {
//   opacity: 1;
// }

footer {
  flex: 0 0 auto;
  height: 10vh;
  width: 100%;
  z-index: 10000 !important;
  // background: black;
  font-family: var(--bodyFont);
  color: var(--color-beige);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 6%;

}

.content {
  object-fit: cover;
}

#gallery {
  width: 98%;
  margin: 2% 1% 0 1%;
  display: grid;
  height: calc(100vh - 10px);
  grid-template: repeat(6, 1fr)/repeat(6, 1fr);
  grid-gap: 0.5em;
}

@media (max-width: 800px) {
  #gallery {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
  }

  #gallery>div {
    width: 48%;
    margin: 1%;
  }
}

@media (max-width: 800px) and (max-width: 350px) {
  #gallery>div {
    width: 98%;
  }
}

#gallery>div:nth-child(6n+1) {
  grid-column: span 2;
  grid-row: span 2;
}

#gallery>div:nth-child(2) {
  grid-column: span 3;
  grid-row: span 3;
}

#gallery>div:nth-child(4) {
  grid-column: span 1;
  grid-row: span 2;
}

#gallery>div>a {
  opacity: 0;
  position: absolute;
  color: #000;
  background-color: #000;
  font: bold 4em "Helvetica";
  text-shadow: 0 -1px 5px #fff, -1px 0px 5px #fff, 0 1px 5px #fff, 1px 0px 5px #fff;
  padding: 2rem;
  mix-blend-mode: difference;
  width: 100%;
  height: 100%;
  transition: all ease 1s;
}

#gallery>div>img {
  width: 100%;
  min-height: 100%;
  transition: all ease 1s;
}

#gallery>div:hover img {
  filter: blur(4px);
}

#gallery>div:hover a {
  opacity: 1;
}

#gallery>div {
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
}

#gallery div,
#gallery a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

[id^=lightbox-] {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  opacity: 0;
  transition: opacity 450ms ease-in-out;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

[id^=lightbox-]:target {
  opacity: 1;
  pointer-events: inherit;
}

[id^=lightbox-]:target img {
  filter: blur(0);
}

[id^=lightbox-] .content {
  max-width: 90%;
  position: relative;
  color: #fff;
}

[id^=lightbox-] .content:hover>a.close {
  opacity: 1;
  transform: scale(1, 1);
}

[id^=lightbox-] .content:hover>.title {
  opacity: 1;
  transform: translateY(-3px);
}

[id^=lightbox-] .content:hover>.title::after {
  opacity: 1;
}

[id^=lightbox-] .content>* {
  transition: all 450ms ease-in-out;
}

[id^=lightbox-] .title {
  display: block;
  margin: 0;
  padding: 1em;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(50%);
  font-size: 1.5em;
  opacity: 0;
}

[id^=lightbox-] .title::after {
  content: " ";
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  transition: all 350ms ease-in-out 250ms;
  opacity: 0;
  transform-origin: bottom;
  mix-blend-mode: soft-light;
}

[id^=lightbox-] img {
  max-height: 90vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
  filter: blur(50px);
}

[id^=lightbox-] a.close {
  width: 2em;
  height: 2em;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0, 0);
  opacity: 0;
  transform-origin: right top;
  text-decoration: none;
  color: #fff;
}

[id^=lightbox-] a.close::after {
  content: "X";
}




.hobby_description {
  width: 25vw;

  display: flex;
  flex-direction: column;
  // justify-content: space-between;

  margin-left: 2%;

  .hobby_description_one {
    display: flex;
    justify-content: flex-start;
    gap: 2%;
    margin-top: 2%;

    .hobby_description__text {
      padding: 1% 2%;
      white-space: nowrap;
      border-radius: 10px;
      background: rgb(233, 233, 233, 0.8);
      color: black;
      font-family: gt, -apple-system, BlinkMacSystemFont, «Segoe UI», Roboto, Oxygen, Ubuntu, Cantarell, «Open Sans», «Helvetica Neue», sans-serif;
    }
  }
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