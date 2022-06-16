<template>
    <div>
        <h2>
      Album Tracks 
        </h2>
         <table id="customers">
  <tr>
    <th>Track List</th>
   
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
        name:'artisttrackEdit',
        data(){
            return {object:[]}
        },
        
        methods:{

        },
     
        async mounted(){
          const path = this.$route.path
            
            const sp = path.split('/');
            const id = sp[2]
            await axios.get(`http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/tracktutorial/${id}`).then(res =>{
                this.object = res.data
            }).catch(e=>{
                console.log(e)
            })
        }
    }
</script>