<template>
    <div>
        <div class="tab1">
            <p>tab1</p>
        </div>
        <!-- 传单个属性 -->
        <slot name="head" :message="headMsg"></slot>
        <!-- 传多个属性 -->
        <slot name="main" :maincontext1="mainMsg.context" :maincontext2="mainMsg.context2"></slot>
        <slot name="foot" :message="footMsg"></slot>
        <!-- 默认插槽 -->
        <slot>当父组件不填充任何内容的时候,这句话才会出现</slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headMsg: '我是子组件head的消息',
            mainMsg: {
                context: "我是子组件内容1",
                context2: "我是子组件内容2"
            },
            footMsg: '我是子组件foot消息'
        }
    }
}
</script>
<style></style>