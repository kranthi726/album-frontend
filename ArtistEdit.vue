<template>
    <div>
        <h2>
            Edit this Artist
        </h2>
        <form @submit.prevent="updateArtist" >
        <div class="centerDiv flexC">
            <input type="text" placeholder="Track Name" class="input m10" v-model="object.title" >
            <textarea type="text" placeholder="Track Description" class="input m10" v-model="object.description"  />
            <button type="submit" class="srcBtn add btnHover">Update Album</button>
        </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default{ 
    name:'ArtistEdit',
    data(){
        return { object:[]}
    },
    methods:{
            updateArtist(){
                const id = this.object.id
                axios.put(`http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/artist/${id}`, this.object, {headers: {"Access-Control-Allow-Origin": "*"}}).then(res =>{
                    console.log(res)
                     console.log(this.data)
                     alert("Update Success");
                     this.$router.push({ name: "artist" });
                      //window.location.href = "http://localhost:3000/artist/";
                }).catch(e=>{
                    console.log(e)
                })
            }
        },
        async mounted(){
          const path = this.$route.path
            const id = path.slice(7,9)
            await axios.get(`http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/artist/${id}`,{headers: {"Access-Control-Allow-Origin": "*"}}).then(res =>{
                this.object = res.data
            }).catch(e=>{
                console.log(e)
            })
        }
}
</script>