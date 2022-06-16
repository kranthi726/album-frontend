<template>

      



<h3>Add Home Page</h3>

<div class="container">
    <form @submit.prevent="postNewAlbum" >
        <div class="centerDiv flexC">
            
            <input type="text" placeholder="Album Name" class="input m10" v-model="title">
            <textarea type="text" placeholder="Album Description" class="input m10" v-model="description" />
            <button type="submit" class="srcBtn add btnHover">Add Album</button>
        </div>
    </form>
  

</div>








</template>
<script>
  import axios from 'axios'
export default{
    name :'AddAlbum',
    data(){
      return {dataobj:[]}
    },
      methods:{   
          postNewAlbum(){
              axios.post('http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/tutorial', {
                  title: this.title,
                  description:this.description,
              }).then(res=>{
                  console.log(res)
                  alert("New Album Creation Succesfull");
                  this.$router.push({ name: "home" });
                  //window.location.href = "http://localhost:3000/";

              })
          },
          
        }, 
    mounted(){
      
    }
}
</script>

<style>


input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.flexC{ 
    flex-direction: column;
    margin: 10px;
}
.m10{
    margin: 10px;
}
</style>