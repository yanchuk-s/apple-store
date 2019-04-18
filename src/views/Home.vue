<template>
  <div class="home">
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
                  <a>Buy</a>
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
                  <a>Buy</a>
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
    <div class="big-banner">
      <div class="banner-title">
        <h2>MacBook Air</h2>
        <div class="container">
          <h3>
          Lightness strikes again.
        </h3>
        </div>
         <span>
          <router-link tag="a" to="/mac">
            <a>Buy</a>
           </router-link>
         </span>
      </div>
      <div class="wrp-bg-desc">
        <img src="https://www.apple.com/v/mac/home/af/images/overview/hero/macbook_air__cdtxobde737m_large.jpg" alt="iphone-xr">
      </div>
      <div class="wrp-bg-mob">
        <img src="https://www.apple.com/v/mac/home/af/images/overview/hero/macbook_air__cdtxobde737m_small_2x.jpg" alt="iphone-xr">
      </div>
    </div>
    <div class="big-banner dark">
      <div class="banner-title">
        <h2>MacBook Pro</h2>
        <div class="container">
          <h3>
          More power
        </h3>
        </div>
         <span>
          <router-link tag="a" to="/mac">
            <a>Buy</a>
           </router-link>
         </span>
      </div>
      <div class="wrp-bg-desc">
        <img src="https://www.apple.com/v/mac/home/af/images/overview/hero/macbook_pro__c6uspyy0f8sy_large_2x.jpg" alt="iphone-xr">
      </div>
      <div class="wrp-bg-mob">
        <img src="https://www.apple.com/v/mac/home/af/images/overview/hero/macbook_pro__c6uspyy0f8sy_medium_2x.jpg" alt="iphone-xr">
      </div>
    </div>
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
  </div>
</template>

<script>

</script>

<style lang="scss">
.big-banner{
  background: #fafafa;
  text-align: center;
  padding-top: 40px;
  margin-bottom: 30px;
  .banner-title{
    h2{
      font-size: 40px;
      margin-bottom: 15px;
    }
    h3{
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 15px;
    }
    span{
      a{
        display: block;
        margin-bottom: 15px;
        color: #0070c9;
        font-weight: 500;
      }
    }
  }
  .wrp-bg-desc{
    height: 350px;
    width: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .wrp-bg-mob{
    display: none;
  }
}

.big-banner.dark{
  background-color: #121217;
  .banner-title{
    h2{
     color: #fff;
    }
    h3{
      color: #fff;
    }
  }
}

.half-banners{
  .dflex{
    justify-content: space-between;
  }
  .big-banner.half-banner{
    width: calc(50% - 20px);
    background: #ffffff;
  }
}


@media screen and (max-width: 768px){
.big-banner{
  padding-top: 30px;
  .wrp-bg-desc{
    display: none
  }
  .wrp-bg-mob{
    display: block;
    display: block;
    width: 100%;
    height: 250px;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    }
  }
  .half-banners{
  .dflex{
    justify-content: center;
    flex-direction: column;
  }
  .big-banner.half-banner{
    width: 100%;
    background: #ffffff;
  }
}
}
</style>
