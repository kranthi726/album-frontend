<template>

    <h2>
       Add Track
    </h2>
    <div id="div">
    <form @submit.prevent="postNewTrack" >
        <div>
       <input type="text" placeholder="Track Name" class="input m10" v-model="title"><br>
          <textarea type="text" placeholder="Track Description" class="input m10" v-model="description" />
           <br> Check the Album # and select below
            <div v-for="(item, index) in dataobj" :key="index">
            <span>{{item.id}}-{{item.title}}</span>

            </div>
<select v-model="album">
<option>Select album ID</option>
<option v-for="(item, index) in dataobj" :key="index" >{{item.id}}</option>

            </select>
            <button type="submit" class="srcBtn add btnHover">Add Track</button>
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
              axios.post('http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/track', {
                  title: this.title,
                  description:this.description,
                   album:this.album,

              }).then(res=>{
                  console.log(res)
                  alert("New Track Added");
                  this.$router.push({ name: "track" });
                  //window.location.href = "http://localhost:3000/track";
              })
          },
    },
     mounted(){
      axios.get("http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/tutorial", {headers: {"Access-Control-Allow-Origin": "*"}})
      .then(res=>{
        console.log(res.data)
        this.dataobj = res.data
      
      }).catch(err=>{
        console.log(err)
      })
    }
}
</script>

<style>

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

#div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>