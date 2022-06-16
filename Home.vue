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
                    <router-link :to="{name:'artistalbumEdit', params:{id: i.id} }">
                      <a class="btnsmall">Album-{{i.title}}</a>
                    </router-link>

                   <!-- <router-link :to="{name:'artisttrackEdit', params:{id: i.id} }">
                      <a class="btnsmall">Track-{{i.title}}</a>
                    </router-link> -->

                  </div>
      
      </td>
          </tr>
      </table>

</div>
    

<div v-if="searchInput.length==0">


            <h2>Home  Page</h2>
    

<table id="customers">
  <tr>
    <th>Artist</th>
    <th>Link</th>
  
  </tr>
  <tr v-for="(item, index) in dataobj" :key="index" >
    
    <td>{{item.title}} </td>
    <td><div class="right">
                    <router-link :to="{name:'artistalbumEdit', params:{id: item.id} }">
                      <a >Album</a>
                    </router-link>
<br><br>
                   <!-- <router-link :to="{name:'artisttrackEdit', params:{id: item.id} }">
                      <a>Track</a>
                    </router-link> -->

                  </div>
      
      </td>
   
  </tr>
 
</table>

</div>

   
    <div class="content">
        
 
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
     
      axios.get("http://ec2-3-16-89-69.us-east-2.compute.amazonaws.com/api/artist",{headers: {"Access-Control-Allow-Origin": "*"}})
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



/* Styling the body */
        * {
            padding: 0;
            margin: 0;
        }
 
        /* Styling the background image by
        giving its url and position */
        .container {
            height: 100vh;
            width: 100%;
            background-image: url(
'https://media.geeksforgeeks.org/wp-content/uploads/20210402235143/background.jpg');
             
            /* Image used: */
            background-size: cover;
            background-position: center;
            position: relative;
        }
 
        /* Styling the list tags to the
        right of the navigation bar */
        .nav li {
            float: right;
            list-style: none;
        }
 
        /* Styling the anchor tags of
        the navigation bar */
        .nav a {
            list-style: none;
            height: 50px;
            line-height: 50px;
            font-size: 1rem;
            font-weight: 550;
            display: block;
            padding: 5px 35px;
            color: black;
            text-decoration: none;
        }
 
        /* Giving position and margin
        to the content-div */
        .content {
            width: 100%;
            position: absolute;
            top: 45%;
        }
 
        /* Styling the left-col by
        giving margin */
        .left-col {
            margin-left: 11%;
        }
 
        /* Styling the my sound placed
        in the left-col */
        .left-col h1 {
            font-size: 50px;
            color: crimson;
        }
 
        /* Styling the right-col */
        .right-col {
            float: right;
            margin-right: 10%;
            margin-top: -5%;
            display: flex;
            align-items: center;
        }
 
        /* Styling the text in the right-col */
        .right-col p {
            font-size: 21px;
            color: black;
            font-weight: 650;
            margin-right: 20px;
        }
 
        /* Styling the cursor type
        of the icon to pointer */
        #icon {
            cursor: pointer;
        }
</style>