<template>
    <div class="navbar__wrapper container-fluid">
        <div class="container navbar__contents d-flex justify-content-between align-items-center">
            <div class="navbar__brand">
                <router-link to="/" class="navbar-brand"><img src="../assets/hand1.gif" class="img-fluid logo" alt=""></router-link>
            </div>
            <div class="navbar__items">
                <ul class="navbar__links d-flex justify-content-between align-items-center">
                    <li><router-link to="/" class="nav-link">Home</router-link></li>
                    <li><router-link to="/" class="nav-link">Loan Calculator</router-link></li>
                    <li><router-link to="/" class="nav-link">Currency Exchange</router-link></li>
                    <li><router-link to="/" class="nav-link">Contact</router-link></li>
                    <li><router-link to="/" class="nav-link register">Register</router-link></li>
                    <li><router-link to="/" class="nav-link login">Login</router-link></li>
                </ul>
            </div>
            <div @click="openNav()" class="navbar__toggler">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data(){
        return{

        }
    },
    methods:{
        openNav: function(){
            const nav = document.querySelector('.navbar__links');
            nav.classList.toggle('show-nav');
        }
    }
}
</script>
<style scoped lang="scss">
@import '../styles/_colors.scss';
.navbar__wrapper{
    .navbar__contents{
        .navbar__brand{
            .logo{
                height: 70px;
            }
        }
        .navbar__items{
            .navbar__links{
                .nav-link{
                    color: #3d3d3d;
                    padding-top: 1.1rem;
                    font-size: .9rem;
                    text-transform: initial;
                    font-weight: 300;
                }
            }
        }
        .navbar__toggler{
            display: none;
        }
    }
}


//MEDIA QUERIES
@media only screen and (max-width: 960px) {
    .navbar__links{
        flex-direction: column;
        position: absolute;
        left: 0;
        z-index: 100;
        background: $secondary-color;
        padding: 5rem 0;
        color: #fff;
        top: 12.899%;
        width: 100%;
        height: 93vh;
        display: none !important;
        transition: all ease-in .5s;
            .nav-link{
                color: #fff !important;
            }
    }
    .show-nav{
        display: block !important;
    }
     .navbar__toggler{
        display: block !important;
        color: $secondary-color;
        font-size: 1.4rem;
        cursor: pointer;
    }
}
</style>
