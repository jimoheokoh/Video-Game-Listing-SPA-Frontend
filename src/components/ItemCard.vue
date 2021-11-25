<template>
    <v-container>
        <v-row class="pt-4">
            <v-col cols="12">
                <v-card class="game-card"
                elevation="1">
                    <v-card-text class="white--text" style="position:relative">
                        <v-row>
                            <v-col cols="12" sm="9" order="2" order-sm="1">
                                <h3>{{name}}</h3>
                                <span>Release Date: {{ computed_release_date }}</span>
                                <div class="fcol pt-2">
                                [Summary] {{details}}
                                </div>
                            </v-col>
                            <v-col cols="12" sm="3" order="1" order-sm="2" class="py-5 text-right">
                                <v-chip class="py-5" color="primary">{{rating}}</v-chip>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import moment from 'moment'
export default {
    name: 'ItemCard',
    data: () => ({
        //
    }),
    props:[
        'name',
        'release',
        'details',
        'score'
    ],
    computed: {
        rating(){
            return Math.ceil(this.score/10);
        },
        computed_release_date(){
            return moment(this.release).format('DD/MM/YYYY');
        },
    },
    methods:{
        //
    }
}
</script>

<style scoped>
.game-card{
    background: #0e1a2b !important;
    color: #c1d1e8  !important;
}

.fcol{
    color: #c1d1e8  !important;
}

</style>
