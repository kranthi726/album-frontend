<template>
    <div>
        <h1>{{object.title}}</h1>
        <p>{{object.description}}</p>
    </div>
</template>

<script>
    import axios from "axios";
     
    export default {
        name:'AlbumDetails',
        data(){
            return {object:[]}
        },
        mounted(){
          const path = this.$route.path
            const id = path.slice(7,9)
            axios.get(`http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/tutorial/${id}`).then(res =>{
                this.object = res.data
            }).catch(e=>{
                console.log(e)
            })
        }
    }


</script>