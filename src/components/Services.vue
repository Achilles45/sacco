<template>
    <div class="services__wrapper container-fluid">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12 text-center">
                    <h3>Other services</h3>
                </div>
            </div>
            <div class="row mt-5 mb-5">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <div class="row text-center">
                        <div class="col-md-4 service-card">
                            <img src="../assets/invest.png" class="img-fluid service-img" alt="">
                            <h6 class="mt-2">Investment Advisory</h6>
                        </div>
                        <div class="col-md-4 service-card">
                            <img src="../assets/chart.png" class="img-fluid service-img" alt="">
                            <h6 class="mt-2">Business Development</h6>
                        </div>
                        <div class="col-md-4 service-card">
                            <img src="../assets/house.png" class="img-fluid service-img" alt="">
                            <h6 class="mt-2">Fixed Income Offerings</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Services'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors.scss';
.services__wrapper{
    .service-card{
        
        padding: 2rem;
    }
    .service-img{
        height: 80px;
    }
}
</style>
