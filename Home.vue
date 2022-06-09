<template>





<div class="centerDiv">
   <input type="search" placeholder="Search name of album" class="input" v-model="searchInput">
</div>


<div v-if="searchInput.length>0">

    <table id="customers">
        <tr>
            <th>Artist</th>
    <th>Link</th>
          </tr>
          <tr v-for="i in searchFilter" :key="i.id" >
           <span v-if="i == 0">Yes</span>
        
          <td>{{i.title}} </td>
         <td><div class="right">
                    <router-link :to="{name:'albumEdit', params:{id: i.id} }"><button class="btnsmall">Edit</button></router-link>
                    <button class="btnsmall red" @click="delSingle(i.id)">Delete</button>
                  </div>
      </td>
          </tr>
      </table>

</div>
    

<div v-if="searchInput.length==0">
 <h2>
        Home Page
    </h2>
<table id="customers">
  <tr>
    <th>Artist</th>
    <th>Link</th>
  
  </tr>
  <tr v-for="(item, index) in dataobj" :key="index" >
    
    <td>{{item.title}} </td>
    <td><div class="right">
                    <router-link :to="{name:'albumEdit', params:{id: item.title} }">
                      <button class="btnsmall">Album-{{item.title}}</button>
                    </router-link>

                   <router-link :to="{name:'albumEdit', params:{id: item.title} }">
                      <button class="btnsmall">Track-{{item.title}}</button>
                    </router-link>

                  </div>
      
      </td>
   
  </tr>
 
</table>

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