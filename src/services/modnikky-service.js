export default class ModnikkyService {
  data = [
    {
      id: 1,
      title: "Pinterest Europe Blue Crimping Denim Shorts",
      price: 50,
      frontPicture:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F50%2Fc7%2F50c77565f101f976d866104bf0c8f2adaebc9417.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      additionalPicture:
        "https://www.rankandstyle.com/media/lists/d/denim-shorts_mXmnHxE.jpg",
      fabric: "DENIM",
      product_descr:
        "High-rise waist; \n Concealed fly; \n Functional pockets; \n Raw-edge hem; \n Regular fit; \n True to size",
      color: "BLUE",

      kind: "shorts",
    },
    {
      id: 2,
      title: "Women Noos-high-waist-skinny Jeans",
      price: 200,
      frontPicture:
        "https://i.pinimg.com/736x/2d/11/ed/2d11edeba02d83b1471e1556597889b2.jpg",
      additionalPicture:
        "http://www.77onlineshop.de/$WS/77onlineshop/websale8_shop-77onlineshop/produkte/medien/bilder/normal/19020375.jpg",
      fabric: "DENIM",
      product_descr:
        "High-rise waist; \n Concealed fly; \n Button fastening; \n Functional pockets; \n Slim tapered leg; \n Sits on the ankle",
      color: "BLUE",
      kind: "jeans",
    },
    {
      id: 3,
      title: "Women’s Black Leather Biker Jacket",
      price: 250,
      frontPicture:
        "https://i.pinimg.com/originals/ce/4e/b9/ce4eb9a17ef3b76364c3a1d8fd81ce15.jpg",
      additionalPicture:
        "https://images-na.ssl-images-amazon.com/images/I/71-6g5arnVL._AC_UL1500_.jpg",
      fabric: "LEATHER",
      product_descr:
        "If you are looking for a traditional style leather biker jacket with a difference then this is the perfect choice for you. Manufactured from the highest quality lamb nappa which is perfect to create this popular and beautifully feminine cut.",
      color: "BLACK",
      kind: "jacket",
    },
  ];
  getClothes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.999) {
          reject(new Error("Something bad happened"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
