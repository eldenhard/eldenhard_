<template>
    <div>
        
        <navbar />
        <router-view></router-view>
    </div>
</template>

<script>
import navbar from './components/layout/navbar.vue'
export default {
    components: { navbar },
    data() {
        return {

        }
    }
}
</script>