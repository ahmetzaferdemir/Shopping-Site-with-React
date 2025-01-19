import crownTshirt from '../img/1.jpg'
import wabivizaTshirt from '../img/2.jpg'
import baseBrownTshirt from '../img/3.jpg'
import feministTshirt from '../img/4.jpg'
import baseSlimFitBlackTshirt from '../img/5.jpg'
import baseRegularBlackTshirt from '../img/6.jpg'
import tigerJacket from '../img/7.jpg'
import snellTshirt from '../img/8.jpg'
import ashluxeTshirt from '../img/9.jpg'


export const clothes = [
    {
        id: 1,
        image: crownTshirt,
        name: "CROWN regular man black t-shirt",
        price: 15,
        discount: true,
        discountedPrice: 12,
        sizes: ["S", "M", "L"],
    }
    ,
    {
        id: 2,
        image: wabivizaTshirt,
        name: "WABİVİZA oversize man white t-shirt",
        price: 17,
        discount: false,
        discountedPrice: 0,
        sizes: ["S", "M", "L", "XL"],
    }
    ,
    {
        id: 3,
        image: baseBrownTshirt,
        name: "BASE regular unisex brown t-shirt",
        price: 10,
        discount: false,
        discountedPrice: 0,
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    }
    ,
    {
        id: 4,
        image: feministTshirt,
        name: "FEMINIST slim fit woman green t-shirt",
        price: 15,
        discount: true,
        discountedPrice: 11,
        sizes: ["XS", "S", "M", "L", "XL"],
    }
    ,
    {
        id: 5,
        image: baseSlimFitBlackTshirt,
        name: "BASE slim fit man white t-shirt",
        price: 15,
        discount: false,
        discountedPrice: 0,
        sizes: ["M", "L", "XL"],
    }
    ,
    {
        id: 6,
        image: baseRegularBlackTshirt,
        name: "BASE oversize man black t-shirt",
        price: 15,
        discount: false,
        discountedPrice: 0,
        sizes: ["M", "L", "XL"],
    }
    ,
    {
        id: 7,
        image: tigerJacket,
        name: "TİGER man grey jacket",
        price: 75,
        discount: true,
        discountedPrice: 65,
        sizes: ["S", "M", "L", "XL"],
    }
    ,
    {
        id: 8,
        image: snellTshirt,
        name: "SNELL regular man grey t-shirt",
        price: 20,
        discount: false,
        discountedPrice: 0,
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    }
    ,
    {
        id: 9,
        image: ashluxeTshirt,
        name: "BASE oversize unisex brown t-shirt",
        price: 20,
        discount: false,
        discountedPrice: 0,
        sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    }
]