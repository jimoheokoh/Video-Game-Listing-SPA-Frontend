<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <side-card/>
            </v-col>
            <v-col cols="12" md="8">hi</v-col>
        </v-row>
    </v-container>
</template>

<script>
import SideCard from '../components/SideCard.vue'
  export default {
  components: { SideCard },
    name: 'Home',
  }
</script>
