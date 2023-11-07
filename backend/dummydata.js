const advertisment = [] 
const home =[
    {
        id:1,
        image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1046927/iBA02UPFrm-1046927_1.jpg?dpr=1",
        price:1326,
        product_name:"MARS Mesmereyes Eyeshadow Palette (3.5gm)",
        product_details:
        [
            'it has one swipe pigmentation',
            'The shades are soft to touch',
            'There is minimal fallout in this palette',
            'The palette has a mix of matte, shimmer and glitter shades',
            'It comes in 3 beautiful variants',
            'Moreover, the eyeshadows can be used in multiple ways like blush, brow filler, contour, highlighter and eyeliner',
            'You can convert any day look to a night look with the pressed glitter shade in each palette'
        ],
        company_name:"Mars",
        category:"beautyProduct"
    },
    {
        "id": 2,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 7699,
        "product_name": "Asus VivoBook 13.3-inch Laptop",
        "product_features": {
            "Brand": "Asus",
            "Model Name": "VivoBook",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    },
    {
        id:3,
        image:"https://m.media-amazon.com/images/I/314Rp+8XKWL._SX342_SY445_.jpg",
        price:50749.00,
        product_name:"Apple iPhone 13 (128GB) - Starlight",
        product_features:{
            "Brand":	"Apple",
            "Model Name":	"IPhone",
            "Network Service Provider":"Unlocked for All Carriers",
            "Operating System":"IOS 14",
            "Cellular Technology":"5G"
        },
        category:"electronics"

    },
    {
        id:4,
        image:"https://m.media-amazon.com/images/I/61nWyLhaDdL._SL1500_.jpg",
        price:51987,
        product_name:"typecase Edge Magic Style Keyboard for iPad Air 5th/4th(2022,2020) & New iPad Pro 11 (4th,3rd,2nd Gen), touchpad Keyboard case, iOS Fn Keys, Exclusive 10-Colors Backlit, Bluetooth",
        product_features:{
            "Brand":"Typecase",
            "Compatible Devices":"IPad Pro 11 (4th,3rd,2nd & 1st Generation), IPad Air 5th & 4th Generation",
            "Connectivity Technology":"Bluetooth",
            "Keyboard Description":	"Flexible",
            "Recommended Uses For Product":"Home & office work/use"
            
        },
        category:"electronics"
    },
    {
        "id": 5,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 12999,
        "product_name": "realme narzo N70 (Yellow, 6GB+128GB) 33W Segment Fast Charging | Super High-res 64MP Primary AI Camera",
        "product_features": {
            "Brand": "Realme",
            "Model Name": "Realme narzo N70",
            "Network Service Provider": "Unlocked for All Carriers",
            "Operating System": "Android 13.0",
            "Cellular Technology": "4G"
        },
        "category": "electronics"
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const all =[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const grocery =[
    {
        id:1,
        image:"https://m.media-amazon.com/images/I/61fV8xIUXlL._SX679_.jpg",
        price:120,
        product_name:"Fortune chakki Fresh Atta ,",
        product_details:{  
            "Brand":"FORTUNE",
            "Item Weight":	"230 Grams",
            "Allergen Information":	"Fat-Free",
            "Speciality":"Suitable for vegetarians",
            "Diet Type":"Vegetarian",
            "Package Weight":"5.02 Kilograms",
            "Item Form":"Raw",
            "Number of Items":1,
            "Net Quantity":	"5000.0 gram"
        },
        category:"grocery",
    },
    {
        id:2,
        image:"https://m.media-amazon.com/images/I/61-zRoFrfqL._SL1001_.jpg",
        price:20,
        product_name:"Tata Salt | Vacuum Evaporated Iodised Salt | 1 kg",
        product_details:{  
            "Brand":"FORTUNE",
            "Flavour":	"Iodised Salt",
            "Item Weight":	"1 Kilograms",
            "Allergen Information":	"Fat-Free",
            "Speciality":"Suitable for vegetarians",
            "Diet Type":"Vegetarian",
            "Package Weight":"5.02 Kilograms",
            "Item Form":"Raw",
            "Number of Items":1,
            "Net Quantity":	"1000.0 gram"
        },
        category:"grocery",
    },
    {
        id:3,
        image:"https://m.media-amazon.com/images/I/81KS1W9UGzL._SL1500_.jpg",
        price:149,
        product_name:"MAGGI 2-minute Instant Noodles, 1.2kg (18 pouches x 70g each) & Maggi Masala-Ae-Magic, (20 Sachets) | All in One Masala for Dry Vegetables, Paneer, Dal & More Pouch, 120 g",
        product_details:{  
            "Variety":	"Noodle",     
            "Brand":"MAGGI",
           " Package Information":	"Cup, Pouch",
            "Flavour":	"Masala",
            "Speciality":"Suitable for vegetarians",
            "Diet Type":"Vegetarian",
            "Item Weight":	"1.2 Kilograms & 120 gm",
            "Net Quantity":	"1260.0 gram"
        },
        category:"grocery",
    },
    {
        id:4,
        image:"https://m.media-amazon.com/images/I/61ztw6y8ELL._AC_UL480_FMwebp_QL65_.jpg",
        price:149,
        product_name:"Fortune Soya Chunks, 15x more protein than milk, 1kg/1kg+100g (Item weight may vary)",
        product_details:{
            "Brand":"FORTUNE",
            "Item Weight":	"1000 Grams",
            "Speciality":	"Fat free",
            "Protein"	:"52 Grams",
            "Item Form":"Chunks",
            "Diet Type" : "Vegetarian",
            "Package Weight":"1.02 Kilograms",
            "Variety"	:"Soybeans",
            "Number of Items":1	
        },
        category:"grocery",
    },
    {
        id:5,
        image:"https://m.media-amazon.com/images/I/814iBcUf1aL._SL1500_.jpg",
        price:299,
        product_name:"UNIBIC Cookies, Assorted Cookies, 75 g (Pack of 10) | Biscuits Combo Pack | Choco Chip Cookies | Butter Cookies | Fruit & Nut Cookies | Cashew Cookies",
        product_details:{
                "Occasion":	"Festival, Anniversary, Celebration, Birthday, Congratulations",
                "Flavour":	"Assorted Cookies",
                "Diet Type": "Vegetarian",
                "Number of Items":	1,
                "Net Quantity":	"750.0 gram",
                "Brand":"Unibic",
                "Item Weight":"750 Grams",
                "Number of Pieces":	10,
                "Item Form":"Bar",
                "Speciality":"Suitable for vegetarians"
        },
        category:"grocery",
    },
    {
        id:6,
        image:"https://m.media-amazon.com/images/I/718dnd7NJ1L._SL1500_.jpg",
        price:150,
        product_name:"DiSano Pastalicious 100% Durum Wheat Penne Pasta, 1kg",
        product_details:{
            "Brand":"DISANO",
            "Variety":	"Penne",
            "Item Weight":"1000 Grams",
            "Diet Type":"Vegetarian",
            "Number of Items":	1,
            "Package Information":"Pouch",
            "Item Form":"Noodle",
            "Package Weight":"1.02 Kilograms",
            "Net Quantity":	"1000.0 gram"
        },
        category:"grocery",
    },
    {
        id:7,
        image:"https://m.media-amazon.com/images/I/71SIBPhW8rL._SL1500_.jpg",
        price:150,
        product_name:"Saffola Oats | Rolled Oats | Delicious Creamy Oats | 100% Natural | High Protein & Fibre | Healthy Cereal for weight loss | 1Kg with 300g Free",
        product_details:{  
            "Brand":"Saffola",
           " Diet Type":"Vegetarian",
            "Flavour":	"Oats",
           " Age Range": "(Description)	Adult",
            "Item Form":"Flaked",
            "Speciality":	"Vegetarian",
            "Net Quantity":	"1300.0 gram",
            "Number of Items":	1,
            "Package Information":	"Bag",
            "Item Weight":"1300 Grams"
        } ,
        category:"grocery"
    },
    {
        id:8,
        image:"https://m.media-amazon.com/images/I/61XPqdX0AjL._SL1100_.jpg",
        price:70,
        procdut_name:"Oreo Cadbury Vanilla Flavour Chocolatey Sandwich Biscuit, 288.75 G",
        product_details:{    
                "Occasion":	"Everyday",
                "Flavour"	:"Vanilla",
                "Diet Type":"Vegetarian",
                "Number of Items":	1,
                "Net Quantity":	"300.0 gram",
                "Brand":	"Oreo",
                "Item Weight":	"288.75 Grams",
                "Number of Pieces":	3,
                "Item Form":	"CHOCOLATE EGG",
                "Speciality":	"Suitable for vegeterian"
        },
        category:"grocery"
    },
    {
        id:9,
        image:"https://m.media-amazon.com/images/I/718dnd7NJ1L._SL1500_.jpg",
        price:150,
        product_name:"DiSano Pastalicious 100% Durum Wheat Penne Pasta, 1kg",
        product_details:{
            "Brand":"DISANO",
            "Variety":	"Penne",
            "Item Weight":"1000 Grams",
            "Diet Type":"Vegetarian",
            "Number of Items":	1,
            "Package Information":"Pouch",
            "Item Form":"Noodle",
            "Package Weight":"1.02 Kilograms",
            "Net Quantity":	"1000.0 gram"
        },
        category:"grocery_snacks",
    },
    {
        id:10,
        image:"https://m.media-amazon.com/images/I/71SIBPhW8rL._SL1500_.jpg",
        price:150,
        product_name:"Saffola Oats | Rolled Oats | Delicious Creamy Oats | 100% Natural | High Protein & Fibre | Healthy Cereal for weight loss | 1Kg with 300g Free",
        product_details:{  
            "Brand":"Saffola",
           " Diet Type":"Vegetarian",
            "Flavour":	"Oats",
           " Age Range": "(Description)	Adult",
            "Item Form":"Flaked",
            "Speciality":	"Vegetarian",
            "Net Quantity":	"1300.0 gram",
            "Number of Items":	1,
            "Package Information":	"Bag",
            "Item Weight":"1300 Grams"
        } ,
        category:"grocery_snacks"
    },
    {
        id:11,
        image:"https://m.media-amazon.com/images/I/718dnd7NJ1L._SL1500_.jpg",
        price:150,
        product_name:"DiSano Pastalicious 100% Durum Wheat Penne Pasta, 1kg",
        product_details:{
            "Brand":"DISANO",
            "Variety":	"Penne",
            "Item Weight":"1000 Grams",
            "Diet Type":"Vegetarian",
            "Number of Items":	1,
            "Package Information":"Pouch",
            "Item Form":"Noodle",
            "Package Weight":"1.02 Kilograms",
            "Net Quantity":	"1000.0 gram"
        },
        category:"grocery_snacks",
    },
    {
        id:12,
        image:"https://m.media-amazon.com/images/I/814iBcUf1aL._SL1500_.jpg",
        price:299,
        product_name:"UNIBIC Cookies, Assorted Cookies, 75 g (Pack of 10) | Biscuits Combo Pack | Choco Chip Cookies | Butter Cookies | Fruit & Nut Cookies | Cashew Cookies",
        product_details:{
                "Occasion":	"Festival, Anniversary, Celebration, Birthday, Congratulations",
                "Flavour":	"Assorted Cookies",
                "Diet Type": "Vegetarian",
                "Number of Items":	1,
                "Net Quantity":	"750.0 gram",
                "Brand":"Unibic",
                "Item Weight":"750 Grams",
                "Number of Pieces":	10,
                "Item Form":"Bar",
                "Speciality":"Suitable for vegetarians"
        },
        category:"grocery_snacks",
    },
    {
        id:13,
        image:"https://m.media-amazon.com/images/I/71-1m0qauBL._SL1500_.jpg",
        price:70,
        procdut_name:"Oreo Cadbury Vanilla Flavour Chocolatey Sandwich Biscuit, 288.75 G",
        product_details:{  
               "Occasion" :	"Everyday",
                "Flavour Original": "Chocopie",
                "Diet Type":	"Vegetarian",
                "Number of Items":	1,
                "Net Quantity":	"336.0 gram",
                "Brand":"ORION",
                "Item Weight":	"336 Grams",
                "Number of Pieces":	12,
                "Item Form"	:"Bar",
                "Speciality":"Suitable for vegetarians"

        },
        category:"grocery_snacks"
    },
    {
        id:14,
        image:"https://m.media-amazon.com/images/I/71sOPzrW0mL._SL1500_.jpg",
        price:70,
        procdut_name:"Kurkure Namkeen - Masala Munch, 77g/82g/90g (Weight may vary)",
        product_details:{            
            "Brand":"Kurkure",
            "Diet Type":"Vegetarian",
            "Flavour":	"Masala",
            "Package Information":	"Pack",
            "Item Weight":	"85 Grams",
            "Number of Items":1,
            "Net Quantity":	"85.0 gram",
            "Item Package Quantity":1,
            "Number of Pieces":	1,
           " Speciality":"No Preservatives"
        },  
        category:"grocery_snacks"
    },
    {
        id:15,
        image:"https://m.media-amazon.com/images/I/41h0szE7avL.jpg",
        price:70,
        procdut_name:"Haldiram's Nagpur Bhujia Sev, 200g",
        product_details:{
            "Brand":"Haldiram's Nagpur", 
            "Flavour":"Spicy",
            "Item Weight":	"150 Grams",
            "Speciality":	"Suitable for vegetarians",
            "Number of Items":	1,
            "Net Quantity":	"200.0 gram",
            "Item Dimensions LxWxH":	"17.5 x 11.4 x 3.8 Centimeters",
            "Package Weight":	"0.16 Kilograms",
            "Package Type":	"Pouch"
        },
        category:"grocery_snacks"
    },
    {
        id:16,
        image:"https://m.media-amazon.com/images/I/61XPqdX0AjL._SL1100_.jpg",
        price:70,
        procdut_name:"Oreo Cadbury Vanilla Flavour Chocolatey Sandwich Biscuit, 288.75 G",
        product_details:{    
                "Occasion":	"Everyday",
                "Flavour"	:"Vanilla",
                "Diet Type":"Vegetarian",
                "Number of Items":	1,
                "Net Quantity":	"300.0 gram",
                "Brand":	"Oreo",
                "Item Weight":	"288.75 Grams",
                "Number of Pieces":	3,
                "Item Form":	"CHOCOLATE EGG",
                "Speciality":	"Suitable for vegeterian"
        },
        category:"grocery_snacks"
    },
    {
        "id": 17,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWlfTVRhpNfMr76Hzc8yUYcPFyxfFuW7Q9w&usqp=CAU",
        "price": 60,
        "product_name": "Haldiram's Aloo Bhujia - 200g",
        "product_details": {
            "Occasion": "Snack Time",
            "Flavour": "Spicy Potato",
            "Diet Type": "Vegetarian",
            "Number of Items": 1,
            "Net Quantity": "200.0 grams",
            "Brand": "Haldiram's",
            "Item Weight": "200 Grams",
            "Number of Pieces": 1,
            "Item Form": "Namkeen",
            "Speciality": "Suitable for vegetarians"
        },
        "category": "grocery_snacks"
    }
    ,
    {
        "id": 18,
        "image": "data:image/jpeg;base64,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",
        "price": 80,
        "product_name": "Tata Tea Gold - 500g Pack",
        "product_details": {
            "Occasion": "Morning Tea",
            "Flavour": "Tea",
            "Diet Type": "Vegetarian",
            "Number of Items": 1,
            "Net Quantity": "500.0 grams",
            "Brand": "Tata",
            "Item Weight": "500 Grams",
            "Number of Pieces": 1,
            "Item Form": "Tea Leaves",
            "Speciality": "Premium Quality"
        },
        "category": "grocery_beverages"
    }
    ,
    {
        "id": 19,
        "image": "data:image/jpeg;base64,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",
        "price": 35,
        "product_name": "Amul Pure Ghee - 200ml",
        "product_details": {
            "Occasion": "Cooking",
            "Flavour": "Ghee",
            "Diet Type": "Vegetarian",
            "Number of Items": 1,
            "Net Quantity": "200.0 milliliters",
            "Brand": "Amul",
            "Item Weight": "200 Milliliters",
            "Number of Pieces": 1,
            "Item Form": "Ghee",
            "Speciality": "Pure and Tasty"
        },
        "category": "grocery_dairy"
    }
    ,
    {
        "id": 20,
        "image": "data:image/jpeg;base64,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",
        "price": 55,
        "product_name": "MDH Kitchen King Masala - 100g Pack",
        "product_details": {
            "Occasion": "Cooking",
            "Flavour": "Mixed Spices",
            "Diet Type": "Vegetarian",
            "Number of Items": 1,
            "Net Quantity": "100.0 grams",
            "Brand": "MDH",
            "Item Weight": "100 Grams",
            "Number of Pieces": 1,
            "Item Form": "Masala",
            "Speciality": "Blended Spice Mix"
        },
        "category": "grocery_spices"
    }
    ,
    {
        "id": 21,
        "image": "data:image/jpeg;base64,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",
        "price": 45,
        "product_name": "Maggi Instant Noodles - Masala Flavor, 70g Pack",
        "product_details": {
            "Occasion": "Quick Snack",
            "Flavour": "Masala",
            "Diet Type": "Vegetarian",
            "Number of Items": 1,
            "Net Quantity": "70.0 grams",
            "Brand": "Maggi",
            "Item Weight": "70 Grams",
            "Number of Pieces": 1,
            "Item Form": "Noodles",
            "Speciality": "Ready in 2 minutes"
        },
        "category": "grocery_snacks"
    }
    
]
const grocery_snacks =[
    {
        id:1,
        image:"https://m.media-amazon.com/images/I/61XPqdX0AjL._SL1100_.jpg",
        price:70,
        procdut_name:"Oreo Cadbury Vanilla Flavour Chocolatey Sandwich Biscuit, 288.75 G",
        product_details:{    
                "Occasion":	"Everyday",
                "Flavour"	:"Vanilla",
                "Diet Type":"Vegetarian",
                "Number of Items":	1,
                "Net Quantity":	"300.0 gram",
                "Brand":	"Oreo",
                "Item Weight":	"288.75 Grams",
                "Number of Pieces":	3,
                "Item Form":	"CHOCOLATE EGG",
                "Speciality":	"Suitable for vegeterian"
        },
        category:"grocery_snacks"
    },
    {
        id:2,
        image:"https://m.media-amazon.com/images/I/71SIBPhW8rL._SL1500_.jpg",
        price:150,
        product_name:"Saffola Oats | Rolled Oats | Delicious Creamy Oats | 100% Natural | High Protein & Fibre | Healthy Cereal for weight loss | 1Kg with 300g Free",
        product_details:{  
            "Brand":"Saffola",
           " Diet Type":"Vegetarian",
            "Flavour":	"Oats",
           " Age Range": "(Description)	Adult",
            "Item Form":"Flaked",
            "Speciality":	"Vegetarian",
            "Net Quantity":	"1300.0 gram",
            "Number of Items":	1,
            "Package Information":	"Bag",
            "Item Weight":"1300 Grams"
        } ,
        category:"grocery_snacks"
    },
    {
        id:3,
        image:"https://m.media-amazon.com/images/I/718dnd7NJ1L._SL1500_.jpg",
        price:150,
        product_name:"DiSano Pastalicious 100% Durum Wheat Penne Pasta, 1kg",
        product_details:{
            "Brand":"DISANO",
            "Variety":	"Penne",
            "Item Weight":"1000 Grams",
            "Diet Type":"Vegetarian",
            "Number of Items":	1,
            "Package Information":"Pouch",
            "Item Form":"Noodle",
            "Package Weight":"1.02 Kilograms",
            "Net Quantity":	"1000.0 gram"
        },
        category:"grocery_snacks",
    },
    {
        id:4,
        image:"https://m.media-amazon.com/images/I/814iBcUf1aL._SL1500_.jpg",
        price:299,
        product_name:"UNIBIC Cookies, Assorted Cookies, 75 g (Pack of 10) | Biscuits Combo Pack | Choco Chip Cookies | Butter Cookies | Fruit & Nut Cookies | Cashew Cookies",
        product_details:{
                "Occasion":	"Festival, Anniversary, Celebration, Birthday, Congratulations",
                "Flavour":	"Assorted Cookies",
                "Diet Type": "Vegetarian",
                "Number of Items":	1,
                "Net Quantity":	"750.0 gram",
                "Brand":"Unibic",
                "Item Weight":"750 Grams",
                "Number of Pieces":	10,
                "Item Form":"Bar",
                "Speciality":"Suitable for vegetarians"
        },
        category:"grocery_snacks",
    },
    {
        id:5,
        image:"https://m.media-amazon.com/images/I/71-1m0qauBL._SL1500_.jpg",
        price:70,
        procdut_name:"Oreo Cadbury Vanilla Flavour Chocolatey Sandwich Biscuit, 288.75 G",
        product_details:{  
               "Occasion" :	"Everyday",
                "Flavour Original": "Chocopie",
                "Diet Type":	"Vegetarian",
                "Number of Items":	1,
                "Net Quantity":	"336.0 gram",
                "Brand":"ORION",
                "Item Weight":	"336 Grams",
                "Number of Pieces":	12,
                "Item Form"	:"Bar",
                "Speciality":"Suitable for vegetarians"

        },
        category:"grocery_snacks"
    },
    {
        id:6,
        image:"https://m.media-amazon.com/images/I/71sOPzrW0mL._SL1500_.jpg",
        price:70,
        procdut_name:"Kurkure Namkeen - Masala Munch, 77g/82g/90g (Weight may vary)",
        product_details:{            
            "Brand":"Kurkure",
            "Diet Type":"Vegetarian",
            "Flavour":	"Masala",
            "Package Information":	"Pack",
            "Item Weight":	"85 Grams",
            "Number of Items":1,
            "Net Quantity":	"85.0 gram",
            "Item Package Quantity":1,
            "Number of Pieces":	1,
           " Speciality":"No Preservatives"
        },  
        category:"grocery_snacks"
    },
    {
        id:7,
        image:"https://m.media-amazon.com/images/I/41h0szE7avL.jpg",
        price:70,
        procdut_name:"Haldiram's Nagpur Bhujia Sev, 200g",
        product_details:{
            "Brand":"Haldiram's Nagpur", 
            "Flavour":"Spicy",
            "Item Weight":	"150 Grams",
            "Speciality":	"Suitable for vegetarians",
            "Number of Items":	1,
            "Net Quantity":	"200.0 gram",
            "Item Dimensions LxWxH":	"17.5 x 11.4 x 3.8 Centimeters",
            "Package Weight":	"0.16 Kilograms",
            "Package Type":	"Pouch"
        },
        category:"grocery_snacks"
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const grocery_TeaCofeeBeverages = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const indianRegularFood =   [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const fashion =[
    {
        id:1,
        noItem:1,
        image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTM1dYipfvo99HjNxGPYTea5MgfVygU91znS0px3Jo0MQl1DS594-XVrFeQgkHG0pxvqMFoqrgWM9_txF_cLZ0KKCmH6wBUNAhtKxX6CoIS&usqp=CAE",
        price:654,
        heading:'Anouk Women Black Ethnic Motifs Printed Kurta with Palazzos & With Dupatta',
        productDetail:['Red and white geometric print fit & flare dress','V-neck','Three-quarter, regular sleeves','Gathered or pleated detail','Midi length in flared hem'],
        Material_Care :"100% Cotton Machine wash",  
        category:'woman'  
    },
    {
        id:2,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsATLDUocVQPwSYdTVi_ZLLh1dlgpaN2PxnQ&usqp=CAU",
        price:1290,
        heading:'Anouk Women Black Ethnic Motifs Printed Kurta with Palazzos & With Dupatta',
        productDetail:["Colour: black and white",
            "Ethnic motifs printed",
            "Mandarin collar",
            "Three-quarter, bell sleeves",
            "Straight shape with regular style",
            "Knee length with straight hem",
            "Machine weave regular cotton"
            ],
        Material_Care:"100% Cotton Machine wash",
        category:'woman'
    },
    {
        id:3,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSplHn1fYuNI5wf7ngKau5yQGajOMuAqkQvlQ&usqp=CAU",
        price:593,
        heading:'Anouk Women Blue Ethnic Motifs Printed Kurta with Palazzos & With Dupatta',
        productDetail:['Blue printed ','straight kurta', 'has a round neck', 'three-quarter sleeves',' straight hem, side slits'],
        Material_Care: "100% polyester Hand-wash",
        category:'woman'
    },
    {
        id:4,
        image:"https://assets.myntassets.com/assets/images/14224086/2021/8/23/64911e3c-9333-48e5-8cf7-46e29d03f0141629695458483-Anouk-Women-Black-Floral-Printed-Regular-Top-with-Harem-Pant-5.jpg",
        price:1375,
        heading:'Anouk Women Black Ethnic Motifs Printed Kurta with Palazzos & With Dupatta',
        productDetail:['Ethnic motifs printed', 'A-line shape','Regular style','Mandarin collar, three-quarter regular sleeves','Knee length with straight hem','Viscose rayon knitted and woven fabric'],
        Material_Care:'100% Viscose Rayon chine wash',
        category:'woman'
    },
    {
        id:5,
        image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjR4YQ9sD2bsUFKdsGX0N75SdQ9H9q8LnmN7IR6bNywhmUzUIombZ2CA5IXJv_pdz7FTFG6Z69RdsqxvI4ppV3FGrHTaeLYFdxhuw0svPjXwOf2tm9qkWnnQ&usqp=CAE",
        price:1327,
        heading:'Miss Chase Green Georgette Maxi Dress',
        productDetail:['Green solid maxi dress',
            'V-neck',
            'Short', 'cap sleeves',
            'Maxi length ','in flared hem',
            'Georgette fabric',
            'Concealed zip closure'],
        Material_Care:"Georgette Hand wash",
        category:'woman'
    },
    {
        id:6,
        image:"https://absolutelydesi.com/wp-content/uploads/2022/12/Anouk-Women-Black-Cotton-Ethnic-Motifs-Schiffli-Embroidered-Fusion-Kurta-6.jpg",
        price:2000,
        heading:'Navy Blue Ruffled Nautical Maxi Dress',
        productDetail:['Navy Blue solid woven maxi dress with ruffles detail', 'has a round neck', 'sleeveless', 'concealed zip closure', 'an attached lining', 'high-low hem'],
        Material_Care:"Polyester Machine-wash",
        category:'woman'
    },
    {
        id:7,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTul2wJkOBj1VnF4QBeQCxG6-oDUIGAJxMug&usqp=CAU",
        price:1500,
        heading:'Satin Finish A-Line Dress, MABISH by Sonal Jain',
        productDetail:['A midi dress with pleated design'],
        Material_Care:"Polyester Machine wash",
        category:'woman'
    },
    {
        id:8,
        image:"data:image/jpeg;base64,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",
        price:2567,
        heading:'Foreverkidz Kids Pink Full Sleeves frock',
        productDetail:["Amp up your little kid's",' wardrobe with this black and pink top and skirt set from Foreverkidz',' Tailored to sartorial perfection from velvet fabric', 'it assures a soft' ],
        Material_Care:"slik and polyester",
        category:'kids'
    },
    {
        id:9,
        image:"data:image/jpeg;base64,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",
        price:1458,
        heading:'Party Dresses, Stylishly designed, this pretty black frock from Muhuratam Kids will make your little girl look even more fashionable. Wearing this halter neck with frock is a delight',
        productDetail:['Stylishly designed', 'this pretty black frock from Muhuratam Kids ','will make your little girl look even more fashionable.', 'Wearing this halter neck with frock is a delight'],
        Material_Care:"Polyester Machine-wash",
        category:'kids'
    },
    {
        id:10,
        image:"data:image/jpeg;base64,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",
        price:1234,
        heading:'Let your little one grab eyeballs by wearing this purple and gold sleeveless gown from A.T.U.N. Kids. Tailored to sartorial perfection from premium quality fabric,',
        productDetail:['little one grab eyeballs','by wearing this purple and gold sleeveless gown ','from A.T.U.N. Kids.',' Tailored to sartorial perfection',' from premium quality fabric,'],
        Material_Care:"Net and slik Frock handWashable Fabric",
    },
    {
        id:11,
        image:"https://m.media-amazon.com/images/I/41nW8JbEhYL.jpg",
        price:3000,
        heading:'A.T.U.N. was born out of our deep desire to bring style and quality to kids wear. A.T.U.N. is making waves in the kids occasion wear niche with its hot-off-the-ramps styles and a steadfast commitment to quality that encourages word-of-mouth',
        productDetail:['A.T.U.N. was born out of our deep desire',' to bring style and quality to kids wear',' A.T.U.N. is making waves in the kids occasion wear ','niche with its hot-off-the-ramps styles ','and a steadfast commitment to quality that encourages word-of-mouth'],
        Material_Care:"Net and slik Frock handWashable Fabric",
        category:"kids"
    },
    {
        id:12,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUMReDUKyw_QLDgt3BrpR7UQR0rUPnvf9aw&usqp=CAU",
        price:1111,
        heading:'Modern Spread Collar Cotton Formal Shirt,Black solid opaque formal shirt, has a spread collar, button placket, 1patch pocket, long regular sleeves, curved hem',
        productDetail:['Black solid opaque formal shirt', 'has a spread collar', 'button placket', '1patch pocket', 'long regular sleeves', 'curved hem'],
        Material_Care:"Cotton Hand wash",
        category:"Men's"
    },
    {
        id:13,
        image:"data:image/jpeg;base64,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",
        price:1234,
        heading:'Black, charcoal grey and white colourblocked sweatshirt, has a mock collar, two pockets, long sleeves, zip closure, straight ribbed hem',
        productDetail:['Black, charcoal grey and white colourblocked sweatshirt',' has a mock collar', 'two pockets', 'long sleeves', 'zip closure', 'straight ribbed hem'],
        Material_Care:"Men's",
    },
    {
        id:14,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1J6Prpa1EnRWE3pxKKXKG5j_4D1yDPxuhXg&usqp=CAU",
        price:5554,
        heading:'Hooded Casual Sweatshirt',
        productDetail:['White solid sweatshirt','Has a hood with drawstrings','Long sleeves','Ribbed hem'],
        Material_Care:"Men's",
    },
    {
        "id": 15,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESERESEhISEREREhkSEREREhESERISGRgZGRgYGBgbIS0kGx0qIRgYJTclKi4xNDQ0GiM6PzozPi0zNDEBCwsLEA8QHRISHTMhISoxMzEzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzEzMzMzM//AABEIAP0AxwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIEAwUGBwj/xABEEAACAQIDBAcFBAYIBwAAAAABAgADEQQSIQUxQVEGEyJhcYGRMlKhscEHQmLRFHKC4fDxIzNTY5KTorIWJENEVMLi/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EAC4RAAIBAwEGBAYDAQAAAAAAAAABAgMRIRIEBTFBUXEyYbHBEyKRodHwFDOB8f/aAAwDAQACEQMRAD8A9cjjhMxYRhCEQCikjImIBRRxQAIo4ogHMOKxdOkpeo6Ig3s7BR8Z5/056WlXbD0HenlQ9ZUVstiSpFrak2vy9vnu8zrY81CAalR2TS5DMVUHcLk3HdJKNwse8YbpVgKjZVxNMMeDk0/9wEuLtbCkgDEUCSbACrTNz6z50bErYdu/AkggjgOPjMAxLAAMwfTcw+ok9AH0+CCARqDqCNxEU8N6FdL8TRqUcP1magXsEfXJfgDcad26e4UKgdFddQwBHnINWdgJwjhHYAikooCYopKEYEYjJRGAEDCSMIAWYRQiAIRxRDEZEyRkTEBGEcjAAhCEQHmW2ehVavtHFOSKeHqBXR9GJLKA6hedw2/ulbGfZ6Kaf0NQs59rPlW47iBcT0mtXS7HMtk7LG4sCN4PKajFbZw17CrTYn3WzAekNUuRoio2yeXYzoM9Om9R3BKjNZdf5zj6lLKxHLunumJy1UYA3VhvBnmG2tjhHYDeCfOWU5t4ZGrBKzRymaxBntv2P42pUwdZahZkpVgtMsSbAoCVF+A5d88YxGHKGx8p7B9i1NhhMUx9hsQAo/EqLmPxUeUnPgUI9HhCErGKEcIxChHCMBSJkojEBEwjMIAZ4QhEARxRwARkTJSJkRkYo4jABQhCIDn9rbOp3rezbEBQ6BbDML3c66sdOA3TT4To0yf1dQpTaxKZVNiN9ja9iJa6WbSqUaqKFzoyF27DtkG4ag2uSD6TJsnbNOpSCioGqIvbBGU8eEjZmqLWlBiaKU1yqfEnjOSxVJKld2IDpTQsyn2WsLkHmLDdNlt7bCrcIczfATn9kYpTUPWDP2g7DQ34jQ6HWxkop2G2rpFfpsqHDYeo39Y+UqOzotnzWAAAXRbAcp6d0E2QcJs+hTYWd162oOTvZsvkLDynFvs07Q2jhVtajTY1ai77U0Kmx55jlXz7p6tJLgU1neQRRxSRUEcUZgIUIRRgEiZKRMACEIRAZ4RxRAEcUIAEUcIhkTISZkTEBGEIRAcv04yBKJNNXYuVCsSLroSdOVh6zi9o4zD0WVkVA2oYpoCGFvnPRukWw0xlIIXak6HMlRLEqeIIO9TbUd08j210ZUVMlLGjEOobMRSyIWB9kNmOY2vqOUshByu1yyyfx1BKL5vHc1+P2spvbW/xlrYFN7l20LcJT2dssKSXBzA8eHlOjwWHtraOWCUbt3On6L7Vw2HqFKzhHxDJSoswOVn7RyFtyk6Wva872eGdIayFVpntMKiPp90qb38eHnPQOjPTrDVkSniH6quFCsz6U6jADtBty35G0lGjJw1pXKatWKqaW8nZxRAggEG4OoI1BHcY5BDJRGOKMQojHEYAEjHEYABhEYRAWYoQiAIQjgAoozImIYjEY5rtubTXC0WqEZj7KJ7zHd5byfCOMXKSiuLIzmoRcpcEWcViadJc9R0RfedgovyF95nM7R6cYdLiirVm949hPjqfQThdoYurXcvUcsxJ3k2UclHAd0pidqluuEc1Hd/Rfn0OFV3tOX9asury/wAL7m52r0lxWJurPkpn/ppdVI7+LeZmjII463uCDYj+LTKIMo5TpQpxgtMVZHNnWlOWqTuyP6ZWPtFSde0yqNAOYG/SYW2lWIt2QOQXWSZLfq/SQyiw0tYGZ/4dG/hX0RtW8K9vG/qaypnqMS2t+NvlJ06MulRAJLVSS4Fc67lkvbJ2zisNbqqrqo+4TmQ/snSdvsnp8hsuKTIf7SmCR4lN48r+E89VZMCQqbHTqeJZ68wp7ZVpv5Xjo8r97HuGExtKsualUSoBvNNg1vG26WJ4PhsfUw9ValN2RlIIKki/cRxB5T3HB4qnWppVpsGR1zKRy5eI3W7pxdq2V0Ws3TO5su1fGWVZozRGOIzKaxRGBhABGEIRAWIQhEA4oRGIYjEYGKIAnnXTvHdZiRSB7NEWt+NhmPwyjyM9Fnju2a+bE13vq1V7eGY2+FvSdLdcL1XLovU5e9ptUVFc36Z9bFS/8eUGSVRXGYjmAw9TLatcTvp3POSi4kSIjCItGBjf93wMxnjr9ZKodL99vM6RVFZSVYWPEaHv3jQyvGrz9jRFS0+V/uYxC8CIn3SaAZMM0xkzE1UXENRJQuTqa3nc/ZhtUh6mFY9lh1lIHgw9sDxFj+yZwZbS50HzPKbPopVZMfhGW2Y1FXXdlfsn4MZk2qCnTkvK/wBDXss3Con52+p7jImOIzzp6ERiMZkTAAhIwiAuQhCIYpExmKRAUUZigAXniGJN3Y+8SfHUz2yu4VHY7lUsfAC88RHfx185190rxvt7nF3xK2hd/Y0+OGRlqDgdT/d31Hlzm1oMSN31ms2noG5H4TLgK10Qm2tME+Np1Yu0mjnVFqppmzkTrFcW3+hkQRLDJYrVnzHLw1+kyqBuHgJjVLbzxJv4/wApmUBQTx4bokXSa4Ig2nKYajX5QZz3+o/KYmY9/qsGycYid7cvWa/FYizKOLH0A3mZqtS53n4TVY2p/SAHcF07+f0matUsjdQpXZuFqF7E7h7K8+8y3ga3V1qbtc5aiucps3ZIOh4HSUMJUuotpMxHLhLF8yyVPDxyPoWlUDqri4DqGF99iLi8kZxv2b7Zeth2oVCWqYawVjbWmb5R5WHqJ2U85UpunJxZ6CnNTipIRkTGZGQJgTCIwgBchFCQGBkTHAxARhCKIDQ9NqrJgapUMb5QxUHspfMxNuFhbznl5pldGUg2Gljf0M9oxwvSqfqN8poHpoyZXUMOTKG+c27Lt3wFp03vm98mPad3fyfm12tytdHjm1X0Mjse5pA97JzGjGdf0n2ThgrFUym/3Wa3pe05LZSFFZbEDrGIvr2SAR851KG0wrTxfh+Dn7Tsk6FKzs8+zNshNuEiwHKSUjfr4XMDbv8AUzoHHvkrlBIuN/5mTa2v5yIUAb95gWpmGxmCu53Xlh2sDb5SoQxN5XLoXwXNmGa3HU3epTRFLt7KoouWJ4Acd02rC2ksdG6V9pYFh/5VL/eJl2n+tm7ZmtaNZsypcDWdNs7Y1WtYherp+8RofKb7amxUweOqMKainWc1abZRpmN3UHhZidOVpsqdfNpOfLeMowtFZ6v8HRhuyM5apO66L8/vcv8AQvC06FSoqCxemLsfaYqeP+IzsDOP2Q2TFU/xXX1U/W066YNTllu7NdSCg7RVkMyJjMiYyAQiMUQF6EV45EYGQjJiiAUIQiAx4r2H/Ub5Gcvi6uRZ0mOa1N/C3qbfWctti4S43yElk0UcJnJbfxF1M0lSn1ZAO9qdJj3XoUiR6ky/tpTUTTQnT10kdtoP0vE29kVWVR+FWKj4ATsbtXz/AOP1Ryd7ytTS6tejKwOm+0TmKm4GmndbfJu19LeOn1nbPN2yYWG7T4yNm7pItbiotpu1kUF/vekCxGJqbHlMWIfLoN9pnxLqlrm53zXE5jfjITaXAupq+XwF5zbdEVvtDBj+9RvQ3+k1JUn9033QVL7Sww5OT5LSc/MTNW8Euz9GbKXjj3Xqj1npDgBXw1RLdtR1iHiHUX+IuPOcPsR2c6jdPQ8XXCU3c/dU+Z3AepE5fZ+EVFuBaebkejoviItkqUm92op8r6zsjOKxeroBvzC3jedoY4Cr8gMUIpMoEYRGEBl6EUUgARRxQAIoQiAqbVa1I97KP9Qmgx65km821/Vftr9ZpK+qyEuJqo+E4fa1UUwcwuAwOm/eN01NcOzMxuSSWJLakk3MudL2KI7DevaHHUa/SValLMLrxF53t2JaZPt7nn98SanBd/Yx0yo4EeMzFx/AlbI3F/XSZrm3PvsJ1EcSSIEjMZIMAJAo3f6THWYgDn4R3Jab4K+IuzfvkFS0ixN/3QFuJlXM1JYsO28zofsvTPjA/u03f1uv/tObxjZaTEb20HiZ3P2U4TK9dv7OlTp373Ysf9gmXbHanLt6uxr2RXmu/ov+HabfY5aaD773Pgo/MiVbWWWtqDNVpj3EJ/xH/wCZRxVSwM88z0dJYMWBTrMSg4Ic58tR8bTq5pejmGIV6pGrnKv6o3n1+U3UlFWRVVd5BFCBkisRhCEALkIQkAFEYzEYgFCOK8AKe1xei/cVP+oTRt7M6LF081OovNCB420nNqbofCQlxNNF4Z5301fs1B+EzFhtKaA6lQB6CT6ZsOtQe86j/UD9JGi1r8QbEWnoN1r5Gzzu+5Xmo/6FQKf53mIIN0zMitexsZg6hhx9ROmzjRt1B14SriW3AHzliqbAyk1zwkZF9NczGtMn73xMtUsPpcmTw1EsbkWEyY6sEWw32jjFJXZKVRuWmJrsTZ66J92kOtbxH7yJ6t9m2Gy4NqnGtVdr/hTsD4q08p2dQqMrlVd6lVr5UVmPVroN24Zr+k9W6EVHpbPpUqiGnVRqgKm25qjOG9G+E5W8Ki+Glzbv/nL2OrsFJ620sJWv58/vdG0xT9uo/M2HgNPpNWtNq1RUG4m7H3VG8yzjagOgl/YGEyIah9p93cg3eu/0nGSuzvN6Ym0p0wqhVFlUWA5ASUIpMyhAwgYARhAwgBchCKVgORjiMYBCEIgCcuFys6e6zL6EidROcxmlZ/1r+sjIuovLPL+nCf8AM0AbgF7+n85jpsNcuncZ0vSXYL4utQFN1R1c2Lg5TcbjbUfGYcb0Ox9IEmgagA9qkwqX8h2vhO7u2rFU7NpM4e96M5VbpNq3c0uYcR8onqcj9ZgxCMhsyujD7r3BHkZXZzznT1HGVMzPreRo0SeEwGoecyLiiBBSRY00sF8sEWYNl7HfG1HAcKiWaobglVJNgBzNj6SrUPWCxPxl7Z+HZWtQFQ1GWxFMMzN3ELvEhWU5xajjzZbszhTmnNN+SOmTG0cLkwtEXLEDfqe9j/HhNjTrMNC2g5aTV7A6E4kua9f+g3uqvYuzZbC4v2Rzvr3S0Gvpa2u7jPO7VTUZeLV1fn+2PVbLV+JHw6bcF5cvc2uzqDV3IGij2m5D851aqAABoALAcgJU2ThOqpKpFnPafxPDylyUoVSWpihHFGQCIxmEYiMIGEQy3eK8cUrALwMDAwAIooRAOaHaiDriRxUE+O75ATezQYuqDVc8jb00+kiy6j4ilUXK6uN6MGHkZ2S1OsQMp0YAjlOEr41TUNMb8ub9kGx/jvnS9HMWrUbMwARiBc8JooPkG0R4MuY3DrUXLVRXXhcA2lMbAwQsf0ai1yPaQNr5zYPi6Z0zD4ys5QkFKimxvkzaeU1cDG1ciNh4I78Jh/8AJp/lH/w/gT/2mH/yUH0ltDJC/DWF31Cy6FNNiYRfZwuHHhST8pdSkqCyqqLyUBR6CSNW3AyviK3iYuPEEkuBCs95z+zNjkYh6rgZFqMaanexubHwE3MzU90hVWCdOTVyUUcJQTFCEcAIxSURjERMIGEQy1C8ISsAkJKRJiAI5GKIZK84jF1HDsb6Fj6E6TtZw21w1OpUptfQ9lvwtqpgX0MNmoswxyux7HVsttNbjh/hE6vo3iEZNbAAtcnxnJU71alNvZamxVgeRFiJ12zcN1T5coUXvYXK3mmis38iO0SVreZuqj0QOymc+gmpxYzE2RU5WH5zbkk7gJQrLrrNBjL2yK5ahTvvC5D4qcp+UvU3tpwmr2NTK0zfc1RmXw4/G82KAcZFO6GTdx375iIkz6jnIsvGSAw2AOky090ws2tvWZqe4SurwQ4DijilBYEI4oxCMRjMRgBGOKEQyzFFeEpACYjAyJgNDihFEMco7U2OmJAuSjoCFYWsbjQNzF7HSXZlpGW0knLJGTayjzrDbArfpIVw9MkMASLq+TceX8Cdrh0JUZls40PHWbN5XqgnQX14LvPnNcIqJCpNzeSs9h7TE/hH1lc08zAWyhjYc7cTLeVV00ZuX3V8eZmPDAs7MdbaDzhUlpjcjFZLeUAADQDQeEGGkG3RE7pXRfy2JSIVGIOhtoNJB3JFrydXePD6mYnlxES75cG4SostyqryJRCKEJSTCKEIxCiMcRiGRhAwgBmEIoSkYGKMyJgAQiMIhjmSlMcnT4y+h4iE+BNzK9YudB2QeC+0fFpYaU67HVdwtc981oqMIUDdrbjw8pmwi2W/vG/0mJeI8pbUaW5Smu7JIlDiSiQxiRG8yFF5ZKRCsdR4TCxmWobW8/pMT7ppIAOMtynT+olyVVeRKAQhFKSYQMJEwAIjGZEwARigTCAH/9k=",
        "price": 799,
        "heading": "FabIndia Men's Blue Linen Kurta with White Pajama",
        "productDetail": ["Blue linen kurta with white pajama", "Mandarin collar", "Full sleeves", "Regular fit", "Ideal for festive occasions"],
        "Material_Care": "100% Linen, Dry clean only",
        "category": "men"
    },
    {
        "id": 16,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCmGy5gc20VDFzfw8S4KlgZGr6qsDQb0jRQ&usqp=CAU",
        "price": 899,
        "heading": "Biba Girls' Yellow and Blue Anarkali Suit Set",
        "productDetail": ["Yellow and blue anarkali suit with dupatta", "Round neck", "Sleeveless", "Ethnic print", "Comfortable and stylish"],
        "Material_Care": "Cotton blend, Gentle hand wash",
        "category": "kids"
    },
    {
        "id": 17,
        "image": "data:image/jpeg;base64,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",
        "price": 399,
        "heading": "UCB Men's Black Slim Fit Jeans",
        "productDetail": ["Black slim fit jeans", "Five-pocket styling", "Zip fly with button closure", "Stylish and comfortable"],
        "Material_Care": "98% cotton, 2% elastane, Machine wash",
        "category": "men"
    },
    {
        "id": 18,
        "image": "data:image/jpeg;base64,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",
        "price": 599,
        "heading": "Adidas Men's Running Shoes",
        "productDetail": ["Black and white running shoes", "Breathable mesh upper", "Cushioned insole", "Perfect for running and sports"],
        "Material_Care": "Synthetic, Wipe with a clean, dry cloth",
        "category": "men"
    },
    {
        "id": 19,
        "image": "data:image/jpeg;base64,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",
        "price": 799,
        "heading": "Levi's Women's Skinny Jeans",
        "productDetail": ["Blue skinny jeans for women", "Classic five-pocket styling", "Button and zipper closure", "Slim and stylish fit"],
        "Material_Care": "98% cotton, 2% elastane, Machine wash",
        "category": "women"
    },
    {
        "id": 20,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYYGBgaHBkcGBgYHBgZGRkaGhgZGRkaGhgcIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQlJCs0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ND00NDQ0NP/AABEIAQMAwgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYHAQj/xABFEAACAQIEAwUFBQUGBQQDAAABAhEAAwQSITEFQVEGImFxgRMykaGxB0JScsEjYrLR8BQzgpKi4RUkwtLxQ3ODwzRTY//EABoBAAIDAQEAAAAAAAAAAAAAAAACAQMEBQb/xAApEQADAAEEAgEDBAMBAAAAAAAAAQIRAxIhMQRBURMiYRQycYE0obEj/9oADAMBAAIRAxEAPwDdgV5dFFApt4aU5JFivG2olDxHunyNAFhgz3BXrb0Lhhm2vlRW3qGA+m3K9FNujSoA8RxTi4oSITRFSlA9QUQKa9ECmi+sxM+VJVxP7ngZJvojPg1AZm1JqkxPDA7wO6ImtBiTIgUJ7RJBHKqLvTftDzuRguIYZkJU+h61tez4/YJ5CqXHYb2jMG3mF5VdYC0UshDuBFNpL7ibrMkt8UgYKTqdqMdqzHEXIe3+atKp0rQVEVwetCW4QQOtS3FRCO+KaVyFPgK5kUIrR2500LRSERGvkqJFFQUsSO760VV0FRjgnIPLSomWlUYJyGFMvbU+g4i6AJOw3NPkARpjiVPlXmI93MOWvpUF8eqSG2Ox86WrU9gXfDlhFFEca1BwWJARNdG0/r4VLfEpzYdKNyaAMBTWr0GdaaDQB6teu4UFm0A3pCqvjWIMqi8xmPxgfrVPkav04dDRO6sCfElzroOS8/M+NGsLrNRLA5VOtqen6fWvPXqVdZbybtqlYRJWiRQVMcj8qeHH/nSpVENAMThFcg7MNQw/UcxTbSPkIeM3ht6VKJoRuwa1+N5LisV0yu4yuChxOFdryCDCmSeVaJdq9K0mrsmUEai/fFSiKiR3xVkC0HfY00HSnPsaZmgUMhDb/u0ZNhUS/dBSeVHw14OoIqPQBaVKlQSMfEjUDU1W4929mcp725U/eHMVHONhnO8E/wBfKq63imvMw1AGg5EHxrNWumsIklcC4wrhrR94ToenSo+OSQyEdR/Kswlt7GJBc5e973Ig7T4GtriFFwB1gnZoqtU9SXNdoCHwIu1vLOqtI9Dr8watAiZu/wCf0/lS4bh+6YETv586C2Ab2hlzoAf60p5TlJEl/YuJHdM17aMzVbauQRI16irKw45VdNZAeaz3GsVbRmd3VVCATudCSYA86LxXiJYlVMINCfxHn6VyvtpxJnb2SHu/e8v/AD9Kz6yWt9r6L9NOfuNBf+0y0hK4fDm4B952Cz4gAE/So6/apd3OFWPB2/7aw9ixsoEyYMDXTerKxwa7cGilQNNRvSfR0p42lqVM3PD/ALU7DEC9YdOpUh1H0PyrX8J7Q4XEj9jeRz+A91/VWg/KuQXuzjKhMa6VUpwe9mJVWBXUEaHToarrx9K+uCdtI+hihG3wP6Hl/W1BuFQJ28+RrlnA+2+JwrKmKz3bZjvNrcUeBPvDwOvjXUMLibeIRbltldGEgjUHwPkeVYdXx60+e0T+CfXjV4jzvvTmFdvTqahNGKk08MEaiH3hUuKiN74q+OxK6CXNjQnWViiO2lMY6Chioj37cJl8aPh0ygCvSA1Ey0m5dDbWeZ6VNyUqNyDBR8NwbO7vuucx40TEYbKTeQd4aOn4l/mN6uOHoq28m386qMfjFR5nXZh1H61mcTEkkS7aS4veAYOPrWdw958O7Ws+k5h4gcvhVuLyq1wqZQe54E7geutDx+D/ALQgVVHtAMxbaB0qtptbp7RJoeF8RVlEQJEiaj/2lnuv3gEAAL6fCsvwq8Cotv3cjd4846CtBwq2MrMCfZl5AI31ifjTTbrBBaYdw5IADKNM3X5Ua8+RDG50Hmf6miWnQzlhSDBG1ReKbLHX+VXVxLaGnmkii4leCISeQrluJuZmLnnr866N2lQ+xaN4/r+vCuaMuhBmdtf0qlGpGp7M4Mi2biqC7e4WMADrsecmp9rBYhXzG+D+6AYBj6Tyqx7JIvsbWYfcX4xWuxK21QtkQkCQMq1GeWX4SSMzYZypIUkDmASPU1T8QwD3T/elB4CY0895mtjw7iMF1W25/DtrprAnujzin3MNbOV3tsgY94GAVJ6gePOlXHJPfDOd8W4O/szL5wslTBDKOm5kfyqr7Mdo7mBuZl71tj37c6HlmXow689j4dQ4vw5FQsu0ag66da41kDZswghjB9djTTymqFtL0d64RxqxiVDWnBMSVOjr5qdfXaljOO2rYBd1UEwCx3OpIj0rlXZ22dCDsfeWZHryPL1NWvGeC3L1suAWLOACYjMdJ2kiefjVcTWm+HwLMTT5Om2rwYBhBB2IoTjv0PD2sloLJPd3O+1EY94HqP0rdoU3nJk8iVLWDy6NKYw0FEfahsdqtozoIpjlSNzwoiHSnAVQyxMg5G8aVTKVGGNlGOfiz+wQaln908x4+VSMMmdM7jvJOp56a1jv7e75FUf3eiga+G3lU3EY11tlbmYs2igaQT/5rL9RU2mKgrY1VtBQPeuFh4KDPw/Q1f8AA1BR77E5nMIm2mw0rN27HtCEQaIANdx1PlqKt7uPdWSV7oGVSNp6noaeXjl9B+AeOwGTEK76kySBtsYrQYA/sTbbeCyabiZA9KgWMUjB0dpLffP3W6VYX8eqoCxXOgkAffEaxRKlNsMFXisUC4ZDEFSek5SD86Mj5Uz3XywD3Z+dZ3E9pFUPCzJJUHxPOqrGcQd1DMSQYGXoD0qK1El8kJ4eTa4qyt1BqCpggjUHmPMc456isDxDhxt3vaMmdBOZZ96RprGngfCDV7wHiZtDI/8AdnY/gP8AL/zVlxK0GEiCCJBEbHnO36Glm8mqa3LKIfY/FpcsjKpUIzLlJkgbrJ8iPgavON4q5h4dULoRPd30305/71z/AIfcu4O87KrOjaOoABImQVE7rJjkdRz06RguIK6LzVgCreBGnypqwnn0XzWUQ8H2gLr3QZ1yg27s6KW1gR0Gu2apNvHYi+XT2OVBILv3ZP7iCSfUirSzhFOoIo2IcIup3ob4GbXoquLXhZw1xmM5UaJ5sVhR6sR8a4/7R7j+4oJiQkgHqdZrZdtr9y+6YZO6gAd22BJnIPGN48R0oODwCoqiPd5+e58J8dalcIrqucB+F4BUGYCCYnkTpuehj4CtDgbzSiMIUSwnSSSYPlvRuB8FLw9wFU5A6F+fov1q+4rw4XFGUAOg7nIR+Hy6dKn6bc5EnVSrA9GDoY8aTqCwqo4Vizmg6EaEGrt1BhhVmjal8ia8OlwDe2IofsRRnOlNFaWY0x9saU+o73cseNPNyqmixM89pSoNKoJOSNiRZKuu8ig4zHtecvOk6DaKhtcLkgjnpQ8pU5ToawqcZQvRsOB51Q3NIbSRv61Jv422yMhlSv8AQYf11qj4Hj1SbZOh2B2rzit0BoXVxIJGxBq1UlGGGSSbgc+8DJAI01ipIxiZWQhnIkIZ9zzNUWcM0hYAAkDw3NTMMnvNOg1jqDWZ00uCcgsXg3yhypA6xofWoqXp7h25VPxmJuOmQNmRSNBFV+Is5QDvm28D0o4YjLFEfLlMMWGkVOwDul1bEyp3B+7MnQ8vprVRgrrkiPeG3WpeEV3uo85mZjIGhA21PSmXoaaaeUX+P4Q8EqodeZXXn+Hl6UzAEoirBGWRBnYHTerzD4R0n9rC7kaQo5yarcUwLnLtsD101Pxq6k0jXo06YazxB12A+MVLwiPebM57g5fi8PKh8PwmcZm0Xpzb/arrDWydFE9AP60FIk3waXSRAu8ATEOzlijBdxqN9AR5A7EVJwHA7dvvHvsPdkQoP5eviaurdrInzJ6nw8BTcsPpsw+Y/wBq2RpJJZ7MGpqOqeOiFdxt1QSbMqNyHn5AT8qL/b8sC4hQkSNc30FSnTZOu/5ZE/HQetR+K4Uuc4JJAiPDw8aswVlTxmxkZbybNo8bTyPr+njVhgcRmUVTYrEOqFJlG0MgGNeVM4ViSDlrPqTtrJq0q3Tj4NJdShii2nkUx1ini/TKtXT9ojYndfOi0LE7r50VRV7M42lSpUuAOSMEEojAc9fCod/CMTmOviCKeiIfPXflRuF8PD3QjPlUg97lIGgrlpPPDH4fZ7gnRTEa8yaIjK76aidRQb1kqzK8aEjMOeuhqZwjCOboAyxEgmRT5be1hj4GWsGQTqQM2UiNcpol8IiFQDnBM+K8p+VWWMvE3YI1AXNHgapONPLuZgzFJqTh4Doi2L2UGDrNPVwYA1APzNQLKsfI1KwC5ZGsmhpIQvMisM4IzkZRHXrU/s7w5i6unebZ42HiTy1qN2Z7PviXIzZUXVz94AnQKOpg+Ueh6XhsKlq2EtKFGiiN5Okk7k85PSr9GHf3ehisxHCy9tkymXUd7xmVPlIGlV9jg7hu+noCIP8Ai6Vsri8ulBy1qenNFkajnohYfhv4jA/Cu/x2FWVtFQQogfXzPOo2JxSWlZ7rKirqzMQFHqfpWc4T2/wWJutaV2QgSrXAERwN8hJ+TAH500xM9C1dV2a1jIFR7W5Q/daV8jr/ALV5hsXbuDuOjxvkZW+hpzoQ6t1BU/UfrTijn95z0Cx6a0r+4I5iiAb+NMf3fKaCSuxeFD94RPTqev6+lZy9YNpxJ3JI66Rm+vzrQtc1A6ED5Bp+OnrVN2mt53QrAdFJH+JiPgQoFU62NpboZ3Ftgr2lTjqKzXDsURodD0q6s4kc6zqjVUjcRuvnRVNButJB8aKWrdLzKZz6WKaFNeU3PSqRTi9sjviddYq+7OYRL6OpgFIPxn+VUb2kZwEmOfpWz7JWrZDSIgTPUjT+vOudM5of0VZ4PcDSks0kRuIHOp1jDgvbt2yfaHV82uWNz/XWpWMDoS9uQJkg9eoBoeDxl1XFwouYCJ6j+hT7ZXDBETtFw64jgkggj3hoZHKKpuKIYGYZTG/JjWg49xV7hCsmSI21J8qpeLYkugDqQRoCR06jlSWl6BlPYePID61YcMB77ZQQQfQ+FVltwFcN6R+tOwrkrlE6nQdTyFVORUzq/YWzksoTobudj5aBfks+tX6t+0VP3yfgjCoCWfZJZUbWwq/AAfpUp7g/tKeK/OCP0ro6c7ZUkllcpgWmYi+qDMxgbdSSdgANzUDEcV7jBUcMQQpIUgMdATDHQb+lS2l2xlLfRju2vB2xuIthrrDD29DaXd3DH2jryAAKqWbYggDXWl4n2Fs3HQWQLJWM6ks4dZGqkmZGxmNx4TJ7ScUvDFWsFhmSy1xVzXn1gd4KoJBgAK3mW5ayzs7jry4y7g714Yj2allur1hcyyNx3hvsVqlu2t2S1KE9uCp4v2OZsXGHRbFsBSrqzuxO7MFBLLB05DTfWrHs7x1uF4g4bEu1zDOQUuMGBtsdyVbUCTDLy0bnrL4lxfENi/7FgkQ3YzXHubAlQ2k8gpHXkANKhW+IXb1rH2MSqe2s27gYrGVioaCI0BBG/Pu9KaXaSb6FpS20uzryuCJGoOoI2Ir1TWA+yvi9w4Rbd5WUI2WzcYHK6HZZ/dMgEwDKgait8hq7OSoqMfaOeEG+vlBUfp86ruKYdiwYDYZW9DI+pq+xAhvT+X8qio3eNDhUmmSrcPKKW1w52GYQv5pB+QqZZ4Yx999PwpOv+I7fCrC68Ch+0pFoSmM/ItgcQQCiqIA2FEmhX17y0QCrcFQOlXuWlRgMnMeD4OcQU8DJ/r4VrOz9hVskjVg7AnqAeVE4X2LvWXZ/aoxIjYjQ+tWvCuAPaQoXVtyDBGpJJ+tYohp8lnopeL4tZC7c46xypnA76XbjBjlK/dJ6jWrLFdk3e4HZ0IAPdg7/ABqEew9zMXF5cx2MEQOm9S1W7OOAIHGlt237rh9ZHMg71Q4q+1wsxYZidttK1r9irpH94nnDfzprdhHgRdQNzMHX50tRT9EHPspLZTvVzwHh6vibSj8Ssf8AB3z/AAx61f3Ps9ukyb6f5D/3VZ8H7MPhnDu6P3WUBVIgmNdSeQI9aRaVbkQ5NRet5kjnuKrrzxdQnfQfKP1q3RQRtVBxF8rk/hb6Gt4Evit0m4ByVQR5sWB08lHxNRw9SMVYLgXE7xAhlG5XcEeIk6c5PhWO7U44yLKmFyy42JkkBT0GhkeIrJqzTo2aOGsIn8V4ThMYRnCOyCJR4ZROxynaZ3onCOCYfDAiygUn3mJLMfAseXhWf7OWGa+rLMICWjaCpUKfMmf8J6VrL2KRNXdEH7zAfWkrK+3PBa9NbvyVPFuylm/dF8PctXYgtaYAmBlk6TMaSCNKdw3sxYsWrlpcxN1WV3Yy5DAjeIESdh5zXuM7U4ZAcrM5HJFMf5mgfCareMdoXCKLboGuCe7DlFjWW2nUDbr0qVvc98IHoubUtPL4XBqxZUIEUZVC5VC6ZQBAjpFaLBXM6I/4lVviAf1rm3ZfjDuxt33JUKDm0DhZhiWjUCRJ3gzNdMtgDQaAaAdBV2imln5KPKhxqPTrtAccIIPgR8x/vVWj941cYlMw9agJw4yTm+VaZpLsxVLfQC42lK3UtsBp73yqLxXC5LLnMQchgxzjTUbUVaQTLGXT3l6UWRVBgHvpadrksMrQxYMZEiQMo02rK2+L4kf+s3+n+VZf1D9I1Lx18nR8wpVzz/i2I/8A2t/p/lSo/UV8Dfpl8nUzSFeTXhNWFA4mvJps0qAHUqbNKpAfQ3SSN4E7R+tOFPoAQvICFLZSdgTlJjeAd6z/ABK2SSesmm9pEzuJ2VR8WJJ+QFZvEOy6KzL5Ej6VW9bDxgvnQ3LOTU3+KjDWXukZsqJC7SxyoonkJI1rDcLwz42/cuXGkwC5OYe8SFACkaKFIiedbLD2Fv2UR5Ie2qk85K+95gwfMVkuO8HfA5GS65NzQuvcWFkkZAxM+5vI3jepvdxS6Rq8Rw5elj720l/BQ4i21t3t5j3XYGCYJByzv0A3qOqjpT3csSxJJJJJJJJJ3JJ3NeVlbyz1GlpTEpNLKRK4diBbuo7AkKZIG+xGmo6zVp2gxpxIV7asbduQxk5gzRqyDYQNG157c6DMNpE1O4el8MGsJcZv3UdlI3IaBBFNGM/d0ZPL01las0sz6b4f4DdnkZrysmoWc55ZSCIPnpp68q6vwPEF7eU7ocvmAAVPwgeYNZbBoci6As/ehY1ZzmhfjE+E1reF4T2SZTqxOZyNix6eAAA9K6C0504xnLPI+R5leXrvUawsYx/BNfahCjGgA1XREjwaicceMNePS25+Ck1KBqNxVM1i6vVHGpjdTz5Uj5QyM+g/5ZzJMq518RNYLDIpXvHLoBtvFdBwNvJh2LtIyGeghI061z5DoN/gR9ayejbPYXIOvypUPMeh+dKp5JyjsFeGnxTTWswHleGvaVAHgr2lSoA9pwpopy1IFRiED3LiH90DwIRT+tZTHW4JB3Gh8xWnR/2938w/hWqfjluHboYPxGvzmslPlnQjpE/gj/s7R8APgSKL2q4D/altn2hT2ZM93NIcovUQRA61C4LIRB4A+jHMPrWmfvIwAkxIHiNR8wK1NZjH4Ma1Hp6m6Xhoy+B7GYZDL57h6OYX/KsT6k1PucGwqAuMNbMGT3FMDmwBB23geNT8TiikSjnNIB7g1iYOZgRpPLka8wl97hICKsAHViTBJ+6Fjl1rkqNaqw0/+Ft6+pf3Om/7H2raroqhR+6AB8qOteYfhwRQoZ4AA5fLSR5TpVNi8MwLpNxnjTW64MzlbKJA26bg1Y/DtdspVbi0wNhEd4RAfeDADMM3vAmOuv8Ai8KslqPZy5QVAAIBAAAGonYUda6mmmpSbzgq9j6C29GoV3epvolCWo/FBNi6P3H/AITR1NDxo/Zv+RvpSDGXxTf8i562j/DWTZJPkK1eL/8AwX/9k/wVlgvd/wANZEbJK3/jVz8b0qD/AMJJ1lddd+vpSqz+xTs74pRzoRxyVXstCYU7plG0t0xSnnRQZqgOm1WPDrxOhqZrJDnBPpUqVOKIU6Y5T5U2oPEyyFbigkDRgDEiobwBCQft7kfiHzVahdpU1U9VI+B/3qfYuB7rsJE5D3t/cUax5U3tHam3PMH66fyrM+cm1PCRB4LPs0J6D4Db5Vp8Maz/AA9IRB4D6VeYZ62Low1yxvGWHs2HPTIJiX3Ufz8JqNwW7bLvkDqSiaOSScjPJEsYHfUcvWpuJwiOQzrmIECSYg6kRMGiWbaqIVVUdFAA+VG17s8Y/wBhnjBJBqBxXDO6jIYbUFgQGCsCCBII6b9OsVLVtacGmpaysClTw+xdQhYQW9e7MlfyQIieRPM1apTedOFEztWES3l5C0K8OdPBpOuhnpUvohAFNe4hZRx1Uj5V4hnUbURtj5VWOZFhOCYf/wAmH+g1k1aVH5R9BWvTXCsP3HHyasfbHdX8o+lZEbJM1d4teVioYQCQNBsDApVCxVvvt+ZvqaVX7UIdyNBajEUG5SsrBtU3hS6k1Q/8SCvkujIx90n3H/K36GtHw22chPXaiWmxafBOrw1R4kYm02ZCrqT7jN8QJGh9aanam0CFvI9liSO8JXTnnGkVZuXsQurgzd0MVI10j6Go1xrqe8A6c40aPEVGxOMw7MpzCYzBgYDL96GG5G/pVdjMcwcDD3u/91WOe1cXcjMPdYCaWrRKJGBdTcYpOWREgiPCpHGrndC6d4wJ5kawPQGjYZIJY7sZPmdTVD2+xjWbKXV95GJWdpyMNRzGvzqqeWaq4n+izwggAVKW4VNc+4N9pNvQYiw4OnetEMPPI0EfE1oV7dcOb/1WQ9HR/qFI+dbDFk1+fSnK01n7PbXh+n/MW/RX/wC2h3/tF4as/tixHJbdz5EqB86lAaZFM86KiGud4z7WsMAfZ2LznlnKIp+BY/Ks/jvtXxbyLVqzbHUhnb4khf8ATUkHZfZ0DG8Rw9gTevW7f53VSfIEyT5VwrF9pMdiFBbFXdd1Ui2p9LYWq/AcJa6xA7zRJnNrJA5AsTJHLnUZwCWTrvE/tNwNsEWs99uQRSiervGniAax977QsVev2mbLZsq6M1tNcyBhmzudW0nQQPA1VWOzVwFQwy5jC5FlZ1mWYr47TPKah8bwHsXCSCYE6zBOaQY293b5nel3pvGR3p1Ky1wd+ivW2PlWS4BxjEvYtMUW4XRSNchgSpE6gmVbpqKuF4/ZZGJLIR3TmU6N0kSKp+os4fBGSvsJNhx4XB82FYi03cWPwD6Cttwx81hj19p82asPZ9xPyj6VnXZtgyuKHff8zfU0qNirffb8zfU0qv3IXB2W6sggk+hg/Gs5xDhly5JF91Qe7IBY+ogkedaJqC5pKWStowmJw2JtrkZw4OuRhmyj8RY+78amcE7U3cMQjgtbOwPSd0J3Hyq3x2H1kiRyB2LE7nyqNfFhQVeHdoTMy5ys7Kg2U/Teq8NPKK6kvjx63cGe28jQ6grDDbfTwMdRUm/icNes57yqVghswBy6ideXIzWEbhmJS6P7NlTMIym4r5upYMI9KrLvEryM6NOcgo6GCjLz0GgIOxqxW8cifyXfGuHNg7qGyzPYtlbjIYJRWOuvNDB1+NSeyWS5cd0kFnaE+6qEyIG01kMZxS6UVSzDKhTzSZCnrFabs4y2EtXl1Rx3mnZ1JzKw5CJ18KRrPKH0mt6NpexH7cWh91Cx9WAHro1Yb7UOKZpw6nRMufzbKQPQfWtRdw84kYlGzoyBXQMquhBUqwB0KxmmTOvOuY9ssQ7Ym+HXKQ40me5lGQyN5XKfWrIWaRo8h4lYM8m1F9mCNaCripC28w3g1rMZGu2shDAyJo1/ukGJVtxTXzJowlTRLZDpl/rwoAG9pdCJIPjTLqCNBQGJXunkZohvgjapILDBnugVo+yeHd8R3GysEcnWJBhI+LKYP4ay9hpAIrZfZ3dte3upeYKLllkDEx7zISJ5GBUNZ4GTw8mqw+N2zIxZBnTUEMANEaFBUiQJO4npWX7YYIm0mI3JfKx1yw651In8rz+atK9x8MzK0XQQj27qZVRlthUyECQsyugYDpEVme1XFUNpMJa72VjcvuPdN1gRkXqqgx6DeJquY20/g0at7oX5Nn9nJV8CqnXI9xD5MwuD4ZxVxa4cqKxCjVIYnWWSQ2brm38way32S4ibWITmro/+dCv/ANdb697reRpblNmZGMw1t0R3t8ncMn3SASNJ5gVm8oCgDaK2vC9Vcfvv/EaxKiEHhI+ZFZZnDZticdFLe94+Z+tKjXbfePmfrSpxjqLUBqK9DapZSRr6kjTeqhOHD2hYyVXYH8Z95voKt79wKCTt5E/Ss9xHi9sCBcUHoQ6/6gKVoh4LC4uQqwABBlWEBgfCdD5VRcfRnWSqud8wGS4Ceq7MPKqe/wARczmcOm+ViWX4GKjpinnugmdkaWSPI7RUCNpkDFd6Mx1689OtSuGXHVhbJOVzooIXvfdOY6DenNimQMCqsCYKMPGSeo9DVY1/UEKV10G48gTVkptFXRYY29dSUzum47rtlkHWCDEeVVhJOZmYsWIksSWJ2kk71M/sjsuYCZkx5bkCvL+FyWQx0OZdPAqx/SmikmkDz7KnLrHSpGHaKbct5tRvXlkkNtWkgktfjlQc8mYijvdUdPKoz5m/dHz/ANqkkBi9WHWm4qwUYqddBqNtRP8At6UTCWpuhTyP01FTuL2DkVpBgldJ0mTqfj8aR1ilIpCwTcqmKxFVuHaGqeackvOD8ZNhWX2VpzOZHdZa25gEqeYOUd06EjzmudySWYksxLMTuSTJJ8STNRASKeCTQB0H7JHi9iE6ojf5XI/666ZiR3H/ACn6VyX7LrmXGlfx2nHwKN/0mut4kdx/yn6VXXYyM1wQQHH77/WsU2xHRm+TmtrwY/3ojZzr5gH9axl0DM4/ff8AjasfTZtggMuppUXKKVMNg6K1DangEk6zoYUK0yFZiS/ugaDp6yBQQO+e7mABzPL5VlTlVBorNMEyuigkkSoZ9rM25FZxC25BLXzbXkEUZviZJ9KxLYC9ibrBXcopILuZAHpz8K3V7hyuFzZ8ogMrLeXOxttu4diUziSECkAiQQak28GghFQpKJAVboRCULPpnUpBIMuGIC94CjYxW0zIW8DhrcKHAfYuwn4KdKjcSxyMMjlG/A9rdfHIdvjU7jmBH/Ly7W1fOGctkVgpZs2e62QOyrAEhSxGwplvgSNfdVsIbZS09wq9y4bXtLKsER0cqzs5YiQwgZj3d4UMMoyYts7EIWc9Y0jbvTsaMuEZFyukSd5Hw6VuMJgLSWkhDAbDzlW8HuSCby6wrTlOX2Z0BEkSKo+OOqOpdDDIrJaKuhSZBzo7uwaVn3joykbxRSwgWGR+HwhBjQaQeYnWonHrai2SoMe0AB5RleKfb4h7NR35X3ioAYode71iqjiWNLpl2hgQPDvfzpIh7kxa6IFxDAZeW9DW4TUnDmNKZew3MVvED23WJAg86RHM0CweVGOtADuH2We6SFnKpY+UhZJ5e8B61oE4O12xeBEEWwyAR3ive+imo/Zq7k9qYH7QJbE9C2Y+Xur8K2PAsMAwdrYdGLAKQWUEbyAZJGoHyrHq3/6LAI5AhgirW2QwqHxLDeyu3Lf4HZeY91iAdfCvMLdjStYE/wBkTTyAKYr0iakDTfZ04HELU6SHA8zbeBXZsTOR4/C30rgPBcUbeJsODGW4hPlnUt8p+Nd/xPuP+VvoarrsmTNcCYn2kwTnExt7i1jcUO+/53/jNbHgA/vNCJZTB3EotZPiQh30++8E6D3jOtY3zRtjgr4pU3/EPgaVNgncdFehmlSpn2UoG1R7+x8qVKgkw+JQFXc6sDAPTU8tqn8D0tCNMzGfGlSqt9kIZj3OVjOoMA9AW2FU3GB3x/XOlSqAopcVebNknuydPMdd6i3d1/KtKlWuShjrdGFKlVwo1/er2lSoAvuzGuccpUx/haupdlrS5XEDcV7Srm1/lf0MujkX2mKBxLER1t/O1bNZq1SpV0V0KWFijLSpVICvHT1r6Lu+4fyf9NKlVdkyUHC/ef8A+P8AgWslx/Yfnu/x0qVYl+42FJSpUquA/9k=",
        "price": 299,
        "heading": "Kids' Cartoon Print T-shirt and Shorts Set",
        "productDetail": ["Colorful cartoon print t-shirt and shorts set for kids", "Comfortable and playful design", "Great for playtime and outings"],
        "Material_Care": "Cotton, Machine wash",
        "category": "kids"
    },
    {
        "id": 21,
        "image": "https://www.imparfaite.com/static/media/2023/06/01/17/c2c1c358-9816-44f9-a030-d45a83efa1c3.jpeg?auto=webp&width=768&height=768&fit=crop",
        "price": 699,
        "heading": "Women's Floral Print Sundress",
        "productDetail": ["Floral print sundress for women", "Spaghetti straps and A-line silhouette", "Perfect for summer and beach days"],
        "Material_Care": "100% Rayon, Machine wash",
        "category": "women"
    },
    {
        "id": 22,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWhuvJ0aolmygkBBF3RPfZ6UoCkhfLUemrlA&usqp=CAU",
        "price": 449,
        "heading": "Men's Casual Plaid Shirt",
        "productDetail": ["Casual plaid shirt for men", "Button-down collar", "Long sleeves", "Versatile and stylish"],
        "Material_Care": "Cotton, Machine wash",
        "category": "men"
    },
    {
        "id": 23,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UnrOy4cKks2m4MD-LJTP5EG7xw5oKtuftw&usqp=CAU",
        "price": 499,
        "heading": "Girls' Denim Overall Dress",
        "productDetail": ["Denim overall dress for girls", "Adjustable shoulder straps", "Pockets and cute design", "Ideal for everyday wear"],
        "Material_Care": "100% Cotton, Machine wash",
        "category": "kids"
    },
    {
        "id": 24,
        "noItem": 4,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn7i65eRuGYI92MyFxNuSgHqZIWxAP7yc7GE30Q4lu72-YIF0Gpn6AqIHaa61ZlkFx_WE&usqp=CAU",
        "price": 399,
        "heading": "Kids' Cartoon Printed Backpack with Lunch Box tshirt",
        "productDetail": ["Colorful cartoon printed backpack with matching lunch box", "Adjustable shoulder straps", "Great for school and outings", "Durable and fun for kids"],
        "Material_Care": "Polyester, Spot clean",
        "category": "kids"
    }
     
]
const mens =[
    {
        "id": 1,
        "image": "https://example.com/product25.jpg",
        "price": 799,
        "heading": "Men's Classic Blue Checkered Shirt",
        "productDetail": ["Blue checkered shirt for men", "Button-down collar", "Long sleeves", "Versatile and stylish"],
        "Material_Care": "Cotton, Machine wash",
        "category": "men"
    }
    ,
    {
        "id": 2,
        "image": "https://example.com/product26.jpg",
        "price": 899,
        "heading": "Adidas Men's Running Shorts",
        "productDetail": ["Black running shorts for men", "Elastic waistband", "Moisture-wicking fabric", "Ideal for workouts and sports"],
        "Material_Care": "Polyester, Machine wash",
        "category": "men"
    }
    ,
    {
        "id": 3,
        "image": "https://example.com/product27.jpg",
        "price": 499,
        "heading": "Men's Brown Leather Belt",
        "productDetail": ["Brown leather belt for men", "Classic and durable design", "Adjustable fit", "Perfect for formal attire"],
        "Material_Care": "100% Leather, Wipe clean",
        "category": "men"
    }
    ,
    {
        "id": 4,
        "image": "https://example.com/product28.jpg",
        "price": 699,
        "heading": "Men's Casual Slim Fit Chinos",
        "productDetail": ["Khaki slim fit chinos for men", "Flat front", "Belt loops", "Ideal for casual and semi-formal occasions"],
        "Material_Care": "98% cotton, 2% elastane, Machine wash",
        "category": "men"
    }
    ,
    {
        "id": 5,
        "image": "https://example.com/product29.jpg",
        "price": 449,
        "heading": "Men's Sporty Sneakers",
        "productDetail": ["Black and red sporty sneakers for men", "Lace-up closure", "Comfortable and trendy design", "Great for active lifestyles"],
        "Material_Care": "Synthetic, Wipe with a clean, dry cloth",
        "category": "men"
    }
    ,
    {
        "id": 6,
        "image": "https://example.com/product30.jpg",
        "price": 799,
        "heading": "Men's Formal Black Suit",
        "productDetail": ["Black formal suit for men", "Jacket and trousers included", "Perfect for weddings and business events", "Classic and elegant"],
        "Material_Care": "Polyester and viscose blend, Dry clean only",
        "category": "men"
    }
    ,
    {
        "id": 7,
        "image": "https://example.com/product31.jpg",
        "price": 599,
        "heading": "Men's Striped Polo Shirt",
        "productDetail": ["Blue and white striped polo shirt for men", "Short sleeves", "Casual and comfortable design", "Great for everyday wear"],
        "Material_Care": "Cotton, Machine wash",
        "category": "men"
    }
    ,
    {
        "id": 8,
        "image": "https://example.com/product32.jpg",
        "price": 499,
        "heading": "Men's Leather Wallet",
        "productDetail": ["Brown leather wallet for men", "Multiple card slots and compartments", "Slim and stylish design", "Organize your essentials"],
        "Material_Care": "100% Leather, Wipe clean",
        "category": "men"
    }
    ,
    {
        "id": 9,
        "image": "https://example.com/product33.jpg",
        "price": 399,
        "heading": "Men's Classic Crew Neck T-shirt",
        "productDetail": ["Black crew neck t-shirt for men", "Short sleeves", "Basic and versatile style", "Wearable with any outfit"],
        "Material_Care": "Cotton, Machine wash",
        "category": "men"
    }
    ,
    {
        "id": 10,
        "image": "https://example.com/product34.jpg",
        "price": 799,
        "heading": "Men's Casual Denim Jacket",
        "productDetail": ["Blue denim jacket for men", "Button-up front", "Perfect for layering", "Cool and trendy look"],
        "Material_Care": "100% Cotton, Machine wash",
        "category": "men"
    }
    ,
    {
        "id": 11,
        "image": "https://example.com/product35.jpg",
        "price": 599,
        "heading": "Men's Stylish Aviator Sunglasses",
        "productDetail": ["Black aviator sunglasses for men", "UV protection", "Enhance your style and eye protection", "Ideal for sunny days"],
        "Material_Care": "Metal and Polycarbonate, Wipe with a clean, dry cloth",
        "category": "men"
    }
    ,
    {
        "id": 12,
        "image": "https://example.com/product36.jpg",
        "price": 699,
        "heading": "Men's Classic Plaid Dress Shirt",
        "productDetail": ["Red and blue plaid dress shirt for men", "Button-down collar", "Long sleeves", "Perfect for formal and casual occasions"],
        "Material_Care": "Cotton, Machine wash",
        "category": "men"
    }
    ,
    {
        "id": 13,
        "image": "https://example.com/product37.jpg",
        "price": 449,
        "heading": "Men's Comfortable Slip-On Shoes",
        "productDetail": ["Black slip-on shoes for men", "Elastic goring for easy on/off", "Casual and convenient footwear", "Ideal for everyday use"],
        "Material_Care": "Synthetic, Wipe with a clean, dry cloth",
        "category": "men"
    }
    ,
    
]
const womens = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const kids = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const beautyProduct =[
    {
        id:1,
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQILnloPqzY0XbRYCOn92CPEWjJqUxglaxIJBjEqHuBo6MJ9XEvDjwBNFxuVjbvoNLhX8pYTrs24Vj2tCC2c-nUvGSe4j7Vx2bvu_Hv9GQpiBhMbHh6pz-1wA&usqp=CAE",
        price:237,
        product_name:"Swiss Beauty Long Lasting Makeup Fixer Natural Aloe Vera With Vitamin-E (70ml)",
        product_details:
        ['Swiss Beauty Makeup Fixer is useful for setting your makeup.',
           ' Matte Setting Spray: For a matte makeup look that stays put, use our lightweight setting spray to fix your makeup with a fresh and dewy look.',
           'Works for all makeup including foundation, blush, highlighter and powder.',
            'Setting Spray with a hydrating formula gives the face a moisturizing and soothing effect.',
            'SKIN SOOTHING & LOVING INGREDIENTS: Skin calming spray cares about your skin and it is good for all skin types including sensitive skin, too.',
            'Long Lasting: The Swiss Beauty Makeup Fixer fixes all your makeup very smoothly and gently settles on your skin very easily'
        ],
        company_name:"Swiss Beauty",
        category:'beautyProduct'
    },
    {
        id:2,
        image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSvK2JxD3ydu138hszMEoTx0hgjj7xczgPOpnaIpDg6nsE_choVgKQXIyOSnoyZhrBoA6S2jFkfNTz27yyjCOy6Ew9yqolA1i4orumo8X0WfjT0i42j5fwP&usqp=CAE",
        price:3300,
        product_name:"M.A.C Studio Fix Powder Plus Foundation - C2 (15g)",
        product_details:
        ['12-Hour Medium-To-Full Coverage',
        'Ultra-Matte Finish',
        ' Controls Oil/Shine',
        'Titanium Dioxide'
        ],
        company_name:"Mac",
        category:"beautyProduct"
    },
    {
        id:3,
        image:"https://sdcdn.io/mac/in/mac_sku_MW5K01_1x1_0.png?width=1080&height=1080",
        price:2150,
        product_name:"PREP + PRIME FIX+",
        product_details:
        [
           'Soothes and refreshes skin',
            'Hydrating',
            'Sets and improves the quality of wear of makeup for up to 12 hours',
            'Dermatologist tested',
            'Ophthalmologist tested',
            'Non-comedogenic',
        ],
        company_name:"Mac",
        category:"beautyProduct"
    },
    {
        id:4,
        image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuBVb2w2SICrcRYoMf6wRD_U7WYcdDc9Oty1ZfNmVP7wIpEA2sp6SVqQwIUfkCoQBcbOiQxnVZv9Te8ZYkLSwLca7mQy2-SCpiUrY7g5_iB4usWm3nf621hpEQSFPdrfFlsUh4OyY&usqp=CAc",
        price:1950,
        product_name:"MATTE LIPSTICK",
        product_details:
        [
           'Amplified: cream finish',
            'Cremesheen: high-shine finish',
            'Frost: frost finish',
            'Lustre: semi-gloss finish',
            'atte: matte finish',
            'Retro Matte: matte finish',
            'Satin: semi-matte finish',
        ],
        company_name:"Mac",
        category:"beautyProduct"
    },
    {
        id:5,
        image:"https://sdcdn.io/mac/in/mac_sku_SMXF08_1x1_0.png?width=1080&height=1080",
        price:2200,
        product_name:"LUSTREGLASS LIPSTICK",
        product_details:
        [
            'Lustrous glossy finish',
            'Sheer, buildable coverage',
            'Long-wearing colour, up to 8 hours',
            'Long-wearing shine, up to 6 hours',
            'Comfortable formula with a lightweight feel',
            'Contains Jojoba, Raspberry Seed, Coconut Oil, Organic Extra Virgin Olive Oil, Shea Butter and Hyaluronic Acid to nourish and condition lips',
            'Fade-resistant, non-flaking, non-drying',
            'Provides immediate moisture'
        ],
        company_name:"Mac",
        category:"beautyProduct"
    },
    {
        id:6,
        image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1113100/OGbQIWJjh2-8904409701648_1.jpg?dpr=1",
        price:2223,
        product_name:"Swiss Beauty Professional Makeup Brush Set - Black, Silver (12 Pcs) ",
        product_details:
        [
            'Made with soft bristles to ensure skin-friendly application',
            'Densely-packed bristles offer optimum coverage of powdered and mineral makeup',
            'Comes with an ergonomically designed handle to provide firm grip',
            'Easy-to-use brushes allow streak-free makeup application'
        ],
        company_name:"Swiss Beauty",
        category:"beautyProduct"
    },
    {
        id:7,
        image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/1083119/O2BE-FBnwB-8904323443648_1.jpg?dpr=1",
        price:970,
        product_name:"Fragrance & Beyond Fragrance Primer For Unisex (30ml)",
        product_details:
        [
            'Perfume primer for men and women infused with hydrating ingredients for long-lasting scent',
            'Nourishes and moisturizes skin for stronger Perfume hold',
            'Keeps skin from drying and scent from disappearing',
            "Natural formula protects Perfume layer from skin's pH"
        ],
        company_name:"Fragrance & Beyond",
        category:"beautyProduct"
    },
    {
        id:8,
        image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/colorbar/943126/0/ZvLuQ4sH-y-gfI1aTpBcQ-943126_1.jpg?dpr=1",
        price:721,
        product_name:"Colorbar Spotlight Illuminating Lotion (30ml)",
        product_details:
        [
            'Light-reflecting pigments lend the skin a naturally radiant glow',
            'Enriched with mulberry extract to nourish and illuminate skin',
            'Minimises the appearance of fine lines and dark spots',
            'Formulated without sulphates, silicones, mineral oils, artificial fragrances. and colours',
            '100% vegetarian product',
            'Paraben- and cruelty-free',
            'Dermatologically tested for safe use'
        ],
        company_name:"colorBar",
        category:"beautyProduct"
    },
    {
        id:9,
        image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1046927/iBA02UPFrm-1046927_1.jpg?dpr=1",
        price:1322,
        product_name:"MARS Mesmereyes Eyeshadow Palette (3.5gm)",
        product_details:
        [
            'it has one swipe pigmentation',
            'The shades are soft to touch',
            'There is minimal fallout in this palette',
            'The palette has a mix of matte, shimmer and glitter shades',
            'It comes in 3 beautiful variants',
            'Moreover, the eyeshadows can be used in multiple ways like blush, brow filler, contour, highlighter and eyeliner',
            'You can convert any day look to a night look with the pressed glitter shade in each palette'
        ],
        company_name:"Mars",
        category:"beautyProduct"
    },
    {
        id:10,
        image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/maybelline-new-york/COMBO_231016085231-SZ2/0/IyGpE9kBLF-9401652_1.jpeg?dpr=1",
        price:815,
        product_name:"Maybelline New York Colossal Combo - Kajal & Mascara",
        product_details:
        [
            'Richly pigmented kajal delivers an intense matte color',
            'Long-lasting, waterproof kajal stays for up to 10 hours without smudging',
            'Features an easy-to-use twist-up design for convenience',
            'Dermatologically tested formula ensures safe use'
        ],
        company_name:"Maybelline",
        category:"beautyProduct"
    },
    {
        id:11,
        image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1102622/PhS5-Dh__-773602596195_1.jpg?dpr=1",
        price:2200,
        product_name:"M.A.C Stack Mini Mascara - Black (8ml)",
        product_details:
        [
            'Formulated to make your lashes look fuller and thicker',
            'Clump- and flake-resistant formula for long-lasting use',
            'Designed to make your lashes appear more voluminous',
            'Long-lasting formula offers 24-hour wear',
        ],
        company_name:"Mac",
        category:"beautyProduct"
    },
    {
        id:12,
        image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/1125342/GjIxudoEW-1125342_1.jpg?dpr=1",
        price:345,
        product_name:"Colorbar Vegan Nail Lacquer - 286 Confetti (8ml) ",
        product_details:
        [
            'Infused with calcium and biotin to strengthen the nails, prevent chipping, and promote nail growth',
            'Features a double flat-wide patented U-cut brush for one-stroke application',
            'Long-lasting nail lacquer stays vibrant for up to 6 days',
            'Has a non-toxic, non-carcinogenic, non-yellowing, and paraben-free formula to ensure safe use on all skin types',
        ],
        company_name:"colorBar",
        category:"beautyProduct"
    },
    {
        id:13,
        image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1090181/QGW7ymxy4-1090181_1.jpg?dpr=1",
        price:599,
        product_name:"Minimalist 16% Vitamin C Serum With Vitamin E & Ferulic Acid For Brightening (20ml)",
        product_details:
        [
            'Niacinamide encourages protein synthesis, minimises melanin concentration, and enhances skin complexion in two weeks',
            'Nourishing facial serum is enriched with hyaluronic acid to hydrate dry and dehydrated skin and make it soft and plump',
            'Contains zinc to balance out sebum activity and minimise inflammation to give smooth skin without any sticky residue',
            'EUK-134 safeguards skin tissue against toxic compounds, heals skin and minimises inflammation',
            'With pH 5.5-6.5 and suitable for all skin types, especially those with dry and damaged skin',
            'Non-comedogenic product and free from fragrance and essential oil'
        ],
        company_name:"Minimalist",
        category:"beautyProduct"
    },
    {
        id:14,
        image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:247/maybelline-new-york/COMBO_231016085231-SZ2/0/IyGpE9kBLF-9401652_1.jpeg?dpr=1",
        price:815,
        product_name:"Maybelline New York Colossal Combo - Kajal & Mascara",
        product_details:
        [
            'Richly pigmented kajal delivers an intense matte color',
            'Long-lasting, waterproof kajal stays for up to 10 hours without smudging',
            'Features an easy-to-use twist-up design for convenience',
            'Dermatologically tested formula ensures safe use'
        ],
        company_name:"Maybelline",
        category:"beautyProduct"

        // id:14,
        // image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/misc/general/free/original/XtnfKRsEC-Reset_Desktop.jpg?dpr=1",
        // price:5100,
        // product_name:"L'Occitane Lavender Eau De Cologne - (300ml) ",
        // product_details:
        // [
        //     'Lavender from Provence and citrus fruits help neutralise foul body odour',
        //    'Floral-fruity perfume with woody-musky base keeps you smelling great even in the heated summer',
        //     'Light, breezy, and fresh fragrance rejuvenates the senses and leaves a captivating trail',
        //    'Versatile cologne can be used as a splash or as a perfume spray',
        //     'Makes a great gifting option'
        // ],
        // company_name:"L'occitane",
        // category:"beautyProduct"
    },
    {
        id:16,
        image:"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1046927/iBA02UPFrm-1046927_1.jpg?dpr=1",
        price:1326,
        product_name:"MARS Mesmereyes Eyeshadow Palette (3.5gm)",
        product_details:
        [
            'it has one swipe pigmentation',
            'The shades are soft to touch',
            'There is minimal fallout in this palette',
            'The palette has a mix of matte, shimmer and glitter shades',
            'It comes in 3 beautiful variants',
            'Moreover, the eyeshadows can be used in multiple ways like blush, brow filler, contour, highlighter and eyeliner',
            'You can convert any day look to a night look with the pressed glitter shade in each palette'
        ],
        company_name:"Mars",
        category:"beautyProduct"
    },
    
        {
          id: 17,
          image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDadOA2RetLlvnUjMM2akXSH2GDiUc5XT10xuGRiwNGgAAmS6uUE2qS-Fx_TNl7GOkLjKlqY0rVPKXb7RrWgWbwR81dvRklKeRbgLFiUeZYnonSFDlMb1LqBQJVWhZQGYl0MuZqu95&usqp=CAc",
          price: 1800,
          product_name: "MAC Studio Fix Fluid Foundation (30ml)",
          product_details: [
            "Medium to full coverage foundation",
            "Long-wearing and oil-controlling formula",
            "Blurs imperfections for a flawless finish",
            "Available in a wide range of shades"
          ],
          company_name: "Mac",
          category: "Beauty Product"
        },
        {
          "id": 18,
          "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSxJcygtwZbk671xMDbNYQL3JvuljU7y_3rFKTMoG-OOpkF4mQzpZR6k9ewFvTmW36zFzI6BE8Gt43PuhdwwZUfdvHyoUSc2t8GlenN5g_0VTnEf6TNBYuR1ziv8ZpNBgO8qa767oda&usqp=CAc",
          "price": 1200,
          "product_name": "MAC Ruby Woo Lipstick",
          "product_details": [
            "Iconic matte red lipstick",
            "Intense and highly-pigmented color",
            "Long-lasting and non-drying formula",
            "A classic shade for all occasions"
          ],
          "company_name": "Mac",
          "category": "Beauty Product"
        },
        {
          "id": 19,
          "image": "https://sdcdn.io/mac/in/mac_sku_MT7E02_1x1_0.png?width=1080&height=1080",
          "price": 1600,
          "product_name": "MAC Mineralize Skinfinish Highlighter",
          "product_details": [
            "Luxurious and radiant highlighter",
            "Illuminates the skin with a soft, luminous glow",
            "Baked minerals provide a natural finish",
            "Available in multiple shades"
          ],
          "company_name": "Mac",
          "category": "Beauty Product"
        },
        {
          "id": 20,
          "image": "https://sdcdn.io/mac/in/mac_sku_M71P01_1x1_0.png?width=1080&height=1080",
          "price": 1500,
          "product_name": "MAC Prep + Prime Fix+ Setting Spray (100ml)",
          "product_details": [
            "Multi-purpose setting spray",
            "Hydrates, refreshes, and sets makeup",
            "Leaves a dewy and radiant finish",
            "A makeup artist's favorite"
          ],
          "company_name": "Mac",
          "category": "Beauty Product"
        },
        {
          "id": 21,
          "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRdQxrvOlzaL3Spq7rFVb5SLTE8shCi3ezas7XAyNeRI_ZkZAhABlNE6lBNmL9YlvJWae-7xUnGDSUC2zEgD9kWFJCaAEv3YNepKoNC1onSF7_lIRBdYxW2UxFUpqxPH8mNTvZ6oOPlLA&usqp=CAc",
          "price": 1999,
          "product_name": "MAC Retro Matte Liquid Lipcolour",
          "product_details": [
            "Intense liquid matte lipstick",
            "Long-lasting and non-feathering formula",
            "Highly-pigmented and bold color payoff",
            "Available in a variety of shades"
          ],
          "company_name": "Mac",
          "category": "Beauty Product"
        },
        {
          "id": 22,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_lh12lV73ogr8AEZ6tFsQ62W3yuZnV-8lguMar3ZxA&s",
          "price": 1399,
          "product_name": "MAC Pro Longwear Concealer (9ml)",
          "product_details": [
            "Lightweight, fluid concealer",
            "Provides medium to full coverage",
            "Long-wearing and water-resistant",
            "Covers imperfections and dark circles"
          ],
          "company_name": "Mac",
          "category": "Beauty Product"
        },
        {
          "id": 23,
          "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-ofZ0c0B6tgnHazz4IDUU--lTx6ZvcHGfstML2TXxgaAuhr6Z_sAJ4A5wlIGN2Cp9aqsQzHBamZ9JBML0e1AEe6boHgNloBJO-rWRDT-LWznDiF6wCHIZ9n_PcOJVsnqqddXouAvFsA&usqp=CAc",
          "price": 2200,
          "product_name": "MAC Powder Blush",
          "product_details": [
            "Silky, matte-finish blush",
            "Buildable and long-lasting color",
            "Available in various shades to suit all skin tones",
            "Adds a pop of color to your cheeks"
          ],
          "company_name": "Mac",
          "category": "Beauty Product"
        },
        {
          "id": 24,
          "image": "data:image/png;base64,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",
          "price": 999,
          "product_name": "MAC Eye Kohl Pencil Liner",
          "product_details": [
            "Smooth and creamy kohl eyeliner",
            "Intense and smudge-resistant color",
            "Easy to apply and blend",
            "Available in a range of shades"
          ],
          "company_name": "Mac",
          "category": "Beauty Product"
        }
      
      
    
]
const mac = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const swissBeauty = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const skinCare = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const electronics =[
    {
        id:1,
        image:"https://m.media-amazon.com/images/I/314Rp+8XKWL._SX342_SY445_.jpg",
        price:50749.00,
        product_name:"Apple iPhone 13 (128GB) - Starlight",
        product_features:{
            "Brand":	"Apple",
            "Model Name":	"IPhone",
            "Network Service Provider":"Unlocked for All Carriers",
            "Operating System":"IOS 14",
            "Cellular Technology":"5G"
        },
        category:"electronics"

    },
    {
        id:2,
        image:"https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg",
        price:64308,
        product_name:"Apple iPhone 14 (128 GB) - Blue",
        product_features:{
            "Brand"	:"Apple",
            "Model Name":"IPhone",
            "Network Service Provider":"Unlocked for All Carriers",
            "Operating System":"IOS",
            "Cellular Technology":"5G"
        },
        category:"electronics"
    },
    {
        id:3,
        image:"https://m.media-amazon.com/images/I/71TSx9D2BVL._SL1500_.jpg",
        // https://m.media-amazon.com/images/I/81dT7CUY6GL._SL1500_.jpg
        price:159900,
        product_name:"Apple iPhone 15 Pro Max (256 GB) - Natural Titanium",
        product_features:{     
            "Brand":"Apple",
            "Model Name":"IPhone 15 Pro Max",
            "Network Service Provider":	"Unlocked for All Carriers",
            "Operating System":	"IOS",
            "Cellular Technology":"5G"
        },
        category:"electronics"
    },
    {
        id:4,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjR5TRSRK4nzlJmdU24goPPh8zk0L3gUwJlosIDvMsA&s",
        price:129900,
        product_name:"Apple iPhone 14 Pro (128 GB) - Silver ",
        product_features:{
            "Brand":"Apple",
            "Model Name":"IPhone",
            "Network Service Provider":	"Unlocked for All Carriers",
            "Operating System":"IOS",
            "Cellular Technology":"5G"
        },
        category:"electronics"
    },
    {
        id:5,
        image:"https://m.media-amazon.com/images/I/61CjYtVb7cL._SL1500_.jpg",
        price:53998,
        product_name:"Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Space Gray (5th Generation)",
        product_features:{    
            "Brand":"Apple",
            "Model Name":"IPad Air",
            "Memory Storage Capacity":"64 GB",
            "Screen Size":"10.9 Inches",
            "Operating System":"IPadOS"
        },
        category:"electronics"
    },
    {
        id:6,
        image:"https://m.media-amazon.com/images/I/81-yAYDzWPS._SL1500_.jpg",
        price:24999,
        product_name:"Apple Magic Keyboard for iPad Pro 11-inch and iPad Air (4th Generation) - White",
        product_features:{     
            "Brand":"Apple",
            "Compatible Devices":"Tablet",
            "Connectivity Technology":"USB-C",
            "Keyboard Description":	"Multimedia",
            "Recommended Uses For Product":"Everyday Use",
        },
        category:"electronics"
    },
    {
        id:7,
        image:"https://m.media-amazon.com/images/I/61nWyLhaDdL._SL1500_.jpg",
        price:51987,
        product_name:"typecase Edge Magic Style Keyboard for iPad Air 5th/4th(2022,2020) & New iPad Pro 11 (4th,3rd,2nd Gen), touchpad Keyboard case, iOS Fn Keys, Exclusive 10-Colors Backlit, Bluetooth",
        product_features:{
            "Brand":"Typecase",
            "Compatible Devices":"IPad Pro 11 (4th,3rd,2nd & 1st Generation), IPad Air 5th & 4th Generation",
            "Connectivity Technology":"Bluetooth",
            "Keyboard Description":	"Flexible",
            "Recommended Uses For Product":"Home & office work/use"
            
        },
        category:"electronics"
    },
    {
        id:8,
        image:"https://m.media-amazon.com/images/I/618d5bS2lUL._SL1500_.jpg",
        price:289900,
        product_name:"Apple 2023 MacBook Pro (16-inch, M3 Pro chip with 12‑core CPU and 18‑core GPU, 36GB Unified Memory, 512GB) - Space Black",
        product_features:
        {    
                "Brand": "Apple",
                "Model Name":"MacBook Pro",
                "Screen Size":"16 Inches",
                "Colour":"Space Black",
                "Hard Disk Size":"512 GB",
                "CPU Model":"Apple M2 Ultra",
                "RAM Memory Installed Size":"36 GB",
                "Operating System":	"Mac OS",
                "Graphics Card Description":"Integrated",
                "CPU Speed":"0.01 GHz"
            },
        category:"electronics"
    },
    {
        id:9,
        image:"https://m.media-amazon.com/images/I/71YBcSl021L._SL1500_.jpg",
        price:154900,
        product_name:"Apple 2023 iMac (24-inch, M3 chip with 8 core CPU and 10 core GPU, 8GB Unified Memory, 256GB) Blue",
        product_features:{
            "Specific Uses For Product":"Everyday Use",
            "Brand":"Apple",
            "Operating System":"Mac OS",
            "Memory Storage Capacity":"256 GB",
            "Screen Size":"24 Inches",
            "RAM Memory Installed Size":"8 GB",
            "Model Name":"IMac 24-inch",
            'CPU Model':'Apple M2 Ultra',
             "Colour":"Blue",
        },
        category:"electronics"
        
    },
    {
        id:10,
        image:"https://m.media-amazon.com/images/I/71bKwrOp6wL._SL1500_.jpg",
        price:72990,
        product_name:"Apple 2023 Mac Mini Desktop Computer M2 chip with 8‑core CPU and 10‑core GPU, 8GB Unified Memory, 512GB SSD Storage, Gigabit Ethernet. Works with iPhone/iPad",
        product_features:{
            "Brand":"Apple",
            "Specific Uses For Product":"Multimedia, Personal, Business",
            "Operating System":"Mac OS",
            "Screen Size":"0.01",
            "RAM Memory Installed Size":"8 GB",
            "Model Name":"Mac mini",
            "Included Components":	"Power cord, Mac mini",
            "CPU Model":"Unknown",
            "Colour":	"Silver",
            "CPU Manufacturer":	"Apple"
        },
        category:"electronics"
    },
    {
        id:11,
        image:"https://m.media-amazon.com/images/I/61sw7b6WaZL._SL1500_.jpg",
        price:2999,
        product_name:"realme Buds Wireless 2S in Ear Earphone with mic, Dual Device Switching & Type C Fast Charge & Up to 24Hrs Playtime, Bluetooth Headset Neckband (Blue)",
        product_features:{
            "Brand":"Realme",
            "Model Name":"Wireless 2S",
            "Colour":"Blue",
            "Form Factor":"In Ear",
            "Connectivity Technology":	"Wireless"
        },
        category:"electronics"
    },
    {
        id:12,
        image:"https://m.media-amazon.com/images/I/61ZEQXGTepL._SL1500_.jpg",
        price:1999,
        product_name:"realme Buds T300 Truly Wireless in-Ear Earbuds with 30dB ANC, 360° Spatial Audio Effect, 12.4mm Dynamic Bass Boost Driver with Dolby Atmos Support, Upto 40Hrs Battery and Fast Charging (Stylish Black)",
        product_features:{
            "Brand:":"Realme",
            "Model Name":"Buds T300",
            "Colour":"Black",
            "Form Factor":"True Wireless",
            "Connectivity Technology":"Wireless",
        },
        category:"electronics"
    },
    {
        id:13,
        image:"https://m.media-amazon.com/images/I/81exm8xjlaL._SL1500_.jpg",
        price:23415,
        product_name:"realme 11 Pro 5G (Sunrise Beige, 8GB RAM, 256GB Storage) | 120 Hz Curved Display | 100MP Prolight Camera | 7050 5G Dimensity | 67W SUPERVOOC | 12GB Dynamic RAM | Premier Vegan Leather Finish Design",
        product_features:{
            "Brand":"Realme",
            "Model Name":"Realme 11 Pro",
            "Network Service Provider":	"Unlocked for All Carriers",
            "Operating System":	"Android 13 | realme UI 4.1",
            "Cellular Technology":	"5G, 4G, 4G VOLTE, 3G, 2G, GSM, WCDMA"
        },
        category:"electronics"
    },
    {
        id:14,
        image:"https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        price:10999,
        product_name:"realme narzo N55 (Prime Blue, 6GB+128GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
        product_features:{        
            "Brand":"Realme",
            "Model Name":"Realme narzo N55",
            "Network Service Provider":	"Unlocked for All Carriers",
            "Operating System":	"Android 13.0",
            "Cellular Technology":"4G"
        },
        category:"electronics"
    },
    {
        "id": 15,
        "image": "https://m.media-amazon.com/images/I/61CjYtVb7cL._SL1500_.jpg",
        "price": 57998,
        "product_name": "Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 256GB) - Silver (5th Generation)",
        "product_features": {
            "Brand": "Apple",
            "Model Name": "IPad Air",
            "Memory Storage Capacity": "256 GB",
            "Screen Size": "10.9 Inches",
            "Operating System": "IPadOS"
        },
        "category": "electronics"
    },
    {
        "id": 16,
        "image": "data:image/jpeg;base64,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",
        "price": 57998,
        "product_name": "Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 256GB) - Silver (5th Generation)",
        "product_features": {
            "Brand": "Apple",
            "Model Name": "IPad Air",
            "Memory Storage Capacity": "256 GB",
            "Screen Size": "10.9 Inches",
            "Operating System": "IPadOS"
        },
        "category": "electronics"
    },
    {
        "id": 17,
        "image": "data:image/jpeg;base64,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",
        "price": 48998,
        "product_name": "Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 64GB) - Rose Gold (5th Generation)",
        "product_features": {
            "Brand": "Apple",
            "Model Name": "IPad Air",
            "Memory Storage Capacity": "64 GB",
            "Screen Size": "10.9 Inches",
            "Operating System": "IPadOS"
        },
        "category": "electronics"
    },
    {
        "id": 18,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zhsNTSSXabASTntcpZIrbjLZboK28-yfyw&usqp=CAU",
        "price": 64998,
        "product_name": "Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 512GB) - Sky Blue (5th Generation)",
        "product_features": {
            "Brand": "Apple",
            "Model Name": "IPad Air",
            "Memory Storage Capacity": "512 GB",
            "Screen Size": "10.9 Inches",
            "Operating System": "IPadOS"
        },
        "category": "electronics"
    },
    {
        "id": 19,
        "image": "https://m.media-amazon.com/images/I/61lv79X8rsL._AC_UY327_FMwebp_QL65_.jpg",
        "price": 59998,
        "product_name": "Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 256GB) - Space Gray (5th Generation)",
        "product_features": {
            "Brand": "Apple",
            "Model Name": "IPad Air",
            "Memory Storage Capacity": "256 GB",
            "Screen Size": "10.9 Inches",
            "Operating System": "IPadOS"
        },
        "category": "electronics"
    },
    {
        "id": 20,
        "image": "https://m.media-amazon.com/images/I/61CjYtVb7cL._SL1500_.jpg",
        "price": 67998,
        "product_name": "Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 128GB) - Silver (5th Generation)",
        "product_features": {
            "Brand": "Apple",
            "Model Name": "IPad Air",
            "Memory Storage Capacity": "128 GB",
            "Screen Size": "10.9 Inches",
            "Operating System": "IPadOS"
        },
        "category": "electronics"
    },
    {
        "id": 21,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6LkZ93xgPw2B2r5zKyVa57ubsGkekWP4dO21IcLFM4T3dgL_ctm2MNHAUnsv6QfnhnU&usqp=CAU",
        "price": 9299,
        "product_name": "realme narzo N48 (Purple, 4GB+64GB) 22W Segment Fast Charging | 48MP Primary Camera",
        "product_features": {
            "Brand": "Realme",
            "Model Name": "Realme narzo N48",
            "Network Service Provider": "Unlocked for All Carriers",
            "Operating System": "Android 12.0",
            "Cellular Technology": "4G"
        },
        "category": "electronics"
    },
    {
        "id": 22,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 13999,
        "product_name": "realme narzo N80 (Green, 6GB+128GB) 33W Segment Fast Charging | Super High-res 64MP Primary AI Camera",
        "product_features": {
            "Brand": "Realme",
            "Model Name": "Realme narzo N80",
            "Network Service Provider": "Unlocked for All Carriers",
            "Operating System": "Android 13.0",
            "Cellular Technology": "4G"
        },
        "category": "electronics"
    },
    {
            "id": 23,
            "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
            "price": 7699,
            "product_name": "Asus VivoBook 13.3-inch Laptop",
            "product_features": {
                "Brand": "Asus",
                "Model Name": "VivoBook",
                "Network Service Provider": "N/A",
                "Operating System": "Windows 10",
                "Cellular Technology": "N/A",
                "RAM type": "DDR4",
                "Graphic Processor": "Intel UHD Graphics"
            },
            "category": "electronics"
    
        
    },
    
    {
        "id": 25,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 8499,
        "product_name": "realme narzo N42 (Purple, 4GB+64GB) 18W Segment Fast Charging | 48MP Primary Camera",
        "product_features": {
            "Brand": "Realme",
            "Model Name": "Realme narzo N42",
            "Network Service Provider": "Unlocked for All Carriers",
            "Operating System": "Android 11.0",
            "Cellular Technology": "4G"
        },
        "category": "electronics"
    },
    {
        "id": 26,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCF0rwOYYd2A2J-l0d0rj_vm16wNDwnGgcjw&usqp=CAU",
        "price": 9999,
        "product_name": "realme narzo N35 (Silver, 4GB+64GB) 18W Segment Fast Charging | 48MP Primary Camera",
        "product_features": {
            "Brand": "Realme",
            "Model Name": "Realme narzo N35",
            "Network Service Provider": "Unlocked for All Carriers",
            "Operating System": "Android 11.0",
            "Cellular Technology": "4G"
        },
        "category": "electronics"
    },
    {
        "id": 27,
        "image": "https://m.media-amazon.com/images/I/71uTsPjZJNL._SL1500_.jpg",
        "price": 10999,
        "product_name": "realme narzo N50 (Green, 6GB+128GB) 22W Segment Fast Charging | 48MP Primary Camera",
        "product_features": {
            "Brand": "Realme",
            "Model Name": "Realme narzo N50",
            "Network Service Provider": "Unlocked for All Carriers",
            "Operating System": "Android 12.0",
            "Cellular Technology": "4G"
        },
        "category": "electronics"
    }
]
const  tv = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const iphone =  [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
const laptop = [
    {
        "id": 1,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 7699,
        "product_name": "ASUS VivoBook 14-inch Laptop - Intel Core i7, 16GB RAM, 512GB SSD",
        "product_features": {
            "Brand": "ASUS",
            "Model Name": "VivoBook",
            "Network Service Provider": "Not Applicable",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel Iris Xe Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 2,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 7699,
        "product_name": "Asus VivoBook 13.3-inch Laptop",
        "product_features": {
            "Brand": "Asus",
            "Model Name": "VivoBook",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 3,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 8999,
        "product_name": "Lenovo Ideapad 14-inch Laptop",
        "product_features": {
            "Brand": "Lenovo",
            "Model Name": "Ideapad",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 4,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 8299,
        "product_name": "Acer Aspire 15.6-inch Laptop",
        "product_features": {
            "Brand": "Acer",
            "Model Name": "Aspire",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 5,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 9499,
        "product_name": "HP Pavilion 14-inch Laptop",
        "product_features": {
            "Brand": "HP",
            "Model Name": "Pavilion",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 11",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel Iris Xe Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 6,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 7999,
        "product_name": "Dell Inspiron 15.6-inch Laptop",
        "product_features": {
            "Brand": "Dell",
            "Model Name": "Inspiron",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 7,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 8999,
        "product_name": "Dell Inspiron 17.3-inch Laptop",
        "product_features": {
            "Brand": "Dell",
            "Model Name": "Inspiron",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 11",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 8,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 7499,
        "product_name": "Dell Inspiron 14-inch Laptop",
        "product_features": {
            "Brand": "Dell",
            "Model Name": "Inspiron",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 8,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 7499,
        "product_name": "Dell Inspiron 14-inch Laptop",
        "product_features": {
            "Brand": "Dell",
            "Model Name": "Inspiron",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 9,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 9499,
        "product_name": "Dell Inspiron 13.3-inch Laptop",
        "product_features": {
            "Brand": "Dell",
            "Model Name": "Inspiron",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 11",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 10,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 8299,
        "product_name": "Dell Inspiron 15-inch Laptop",
        "product_features": {
            "Brand": "Dell",
            "Model Name": "Inspiron",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 10,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 8299,
        "product_name": "Dell Inspiron 15-inch Laptop",
        "product_features": {
            "Brand": "Dell",
            "Model Name": "Inspiron",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 11,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 7799,
        "product_name": "Dell Inspiron 12-inch Laptop",
        "product_features": {
            "Brand": "Dell",
            "Model Name": "Inspiron",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 11",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 12,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 9199,
        "product_name": "Dell Inspiron 16-inch Laptop",
        "product_features": {
            "Brand": "Dell",
            "Model Name": "Inspiron",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 13,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 8499,
        "product_name": "Dell Inspiron 13-inch Laptop",
        "product_features": {
            "Brand": "Dell",
            "Model Name": "Inspiron",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 11",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    ,
    {
        "id": 14,
        "image": "https://m.media-amazon.com/images/I/71Ftzmh3XWL._SL1500_.jpg",
        "price": 7699,
        "product_name": "Dell Inspiron 14-inch Laptop",
        "product_features": {
            "Brand": "Dell",
            "Model Name": "Inspiron",
            "Network Service Provider": "N/A",
            "Operating System": "Windows 10",
            "Cellular Technology": "N/A",
            "RAM type": "DDR4",
            "Graphic Processor": "Intel UHD Graphics"
        },
        "category": "electronics"
    }
    
]
module.exports = {home,all,grocery,fashion,beautyProduct,electronics,mac,laptop}