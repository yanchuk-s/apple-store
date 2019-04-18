import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {
        id: 1,
        title: 'Mac',
        slug : 'mac',
        subcategory: [
          {
            id: 11,
            title: 'Air',
            slug: 'air'
          },
          {
            id: 12,
            title: 'Pro',
            slug: 'pro'
          }
        ]
      },
      {
        id : 2,
        title : 'iPhone',
        slug : 'iphone'
      },
      {
        id : 3,
        title : 'iPad',
        slug : 'ipad'
      },
      {
        id : 4,
        title : 'Watch',
        slug : 'watch'
      }
    ],
    products: [
      {
        id: 123,
        title: 'MacBook Pro Retina 15"',
        slug: 'macBook-pro-retina-15',
        category: 1,
        subcategory: 11,
        price: 1100,
        generalPhoto: 'https://i1.rozetka.ua/goods/3639900/35441202_images_3639900655.jpg',
        photos: [
          {
            src: 'https://i1.rozetka.ua/goods/3639900/35441202_images_3639900655.jpg'
          },
          {
            src: 'https://i2.rozetka.ua/goods/3639901/35441202_images_3639901439.jpg'
          },
          {
            src: 'https://i2.rozetka.ua/goods/3639902/35441202_images_3639902090.jpg'
          }
        ],
        description: 'Экран 15.4" IPS (2880x1800) Retina LED, глянцевый / Intel Core i7 (2.2 ГГц) / RAM 16 ГБ / SSD 256 ГБ / Intel Iris Pro Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / OS X Yosemite / 2.04 кг'
      },
      {
        id: 1223,
        title: 'MacBook Air 13"',
        slug: 'macBook-air-13',
        category: 1,
        subcategory: 12,
        price: 800,
        generalPhoto: 'https://i1.rozetka.ua/goods/9413469/64968820_images_9413469940.jpg',
        photos: [
          {
            src: 'https://i1.rozetka.ua/goods/9413469/64968820_images_9413469940.jpg'
          },
          {
            src: 'https://i2.rozetka.ua/goods/9249706/64302574_images_9249706417.jpg'
          }
        ],
        description: 'Экран 13.3" IPS (2560x1600) Retina, глянцевый / Intel Core i5-8210Y (1.6 - 3.6 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics 617 / без ОД / Wi-Fi'
      },
      {
        id: 1223,
        title: 'Apple MacBook 12" Gold',
        slug: 'macBook-12-gold',
        category: 1,
        subcategory: 12,
        price: 1000,
        generalPhoto: 'https://i2.rozetka.ua/goods/7607784/55147590_images_7607784840.jpg',
        photos: [
          {
            src: 'https://i2.rozetka.ua/goods/7607784/55147590_images_7607784840.jpg'
          },
          {
            src: 'https://i1.rozetka.ua/goods/7607785/55147590_images_7607785416.jpg'
          }
        ],
        description: 'Экран 12" Retina IPS (2304x1440) LED, глянцевый / Intel Core M-5Y71 (1.3 - 2.6 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel HD Graphics 5300 / Wi-Fi 802.11 a/b/g/n/ac / Bluetooth 4.0 / веб-камера / OS X Yosemite / 280.5x196.5x3.5-13.1 мм, 0.92 кг / золотой'
      },
      {
        id: 1263,
        title: 'Apple MacBook 12" Silver',
        slug: 'macBook-12-silver',
        category: 1,
        subcategory: 12,
        price: 950,
        generalPhoto: 'https://i2.rozetka.ua/goods/9277566/54573234_images_9277566200.jpg',
        photos: [
          {
            src: 'https://i2.rozetka.ua/goods/9277566/54573234_images_9277566200.jpg'
          },
          {
            src: 'https://i2.rozetka.ua/goods/9277567/54573234_images_9277567831.jpg'
          }
        ],
        description: 'Экран 12" Retina IPS (2304x1440) LED, глянцевый / Intel Core M-5Y71 (1.3 - 2.6 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel HD Graphics 5300 / Wi-Fi 802.11 a/b/g/n/ac / Bluetooth 4.0 / веб-камера / OS X Yosemite / 280.5x196.5x3.5-13.1 мм, 0.92 кг / золотой'
      },
      {
        id: 4463,
        title: 'iPhone 8 64GB Space Grey',
        slug: 'iphone-8-64GB-space-grey',
        category: 2,
        price: 650,
        generalPhoto: 'https://i1.rozetka.ua/goods/8969634/47132360_images_8969634959.jpg',
        photos: [
          {
            src: 'https://i1.rozetka.ua/goods/8969634/47132360_images_8969634959.jpg'
          },
          {
            src: 'https://i2.rozetka.ua/goods/8969636/47132360_images_8969636282.jpg'
          }
        ],
        description: 'Экран 12" Retina IPS (2304x1440) LED, глянцевый / Intel Core M-5Y71 (1.3 - 2.6 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel HD Graphics 5300 / Wi-Fi 802.11 a/b/g/n/ac / Bluetooth 4.0 / веб-камера / OS X Yosemite / 280.5x196.5x3.5-13.1 мм, 0.92 кг / золотой'
      },
      {
        id: 9463,
        title: 'iPhone Xs Max 512Gb',
        slug: 'iphone-xs-512GB-space-grey',
        category: 2,
        price: 650,
        generalPhoto: 'https://i1.rozetka.ua/goods/10521118/69477986_images_10521118982.png',
        photos: [
          {
            src: 'https://i1.rozetka.ua/goods/10521118/69477986_images_10521118982.png'
          },
          {
            src: 'https://i1.rozetka.ua/goods/10521119/69477986_images_10521119342.png'
          }
        ],
        description: 'Экран 12" Retina IPS (2304x1440) LED, глянцевый / Intel Core M-5Y71 (1.3 - 2.6 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel HD Graphics 5300 / Wi-Fi 802.11 a/b/g/n/ac / Bluetooth 4.0 / веб-камера / OS X Yosemite / 280.5x196.5x3.5-13.1 мм, 0.92 кг / золотой'
      },
      {
        id: 9403,
        title: 'iPhone 7 32 Gb Black',
        slug: 'iphone-7-42GB-black',
        category: 2,
        price: 450,
        generalPhoto: 'https://i2.rozetka.ua/goods/9908633/66921029_images_9908633447.jpg',
        photos: [
          {
            src: 'https://i2.rozetka.ua/goods/9908633/66921029_images_9908633447.jpg'
          },
          {
            src: 'https://i2.rozetka.ua/goods/9908634/66921029_images_9908634063.jpg'
          }
        ],
        description: 'Экран 12" Retina IPS (2304x1440) LED, глянцевый / Intel Core M-5Y71 (1.3 - 2.6 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel HD Graphics 5300 / Wi-Fi 802.11 a/b/g/n/ac / Bluetooth 4.0 / веб-камера / OS X Yosemite / 280.5x196.5x3.5-13.1 мм, 0.92 кг / золотой'
      },
      {
        id: 9400,
        title: 'IPhone 6s 32GB Space Gray',
        slug: 'iphone-6s-42GB-space-gray',
        category: 2,
        price: 350,
        generalPhoto: 'https://i2.rozetka.ua/goods/11096497/73503993_images_11096497515.jpg',
        photos: [
          {
            src: 'https://i2.rozetka.ua/goods/11096497/73503993_images_11096497515.jpg'
          },
          {
            src: 'https://i1.rozetka.ua/goods/11096498/73503993_images_11096498163.jpg'
          }
        ],
        description: 'Экран 12" Retina IPS (2304x1440) LED, глянцевый / Intel Core M-5Y71 (1.3 - 2.6 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel HD Graphics 5300 / Wi-Fi 802.11 a/b/g/n/ac / Bluetooth 4.0 / веб-камера / OS X Yosemite / 280.5x196.5x3.5-13.1 мм, 0.92 кг / золотой'
      }
    ]
  },
  getters: {
    getCategories: state => {
      return state.categories
    },
    getCategoryBySlug: state => slug => {
      return state.categories.find(category => category.slug === slug)
    },
    getCategoryById: state => id => {
      return state.categories.find(category => category.id === id)
    },
    getProductsByCategory: state => id => {
      let items = []
      state.products.forEach(function(item) {
        if(item.category == id){
          items.push(item)
        }
      });
      return items
    },
    searchGet: state => text => {
      let items = []
      state.products.forEach(function(item) {
        if(item.title.toLowerCase().includes(text.toLowerCase())){
          items.push(item)
        }
      });
      return items
    },
    getProductBySlug: state => slug => {
      return state.products.find(product => product.slug === slug)
    }
  },
  mutations: {

  },
  actions: {

  }
})
