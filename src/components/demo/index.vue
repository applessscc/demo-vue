<template>
    <div>
        <div class="outer">
            <router-link to="/home">Home主页</router-link>
            <router-link to="/about">About关于</router-link>
            <component v-bind:is="myFirstVue"></component>
            <router-link to="/myFirstVue">我的第一个vue</router-link>
        </div>
        <div class="inner">
            <!-- 组件呈现的位置 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
