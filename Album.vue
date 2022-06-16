<template>





<div class="centerDiv">
   <input type="search" placeholder="Search name of album" class="input" v-model="searchInput">
</div>


<div v-if="searchInput.length>0">

    <table id="customers">
        <tr>
          <th>Album Code#</th>
          <th>Album Name</th>
          <th>Actions</th>
          </tr>
          <tr v-for="i in searchFilter" :key="i.id" >
           <span v-if="i == 0">Yes</span>
          <td> {{i.id}} </td>
          <td>{{i.title}} </td>
          <td> <div class="right">
                    <router-link :to="{name:'albumEdit', params:{id: i.id} }"><button class="btnsmall">Edit</button></router-link>
                    <button class="btnsmall red" @click="delSingle(i.id)">Delete</button>
                  </div></td>
          </tr>
      </table>

</div>
    

<div v-if="searchInput.length==0">
 <h2>
        List of Albums
    </h2>
<table id="customers">
  <tr>
    <th>Album Code#</th>
    <th>Album Name</th>
    <th>Actions</th>
  </tr>
  <tr v-for="(item, index) in dataobj" :key="index" >
    <td> {{item.id}} </td>
    <td>{{item.title}} </td>
    <td> <div class="right">
              <router-link :to="{name:'albumEdit', params:{id: item.id} }"><button class="btnsmall">Edit</button></router-link>
              <button class="btnsmall red" @click="delSingle(item.id)">Delete</button>
            </div></td>
  </tr>
 
</table>

</div>

    
    <div class="centerDiv">
        <router-link to="/add-album" ><button @click="addBtnClicked" class="srcBtn add btnHover">Add Album</button></router-link>
        <button @click="delAll" class="srcBtn remove btnHover">Remove All</button>
    </div>


</template>

<script>


  import axios from 'axios'
export default{
    name :'AlbumVue',
    data(){
      return {dataobj:[],search:[], searchInput:'' }
    },
      methods:{   

            delAll(){
              axios.delete('http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/tutorial').then(res=>{
                  alert("Deleted Succesfull")
                  console.log(res.data)
              })
            },
            delSingle(id){
              axios.delete(`http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/tutorial/${id}`).then(res=>{
                alert("Deleted Succesfull")
                console.log(res)
                this.$forceUpdate();
            })
            
          },
        }, 
    mounted(){
      axios.get("http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/tutorial")
      .then(res=>{
        console.log(res.data)
        this.dataobj = res.data
        // this.dataobj.forEach(e=>{
        //     this.search.push(e.title)
        //   })
      }).catch(err=>{
        console.log(err)
      })
    },computed:{ 
      searchFilter(){
        var res = this.dataobj.filter(e=> e.title.toLowerCase().includes(this.searchInput.toLowerCase()));
        if(res == ''){
          alert("No Records Found")

        }
      
        return res
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



.flexRow{ 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.btnsmall{ 
  margin: 5px;
  padding: 7px 10px;
  color: white;
  border: none;
  background-color: green;
  border-radius: 3px;
  transition: all .1s ease-in-out;
}
.btnsmall:hover{
  background-color: rgb(36, 36, 36);
}
.red{
  background-color: red;
  border: none;
  color: white;
}

.btnHover:hover{ 
        background-color: rgb(121, 121, 121);

    }
    .add{ 
        background-color: blue;
        border: none;
        color: white;
        border-radius: 3px;
    }
    .remove{ 
        background-color: red;
        border: none;
        color: white;
        border-radius: 3px;
    }
    .add, .remove{
        margin-top: 25px;
    }
    .albamList{ 
        margin:0 25px;
        list-style-type: none;
    }
    ul.albamList li{
        padding: 10px;
        border-bottom: 1px solid gray;
    }
    h2{ 
        margin-top: 25px;
        text-align: center;
    }
    .centerDiv{
        margin-top: 25px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .input{
        padding:.5rem 1rem;
        max-width: 40vw;
        min-width: 20vw;
        outline: none;
    }
    .srcBtn{
        margin-left: 25px;
        padding: .5rem;
        transition: all .1s ease-in-out;
    }


</style>