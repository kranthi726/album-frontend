<template>

    <h2>
       Add an Artist
    </h2>
    
    <form @submit.prevent="postNewArtist" >
        <div class="centerDiv flexC">
            Artist Name <input type="text" placeholder="Artist Name" class="input m10" v-model="title">
           Artist Description <textarea type="text" placeholder="Artist Description" class="input m10" v-model="description" />
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
              axios.post('http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/artist', {
                  title: this.title,
                  description:this.description,
              },{headers: {"Access-Control-Allow-Origin": "*"}} ).then(res=>{
                  console.log(res)
                  alert("New Artist Added");
                  this.$router.push({ name: "artist" });
                //window.location.href = "./artist";
              })
          },
    }
    }
</script>