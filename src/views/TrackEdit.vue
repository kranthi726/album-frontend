<template>
    <div>
        <h2>
            Edit this Track
        </h2>
        <form @submit.prevent="updateTrack" >
        <div class="centerDiv flexC">
            <input type="text" placeholder="Track Name" class="input m10" v-model="object.title" >
            <textarea type="text" placeholder="Track Description" class="input m10" v-model="object.description"  />
            <button type="submit" class="srcBtn add btnHover">Update Album</button>
        </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default{ 
    name: 'TrackEdit',
    data(){
        return { object:[]}
    },
    methods:{
            updateTrack(){
                const id = this.object.id
                axios.put(`http://localhost:8080/api/track/${id}`, this.object).then(res =>{
                    console.log(res)
                     console.log(this.data)
                     alert("Update Success")
                }).catch(e=>{
                    console.log(e)
                })
            }
        },
        async mounted(){
          const path = this.$route.path
            const id = path.slice(7,9)
            await axios.get(`http://localhost:8080/api/track/${id}`).then(res =>{
                this.object = res.data
            }).catch(e=>{
                console.log(e)
            })
        }
}
</script>