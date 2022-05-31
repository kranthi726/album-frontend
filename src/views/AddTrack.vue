<template>

    <h2>
       Add Track
    </h2>
    <div class="container">
    <form @submit.prevent="postNewTrack" >
        <div class="centerDiv flexC">
            <input type="text" placeholder="Album Name" class="input m10" v-model="title">
            <textarea type="text" placeholder="Album Description" class="input m10" v-model="description" />
            <button type="submit" class="srcBtn add btnHover">Add Album</button>
        </div>
    </form>

</div>
</template>

<script>
import axios from "axios";
export default {
    name:'AddTrack',
    data(){
        return {dataobj:[]}
    },
    methods:{ 
            postNewTrack(){
              axios.post('http://localhost:8080/api/track', {
                  title: this.title,
                  description:this.description,
              }).then(res=>{
                  console.log(res)
                  alert("New Track Added");
                  window.location.href = "http://localhost:3000/track";
              })
          },
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