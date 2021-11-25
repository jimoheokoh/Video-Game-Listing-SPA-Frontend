<template>
    <v-container>
        <v-row class="pt-4">
            <v-col cols="12" md="3" v-for="(link,i) in links" :key="i">
                <router-link :to="link.route" class="nav">{{link.name}}</router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Menu',
    data: () => ({
        links:[
            {'name': 'VIDEO GAMES', 'route': ''},
            {'name': 'CONTACT', 'route': ''}
        ]
    }),
}
</script>

<style scoped>
div{
  font-family: "Montserrat", Helvetica, Arial;  
}
.nav{
    color: #ffffff;
    text-decoration: none;
}
</style>
