<template>
    <footer class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>About Sacco</h5>
                    <p>Sacco is a corporative organization that pulls funds together from members and provide easy to access and cheap loans and other investments to her members</p>
                </div>
                 <div class="col-md-4">
                    <h5>Contact Details</h5>
                    <h6><i class="fa fa-home"></i>&nbsp; Head Office</h6>
                    <p>No.5 Adani Road, Along NYSC Orientation camp, Enugu, Enugu State, Nigeria.</p>
                    <h6><i class="fa fa-envelope"></i>&nbsp;&nbsp; Email Address</h6>
                    <p>support@sacco.ng</p>
                    <h6><i class="fa fa-phone"></i>&nbsp;&nbsp; Phone</h6>
                    <p>08103515205</p>
                </div>
                 <div class="col-md-4">
                     <h5>Online Payments</h5>
                     <p>You can make all your contributios, savings and loan repayment online. The experience is seamless</p>
                     <h6>We accept the following cards</h6>
                     <img src="../assets/cards.png" class="img-fluid bank-cards" alt="">
                    
                </div>
            </div>
            <hr />
            <p>Sacco &copy; copyright. 2019. All rights reserved. Terms & Conditions</p>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss" scoped>
@import '../styles/_colors.scss';
footer{
    background: #fafafa;
    padding: 4rem 0;
    h5{
        padding-bottom: 1rem;
    }
    p{
        font-size: .89rem;
        line-height: 1.5;
    }
}
</style>
