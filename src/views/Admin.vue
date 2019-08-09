<template>
    <section class="admin">
        <Navbar />
        <section class="admin__wrapper container-fluid mb-2">
            <div class="container">
                <div class="row mt-4">
                    <div class="col-md-4">
                        <h4 class="mt-5">Welcome Admin!</h4>
                        <small>Provide quality leadership today for the sake of humanity.</small>
                        <div class="admin__top__nav d-flex justify-content-between mt-5">
                          <a href="" class="dashboard-links" @click.prevent="showOverview()">Overview</a>
                           <a href="" class="dashboard-links" @click.prevent="showProfile()">Members</a>
                            <a href="" class="dashboard-links" @click.prevent="showCashTranzat()">Cash Transactions</a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
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
                            <p>{{ totalMembers }}</p>
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
    </section>
</template>
<script>
import Navbar from "@/components/Navbar";
import firebase from 'firebase';
import db from '@/firebase/init';
export default {
    name: 'Admin',
    components:{
        Navbar
    },
    data(){
        return{
            totalMembers: null
        }
    },
   created(){
       //Fetch data from the firestore
       db.collection('members').get()
       .then(snapshot=>{
           this.totalMembers = snapshot.size
       })
   } 
}
</script>
<style scoped lang="scss">
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
</style>
