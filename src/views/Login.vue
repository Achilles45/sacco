<template>
    <div class="login__wrapper">
        <Navbar />
        <div class="login__contents">
           <div class="container">
               <div class="row">
                   <div class="col-md-4"></div>
                   <div class="col-md-4">
                       <div class="row text-center mt-5">
                           <div class="col-12">
                               <div class="login__form">
                                   <h4>Welcome back!</h4>
                                   <p>Please login</p>
                                   <form>
                                      <div class="form-group">
                                           <input type="text" placeholder="Email Address" class="form-control">
                                      </div>
                                      <div class="form-group">
                                           <input type="text" placeholder="Your Password" class="form-control">
                                      </div>
                                      <button type="submit" class="login-btn btn-block text-center">Log In</button>
                                   </form>
                               </div>
                           </div>
                       </div>
                       <div class="row others text-center mt-3">
                           <div class="col-12 text-center">
                               <small>Forgot your password? <router-link to="/reset-password">Reset It</router-link></small><br />
                               <small>Don't have an account? <router-link to="/register">Sign Up</router-link></small>
                           </div>
                       </div><br />
                       <hr />
                      <div class="row text-center">
                           <div class="col-12">
                               <small>By clicking Login, you agree to our <router-link to="/">terms & conditions</router-link> and <router-link to="/">privacy policy</router-link></small>
                           </div>
                      </div>
                   </div>
                   <div class="col-md-4"></div>
               </div>
           </div>
        </div>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
    name: 'Login',
    components:{
        Navbar
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors.scss';
.login__form{
    margin: 2rem 0;
    form{
        input[type=text], input[type=password]{
            height: 3rem;
            background: transparent;
            border-radius: 2px;
            box-shadow: none;
            outline: none;
            font-size: .89rem;
            color: #828282;
            border: 1px solid rgba(209,209,209,0.56);
        }
        .login-btn{
            background: $secondary-color;
            color: #fff;
            border:none;
            text-align: center;
            padding: .7rem 0;
            border-radius: 2px;
            outline: none;
        }
    }
}
</style>
