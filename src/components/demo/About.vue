<template>
    <div class="container">
        <!-- 使用 Home 组件，并监听其 message 事件 -->
        <div class="testEvent">
            {{ messageText }}
        </div>
        <!-- 当message事件发生时 触发handMesage方法 -->
        <Home @message="handMessage" />

    </div>
</template>
<script>
import Home from './Home.vue';

export default {

    data() {
        return {
            messageText: ''
        }
    },
    methods: {
        handMessage(data) {
            console.log("message事件触发了" + data)
            this.messageText = data
        }
    },
    components: {
    Home
}

}
</script>
<style>
.container {
    width: 300px;
    height: 300px;
    background-color: rgb(225, 33, 33);
}
</style>