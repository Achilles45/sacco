<template>
    <section class="products__wrappter container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-5 intro">
                    <h4>Find Loan Products</h4>
                    <h6>We Offer</h6>
                    <p>A variety of loan products to our members and are priced as agreed during Annual General Meetings. Our loan portfolio includes but not limited to real estate/building loan, auto, business working capital, salary advances, medical, emergency loans and others according to the members needs and admin approval!</p>
                    <router-link to="/login" class="loan-btn">Apply Here</router-link>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-6 loans">
                    <div class="row text-center">
                        <div class="col-md-6 mt-5">
                            <div class="products__cards animated fadeInUp">
                                <i class="fa fa-briefcase products-icons"></i>
                                <h6>Working Capital</h6>
                                <p>Cheap working capital for a maximum period of 2 months.</p>
                                <router-link to="/login" class="loan-links">Apply <i class="fa fa-long-arrow-right"></i></router-link>
                            </div>
                            <br />
                            <div class="products__cards animated fadeInDown">
                                <i class="fa fa-bolt products-icons"></i>
                                <h6>Emergencies</h6>
                                <p>You are sure to get help in times of urgent needs!</p>
                                <router-link to="/login" class="loan-links">Apply <i class="fa fa-long-arrow-right"></i></router-link>
                            </div>
                        </div>
                        <div class="col-md-6 mt-5">
                            <div class="products__cards animated fadeInDown">
                                <i class="fa fa-book products-icons"></i>
                                <h6>Educational/Travels</h6>
                                <p>Don't let money stop you from pursueing your dreams.</p>
                                <router-link to="/login" class="loan-links">Apply <i class="fa fa-long-arrow-right"></i></router-link>
                            </div>
                            <br />
                            <div class="products__cards animated fadeInRight">
                                <i class="fa fa-home products-icons"></i>
                                <h6>Construction</h6>
                                <p>We are your partner in any construction projects.</p>
                                <router-link to="/login" class="loan-links">Apply <i class="fa fa-long-arrow-right"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Products'
}
</script>
<style scoped lang="scss">
@import '../styles/_colors.scss';
.products__wrappter{
    padding: 5rem 0;
    // background: #fafafa;
    .intro{
        h4{
            padding-bottom: .4rem;
            font-weight: 300;
        }
        p{
            font-size: .9rem;
            line-height: 1.7;
            padding-top: .6rem;
            padding-bottom: 1.3rem;
        }
        .loan-btn{
            background: $secondary-color;
            color: #fff;
            text-decoration: none;
            text-align: center;
            padding: .8rem 3rem;
            border-radius: 3px;
        }
    }
    .loans{
        .products-icons{
            // color: $secondary-color;
            font-size: 1.3rem;
            padding-bottom: .6rem;
        }
        .products__cards{
            box-shadow: 0px 0px 2px 1px rgba(0,0,0,.12);
            padding: 2rem;
        }
        .loan-links{
            color:#212529;
            text-decoration: none;
            opacity: .9;
        }
        h6{
            font-size: .9rem;
        }
        p{
            font-size: .8rem;
            line-height: 1.7;
        }
    }
}
</style>
