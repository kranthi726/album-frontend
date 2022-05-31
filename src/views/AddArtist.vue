<template>

    <h2>
       Add an Artist
    </h2>
    
    <form @submit.prevent="postNewArtist" >
        <div class="centerDiv flexC">
            <input type="text" placeholder="Album Name" class="input m10" v-model="title">
            <textarea type="text" placeholder="Album Description" class="input m10" v-model="description" />
            <button type="submit" class="srcBtn add btnHover">Add Artist</button>
        </div>
    </form>


</template>

<script>
    import axios from "axios";
    export default {
        name:'AddArtist',
        data(){
        return {dataobj:[]}
    },
    methods:{ 
            postNewArtist(){
              axios.post('http://localhost:8080/api/artist', {
                  title: this.title,
                  description:this.description,
              }).then(res=>{
                  console.log(res)
                  alert("New Artist Added")
              })
          },
    }
    }
</script>