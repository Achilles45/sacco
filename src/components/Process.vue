<template>
    <div class="process__wrapper container-fluid">
        <div class="container">
           <div class="row">
               <div class="col-12 text-center">
                   <h3 class="text-light">Becoming a member?</h3>
                   <p  class="text-light">It's a fast and easy apllication process and can be done in two minutes</p>
               </div>
           </div>
           <div class="row">
               <div class="col-md-6">
                   <div class="process__card mt-5">
                       Becoming a member is very easy and has no clause. You must be able to provide reasonable and legal means of identification, either utility bill receipts, driving lisence, or voter's card.
                   </div>
               </div>
               <div class="col-md-1"></div>
               <div class="col-md-5 text-light">
                   <h6><i class="fa fa-check-square register-icons"></i>&nbsp;&nbsp; Register</h6>
                   <p>Registtarion is very simple and can be completed in few clicks. Admin can also help you to register if you want to.</p><br />
                   <h6><i class="fa fa-certificate register-icons"></i>&nbsp;&nbsp; Get verified</h6>
                   <p>Please, use correct phone numbers and email address. We would send a verification email to you so you can be verified</p><br />
                   <h6><i class="fa fa-money register-icons"></i>&nbsp;&nbsp; Start saving</h6>
                   <p>Begins savings once your registration is complete so you can start enjoying our products and services.</p>
               </div>
           </div>
           <div class="row mt-5">
               <div class="col-12 text-center">
                   <router-link to="/register" class="register-link">Register Here</router-link>
               </div>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Process'
}
</script>
<style scoped lang="scss">
@import '../styles/_colors.scss';
.process__wrapper{
    background: $secondary-color;
    padding: 3rem 0;
    .process__card{
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
    border-radius: 0.3em;
    padding: 4em;
    margin: 1em;
    text-align: center;
    background: #fff;
    }
    p{
        font-size: .9rem;
    }
    .register-icons{
        font-size: 1.4rem;
    }
    .register-link{
        border-radius: 50px;
        padding:.9rem 2rem;
        color:#fff;
        text-decoration: none;
        border: 1px solid #fff;
        background: transparent;
    }
}
</style>
