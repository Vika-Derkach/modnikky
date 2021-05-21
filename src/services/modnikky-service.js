export default class ModnikkyService {
  data = [
    {
      id: 1,
      title: "Pinterest Europe Blue Crimping Denim Shorts",
      price: "50",

      frontPicture:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F50%2Fc7%2F50c77565f101f976d866104bf0c8f2adaebc9417.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_loose%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      additionalPicture:
        "https://www.rankandstyle.com/media/lists/d/denim-shorts_mXmnHxE.jpg",
      fabric: "DENIM",
      product_descr:
        "High-rise waist; \n Concealed fly; \n Functional pockets; \n Raw-edge hem; \n Regular fit; \n True to size",
      color: "BLUE",
    },
    {
      id: 2,
      title: "Women Noos-high-waist-skinny Jeans",
      price: "200",
      frontPicture:
        "https://i.pinimg.com/736x/2d/11/ed/2d11edeba02d83b1471e1556597889b2.jpg",
      additionalPicture:
        "http://www.77onlineshop.de/$WS/77onlineshop/websale8_shop-77onlineshop/produkte/medien/bilder/normal/19020375.jpg",
      fabric: "DENIM",
      product_descr:
        "High-rise waist; \n Concealed fly; \n Button fastening; \n Functional pockets; \n Slim tapered leg; \n Sits on the ankle",
      color: "BLUE",
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
