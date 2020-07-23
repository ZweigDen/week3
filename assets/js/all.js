new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1586934917210,
        category: '策略',
        title: '農家樂',
        rank: 23,
        weight:3.64,
        description: '工人放置',
        content: '玩家扮演農夫種菜養動物不要讓自己餓死',
        textNeed: 1,
        imageUrl: '',
      },
      {
          id: 1196934917910,
          category: '派對',
          title: '說書人',
          rank: 201,
          weight:1.25,
          description: '畫畫遊戲',
          content: '搞笑的派對遊戲，畫技越爛越好笑',
          textNeed: 0,
          imageUrl: '',
        },
        {
          id: 1196934917950,
          category: '競標',
          title: '瘋王堡',
          rank: 120,
          weight:2.66,
          description: '擺放板塊',
          content: '充滿心機',
          textNeed: 0,
          imageUrl: '',
        }
    ],
    tempProduct: {},
  },
  methods: {
    updateProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products[i] = this.tempProduct;
          }
        });
      } else {
        // Unix Timestamp
        const id = new Date().getTime();
        this.tempProduct.id = id;
        this.products.push(this.tempProduct);
      }
      this.tempProduct = {};
      $('#productModal').modal('hide');
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempProduct = {};
          $('#productModal').modal('show');
          break;
        case 'edit':
          this.tempProduct = Object.assign({}, item);
          $('#productModal').modal('show');
          break;
        case 'delete':
          $('#delProductModal').modal('show');
          this.tempProduct = Object.assign({}, item);
          break;
        default:
          break;
      }
    },
    delProduct() {
      if (this.tempProduct.id) {
        const id = this.tempProduct.id;
        this.products.forEach((item, i) => {
          if (item.id === id) {
            this.products.splice(i, 1);
            this.tempProduct = {};
          }
        });
      }
      $('#delProductModal').modal('hide');
    },
  },
});

