<template>
  <div class="home">
    <TopBanners />
    <HalfBanners />
    <BannerWhite />
    <BannerDark />
    <BannerWatch />
  </div>
</template>

<script>
import HalfBanners from '@/components/banners/HalfBanners.vue'
import BannerDark from '@/components/banners/BannerDark.vue'
import BannerWatch from '@/components/banners/BannerWatch.vue'
import BannerWhite from '@/components/banners/BannerWhite.vue'
import TopBanners from '@/components/banners/TopBanners.vue'
export default {
  components: {
    TopBanners,
    HalfBanners,
    BannerDark,
    BannerWatch,
    BannerWhite
  }
}
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
