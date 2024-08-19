<template>
    <div class="navigation">
      <button v-for="(slide, index) in slides" :key="index" @click="changeSlide(index)" :class="{ active: index === currentIndex }">
        {{ index + 1 }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navigation',
    props: {
      slides: {
        type: Number,
        required: true
      },
      currentIndex: {
        type: Number,
        required: true
      }
    },
    methods: {
      changeSlide(index) {
        this.$emit('changeSlide', index);
      }
    }
  };
  </script>
  
  <style scoped>
  .navigation {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .navigation button {
    background: none;
    border: none;
    margin: 0 5px;
    cursor: pointer;
    padding: 5px;
  }
  .navigation button.active {
    font-weight: bold;
    text-decoration: underline;
  }
  </style>
  