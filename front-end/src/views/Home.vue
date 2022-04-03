<template>
<div class="home">
  <section class="reviews">
    <v-table :data="items"
    class="my-2 table table-striped">
    <thead slot="head">
        <th>Barbershop Name</th>
        <th>Review</th>
        <th>Rating</th>
    </thead>
    <tbody slot="body" slot-scope="{displayData}">
        <tr v-for="item in displayData" :key="item.id">
          <td>{{ item.BarbershopName }}</td>
          <td>{{ item.review }}</td>
          <td><b-form-rating
        v-model="item.value"
         value=item.value
         readonly
         ></b-form-rating>
         </td>
        </tr>
    </tbody>
  </v-table>
  </section>

</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  data() {
  return {
    fields: ['BarbershopName',  'review', { key: 'value', label: 'Stars' }],
    items: [],
    }
  },
  created() {
  this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }


}

</script>



<style scoped>
.image h2 {
  font-style: italic;
}
p{
  font-size: 16px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}


/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}


</style>
