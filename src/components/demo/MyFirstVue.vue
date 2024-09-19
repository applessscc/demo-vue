<template>
  <div>
    <h1 >{{ message }}</h1>
    <button v-on:click="say" v-if="!isclick">点击我</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      isclick: false
    }
  },

  methods: {
    say() {
      this.message = 'Hello Vue!'
      this.isclick = true;
    }
  }
}
</script>
