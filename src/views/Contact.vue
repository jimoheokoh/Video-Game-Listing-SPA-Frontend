<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6" md="6" class="offset-sm-3 offset-md-3 py-5">
               <v-card elevation="0" class="card-section1">
                   <v-card-title> GET IN TOUCH</v-card-title>
                   <v-card-subtitle>You can reach us anytime by using the form below. Enter your name, address, and message and submit. We will get back to you asap!</v-card-subtitle>
                   <v-card-text>
                       <v-card class="card-section2" elevation="0">
                           <v-card-text>
                               <h5>Contact Form</h5>
                                <v-form
                                class="form"
                                dark
                                ref="form"
                                v-model="valid"
                                lazy-validation
                                >
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <label class="required">Name</label>
                                        <v-text-field
                                            v-model="form.name"
                                            filled
                                            dark
                                            dense
                                            :rules="[v => !!v || 'Name is required']"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <label class="required">Email Address</label>
                                        <v-text-field
                                            v-model="form.email"
                                            filled
                                            dark
                                            dense
                                            :rules="[v => !!v || 'Email Address is required']"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="12">
                                        <label class="required">Message</label>
                                        <v-text-field
                                            v-model="form.message"
                                            filled
                                            dark
                                            dense
                                            :rules="[v => !!v || 'Message is required']"
                                            required
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                    <div class="text-right">
                                        <v-btn
                                        color="primary"
                                        :disabled="!valid"
                                        @click="sendMessage">
                                            Send
                                        </v-btn>
                                    </div>
                                </v-form>
                           </v-card-text>
                       </v-card>
                   </v-card-text>
                </v-card> 
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'Contact',
    data: () => ({
        form:{},
        valid: true,
    }),
    methods: {
      sendMessage () {
        this.$refs.form.validate()
      }
    },
  }
</script>

<style scoped>
.card-section1{
    background-image: linear-gradient(#081221, #03080f) !important;   
    color: #c1d1e8  !important;
}
.card-section2{
    background: #0e1a2b !important;
    color: #c1d1e8  !important;
}
.required:after {
    content:" *";
    color: #2B81D6;
}
.v-btn .v-btn--disabled{
    background: #c1d1e8;
}
</style>
