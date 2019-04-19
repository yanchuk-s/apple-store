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
        description: 'Технология Touch ID позволяет защитить информацию идеальным паролем — вашим отпечатком пальца. Вы можете мгновенно разблокировать телефон и войти в любимые приложения. Touch ID поддерживает функцию Apple Pay, которая позволяет оплачивать покупки в магазинах, приложениях и на веб-сайтах.'
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
        description: 'Как сделать iPhone из прочного стекла, чтобы он поддерживал беспроводную зарядку? Мы создали совершенно новое стекло. Укрепили его с помощью стального основания и рамки из алюминия, применяющегося в аэрокосмической отрасли. И подогнали элементы корпуса с точностью до микрона, чтобы обеспечить защиту от воды.'
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
        description: 'Впервые передняя и задняя панели iPhone выполнены из стекла. Самая популярная камера усовершенствована. Установлен самый умный и мощный процессор, когда-либо созданный для iPhone. Без проводов процесс зарядки становится элементарным. А дополненная реальность открывает невиданные до сих пор возможности. iPhone 8. Новое поколение iPhone.'
      },
      {
        id: 5542,
        title: 'iPad Wi-FI 32GB Space Gray',
        slug: 'iPad-32GB-Space-Gray',
        category: 3,
        price: 650,
        generalPhoto: 'https://i1.rozetka.ua/goods/8969649/58619866_images_8969649162.png',
        photos: [
          {
            src: 'https://i1.rozetka.ua/goods/8969649/58619866_images_8969649162.png'
          },
          {
            src: 'https://i1.rozetka.ua/goods/8969649/58619866_images_8969649967.jpg'
          }
        ],
        description: 'Экран 9.7" IPS (2048x1536) емкостный Multi-Touch / Apple A10 Fusion / RAM 2 ГБ / 32 ГБ встроенной памяти / Wi-Fi / Bluetooth 4.2 / основная камера 8 Мп, фронтальная - 1.2 Мп / iOS 11 / 469 г / золотистый'
      },
      {
        id: 55402,
        title: 'iPad Wi-FI 128GB Space Gray',
        slug: 'iPad-128GB-Space-Gray',
        category: 3,
        price: 750,
        generalPhoto: 'https://i2.rozetka.ua/goods/8969684/58620028_images_8969684932.jpg',
        photos: [
          {
            src: 'https://i2.rozetka.ua/goods/8969684/58620028_images_8969684932.jpg'
          },
          {
            src: 'https://i1.rozetka.ua/goods/8969684/58620028_images_8969684162.png'
          }
        ],
        description: 'Экран 9.7" IPS (2048x1536) емкостный Multi-Touch / Apple A10 Fusion / RAM 2 ГБ / 32 ГБ встроенной памяти / Wi-Fi / Bluetooth 4.2 / основная камера 8 Мп, фронтальная - 1.2 Мп / iOS 11 / 469 г / золотистый'
      },
      {
        id: 55412,
        title: ' iPad Pro 10.5" Wi-Fi 64GB Gold',
        slug: 'iPad-pro-gold',
        category: 3,
        price: 1050,
        generalPhoto: 'https://i2.rozetka.ua/goods/3540777/copy_apple_ipad_pro_10_5_mqdx2rk_a_5aa92a27606f0_images_3540777159.jpg',
        photos: [
          {
            src: 'https://i2.rozetka.ua/goods/3540777/copy_apple_ipad_pro_10_5_mqdx2rk_a_5aa92a27606f0_images_3540777159.jpg'
          },
          {
            src: 'https://i2.rozetka.ua/goods/3540778/copy_apple_ipad_pro_10_5_mqdx2rk_a_5aa92a27606f0_images_3540778535.jpg'
          }
        ],
        description: 'Экран 9.7" IPS (2048x1536) емкостный Multi-Touch / Apple A10 Fusion / RAM 2 ГБ / 32 ГБ встроенной памяти / Wi-Fi / Bluetooth 4.2 / основная камера 8 Мп, фронтальная - 1.2 Мп / iOS 11 / 469 г / золотистый'
      },
      {
        id: 554102,
        title: 'iPad Pro 10.5" Wi-Fi 64GB Space Gray',
        slug: 'iPad-pro-space-gray',
        category: 3,
        price: 1050,
        generalPhoto: 'https://i1.rozetka.ua/goods/3640683/35450554_images_3640683913.jpg',
        photos: [
          {
            src: 'https://i1.rozetka.ua/goods/3640683/35450554_images_3640683913.jpg'
          },
          {
            src: 'https://i1.rozetka.ua/goods/3640686/35450554_images_3640686454.jpg'
          }
        ],
        description: 'Экран 9.7" IPS (2048x1536) емкостный Multi-Touch / Apple A10 Fusion / RAM 2 ГБ / 32 ГБ встроенной памяти / Wi-Fi / Bluetooth 4.2 / основная камера 8 Мп, фронтальная - 1.2 Мп / iOS 11 / 469 г / золотистый'
      },
      {
        id: 23551,
        title: 'Watch Series 4 GPS+CELLULAR 40mm',
        slug: 'Watch-Series-40mm',
        category: 4,
        price: 960,
        generalPhoto: 'https://i1.rozetka.ua/goods/9679518/66108056_images_9679518695.jpg',
        photos: [
          {
            src: 'https://i1.rozetka.ua/goods/9679518/66108056_images_9679518695.jpg'
          },
          {
            src: 'https://i2.rozetka.ua/goods/9679519/66108056_images_9679519157.jpg'
          }
        ],
        description: 'Зміни, які змінюють все. Series 4 - це Apple Watch з абсолютно новим дизайном і новими технологіями. У цьому годиннику продумана кожна деталь: від просунутої архітектури процесора S4 до особливого вигину кутів в збільшеному дисплеї. Apple Watch - неймовірно персональний пристрій, який стало ще потужнішим.'
      },
      {
        id: 33551,
        title: 'WATCH Series 4 44mm Gold',
        slug: 'Watch-Series-44mm-gold',
        category: 4,
        price: 520,
        generalPhoto: 'https://i1.rozetka.ua/goods/8969643/58619752_images_8969643569.jpg',
        photos: [
          {
            src: 'https://i1.rozetka.ua/goods/8969643/58619752_images_8969643569.jpg'
          },
          {
            src: 'https://i2.rozetka.ua/goods/8969644/58619752_images_8969644367.jpg'
          }
        ],
        description: 'Зміни, які змінюють все. Series 4 - це Apple Watch з абсолютно новим дизайном і новими технологіями. У цьому годиннику продумана кожна деталь: від просунутої архітектури процесора S4 до особливого вигину кутів в збільшеному дисплеї. Apple Watch - неймовірно персональний пристрій, який стало ще потужнішим.'
      },
      {
        id: 23559,
        title: 'WATCH Series 4 38mm Space Gray',
        slug: 'Watch-Series-38mm-spacegray',
        category: 4,
        price: 420,
        generalPhoto: 'https://i1.rozetka.ua/goods/7509388/54781818_images_7509388686.jpg',
        photos: [
          {
            src: 'https://i1.rozetka.ua/goods/7509388/54781818_images_7509388686.jpg'
          },
          {
            src: 'https://i1.rozetka.ua/goods/7509389/54781818_images_7509389016.jpg'
          }
        ],
        description: 'Зміни, які змінюють все. Series 4 - це Apple Watch з абсолютно новим дизайном і новими технологіями. У цьому годиннику продумана кожна деталь: від просунутої архітектури процесора S4 до особливого вигину кутів в збільшеному дисплеї. Apple Watch - неймовірно персональний пристрій, який стало ще потужнішим.'
      },
      {
        id: 10559,
        title: 'WATCH Series 4 44mm Space Gray',
        slug: 'Watch-Series-44mm-spacegray',
        category: 4,
        price: 380,
        generalPhoto: 'https://i1.rozetka.ua/goods/8969682/58619986_images_8969682195.jpg',
        photos: [
          {
            src: 'https://i1.rozetka.ua/goods/8969682/58619986_images_8969682195.jpg'
          },
          {
            src: 'https://i1.rozetka.ua/goods/8969683/58619986_images_8969683042.jpg'
          }
        ],
        description: 'Зміни, які змінюють все. Series 4 - це Apple Watch з абсолютно новим дизайном і новими технологіями. У цьому годиннику продумана кожна деталь: від просунутої архітектури процесора S4 до особливого вигину кутів в збільшеному дисплеї. Apple Watch - неймовірно персональний пристрій, який стало ще потужнішим.'
      },
      {
        id: 14459,
        title: 'Apple iMac Pro 27" 2017',
        slug: 'iMac-Pro-27-2017',
        category: 1,
        price: 11000,
        generalPhoto: 'https://i2.rozetka.ua/goods/6945902/51613278_images_6945902706.jpg',
        photos: [
          {
            src: 'https://i2.rozetka.ua/goods/6945902/51613278_images_6945902706.jpg'
          },
          {
            src: 'https://i1.rozetka.ua/goods/6945903/51613278_images_6945903318.jpg'
          }
        ],
        description: 'Экран 27" IPS Retina (5120x2880) 5K LED / Intel Core i5 (3.5 - 4.1 ГГц) / RAM 8 ГБ / HDD 1 ТБ / AMD Radeon Pro 575, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / кардридер / веб-камера / macOS Sierra / 9.44 кг / серебристый / клавиатура + мышь'
      },
      {
        id: 10559,
        title: 'Apple iMac Pro 27" Retina 5K',
        slug: 'iMac-Pro-27-Retina',
        category: 1,
        price: 2400,
        generalPhoto: 'https://i2.rozetka.ua/goods/3674552/copy_apple_mned2ua_a_5ab3d2e23eb65_images_3674552098.jpg',
        photos: [
          {
            src: 'https://i2.rozetka.ua/goods/3674552/copy_apple_mned2ua_a_5ab3d2e23eb65_images_3674552098.jpg'
          },
          {
            src: 'https://i1.rozetka.ua/goods/3674553/copy_apple_mned2ua_a_5ab3d2e23eb65_images_3674553008.jpg'
          }
        ],
        description: 'Экран 21.5" IPS (1920x1080) LED / Intel Core i5 (2.3 - 3.6 ГГц) / RAM 8 ГБ / HDD 1 ТБ / Intel Iris Plus Graphics 640 / без ОД / LAN / Wi-Fi / Bluetooth / кардридер / веб-камера / macOS Sierra / 5.66 кг / серебристый / клавиатура + мышь'
      },
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
