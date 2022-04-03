
<template>

  <div class="admin">

  <h1>Submit your Review!</h1>
  <div class="heading">
    <h2>Add a Review</h2>
  </div>
  <div class="add">
    <div class="form">
      <input v-model="BarbershopName" placeholder="Barbershop Name">
      <p></p>
      <textarea style="height: 200px;"  v-model="Review" placeholder="Review">
      </textarea>
      <b-form-rating v-model="value"></b-form-rating>
      <br>
      <button @click="upload">Submit Review</button>
    </div>
  </div>


</div>


</template>

<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.footer{
  clear: both;
  margin-top: 100px;
}
.site-footer{
  background-color: #92a8d1;
  border-top: 1px solid;
  position: fixed;
  left:0px;
  bottom:0px;
  height:100px;
  width:100%;
  text-align: center;
  clear: both;
}
.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: block;
  text-align: center;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  width: 100%;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}


/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

</style>


<script>
import axios from 'axios';
export default {
name: 'Admin',



data(){
    return {
      BarbershopName: "",
      Review:"",
      file: null,
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
      value: null,
      name: ""
    }
  },



  computed: {
      suggestions() {
        let items = this.items.filter(item => item.BarbershopName.toLowerCase().startsWith(this.findTitle.toLowerCase()));
        return items.sort((a, b) => a.BarbershopName > b.BarbershopName);
      }
    },

created() {
  this.getItems();
},



methods:{
     fileChanged(event){
       this.file = event.target.files[0];
     },
     selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },

     async upload() {
       alert("Your review has been submitted, go back to the home page to see your review");
       try {
        let r2 = await axios.post('/api/items', {
          BarbershopName: this.BarbershopName,
          Review: this.Review,
          value: this.value
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },

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


};

</script>
