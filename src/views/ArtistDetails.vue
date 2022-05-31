<template>
    <div>
         <h1>{{object.title}}</h1>
        <p>{{object.description}}</p>
    </div>




    
</template>

<script>
import axios from "axios";
export default{ 
    name: 'ArtistDetails',
    data(){
        return { object:[]}
    },
    mounted(){
        const path = this.$route.path
        const id = path.slice(7,9)
        axios.get(`http://localhost:8080/api/artist/${id}`).then(res =>{
            this.object = res.data
        }).catch(e=>{
            console.log(e)
        })
    }
}
</script>