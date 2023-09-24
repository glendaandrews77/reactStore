const catalog = [
    {   
        "title" : "Stilettos Fluffy Heels",
        "category": "Sexy Heels",
        "price": 152.99,
        "image" : "clear-stilletos-brownfluff.jpg",
        "_id": "187651351355"
    },
    {
        "title": "Brown Heels",
        "category": "Sexy Heels",
        "price": 121.00,
        "image": "6 inch-brown-heels.jpg",
        "_id": "2"
    },
    {
        "title": "Red Sexy Heels",
        "category": "Sexy Heels",
        "price": 160.95,
        "image": "Red Sexy Heels.jpg",
        "_id": "3"
    },
    {
        "title": "Black Spiked Heels",
        "category": "Sexy Heels",
        "price": 105.99,
        "image": "Black Spike Sexy Heels.jpg",
        "_id": "4"
    },
    {
        "title": "Black Heels with Strap",
        "category": "Sexy Heels",
        "price": 225.00,
        "image": "sexy-black-heels.jpg",
        "_id": "5"
    },
    {
        "title": "Buckle Wide Calf Heel Boots",
        "category": "Wide Calf Boots",
        "price": 200.00,
        "image": "buckle wide calf heel boots.jpg",
        "_id": "19"
    },
    {
        "title":"Gold with Gems Heels ",
        "category": "Sexy Heels",
        "price": 300.00,
        "image": "Gold Stilletos with Gems.jpg",
        "_id": "6"
    },
    {
        "title":"White Fuzzy Boot Wedges ",
        "category": "Boot Heels",
        "price": 285.00,
        "image": "white fuzzy boot wedges.jpg",
        "_id": "7"
    },
    {
        "title":"Pink Fuzzy Boot Heels ",
        "category": "Boot Heels",
        "price": 255.00,
        "image": "pink fuzzy boot heels.jpg",
        "_id": "8"
    },
    {
        "title":"Chain Fuzzy Boot Heels",
        "category": "Boot Heels",
        "price": 325.00,
        "image": "black fuzzy sexy boot heels.jpg",
        "_id": "9"
    },
    {
        "title":"Fluffy Ankle Boots",
        "category": "Boot Heels",
        "price": 450.00,
        "image": "Fluffy Ankle Boots.jpg",
        "_id": "10"
    },
    {
        "title":"High Boot Heels",
        "category": "Boots",
        "price": 289.50,
        "image": "High Boot Heels.jpg",
        "_id": "11"
    },
    {
        "title":"Christmas Ankle Fuzzy Boots ",
        "category": "Boot Heels",
        "price": 253.50,
        "image": "red and white ankle fuzzy boots.jpg",
        "_id": "12"
    },
    {
        "title":"Back Laced Sexy Boots ",
        "category": "Boots",
        "price": 205.00,
        "image": "Black Black Laced Sexy Boots.jpg",
        "_id": "13"
    },
    {
        "title":"Shear Sequence Boots ",
        "category": "Boots",
        "price": 185.00,
        "image": "Shear Thigh High Sequence Boots.jpg",
        "_id": "14"
    },
    {
        "title":"Front Laced Heel Boots ",
        "category": "Boots",
        "price": 215.00,
        "image": "Sexy Black Laced Up Boot Heels.jpg",
        "_id": "15"
    },
    {
        "title":"Above Knee Green Heel Boots",
        "category": "Boots",
        "price": 195.00,
        "image": "Green Above the Knee Green Sexy Boots.jpg",
        "_id": "16"
    },
    {
        "title": "Sexy Yellow Heels",
        "category": "Sexy Heels",
        "price": 250.95,
        "image": "image 1.jpg",
        "_id": "17"
    },
    {
        "title": "Thigh High Wide Calf Boots",
        "category": "Wide Calf Boots",
        "price": 250.95,
        "image": "tan wide calf boots.jpg",
        "_id": "18"
    },
    {
        "title": "Bi Color Stelletos",
        "category": "Sexy Heels",
        "price": 200.00,
        "image": "bi color seilletos.jpg",
        "_id": "20"
    },
    {
        "title": "Leaporad Heels",
        "category": "Sexy Heels",
        "price": 195.00,
        "image": "leapord heels.jpg",
        "_id": "21"
    },
   {
        "title": "Zip Up Wide Calf Boots",
        "category": "Wide Calf Boots",
        "price": 225.00,
        "image": "zip up wide calf boots.jpg",
        "_id": "22"
    },
    {
        "title": "Tan Fuzzy Boot Heels",
        "category": "Boot Heels",
        "price": 199.00,
        "image": "Tan fuzzy boot heels.jpg",
        "_id": "23"
    },
    {
        "title": "Pinky Boot Fuzzy Heels",
        "category": "Boot Heels",
        "price": 285.00,
        "image": "pinky boot fuzzy heels.jpg",
        "_id": "24"
    },
    {
        "title": "Leather Wide Calf Boots",
        "category": "Wide Calf Boots",
        "price": 300.00,
        "image": "leather wide calf boots.jpg",
        "_id": "25"
    },
    {
        "title": "Gold Stilletos",
        "category": "Sexy Heels",
        "price": 288.00,
        "image": "Gold Sexy Stillettos.jpg",
        "_id": "26"
    },
    {
        "title": "6 in. Gold Design Heels",
        "category": "Sexy Heels",
        "price": 350.00,
        "image": "6 inch Gold Heels.jpg",
        "_id": "27"
    },
];

const category = ["sexy heels", "boots", "Fuzzy Boot Heels", "Wide Calf Boots" ];

class DataService {
    getCatalog() {
        return catalog;
    }

    getProds() {
        return category;
    }
}

export default DataService;