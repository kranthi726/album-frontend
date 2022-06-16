<template>
    <div>
        <h2>
      Artist Album
        </h2>
         <table id="customers">
  <tr>
    <th>Albums</th>
   
  </tr>
  <tr v-for="(item, index) in object" :key="index" >
  
    <td>{{item.title}} </td>
    
  </tr>
 
</table>
    </div>
</template>

<script>
    import axios from "axios";
     
    export default {
        name:'artistalbumEdit',
        data(){
            return {object:[]}
        },
        
        methods:{
            // updateAlbum(){
            //     const id = this.object.id
            //     axios.put(`http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/arttutorial/${id}`, this.object).then(res =>{
            //         console.log(res)
            //          console.log(this.data)
            //          alert("Update Success")
            //           //window.location.href = "http://localhost:3000/album/";
            //     }).catch(e=>{
            //         console.log(e)
            //    })
            //}
        },
     
        async mounted(){
          const path = this.$route.path
            
            const sp = path.split('/');
            const id = sp[2]
            await axios.get(`http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/arttutorial/${id}`).then(res =>{
                this.object = res.data
            }).catch(e=>{
                console.log(e)
            })
        }
    }
</script>