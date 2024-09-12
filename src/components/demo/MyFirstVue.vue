<template>
    <div>
        <h1>{{ message }}</h1>
        <button v-on:click="say">点击我</button>
    </div>
</template>

<script>
export default {
  data () {
    return { message: '' }
  },

  methods: {
    say () {
      this.message = 'Hello Vue!'
    }
  }
}
</script>
