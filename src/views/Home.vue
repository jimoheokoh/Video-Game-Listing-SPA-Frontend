<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <side-card v-on:name="getNameValue" v-on:score="getScoreValue" v-on:order="orderBy" v-on:reset="resetFilter"/>
            </v-col>
            <v-col cols="12" md="8" v-if="items.length > 0">
                <item-card v-for="item in filteredItems" :key="item.id" :name="item.name" :details="item.summary" :release="item.first_release_date" :score="item.rating/10"/>
            </v-col>
            <v-col cols="12" md="8" v-else class="text-center">
                <v-progress-circular
                :width="3"
                color="red"
                indeterminate
                ></v-progress-circular>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import ItemCard from '../components/ItemCard.vue'
import SideCard from '../components/SideCard.vue'
  export default {
  components: { SideCard, ItemCard },
    name: 'Home',
    mounted(){
        this.getRecords()
    },
    data: () => ({
        items: [],
        mutatedItems: [],
        filter:{
            name:"",
            score:"",
        },
        sort_by:"",
    }),
    computed:{
        filteredItems(){
            return this.filterItemsByName(this.filterItemsByScore(this.items))
        }
    },
    methods:{
        getRecords () {
            axios.get('https://public.connectnow.org.uk/applicant-test/',
            {})
            .then((response) => {
                this.items =  response.data 
                this.mutatedItems =  response.data 
                this.fetchingContent = false;          
            })
            .catch((error) => {
                console.log(error)
            })
        },
        getNameValue(value){
            this.filter.name = value
        },
        getScoreValue(value){
            this.filter.score = value
        },
        filterItemsByName(items){
            return items.filter((item) => { 
                if (this.filter.name)
                {
                    return item.name.match(new RegExp(this.filter.name,"i"))
                }
                return true
            })
        },
        filterItemsByScore(items){
            return items.filter((item) => { 
                if (this.filter.score) {
                    return Math.ceil(item.rating/10) == this.filter.score
                }
                return true
            })
        },
        orderBy(value){
            this.sort_by = value
        },
        resetFilter(){
            this.mutatedItems = this.items
        }
    }
  }
</script>
