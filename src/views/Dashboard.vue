<template>
    <section class="dashboard">
        <Navbar />
        <div class="dashboard__wrapper container-fluid">
            <div class="container">
                <div class="row mt-5 pb-3">
                <div class="col-md-4">
                    <h4 class="mt-4">Welcome </h4>
                    <div class="dashboard__top__nav d-flex justify-content-between mt-5">
                          <a href="" class="dashboard-links" @click.prevent="showOverview()">Overview</a>
                           <a href="" class="dashboard-links" @click.prevent="showProfile()">Profile</a>
                            <a href="" class="dashboard-links" @click.prevent="showCashTranzat()">Cash Transactions</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="container-fluid overview" id="overview">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md-7 overview__contents">
                        <div class="overview__content savings">
                            <h6><i class="fa fa-money"></i>&nbsp;&nbsp; Total Saving</h6>
                            <p>&#8358; 00.00</p>
                        </div>
                         <div class="overview__content users">
                            <h6><i class="fa fa-users"></i>&nbsp;&nbsp; Total Members</h6>
                            <p>00</p>
                        </div>
                         <div class="overview__content loans">
                            <h6><i class="fa fa-money"></i>&nbsp;&nbsp; Outstanding Loans</h6>
                            <p>&#8358; 00.00</p>
                        </div>
                        <div class="overview__content investment">
                            <h6><i class="fa fa-money"></i>&nbsp;&nbsp; Total Investments</h6>
                            <p>&#8358; 00.00</p>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-3 support__card mt-4">
                        <h6>Need Support?</h6>
                        <p>Sacco customer experience</p>
                        <hr />
                        <small>support@info.com</small><br />
                        <small>+2348103515205</small>
                    </div>
                </div>
            </div>
             <hr />
        <div class="container">
            <small>Growing & managing your wealth has never been this easy!</small>
        </div>
        </div>
        <!--End of Overview
        ==================-->
        <!--Profile
        ==================-->
        <section class="profile container-fluid mt-5" id="profile">
            <div class="container">
                <h6>Verification</h6>
                <p>Your account verification is in progress, continue to upload required documents</p>
                <p><a class="continue-link">Continue verification &nbsp;&nbsp;<i class="fa fa-long-arrow-right"></i></a></p>
                <div class="row">
                    <div class="col-md-8">
                        <h6>Profile</h6>
                        <hr /><br />
                        <form>
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
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" placeholder="Email Address" class="form-control" v-model="email">
                                    </div>
                                </div>
                                 <div class="col-md-6">
                                     <div class="form-group">
                                        <input type="tel" placeholder="Mobile Number" class="form-control" v-model="phone">
                                    </div>
                                </div>
                            </div>
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
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" placeholder="Bank Nane" class="form-control" v-model="bankName">
                                    </div>
                                </div>
                                 <div class="col-md-6">
                                     <div class="form-group">
                                        <input type="text" placeholder="Account Number" class="form-control" v-model="accNumber">
                                    </div>
                                </div>
                            </div>
                            <button type="" class="edit btn-danger">Edit Profile</button>
                            <button type="" class="save btn-success">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
                <hr />
        <div class="container">
            <small>Growing & managing your wealth has never been this easy!</small>
        </div>
        </section>
    </section>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
export default {
    name: 'Dashboard',
    components:{
        Navbar
    },
    data(){
        return{
            user: null
        }
    },
    methods:{
        //To show the profile 
        showProfile: function(){
            document.querySelector('#overview').style.display = "none";
            document.querySelector('#profile').style.display = "block";
        },
        showOverview: function(){
            document.querySelector('#overview').style.display = "block";
            document.querySelector('#profile').style.display = "none";
        },
        showCashTranzat: function(){
            document.querySelector('#overview').style.display = "none";
            document.querySelector('#profile').style.display = "none";
        }
    },
    mounted(){
        this.showOverview();
    },
    
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors.scss';
.dashboard-links{
    font-size: .9rem;
    cursor: pointer;
    display: block;
    text-decoration: none;
}
.dashboard__wrapper{
    border-bottom: 1px solid #f4f4f4;
}
.overview{
    background: #f4f4f4;
    padding-top: 7rem;
    padding-bottom: 2rem;
    .overview__contents{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-gap: 20px;
        .overview__content{
            padding: .7rem 1rem;
            border-radius: 5px;
            color:#fff;
        }
        .savings{
             background-color:#00c0ef;
        }
        .users{
             background-color:#00a65a;
        }
        .loans{
             background-color:#f56954;
        }
        .investment{
            background-color:#0073b7;
        }
    }
}

form{
    input[type=text],input[type=email],input[type=tel]{
         height: 3rem;
        background: transparent;
        border-radius: 2px;
        box-shadow: none;
        outline: none;
        font-size: .89rem;
        color: #828282;
        border: 1px solid rgba(209,209,209,0.56);
    }
    .edit, .save{
        border: none;
        padding: .7rem 1.5rem;
        margin-right: 2rem;
        border-radius: 3px;
        margin-bottom: 1rem;
    }
}
</style>
