<template>
  <div class="half-banners">
    <div class="container">
      <div class="dflex">
        <div class="big-banner half-banner">
          <div class="banner-title">
            <h2>All iPhones in our store</h2>
            <div class="container">
              <h3>
                Come and choose
              </h3>
            </div>
            <span>
              <router-link tag="a" to="/iphone">
                <a>More</a>
              </router-link>
            </span>
          </div>
          <div class="wrp-bg-desc">
            <img src="https://www.apple.com/v/iphone/home/z/images/overview/iphone-upgrade_large_2x.jpg" alt="iphone-xs">
          </div>
          <div class="wrp-bg-mob">
            <img src="https://www.apple.com/v/iphone/home/z/images/overview/iphone-upgrade_small_2x.jpg" alt="iphone-xs">
          </div>
        </div>
        <div class="big-banner half-banner">
          <div class="banner-title">
            <h2>All iPads in our store</h2>
            <div class="container">
              <h3>
                Come and choose
              </h3>
            </div>
            <span>
              <router-link tag="a" to="/ipad">
                <a>More</a>
              </router-link>
            </span>
          </div>
          <div class="wrp-bg-desc">
            <img src="https://www.apple.com/v/ipad/home/aq/images/overview/trade_in__elfv8i7rmh6q_large_2x.jpg" alt="iphone-xs">
          </div>
          <div class="wrp-bg-mob">
            <img src="https://www.apple.com/v/ipad/home/aq/images/overview/trade_in__elfv8i7rmh6q_large.jpg" alt="iphone-xs">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HalfBanners'
}
</script>