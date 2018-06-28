<template>
  <div class="header">
    <ul>
      <li  v-on:click="onNavigationClick(nav)" v-for="nav in navigation">
      {{ nav.name }}  {{ nav.count}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
  name: 'categories',
  data() {
    return { navigation: [{
      name: 'cats',
      link: '',
      id: 0,
    }, {
      name: 'dogs',
      link: '',
      id: 1,
    }, {
      name: 'swallow',
      link: '',
      id: 2,
    }, {
      name: 'fish',
      link: '',
      id: 3,
    }],
    };
  },
  methods: {
    onNavigationClick: function(nav) {
      this.$emit('change-category', nav.id)
    }
  },
}
</script>

<style lang="scss" scoped>
  ul{
    list-style: none;
    text-transform: uppercase;
    padding: 10px 5px;
    li{
      border-bottom: 1px solid #434343;
      margin-bottom: 5px;
      &:hover{
        cursor: pointer;
      }
    }
  }

</style>
