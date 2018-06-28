
<template>
  <div class="wrapper">
    <categories class="categories" v-on:change-category="onChangeCategory"></categories>
    <animals class="animals" :list="filteredAnimals"></animals>
  </div>

</template>

<script>
import Categories from '@/components/Categories.vue';
import Animals from '@/components/Animals.vue';

export default {
  name: 'App',
  components: {
    'categories': Categories,
    'animals': Animals,
    },
  methods:{
    onChangeCategory(id) {
      console.log(this)
      this.filteredAnimals = this.animals.filter((item) => {
        if (item.category_id == id){
          return true;
        }
        return false;
      });
    }
  },
  created(){
    this.filteredAnimals = this.animals;
  },
  data() {
    return {
      filteredAnimals: [

      ],
      animals: [

      {image: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
      category_id: 0},

      {image: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
      category_id: 1},

      {image: 'https://d1ia71hq4oe7pn.cloudfront.net/photo/68123101-720px.jpg',
      category_id: 2},

      {image: 'https://www.popsci.com/sites/popsci.com/files/images/2017/08/depositphotos_3979974_original.jpg',
      category_id: 3}
    ],
    };
  },
}
</script>

<style>
 .wrapper{
   display: flex;
 }
  .categories{
    width: 300px;

  }
</style>
