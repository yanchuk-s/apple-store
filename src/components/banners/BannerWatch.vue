<template>
<div class="big-banner">
  <div class="banner-title">
    <h2>Apple Watch</h2>
    <div class="container">
      <h3>
      New colors to 
      <br />
      style your spring.
    </h3>
    </div>
    <span>
      <router-link tag="a" to="/watch">
        <a>Buy</a>
      </router-link>
    </span>
  </div>
  <div class="wrp-bg-desc">
    <img src="https://www.apple.com/v/watch/home/n/images/give_back_large.jpg" alt="iphone-xr">
  </div>
  <div class="wrp-bg-mob">
    <img src="https://www.apple.com/v/watch/home/n/images/give_back_medium_2x.jpg" alt="iphone-xr">
  </div>
</div>
</template>

<script>
export default {
  name: 'BannerWatch'
}
</script>