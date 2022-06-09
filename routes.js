import { createRouter, createWebHistory } from "vue-router"
import TrackVue from '../views/Track.vue'
import ArtistVue from '../views/Artist.vue'
import AlbumVue from '../views/Album.vue'
import AddAlbum from '../views/AddAlbum.vue'
import AlbumDetails from '../views/AlbumDetails.vue'
import AlbumEdit from '../views/AlbumEdit.vue'
import AddTrack from '../views/AddTrack.vue'
import TrackDetails from '../views/TrackDetails.vue'
import TrackEdit from '../views/TrackEdit.vue'
import ArtistEdit from '../views/ArtistEdit.vue'
import AddArtist from '../views/AddArtist.vue'
import ArtistDetails from '../views/ArtistDetails.vue'
import HomeVue from '../views/Home.vue'


const routes =[
    //routes for tracks
    {
        path:'/track',
        name:'track',
        component:TrackVue,
    },
    {
        path:'/add-track',
        name:'AddTrack',
        component:AddTrack,
    },
    {
        path:'/track/:id',
        name:'trackview',
        component:TrackDetails,
        pathMatch: 'full',
    },
    {
        path:'/track/:id/edit',
        name:'trackEdit',
        component:TrackEdit,
        pathMatch: 'full',
    },


    //routes for home
    {
        path:'/',
        name:'home',
        component:HomeVue,
    },
    //routes for albums
    {
        path:'/album',
        name:'album',
        component:AlbumVue,
    },
    
    {
        path:'/album/:id',
        name:'albumview',
        component:AlbumDetails,
        pathMatch: 'full',
    },
    {
        path:'/album/:id/edit',
        name:'albumEdit',
        component:AlbumEdit,
        pathMatch: 'full',
    },
    {
        path:'/add-album',
        name:'addAlbum',
        component:AddAlbum,
    },//routes for artist
    {
        path:'/add-artist',
        name:'AddArtist',
        component:AddArtist,
    },
    {
        path:'/track/:id',
        name:'artistview',
        component:ArtistDetails,
        pathMatch: 'full',
    },
    {
        path:'/track/:id/edit',
        name:'artistEdit',
        component:ArtistEdit,
        pathMatch: 'full',
    },

    {
        path:'/artist',
        name:'artist',
        component:ArtistVue,
    }
]

const router = createRouter({ 
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router