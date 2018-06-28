<template>
  <div class="header">
    <ul>
      <li v-for="animal in list" >
        <img :src="animal.image">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
  name: 'categories',
  props:[
    'list'
  ],
  methods: {
  },
}

</script>

<style lang="scss" scoped>
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
  img{
    width: 300px;
    height: 150px;
  }
</style>
