<template>
    <v-container>
        <v-row class="pt-4">
            <v-col cols="12">
                <v-card class="filter-section"
                elevation="1">
                    <v-card-title class="white--text">
                        Filter Results
                    </v-card-title>
                    <v-card-text class="white--text">
                        <v-form
                        class="form"
                        dark
                        v-model="form.parent">
                            <label>Name (contains)</label>
                            <v-text-field
                                v-model="form.name"
                                filled
                                dark
                                dense
                                clearable
                            ></v-text-field>
                            <label>Minimum Score</label>
                            <v-text-field
                                v-model="form.rating"
                                filled
                                dark
                                dense
                                clearable
                            ></v-text-field>
                            <label>Order By</label>
                            <v-select
                                v-model="form.orderby"
                                filled
                                :items="['Name','Score']"
                                dark
                                dense
                                clearable
                            >
                                <template v-slot:prepend>        
                                    <v-btn color="primary" small>
                                        <v-icon color="white"> mdi-arrow-up-bold </v-icon> 
                                    </v-btn>
                                </template>
                            </v-select>
                            <v-btn class="text-right"
                            color="primary"
                            @click="resetForm">
                                Clear
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'SideCard',
    data: () => ({
        form:{
        }
    }),
    methods:{
        resetForm(){
            this.form = {}
        }
    }
}
</script>

<style scoped>
.filter-section{
    background: #0e1a2b !important;
    color: #c1d1e8  !important;
}
.form{
    color: #ffffff !important;
}
.form input{
    color: #c1d1e8  !important;
}

</style>
