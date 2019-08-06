<template>
    <section class="reset-password">
        <Navbar />
        <div class="reset-password__wrapper container-fluid">
            <div class="container">
                <div class="row mt-5 text-center">
                    <div class="col-md-4">

                    </div>
                     <div class="col-md-4">
                        <div class="row">
                            <div class="col-12">
                                <h4>Forgot your password?</h4>
                                <p>Enter your email address</p>
                                <form>
                                      <div class="form-group">
                                           <input type="text" placeholder="Email Address" class="form-control">
                                      </div>
                                      <button type="submit" class="reset-btn btn-block text-center">Log In</button>
                                   </form>
                            </div>
                        </div>
                    </div>
                     <div class="col-md-4">
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
    name: 'ResetPassword',
    components:{
        Navbar
    }
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors.scss';
.reset-password__wrapper{
    margin-top: 7rem;
    margin-bottom: 2rem;
      form{
          margin-top: 2rem;
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
        .reset-btn{
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
