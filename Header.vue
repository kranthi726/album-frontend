<template>
    <div class="nav">
        <router-link to="/" class="logo">Music</router-link>
        <ul class="linkList">
          <li class="listIteam"><router-link to="/albtrack">Album(track)</router-link></li>
          <li class="listIteam"><router-link to="/">Artist(Album)</router-link></li>
           <li class="listIteam"><router-link to="/album">Album</router-link></li>
            <li class="listIteam"><router-link to="/track">Track</router-link></li>
            <li class="listIteam"><router-link to="/artist">Artist</router-link></li>
        </ul>
    </div>
</template>
<script>
export default{
    name :'HeaderVue'
}
</script>

<style>
.nav{
    padding: 15px 75px;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.logo{
    margin-right:75px ;
    text-transform: uppercase;
    text-decoration: none;font-size: 1.4rem;
    color: black;
}
ul.linkList{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
}
ul.linkList li.listIteam{
    margin-right: 50px;
}

ul.linkList li.listIteam a{
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    transition: all .1s ease-in-out;
}
ul.linkList li.listIteam a:hover{
    
    color: rgb(170, 168, 168);
}
</style>