import { Product } from "../interfaces/product";
import image1 from "../../public/images/images (4).jpg"
import image2 from "../../public/images/images (5).jpg"
import image3 from "../../public/images/images (6).jpg"
import image4 from "../../public/images/images (7).jpg"
import image5 from "../../public/images/images (8).jpg"
import image6 from "../../public/images/images (9).jpg"
// import image7 from "../../public/images/images (10).jpg"
// import image8 from "../../public/images/images (11).jpg"
// import image9 from "../../public/images/images (12).jpg"

export const data: Product[] = [
    {
        id: 1,
        name: "Birthday Card",
        description: "A colorful card with a heartfelt birthday message, perfect for celebrations.",
        price: "$3.99",
        image: image1
    },
    // {
    //     id: 2,
    //     name: "Thank You Card",
    //     description: "A simple yet elegant card to express gratitude and appreciation.",
    //     price: "$2.99",
    //     image: "public/images/im2.jpg"
    // },
    {
        id: 3,
        name: "Anniversary Card",
        description: "A romantic card with lovely designs, ideal for celebrating anniversaries.",
        price: "$4.50",
        image: image2
    },
    {
        id: 4,
        name: "Get Well Soon Card",
        description: "A cheerful card to wish someone a speedy recovery and good health.",
        price: "$3.49",
        image: image3
    },
    {
        id: 5,
        name: "Congratulations Card",
        description: "A stylish card to celebrate achievements and milestones.",
        price: "$3.75",
        image: image4
    },
    {
        id: 6,
        name: "Sympathy Card",
        description: "A thoughtful card to offer comfort and support during difficult times.",
        price: "$2.50",
        image: image5
    },
    {
        id: 7,
        name: "Love You Card",
        description: "A charming card to express love and affection for someone special.",
        price: "$3.25",
        image: image6
    },
    // {
    //     id: 8,
    //     name: "Christmas Card",
    //     description: "A festive card with holiday greetings, perfect for Christmas celebrations.",
    //     price: "$4.00",
    //     image: "public/images/images (17).jpg"
    // },
    // {
    //     id: 9,
    //     name: "New Year Card",
    //     description: "A bright and cheerful card to welcome the New Year with joy.",
    //     price: "$3.99",
    //     image: "public/images/images (7).jpg"
    // },
    // {
    //     id: 10,
    //     name: "Apology Card",
    //     description: "A sincere card to convey apologies and make amends.",
    //     price: "$2.99",
    //     image: "public/images/images (8).jpg"
    // }
];