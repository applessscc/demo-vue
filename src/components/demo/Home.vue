<template>
    <div>
        <div class="container2">
            <button @click="sendMessage">点击我触发message事件</button>
        </div>
        <div>
            <!-- 点击切换组件 -->
            <button @click="currentComponent = 'Tab1'">Tab1</button>
            <button @click="currentComponent = 'Tab2'">Tab2</button>
            <!-- 显示当前选择的组件 -->
            <component :is="currentComponent">
                我是父组件插在子组件的内容(子组件使用默认插槽就可以显示了)
                <!-- 单个插槽属性 -->
                <template v-slot:head="{ message }">
                    <p>我是头部{{ message }}</p>
                </template>
                <!-- 多个插槽属性 -->
                <template #main="{ maincontext1, maincontext2 }">
                    <p>我是身体{{ maincontext1 }}{{ maincontext2 }}</p>
                </template>
                <!-- 不使用花括号 -->
                <template v-slot:foot="slotMessage">
                    <p>我是脚{{ slotMessage.message }}</p>
                </template>
                <template>
                    <p>我是页码</p>
                </template>
            </component>
        </div>
    </div>
</template>
<script>
import Tab1 from './tab1.vue';
import Tab2 from './tab2.vue';


export default {
    data() {
        return { currentComponent: 'Tab1' }
    },
    components: {
        Tab1,
        Tab2
    },
    methods: {
        sendMessage: function () {
            // 触发事件名为message的事件
            this.$emit("message", 'Hello Parent')
        }
    }
}

</script>
<style>
.container2 {
    width: 300px;
    height: 300px;
    background-color: rgb(146, 227, 145);
}
</style>HU