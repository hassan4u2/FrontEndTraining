let defaultProductsList = [{
    name: "Samsung T5 Portable SSD",
    price: "89.99",
    qty: 150,
    category: "Storage",
    desc: "The Samsung T5 Portable SSD is a fast and durable external solid state drive that offers high-speed data transfer."
},
{
    name: "Apple MacBook Air",
    price: "999.99",
    qty: 75,
    category: "Laptops",
    desc: "The MacBook Air is a lightweight and powerful laptop from Apple with a stunning Retina display and all-day battery life."
},
{
    name: "JBL Charge 4 Portable Bluetooth Speaker",
    price: "119.95",
    qty: 200,
    category: "Audio",
    desc: "The JBL Charge 4 is a waterproof portable Bluetooth speaker that delivers powerful sound and up to 20 hours of playtime."
},
{
    name: "Google Nest Hub",
    price: "89.99",
    qty: 120,
    category: "Smart Home",
    desc: "The Google Nest Hub is a smart display with a 7-inch touchscreen and built-in Google Assistant for hands-free control of your home."
},
{
    name: "Bose QuietComfort 35 II Wireless Headphones",
    price: "349.00",
    qty: 100,
    category: "Audio",
    desc: "The Bose QuietComfort 35 II are wireless noise-cancelling headphones with Google Assistant and Amazon Alexa built-in."
},
{
    name: "Microsoft Surface Pro X",
    price: "999.99",
    qty: 50,
    category: "Tablets",
    desc: "The Microsoft Surface Pro X is a powerful 2-in-1 tablet with a slim design and long battery life."
},
{
    name: "Fitbit Versa 2 Health & Fitness Smartwatch",
    price: "199.95",
    qty: 175,
    category: "Wearable",
    desc: "The Fitbit Versa 2 is a health and fitness smartwatch with a color touch screen and up to 5 days of battery life."
},
{
    name: "Ring Video Doorbell 2",
    price: "199.00",
    qty: 150,
    category: "Smart Home",
    desc: "The Ring Video Doorbell 2 is a smart doorbell with HD video, two-way audio, and motion detection."
},
{
    name: "Sony WH-1000XM4 Wireless Noise-Cancelling Headphones",
    price: "349.99",
    qty: 125,
    category: "Audio",
    desc: "The Sony WH-1000XM4 are wireless noise-cancelling headphones with 30 hours of battery life, touch control, and Alexa built-in."
},
{
    name: "Samsung Galaxy S21 5G",
    price: "799.99",
    qty: 200,
    category: "Smartphones",
    desc: "The Samsung Galaxy S21 5G is a powerful smartphone with a stunning display, advanced camera system, and 5G connectivity."
},
{
    name: "Apple iPad Pro (11-inch)",
    price: "799.99",
    qty: 125,
    category: "Tablets",
    desc: "The 11-inch iPad Pro is a powerful tablet from Apple with a stunning Liquid Retina display and A12Z Bionic chip."
},
{
    name: "Canon EOS Rebel T7 Digital SLR Camera",
    price: "449.00",
    qty: 100,
    category: "Cameras",
    desc: "The Canon EOS Rebel T7 is a beginner-friendly digital SLR camera with 24.1 megapixel CMOS sensor and built-in Wi-Fi."
}, {
    name: "Nexus 6P",
    price: "499",
    qty: 50,
    category: "Smartphone",
    desc: "The Nexus 6P is a high-end smartphone with a powerful processor and a stunning display."
},
{
    name: "Moto G7 Power",
    price: "299",
    qty: 100,
    category: "Smartphone",
    desc: "The Moto G7 Power is a budget-friendly smartphone with a large battery and a vibrant display."
},
{
    name: "OnePlus 7 Pro",
    price: "699",
    qty: 70,
    category: "Smartphone",
    desc: "The OnePlus 7 Pro is a flagship smartphone with a powerful processor and a stunning display."
},
{
    name: "ZenFone 6",
    price: "599",
    qty: 80,
    category: "Smartphone",
    desc: "The ZenFone 6 is a high-end smartphone with a powerful processor and a large battery."
},
{
    name: "Google Pixel 4a",
    price: "349",
    qty: 120,
    category: "Smartphone",
    desc: "The Google Pixel 4a is a budget-friendly smartphone with a powerful camera and a clean user interface."
},
{
    name: "Nokia 9 PureView",
    price: "599",
    qty: 50,
    category: "Smartphone",
    desc: "The Nokia 9 PureView is a high-end smartphone with a powerful processor and a stunning camera."
},
{
    name: "ROG Phone 3",
    price: "999",
    qty: 30,
    category: "Gaming phone",
    desc: "The ROG Phone 3 is a gaming smartphone with a powerful processor and a high refresh rate display."
},
{
    name: "Redmi Note 8 Pro",
    price: "249",
    qty: 200,
    category: "Smartphone",
    desc: "The Redmi Note 8 Pro is a budget-friendly smartphone with a powerful processor and a large battery."
},
{
    name: "Black Shark 2 Pro",
    price: "499",
    qty: 40,
    category: "Gaming phone",
    desc: "The Black Shark 2 Pro is a gaming smartphone with a powerful processor and a high refresh rate display."
},
{
    name: "Oppo Find X2",
    price: "999",
    qty: 50,
    category: "Smartphone",
    desc: "The Oppo Find X2 is a high-end smartphone with a powerful processor and a stunning display."
},
{
    name: "Vivo X50 Pro",
    price: "799",
    qty: 60,
    category: "Smartphone",
    desc: "The Vivo X50 Pro is a high-end smartphone with a powerful processor and a stunning camera."
},
{
    name: "Razor Blade Pro 17",
    price: "2,499",
    qty: 20,
    category: "Gaming Laptop",
    desc: "The Razor Blade Pro 17 is a high-performance gaming laptop with a fast processor and dedicated graphics card."
},
{
    name: "Google Pixel 5",
    price: "699",
    qty: 100,
    category: "Smartphone",
    desc: "The Google Pixel 5 is a high-end smartphone with a powerful camera system and access to the latest Android updates."
},
{
    name: "OnePlus 9 Pro",
    price: "999",
    qty: 200,
    category: "Smartphone",
    desc: "The OnePlus 9 Pro is a premium smartphone with a fast and smooth user experience and a large, high-resolution display."
},
{
    name: "Nvidia Shield TV",
    price: "149",
    qty: 50,
    category: "Streaming Device",
    desc: "The Nvidia Shield TV is a powerful streaming device for gaming and entertainment with support for 4K and HDR content."
},
{
    name: "Microsoft Surface Pro X",
    price: "1299",
    qty: 40,
    category: "2-in-1 Laptop",
    desc: "The Microsoft Surface Pro X is a 2-in-1 laptop with a slim and lightweight design and support for the latest apps and games."
},
{
    name: "HP Spectre x360",
    price: "1299",
    qty: 50,
    category: "2-in-1 Laptop",
    desc: "The HP Spectre x360 is a high-performance 2-in-1 laptop with a sleek and durable design and long battery life."
},
{
    name: "Lenovo ThinkPad X1 Carbon",
    price: "1499",
    qty: 60,
    category: "Laptop",
    desc: "The Lenovo ThinkPad X1 Carbon is a durable and reliable laptop for business and productivity with a fast processor and long battery life."
},
{
    name: "Dell XPS 13",
    price: "999",
    qty: 100,
    category: "Laptop",
    desc: "The Dell XPS 13 is a high-performance laptop with a slim and lightweight design and a beautiful InfinityEdge display."
},
{
    name: "Amazon Echo Show 10",
    price: "229",
    qty: 20,
    category: "Smart Display",
    desc: "The Amazon Echo Show 10 is a large smart display with a rotating screen and Alexa voice control for hands-free use."
},
{
    name: "Bose QuietComfort 35 II",
    price: "349",
    qty: 200,
    category: "Over-Ear Headphones",
    desc: "The Bose QuietComfort 35 II are noise-cancelling over-ear headphones with a comfortable fit and long battery life."
},
{
    name: "iPhone 12 Pro Max",
    price: "1099",
    qty: 200,
    category: "Smartphone",
    desc: "The iPhone 12 Pro Max is a top-of-the-line smartphone with a large OLED display and advanced camera system."
},
{
    name: "iPad Pro",
    price: "799",
    qty: 50,
    category: "Tablet",
    desc: "The iPad Pro is a high-performance tablet with a large and vivid display and powerful processing capabilities."
},
{
    name: "MacBook Air M2",
    price: "999",
    qty: 100,
    category: "Laptop",
    desc: "The MacBook Air M2 is a lightweight and portable laptop with a high-resolution Retina display and long battery life."
},
{
    name: "iPod Touch",
    price: "199",
    qty: 150,
    category: "Music Player",
    desc: "The iPod Touch is a sleek and compact music player with access to the iTunes Store and a variety of apps."
},
{
    name: "Apple Watch Series 6",
    price: "399",
    qty: 250,
    category: "Wearable",
    desc: "The Apple Watch Series 6 is a feature-packed smartwatch with a wide range of health and fitness monitoring capabilities."
},
{
    name: "HomePod",
    price: "299",
    qty: 20,
    category: "Smart Speaker",
    desc: "The HomePod is a high-quality smart speaker with powerful sound and voice control through Siri."
},
{
    name: "AirPods Pro",
    price: "249",
    qty: 300,
    category: "Earbuds",
    desc: "The AirPods Pro are wireless earbuds with active noise cancellation and a comfortable, secure fit."
},
{
    name: "Mac Mini",
    price: "699",
    qty: 60,
    category: "Desktop Computer",
    desc: "The Mac Mini is a small and powerful desktop computer with a fast processor and a variety of ports for connecting peripherals."
},
{
    name: "iMac Pro",
    price: "2,499",
    qty: 10,
    category: "All-in-One Desktop",
    desc: "The iMac Pro is a high-end all-in-one desktop computer with a large and beautiful display and cutting-edge performance."
},
{
    name: "Apple TV 4K",
    price: "199",
    qty: 40,
    category: "Streaming Device",
    desc: "The Apple TV 4K is a powerful streaming device with access to a wide range of movies, TV shows, and games."
},
{
    name: "LG OLED C1",
    price: "1499",
    qty: 25,
    category: "Television",
    desc: "The LG OLED C1 is a high-end television with a 4K OLED display and advanced features like HDR and AI ThinQ."
},
{
    name: "LG Gram 17",
    price: "1499",
    qty: 50,
    category: "Laptop",
    desc: "The LG Gram 17 is a lightweight laptop with a 17-inch display and long battery life."
},
{
    name: "LG G8X ThinQ",
    price: "499",
    qty: 100,
    category: "Smartphone",
    desc: "The LG G8X ThinQ is a mid-range smartphone with a large display and dual-screen capability."
},
{
    name: "LG V60 ThinQ 5G",
    price: "799",
    qty: 75,
    category: "Smartphone",
    desc: "The LG V60 ThinQ 5G is a high-end smartphone with 5G connectivity and a large display."
},
{
    name: "LG Tone Free HBS-FN7",
    price: "149.99",
    qty: 100,
    category: "Wireless Earbuds",
    desc: "The LG Tone Free HBS-FN7 are wireless earbuds with active noise cancellation, long battery life, and UVnano technology for earbud hygiene."
},
{
    name: "LG XBOOM AI ThinQ WK9",
    price: "199.99",
    qty: 50,
    category: "Smart Speaker",
    desc: "The LG XBOOM AI ThinQ WK9 is a smart speaker with Google Assistant built-in and powerful audio technology."
},
{
    name: "LG UltraFine 4K Display",
    price: "699",
    qty: 25,
    category: "Computer Monitor",
    desc: "The LG UltraFine 4K Display is a high-quality computer monitor with a 4K resolution and support for P3 wide color gamut."
},
{
    name: "LG XBOOM Go PL7",
    price: "149.99",
    qty: 100,
    category: "Bluetooth Speaker",
    desc: "The LG XBOOM Go PL7 is a portable Bluetooth speaker with powerful audio technology and up to 22 hours of battery life."
},
{
    name: "LG InstaView Door-in-Door",
    price: "2,499",
    qty: 20,
    category: "Refrigerator",
    desc: "The LG InstaView Door-in-Door is a high-end refrigerator with a sleek design, advanced features, and innovative door-in-door technology."
},
{
    name: "LG CordZero A9 Stick Vacuum",
    price: "399.99",
    qty: 50,
    category: "Vacuum Cleaner",
    desc: "The LG CordZero A9 Stick Vacuum is a cordless vacuum cleaner with advanced suction power and a long-lasting battery."
},

{
    name: "Galaxy Note 20",
    price: "699",
    qty: 75,
    category: "Smartphone",
    desc: "The Samsung Galaxy Note 20 is a high-end smartphone with a large display and advanced S Pen functionality."
},
{
    name: "Galaxy A52",
    price: "499",
    qty: 150,
    category: "Smartphone",
    desc: "The Samsung Galaxy A52 is a mid-range smartphone with a sleek design and advanced camera features."
},
{
    name: "Galaxy Tab S7",
    price: "649",
    qty: 50,
    category: "Tablet",
    desc: "The Samsung Galaxy Tab S7 is a premium tablet with a large display, fast processor, and long battery life."
},
{
    name: "QLED TV Q80T",
    price: "1499",
    qty: 25,
    category: "Television",
    desc: "The Samsung QLED TV Q80T is a high-end television with a QLED display and advanced features like HDR and Quantum Processor 4K."
},
{
    name: "Galaxy Watch 3",
    price: "399",
    qty: 75,
    category: "Smartwatch",
    desc: "The Samsung Galaxy Watch 3 is a stylish and feature-rich smartwatch that offers advanced fitness tracking and mobile payments."
},
{
    name: "Galaxy Buds Pro",
    price: "199",
    qty: 100,
    category: "Wireless Earbuds",
    desc: "The Samsung Galaxy Buds Pro are high-quality wireless earbuds with active noise cancellation, long battery life, and intuitive touch controls."
},
{
    name: "Samsung Soundbar Q800T",
    price: "799",
    qty: 50,
    category: "Home Audio",
    desc: "The Samsung Soundbar Q800T is a premium soundbar with 3D audio technology and support for Dolby Atmos and DTS:X."
},
{
    name: "Samsung Wireless Charger Trio",
    price: "69.99",
    qty: 200,
    category: "Accessories",
    desc: "The Samsung Wireless Charger Trio can charge up to three devices simultaneously and is compatible with all Qi-enabled devices."
},
{
    name: "Samsung Portable SSD T7 Touch",
    price: "149.99",
    qty: 100,
    category: "Storage",
    desc: "The Samsung Portable SSD T7 Touch is a fast and secure external solid state drive with a fingerprint reader for added security."
},
{
    name: "Samsung T5 Portable SSD",
    price: "89.99",
    qty: 150,
    category: "Storage",
    desc: "The Samsung T5 Portable SSD is a fast and durable external solid state drive that offers high-speed data transfer."
}
]

