<template>
    <div class="centerDiv">
        <input type="text" placeholder="Search Albam by Albam Name" class="input">
        <button @click="search" class="srcBtn">Search</button>
    </div>
    <h2>
        List of Albums
    </h2>
    <ul class="albamList">
        <li>List item 1</li>
        <li>List item 1</li>
        <li>List item 1</li>
        <li>List item 1</li>
        <li>List item 1</li>
        <li>List item 1</li>
        <li>List item 1</li>
    </ul>
    <div class="centerDiv">
        <button @click="addBtnClicked" class="srcBtn add btnHover">Add Album</button>
        <button @click="rmvBtnClicked" class="srcBtn remove btnHover">Remove All</button>
    </div>


</template>
<script>
    export default {
        name:'HomepageVue',
        methods:{ 
            search(){
                console.log("search clicked")
            },
            addBtnClicked(){
                console.log("Add clicked")
            },
            rmvBtnClicked(){
                console.log("rmv all clicked")
            },
            data(){
                return{ 
                    albums: []
                }
            }
        }
    }
</script>

<style>

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