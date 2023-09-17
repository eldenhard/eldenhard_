<template>
    <div>
              
        <transition name="fade">
            <div v-if="isTitleVisible" class="test">
                <div class="title">
                    <h1 class="title__text">
                        <span class="title__text__first">
                          <span class="upper">F</span>rontend-<span class="upper">D</span>eveloper
                           
                        </span>

                       
                    </h1>
                </div>

            </div>
        </transition>
 
    <div class="about" id="about_block">
        <div class="about_picture">
            <img src="../assets//images//me.png" alt="my_photo">
        </div>
        <div class="about_description">

            <h2 class="intro">Привет! Меня зовут Алексей, и я - молодой и амбициозный Frontend-разработчик. Мне 25 лет,
                родился маленьком городке - Новочеркасске, Россия. Сейчас жиу в Москве.
            </h2>
            Мое программирование началось как хобби и стало моей профессиональной страстью. Мои навыки и опыт позволяют
            мне создавать удивительные веб-приложения и интерфейсы. Я специализируюсь в разработке, создании макетов и
            графических элементов интерфейсов. Моя цель - сделать ваши идеи визуально привлекательными и
            функциональными.

            Я готов к новым проектам и всегда ищу возможность улучшить свои навыки и знания в сфере веб-разработки.
            Готов к работе в различных режимах, включая удаленную работу и командировки.

            Если вам нужен профессиональный Frontend-разработчик, обращайтесь! Я всегда открыт для новых и интересных
            задач.
        </div>
    </div>
</div>
</template>
<script>
export default {
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
        }, 600);
    },
  
}
</script>

<style lang="scss" scoped>
.upper{
    text-transform: uppercase;
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
    .about_description{
        justify-content: end;
    }
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


.title__text {
    display: flex;
    flex-direction: column;
}

.title__text__first {
    text-align: center;
    font-size: 6vw;
}


.title__text__first {
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





.about {
    margin-top: 8%;
    position: relative;
    width: 65%;
    display: flex;
    left: 50%;
    transform: translate(-50%, 0);
    gap: 5%;
}

.about_picture {
    height: 55vh;
    width: 30%;
    background: red;
    border-radius: 50% 50% 0 0;
    border: 5px solid var(--color-green300);
    display: flex;
    overflow: hidden;

    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
}
.intro{
    color: var(--color-green400);
    font-family: 'ambidexter';
    font-size: var(--font-h2);
}

.about_description {
    width: 60%;
}
</style>