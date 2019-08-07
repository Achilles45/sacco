<template>
    <div class="why__wrapper container-fluid">
        <div class="container">
            <div class="row text-center">
                <div class="col-12 why__heading">
                    <h3>Why you should join us!</h3>
                </div>
            </div>
            <div class="row mt-5 mb-5 text-center">
                <div class="col-md-4">
                    <i class="fa fa-shield why-icons"></i>
                    <h5>Secured and Reliable</h5>
                    <p>We conform to standard security specifications to make sure that all members accounts and transactions are always secured. We also partner with insurance firms to make sure all funds are 100% secured.</p>
                </div>
                 <div class="col-md-4">
                    <i class="fa fa-cubes why-icons"></i>
                    <h5>Innovative</h5>
                    <p>Our innovative approavh is what sets us apart form the rest of the park. All our services and products are designed with our members in mind and are reasonably priced.Operations are completely paperless too.</p>
                </div>
                 <div class="col-md-4">
                    <i class="fa fa-database why-icons"></i>
                    <h5>Realtime management</h5>
                    <p>You can manag e and control all your activities on the platform from anywhere and with any device. Every member has an intuitive experience using out tech platforms. Very simple to use</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Why'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors.scss';
    .why__wrapper{
        background: #FFF;
        padding: 3rem 0;
        .why__heading{
            h3{
                font-weight: normal;
                text-transform: capitalize;
                color: #484848;
                font-family: 'Roboto';
            }
            hr{
                background: $secondary-color;
                width: 100px;
                height: .2rem;
            }
        }
        .why-icons{
            color: $secondary-color;
            font-size: 2.2rem;
            padding-bottom: .7rem;
        }
        h5{
            padding-bottom: .5rem;
            font-weight: 300;
        }
        p{
            font-size: .89rem;
            line-height: 1.7;
        }
    }
</style>
