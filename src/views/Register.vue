<template>
    <section class="register">
        <Navbar />
        <div class="register__contents container-fluid">
            <div class="container">
                <div v-if="contactForm" class="row">
                    <div class="col-md-8">
                        <div id="personalDetails" class="form__wrapper">
                            <h4>Sign Up For An Account</h4>
                            <p>It's super fast and easy!</p>
                            <small>Your personal details</small>
                            <form>
                                   <div v-if="feedback" class="alert alert-danger">{{ feedback }}</div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" placeholder="First Name" class="form-control" v-model="fname">
                                        </div>
                                    </div>
                                     <div class="col-md-6">
                                         <div class="form-group">
                                            <input type="text" placeholder="Last Name" class="form-control" v-model="lname">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" placeholder="Email" class="form-control" v-model="email" required />
                                </div>
                                 <div class="form-group">
                                    <input type="tel" placeholder="Mobile Number" class="form-control" v-model="phone" >
                                </div>
                                 <div class="form-group">
                                    <input type="password" placeholder="Password" class="form-control" v-model="password" >
                                </div>
                                <button @click.prevent="toggleForm()" type="submit" class="register-btn btn-block">Next&nbsp; <i class="fa fa-long-arrow-right"></i></button>
                                <div class="row mt-3 text-center">
                                   <div class="col-12 text-center">
                                        <small class="pt-5">Already have an account? <router-link to="/login" class="login-link">Login</router-link></small><br />
                                    <small>By clicking on Sign Up, you agree to our <router-link to="/terms">terms and conditions</router-link> and <router-link to="/policies"> privacy policies</router-link></small>
                                   </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-3 mt-5">
                        
                    </div>
                </div>

                <div v-else class="row" id="contactDetails">
                    <div class="col-md-8">
                        <div class="form__wrapper">
                            <h4>Contact & Bank Details</h4>
                            <small>Please make sure all contact details are correct as you will verified with them</small>
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" placeholder="Username" class="form-control" v-model="userName">
                                        </div>
                                    </div>
                                     <div class="col-md-6">
                                         <div class="form-group">
                                            <input type="text" placeholder="Occupation" class="form-control" v-model="occupation">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Gender" class="form-control" v-model="gender" >
                                </div>
                                 <div class="form-group">
                                    <input type="text" placeholder="Account Name" class="form-control" v-model="bankName" >
                                </div>
                                 <div class="form-group">
                                    <input type="tel" placeholder="Account Number" class="form-control" v-model="accNumber" >
                                </div>
                                <button @click.prevent="register()" type="submit" class="register-btn btn-block">Register&nbsp; <i class="fa fa-long-arrow-right"></i></button>
                                <div class="row mt-3 text-center">
                                   <div class="col-12 text-center">
                                        <small class="pt-5">Already have an account? <router-link to="/login" class="login-link">Login</router-link></small><br />
                                    <small>By clicking on Sign Up, you agree to our <router-link to="/terms">terms and conditions</router-link> and <router-link to="/policies"> privacy policies</router-link></small>
                                   </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import { setTimeout } from 'timers';
export default {
    name: 'Register',
    components:{
        Navbar
    },
    data(){
        return{
            fname: null,
            lname:null,
            email: null,
            phone: null, 
            password: null, 
            userName: null,
            occupation: null,
            gender: null,
            bankName: null,
            accNumber: null,
            contactForm: true,
            feedback:null
        }
    },
    methods:{
        removeField: function(){
            document.querySelector('.alert').remove()
        },
        clearAlerts: function(){
            setTimeout(this.removeField, 4000)
        },
        toggleForm: function(){
            if(this.fname && this.lname && this.email && this.phone && this.password){
                  this.contactForm = !this.contactForm
            }else{
                this.feedback = 'Please, fill in all fields!'
                this.clearAlerts();
            }
        },
        register: function(){
            alert('Thank you! Registration is sucessful');
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors.scss';
.register__contents{
    margin-bottom: 2rem;
    .form__wrapper{
        box-shadow: 0px 0px 1px 1px rgba(0,0,0,.16);
        padding: 3rem 2.8rem;
        margin-top: 3.5rem;
        border-radius: 4px;
        h4{
            color: #1a1a1a;
        }
        form{
            padding-top: 1rem;
            input[type=text], input[type=email],  input[type=tel],  input[type=password]{
                height: 3rem;
                background: transparent;
                border-radius: 2px;
                box-shadow: none;
                outline: none;
                font-size: .89rem;
                color: #828282;
                border: 1px solid rgba(209,209,209,0.56);
            }
           
            .register-btn{
                background: $secondary-color;
                color: #fff;
                border:none;
                text-align: center;
                padding: .8rem 0;
                border-radius: 2px;
                outline: none;
            }
            
        }
    }
}
.alert{
    transition: all ease-in-out .5s;
}
</style>
