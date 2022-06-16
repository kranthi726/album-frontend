<template>

      



<h3>Add an Album</h3>

<div id="div">
    <form @submit.prevent="postNewAlbum" >
        <div class="">
           <input type="text" placeholder="Album Name" class="input m10" v-model="title"><br>

         <textarea type="text" placeholder="Album Description" class="input m10" v-model="description" />
           <br> Check the Artist # and select below
            <div v-for="(item, index) in dataobj" :key="index">
            <span>{{item.id}}-{{item.title}}</span>

            </div>
<select v-model="artist">
<option>Select Artist ID</option>
<option v-for="(item, index) in dataobj" :key="index" >{{item.id}}</option>

            </select>

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
                  artist:this.artist,
              }).then(res=>{
                  console.log(res)
                  alert("New Album Creation Succesfull");
                  this.$router.push({ name: "album" });

                  //window.location.href = "/album/";

              })
          },
          
        }, 
    mounted(){
      axios.get("http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/artist",{headers: {"Access-Control-Allow-Origin": "*"}} )
      .then(res=>{
        console.log(res.data)
        this.dataobj = res.data
        // this.dataobj.forEach(e=>{
        //     this.search.push(e.title)
        //   })
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