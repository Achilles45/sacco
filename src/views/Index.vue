<template>
  <div class="home">
    <div class="top__nav container-fluid d-none d-lg-block align-items-center">
      <div class="container">
       <div class="top__nav__contents d-flex justify-content-between align-items-center">
         <div class="text">
            <p>Your corporative of choice in helping you truely grow wealth. Become a member today!</p>
         </div>
         <div class="socials">
           <i class="fa fa-facebook mr-4"></i>
           <i class="fa fa-twitter mr-4"></i>
           <i class="fa fa-instagram "></i>
         </div>
       </div>
      </div>
    </div>
    <Navbar />
     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
          <div class="carousel-overlay"></div>
      <img class="carousel-img" src="../assets/picture1.jpeg" alt="First slide">
       <div class="carousel-caption d-md-block">
    <h2 class="animated zoomIn animDe mb-4">Helping You Achieve a Better Financial Future</h2>
    <p class="animated zoomIn animDe">We have provided you with an amazing and secured platform where you can save your money, benefit from our loan products, and deploy investments into secured investment channels! </p>
    <router-link to="/register" class="animated fadeInUp animDe banner-buttons">Get Started</router-link>
  </div>
    </div>
    <div class="carousel-item">
       <div class="carousel-overlay"></div>
      <img class="carousel-img" src="../assets/image2.jpg" alt="Second slide">
         <div class="carousel-caption d-md-block">
    <h2 class="animated fadeInRight animDe mb-4">You Deserve a Better Life</h2>
    <p>The future you seek is in the decisions you make today! </p>
    <router-link to="/register" class="animated fadeInUp animDe banner-buttons">Get Started</router-link>
  </div>
    </div>
    <div class="carousel-item">
       <div class="carousel-overlay"></div>
      <img class="carousel-img" src="../assets/image1.jpg" alt="Third slide">
      <div class="carousel-caption d-md-block">
    <h2 class="animated shake animDe mb-4">Create & Manage Your Wealth</h2>
    <p class="animated fadeInUp animDe">We have provided you with an amazing and secured platform where you can save your money, benefit from our loan products, and deploy investments into secured investment channels! </p>
    <router-link to="/register" class="animated fadeInUp animDe banner-buttons">Get Started</router-link>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  <section class="support container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h6>We promise, our support is top notch</h6>
          <p>Connect with us!</p>
          <div class="support__icons mb-3">
            <i class="fa fa-facebook mr-3"></i>
          <i class="fa fa-twitter mr-3"></i>
          <i class="fa fa-instagram mr-3"></i>
          <i class="fa fa-youtube mr-3"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Why />
  <Products />
  <Process />
  <Services />
  <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Why from "@/components/Why.vue";
import Products from "@/components/Products.vue";
import Process from "@/components/Process.vue";
import Services from "@/components/Services.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'index',
  components:{
    Navbar,
    Why,
    Products,
    Process,
    Services,
    Footer
  }
}
</script>
<style scoped lang="scss">
@import '../styles/_colors.scss';
.top__nav{
  background: $secondary-color;
  color: #fff;
  align-items: center;
  p{
   font-size: .73rem;
   padding-top: .62rem;
  }
}
.carousel-overlay{
  position: absolute !important;
  top:0;
  bottom:0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,.8);
  width: 100%;
  height: 100%;
}
.carousel-img{
  width: auto;
  height: 100%;
  max-height: 540px;
  display: block !important;
  width: 100vw;
}
.carousel-inner{
  position: relative;
}
.carousel-caption{
  position: absolute;
  top: 25%;
  h2{
    font-weight: 800;
    font-size: 4rem;
    font-family: 'Roboto'!important;
  }
  p{
    padding-bottom: 1.3rem;
    font-size: .9rem;
  }
}
.banner-buttons{
  background: $secondary-color;
  padding: 1rem 3rem;
  text-align: center;
  color: #fff;
  text-decoration: none;
  border-radius: 1px
}
.animDe{
  animation-duration: 4s;
}
.support{
    background-color: #fafafa;
    border-bottom: 1px solid #e0e0e0;
    padding: 1.5rem;
  h6{
    font-weight: bold;
    font-size: 1.155rem;
  }
  .fa-facebook{
    color: #3B5998;
    font-size: 1.5rem;
  }
  .fa-twitter{
    color: #1DA1F2;
    font-size: 1.5rem;
  }
  .fa-youtube{
    color: $secondary-color;
    font-size: 1.5rem;
  }
  .fa-instagram{
    color: #4066E9;
    font-size: 1.5rem;
  }
}
@media only screen and (max-width: 960px){
  .carousel-img{
  width: auto;
  height: 100%;
  max-height: 600px;
  display: block !important;
}
}


//MEDIA QUERIES
@media only screen and (max-width: 960px){
  .carousel-caption{
  position: absolute;
  top:10%;
  h2{
    font-weight: 800;
    font-size: 2.2rem;
    font-family: 'Roboto'!important;
  }
}
}
</style>

