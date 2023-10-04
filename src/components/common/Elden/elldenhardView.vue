<template>
    <section class="block">
        <header>
            <p>Макет сайта по оси Z</p>
            <a href="https://eldenhard.github.io/" target="_blank" rel="noopener noreferrer"><span>eldenhard.github.io</span></a>
        </header>
        <main>
            <iframe src="https://eldenhard.github.io/" frameborder="0">

            </iframe>
        </main>
    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    }, methods: {
        MouseOutClass() {
            document.getElementById('block_trans').classList.add('block_mouse_over')
        },
        MouseOutmain_block() {
            document.getElementById('main_block_trans').classList.add('main_block_mouse_over')
        },
        ChangePage(){
            
        }
    }
}
</script>

<style lang="scss" scoped>

main{
    iframe{
        width: 100%;
        height: 45vh;
        position: absolute;
        bottom: 0;
    }
}


.block {
    background: #A3DCD4;
    border-radius: var(--64px);
    height: 52vh;
    position: relative;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        transition: 0.3s;
        margin-top: -1%;
        will-change: transform;

    }
}

.block__title {
    color: var(--color-green700);
    font-family: 'Salwey';
    font-size: var(--font-h5);
    text-align: right;
    padding: 6% 5% 0;
}

.block__title_section {
    text-align: right;
    padding: 2% 5% 0;
    text-transform: uppercase;
    font-family: 'Salwey';
    font-size: var(--font-h2);
    font-weight: 700;
    color: var(--color-green700);
}

.block:hover .main_block {
    padding-top: 3%;
    animation-name: block_hover;
    animation-duration: 0.5s;
    will-change: animation-duration;
    //    width: 200%;
}


.main_block img {
    width: 160%;
    border-radius: 12px;
    margin: 2% 0 0 15%;
}


@keyframes block_hover {
    0% {
        padding-top: 0%;
    }

    100% {
        padding-top: 3%;
    }
}

.block_mouse_over {
    transition: 0.2s;
    margin-top: 0%;
}

.main_block_mouse_over {
    padding-top: 0%;
    animation-name: block_hover_over;
    animation-duration: 0.5s;
}

@keyframes block_hover_over {
    0% {
        padding-top: 3%;
    }

    100% {
        padding-top: 0%;
    }
}

</style>


