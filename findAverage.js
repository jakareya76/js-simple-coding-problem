function findAveragePhonePrice(mobile) {
    const mobileCount = mobile.length;
  
    let mobilePrice = 0;
  
    for (let i = 0; i < mobile.length; i++) {
      let price = mobile[i].price;
      mobilePrice = mobilePrice + price;
    }
  
    const avg = mobilePrice / mobileCount;
  
    return avg;
  }
  
  const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
  ];
  
  console.log(findAveragePhonePrice(phones));
  