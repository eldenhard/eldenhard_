<template>
    <section class="block container" >
        <header>
            <p class="block__title">Система учета з/п</p>
            <p class="block__title_section">aesthetica</p>
        </header>
        <main class="main_block">
            <img src="../../assets//images/aesthetica.png" alt="система учет зп компании">
        </main>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.block {
    background: var(--color-purple);
    border-radius: var(--64px);
    height: 52vh;
    position: relative;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
}

.block__title {
    color: var(--color-green700);
    font-family: 'Salwey';
    font-size: var(--font-h5);
    text-align: right;
    padding: 10% 10% 0;
}

.block__title_section {
    text-align: right;
    padding: 2% 10% 0;
    text-transform: uppercase;
    font-family: 'Salwey';
    font-size: var(--font-h2);
    font-weight: 700;
    color: var(--color-green700);
}

.main_block img {
    width: 200%;

    margin: 2% 0 0 15%;
}

.main_block:hover {
    padding-top: 5%;
    animation-name: block_hover;
    animation-duration: 2s;
    //    width: 200%;
}
.block:hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transition: 0.3s;
    margin-top: -1%;
}
@keyframes block_hover {
    0% {
        padding-top: 0%;
    }

    100% {
        padding-top: 3%;
    }
}


</style>


