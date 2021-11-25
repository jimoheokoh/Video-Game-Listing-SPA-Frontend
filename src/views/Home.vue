<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <side-card v-on:name="getNameValue" v-on:score="getScoreValue" v-on:order="getSortOrder" v-on:reset="resetFilter"/>
            </v-col>
            <v-col cols="12" md="8" v-if="items.length > 0">
                <item-card v-for="item in filteredItems" :key="item.id" :name="item.name" :details="item.summary" :release="item.first_release_date" :score="item.rating"/>
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
import _ from 'lodash';
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
        // Return the filtered records when filter, sort is applied else will return the whole data from api
        filteredItems(){
            return this.sortBy(this.filterItemsByName(this.filterItemsByScore(this.items)))
        }
    },
    methods:{
        // Method to fetch the data from the endpoint
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
        // the emitted value from the name filter
        getNameValue(value){
            this.filter.name = value
        },
        // the emitted value from the score filter 
        getScoreValue(value){
            this.filter.score = value
        },
        // the sort order selected
        getSortOrder(value){
            if (value === 'Name') {
               this.sort_by = 'name' 
            } else {
                this.sort_by = 'rating'
            }
        },
        // method to perform the name filtration of the items array
        filterItemsByName(items){
            return items.filter((item) => { 
                if (this.filter.name)
                {
                    return item.name.match(new RegExp(this.filter.name,"i"))
                }
                return true
            })
        },
        // method to perform the score filtration of the items array
        filterItemsByScore(items){
            return items.filter((item) => { 
                if (this.filter.score) {
                    return Math.ceil(item.rating/10) == this.filter.score
                }
                return true
            })
        },
        // method to apply sort based on user selection
        sortBy(items){
            return _.orderBy(items,this.sort_by)
        },
        // method to reset the form and return all data
        resetFilter(){
            this.filter.score = "",
            this.filter.name = "",
            this.sort_by = ""
        }
    }
  }
</script>
