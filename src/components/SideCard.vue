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
                        <v-row>
                            <v-col cols="12">
                                <label>Name (contains)</label>
                                <v-text-field
                                    v-model="form.name"
                                    filled
                                    dark
                                    dense
                                    @keyup="emitValues"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="3" md="12">
                                <label>Minimum Score</label>
                                <v-text-field
                                    v-model="form.rating"
                                    filled
                                    type="number"
                                    min="1"
                                    max="10"
                                    :rules="[v => (v && v >= 1 && v <= 10) || 'Number must be between 1 and 10']"
                                    dark
                                    dense
                                    @keyup="emitValues"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="12">
                                <label>Order By</label>
                                <v-select
                                    v-model="form.orderby"
                                    filled
                                    :items="['Name','Score']"
                                    dark
                                    dense
                                    @change="emitValues"
                                >
                                    <template v-slot:prepend>        
                                        <v-btn color="primary" small>
                                            <v-icon color="white"> mdi-arrow-up-bold </v-icon> 
                                        </v-btn>
                                    </template>
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="3" md="12">
                                <div class="float-right d-none d-sm-flex pt-5">
                                    <v-btn
                                    color="primary"
                                    @click="resetForm">
                                        Clear
                                    </v-btn>
                                </div>
                                <div class="d-flex d-sm-none">
                                    <v-btn
                                    color="primary"
                                    block
                                    @click="resetForm">
                                        Clear
                                    </v-btn>
                                </div>
                            </v-col>
                        </v-row>
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
            name:"",
            rating:"",
            orderby:""
        }
    }),
    methods:{
        resetForm(){
            this.form.name = "",
            this.form.rating = "",
            this.form.orderby = ""
            this.$emit('reset', true)
        },
        emitValues(){
            this.$emit('name', this.form.name)
            this.$emit('score', this.form.rating)
            this.$emit('order', this.form.orderby)
        }
    }
}
</script>

<style scoped>
.filter-section{
    background: #0e1a2b !important;
    color: #c1d1e8  !important;
}

</style>
