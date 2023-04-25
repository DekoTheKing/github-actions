import React, { useState } from "react";
import "../App.css";
import Card from "./Card";
import Select from "react-select";
import CoffeeSelect from "./CoffeeSelect.css"

function CoffeeProducts() {
  const [filterBy, setFilterBy] = useState("");

  const coffeeProducts = [
    {
      title: "Vanilla Sweet Cream Cold Brew",
      imageUrl:
        "https://globalassets.starbucks.com/assets/07951b9a7d7d47a2892dfa7a707fd318.jpg?impolicy=1by1_wide_topcrop_630",
      brand: "Starbucks",
      calories: "110",
      fat: "4.5g",
      protein: "2g",
      price: "555 MKD",
    },
    {
      title: "Salted Caramel Cream Cold Brew",
      imageUrl:
        "https://globalassets.starbucks.com/assets/64da774b521447f690c20290cd4cb29d.jpg?impolicy=1by1_wide_topcrop_630",
      brand: "Starbucks",
      calories: "220",
      fat: "4.5g",
      carbs: "23g",
      protein: "2g",
      price: "600 MKD",
    },
    {
      title: "Vanilla Oatmilk Shaken Espresso",
      imageUrl:
        "https://globalassets.starbucks.com/assets/9a51e00fff1c42e8acb62fcbfcef8838.jpg?impolicy=1by1_wide_topcrop_630",
      brand: "Starbucks",
      calories: "140",
      fat: "4.5g",
      carbs: "23g",
      protein: "2g",
      price: "620 MKD",
    },
    {
      title: "Caramel Macchiato Special",
      imageUrl:
        "https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?impolicy=1by1_wide_topcrop_630",
      brand: "Starbucks",
      calories: "250",
      fat: "7g",
      carbs: "37g",
      protein: "10g",
      price: "620 MKD",
    },
    {
      title: "Double Iced Coffee With Milk",
      imageUrl:
        "https://globalassets.starbucks.com/assets/062aac2b949a40e188e832c868803b58.jpg?impolicy=1by1_wide_topcrop_630",
      brand: "Starbucks",
      calories: "110",
      fat: "1.5g",
      carbs: "23g",
      protein: "2g",
      price: "620 MKD",
    },
    {
      title: "Pumpkin Spice Late (Fall Special Offer)",
      imageUrl:
        "https://globalassets.starbucks.com/assets/c3f556afdd4e4a18b96f51135afe2de2.jpg?impolicy=1by1_wide_topcrop_630",
      brand: "Starbucks",
      body: "370 Calories 16g Fat 47g Carbs 11g Protein",
      calories: "370",
      fat: "16g",
      carbs: "47g",
      protein: "11g",
      price: "620 MKD",
    },
    {
      title: "Caramel Macchiato With Cinnamon",
      imageUrl:
        "https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?impolicy=1by1_wide_topcrop_630",
      brand: "Starbucks",
      calories: "250",
      fat: "7g",
      carbs: "37g",
      protein: "10g",
      price: "620 MKD",
    },
    {
      title: "Iced Coffee With Extra Milk",
      imageUrl:
        "https://globalassets.starbucks.com/assets/062aac2b949a40e188e832c868803b58.jpg?impolicy=1by1_wide_topcrop_630",
      brand: "Starbucks",
      calories: "110",
      fat: "1.5g",
      carbs: "23g",
      protein: "2g",
      price: "620 MKD",
    },
    {
      title: "Mikel's Pumpkin Spice Late",
      imageUrl:
        "https://globalassets.starbucks.com/assets/c3f556afdd4e4a18b96f51135afe2de2.jpg?impolicy=1by1_wide_topcrop_630",
      brand: "Starbucks",
      body: "370 Calories 16g Fat 47g Carbs 11g Protein",
      calories: "370",
      fat: "16g",
      carbs: "47g",
      protein: "11g",
      price: "620 MKD",
    },
    {
      title: "Freddo Espresso",
      imageUrl:
        "https://www.kliknijadi.mk/images/food/57164_060721145217972_400x300.jpg",
      brand: "Mikel",
      calories: "110",
      fat: "4.5g",
      protein: "2g",
      price: "215 MKD",
    },
    {
      title: "Freddo Cappucino Latte",
      imageUrl:
        "https://www.kliknijadi.mk/images/food/57170_060721144900144_400x300.jpg",
      brand: "Mikel",
      calories: "220",
      fat: "4.5g",
      carbs: "23g",
      protein: "2g",
      price: "250 MKD",
    },
    {
      title: "Greek Frappe",
      imageUrl:
        "https://www.kliknijadi.mk/images/food/57175_060721150415816_400x300.jpg",
      brand: "Mikel",
      calories: "110",
      fat: "4.5g",
      protein: "2g",
      price: "115 MKD",
    },
    {
      title: "Freddo Espresso Au Lait",
      imageUrl:
        "https://www.kliknijadi.mk/images/food/57167_060721150137050_400x300.jpg",
      brand: "Mikel",
      calories: "220",
      fat: "4.5g",
      carbs: "23g",
      protein: "2g",
      price: "350 MKD",
    },
    
  ];

  const brands = coffeeProducts
    .filter(
      (coffeeProduct, index) =>
        coffeeProducts.findIndex(
          (coffee) => coffee.brand === coffeeProduct.brand
        ) === index
    )
    .map((coffeeProduct) => {
      return {
        value: coffeeProduct.brand,
        label: coffeeProduct.brand,
      };
    });

  return (
    <div>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue=""
        name="color"
        options={brands}
        onChange={option => {setFilterBy(option.value)}}
        defaultMenuIsOpen
      />
      <div className="cardWrapper">
        {coffeeProducts
        .filter(coffeeProduct => filterBy ? coffeeProduct.brand === filterBy : coffeeProduct)
        .map((coffeeProduct, index) => {
          return (
            <Card
              key={index}
              title={coffeeProduct.title}
              imageUrl={coffeeProduct.imageUrl}
              brand={coffeeProduct.brand}
              calories={coffeeProduct.calories}
              fat={coffeeProduct.fat}
              carbs={coffeeProduct.carbs}
              protein={coffeeProduct.protein}
              price={coffeeProduct.price}
            />
          );
        })}
      </div>
      {}
    </div>
  );
}

export default CoffeeProducts;
