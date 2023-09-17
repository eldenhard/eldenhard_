<template>
    <div class="about" id="about_block">
        <div class="about_picture">
            <img src="../../assets/images/me.png" alt="my_photo">
        </div>
        <div class="about_description">

            <h2 class="intro">Привет! Меня зовут Алексей Решетило, и я - молодой и амбициозный Frontend-разработчик. Мне 25 лет, и я
                родился маленьком городе Новочеркасске, Россия. Сейчас жиу в Москве.
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
</template>


<style lang="scss" scoped>
.about {
    margin-top: 8%;
    position: relative;
    width: 70%;
    display: flex;
    left: 50%;
    transform: translate(-50%, 0);
    gap: 4%;
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