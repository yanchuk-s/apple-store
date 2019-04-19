<template>
  <div>
    <div class="big-banner">
      <div class="banner-title">
        <h2>iPhone XR</h2>
        <div class="container">
          <h3>
          All-screen design. Longest battery life ever in an iPhone.
          <br />
          Fastest performance.
        </h3>
        </div>
         <span>
           <router-link tag="a" to="/iphone">
            <a>Buy</a>
           </router-link>
         </span>
      </div>
      <div class="wrp-bg-desc">
        <img src="https://www.apple.com/v/home/ed/images/heroes/spring-iphone-xr/iphone_xr__b0z59ak0bqdy_large.jpg" alt="iphone-xr">
      </div>
      <div class="wrp-bg-mob">
        <img src="https://www.apple.com/v/home/ed/images/heroes/spring-iphone-xr/iphone_xr__b0z59ak0bqdy_small_2x.jpg" alt="iphone-xr">
      </div>
    </div>
    <div class="big-banner">
      <div class="banner-title">
        <h2>iPhone XS</h2>
        <div class="container">
          <h3>
          Largest Super Retina display. Fastest performance with A12 Bionic.  
          <br />
          Most secure facial authentication with Face ID.
        </h3>
        </div>
         <span>
          <router-link tag="a" to="/iphone">
            <a>Buy</a>
           </router-link>
         </span>
      </div>
      <div class="wrp-bg-desc">
        <img src="https://www.apple.com/v/home/ed/images/heroes/spring-iphone-xs/iphone_xs__cm637qa5dno2_medium_2x.jpg" alt="iphone-xs">
      </div>
      <div class="wrp-bg-mob">
        <img src="https://www.apple.com/v/home/ed/images/heroes/spring-iphone-xs/iphone_xs__cm637qa5dno2_small_2x.jpg" alt="iphone-xs">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBanners'
}
</script>