<template>

<div class="centerDiv">
   <input type="search" placeholder="Search name of artist" class="input" v-model="searchInput">
</div>
<div v-if="searchInput.length>0">

    <table id="customers">
        <tr>
          <th>Artist Code#</th>
          <th>Artist Name</th>
          <th>Actions</th>
          </tr>
          <tr v-for="i in searchFilter" :key="i.id" >
          <td> {{i.id}} </td>
          <td>{{i.title}} </td>
          <td> <div class="right">
                    <router-link :to="{name:'artistEdit', params:{id: i.id} }"><button class="btnsmall">Edit</button></router-link>
                    <button class="btnsmall red" @click="delSingle(i.id)">Delete</button>
                  </div></td>
          </tr>
      </table>
</div>

<div v-if="searchInput.length==0">
    <h2>
        List of Artist
    </h2>


    <table id="customers">
  <tr>
    <th>Track Code#</th>
    <th>Track Name</th>
    <th>Actions</th>
  </tr>
  <tr v-for="(item, index) in dataobj" :key="index" >
    <td> {{item.id}} </td>
    <td>{{item.title}} </td>
    <td> <div class="right">
              <router-link :to="{name:'artistEdit', params:{id: item.id} }"><button class="btnsmall">Edit</button></router-link>
              <button class="btnsmall red" @click="delSingle(item.id)">Delete</button>
            </div></td>
  </tr>
 
</table>
</div>

    <div class="centerDiv">
        <router-link to="/add-artist" ><button @click="addBtnClicked" class="srcBtn add btnHover">Add Artist</button></router-link>
        <button @click="delAll" class="srcBtn remove btnHover">Remove All</button>
    </div>

</template>
<script>
import axios from 'axios'
export default{
    name :'ArtistVue',
    data(){
      return {dataobj:[],search:[], searchInput:'' }
    },
    methods:{
        delAll(){
              axios.delete('http://localhost:8080/api/artist').then(res=>{
                  alert("Deleted Succesfull")
                  console.log(res.data)
              })
            },
            delSingle(id){
              axios.delete(`http://localhost:8080/api/artist/${id}`).then(res=>{
                alert("Deleted Succesfull")
                console.log(res)
                this.$forceUpdate();
            })
        }
    },
     mounted(){
      axios.get("http://localhost:8080/api/artist")
      .then(res=>{
        console.log(res.data)
        this.dataobj = res.data
      }).catch(err=>{
        console.log(err)
      })
    },computed:{ 
      searchFilter(){
        return this.dataobj.filter(e=> e.title.toLowerCase().includes(this.searchInput.toLowerCase()))
      }
    },
    
}
</script>
<style>

  #customers {
        font-family: Arial, Helvetica, sans-serif;
        margin:1% 10% 1%;

        border-collapse: collapse;
        width: 80%;
      }

      #customers td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
      }

      #customers tr:nth-child(even){background-color: #f2f2f2;}

      #customers tr:hover {background-color: #ddd;}

      #customers th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04AA6D;
        color: white;
      }

</style>