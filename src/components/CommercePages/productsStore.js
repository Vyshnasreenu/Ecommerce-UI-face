

export const mobileProducts = [
    {
        id: "1",
        name: "SamSung Galaxy S23",
        images: ["/images/Mobiles/image.png", "/images/Mobiles/Samsung S23.png"],
        image: "/images/Mobiles/image.png",
        price: "90000",
        count: 0,
        description: "This samsung galaxy take pictures good quality",

        moreInfo: "The Samsung Galaxy S23 Ultra is a flagship smartphone that combines top-notch hardware, cutting-edge technology, and a premium design. It is tailored for users seeking high performance, excellent photography capabilities, and advanced features.",
        ProcessorAndPerformance: {
            Chipset: ["Qualcomm Snapdragon 8 Gen 2 (4nm)", "Custom-tuned for Samsung, offering improved performance and efficiency"],
            CPU:
                [
                    "1x Cortex- X3(3.36 GHz)",
                    "2x Cortex- A715(2.8 GHz)",
                    "2x Cortex - A710(2.8 GHz)",
                    "3x Cortex - A510(2.0 GHz)",
                ],
            Memory: [
                { name: "RAM", msg: "8GB or 12GB(depending on the variant)" },
                { name: "Storage", msg: "256GB, 512GB, or 1TB(UFS 4.0 for faster data speeds)" },
                { name: "ExpandableStorage", msg: "No microSD card slot." }

            ],
            Display: [
                { name: "Type", msg: "Dynamic AMOLED 2X" },
                { name: "Size", msg: "6.8 inches" },
                { name: "Resolution", msg: "3088 x 1440 pixels(QHD +)" },
                { name: "Refresh Rate", msg: "Adaptive 120Hz" },
                { name: "Peak Brightness", msg: "1750 nits" },
                { name: "Protection", msg: "Corning Gorilla Glass Victus 2" },
                {
                    name: "Support", msg: "Built -in S Pen with improved latency"
                }
            ],
            CameraSystem: [
                {
                    name: "Rear Cameras", list: [
                        { name: "Main Camera", msg: "200 MP, f/1.7, 24mm (wide), OIS" },
                        { name: "Telephoto 1", msg: "10 MP, f/4.9, 230mm, 10x optical zoom, OIS" },
                        { name: "Ultra-wide", msg: "12 MP, f/2.2, 13mm, 120-degree FOV" }
                    ]
                },
                { name: "Front Camera", msg: "12 MP, f/2.2, 26mm (wide), Dual Pixel PDAF, HDR" },
            ],
            BatteryAndCharging: [
                { name: "Capacity", msg: "5000 mAh" },
                { name: "Wired Charging", msg: "45W (0-65% in ~30 minutes)" },
                { name: "Wireless Charging", msg: "15W" },
                { name: "USB", msg: "USB-C 3.2, supports Power Delivery 3.0" }
            ],
            BuildAndDesign: [
                { name: "Dimensions", msg: "163.4 x 78.1 x 8.9 mm" },
                { name: "Weight", msg: "234g" },
                { name: "Materials", msg: "Armor Aluminum frame, Gorilla Glass Victus 2 front and back" },
                { name: "Water and Dust Resistance", msg: "IP68 certified (up to 1.5 meters for 30 minutes)" },
            ],
            OperatingSystem: [
                { name: "OS", msg: "Android 13" },
                { name: "UI", msg: " One UI 5.1" },
            ],
            Connectivity: [
                { name: "5G", msg: "Supported" },
                { name: "Wi-Fi", msg: "Wi-Fi 6E" },
                { name: "Bluetooth", msg: "5.3" },
                { name: "GPS", msg: "Multi-band (supports dual-band A-GPS, GLONASS, BDS, GALILEO)" }
            ]
        },



    },

    {
        id: "2",
        name: "iPhone 14 Pro",
        image: "/images/Mobiles/Iphone 15.png",
        price: "120000",
        count: 0,
        description: "Apple iPhone 14 Pro with advanced camera features and A16 Bionic chip.",
        moreInfo: "The iPhone 14 Pro is a flagship smartphone from Apple, designed to deliver a premium experience with cutting-edge technology, exceptional performance, and advanced camera features.",
        ProcessorAndPerformance: {
            Chipset: [
                "Apple A16 Bionic (4nm)",
                "Hexa-core design with 2 performance cores and 4 efficiency cores"
            ],
            CPU: [
                "2x Everest (3.46 GHz) - Performance Cores",
                "4x Sawtooth (2.02 GHz) - Efficiency Cores"
            ],
            Memory: [
                { name: "RAM", msg: "6GB" },
                { name: "Storage", msg: "128GB, 256GB, 512GB, or 1TB (NVMe)" },
                { name: "ExpandableStorage", msg: "No expandable storage (no microSD card slot)" }
            ],
            Display: [
                { name: "Type", msg: "Super Retina XDR OLED" },
                { name: "Size", msg: "6.1 inches" },
                { name: "Resolution", msg: "2556 x 1179 pixels (460 ppi)" },
                { name: "Refresh Rate", msg: "Adaptive 120Hz (ProMotion)" },
                { name: "Peak Brightness", msg: "2000 nits (outdoor)" },
                { name: "Protection", msg: "Ceramic Shield front cover" },
                { name: "Support", msg: "Dynamic Island for notifications and multitasking" }
            ],
            CameraSystem: [
                {
                    name: "Rear Cameras",
                    list: [
                        { name: "Main Camera", msg: "48 MP, f/1.78, 24mm (wide), OIS, Dual Pixel PDAF" },
                        { name: "Telephoto", msg: "12 MP, f/2.8, 77mm, 3x optical zoom, OIS" },
                        { name: "Ultra-wide", msg: "12 MP, f/2.2, 13mm, 120-degree FOV" },
                        { name: "LiDAR Scanner", msg: "For depth sensing and AR applications" }
                    ]
                },
                { name: "Front Camera", msg: "12 MP, f/1.9, 23mm (wide), Autofocus, HDR" },
            ],
            BatteryAndCharging: [
                { name: "Capacity", msg: "3200 mAh (approx.)" },
                { name: "Wired Charging", msg: "20W fast charging (50% in ~30 minutes)" },
                { name: "Wireless Charging", msg: "15W MagSafe, 7.5W Qi wireless charging" },
                { name: "USB", msg: "Lightning port (USB 2.0)" }
            ],
            BuildAndDesign: [
                { name: "Dimensions", msg: "147.5 x 71.5 x 7.85 mm" },
                { name: "Weight", msg: "206g" },
                { name: "Materials", msg: "Surgical-grade stainless steel frame, Ceramic Shield front and back" },
                { name: "Water and Dust Resistance", msg: "IP68 certified (up to 6 meters for 30 minutes)" }
            ],
            OperatingSystem: [
                { name: "OS", msg: "iOS 16 (upgradable to newer versions)" },
                { name: "UI", msg: "Intuitive interface with advanced features like Focus and Live Activities" }
            ],
            Connectivity: [
                { name: "5G", msg: "Supported (sub-6 GHz and mmWave)" },
                { name: "Wi-Fi", msg: "Wi-Fi 6" },
                { name: "Bluetooth", msg: "5.3" },
                { name: "GPS", msg: "Dual-frequency GPS, GLONASS, GALILEO, QZSS, BeiDou" }
            ]
        }

    },
    {
        id: "3",
        name: "Google Pixel 7",
        image: "/images/Mobiles/Google pi7.png",
        price: "75000",
        count: 0,
        description: "Google Pixel 7 with Google’s advanced AI for exceptional photo quality and a unique design.",
        moreInfo: "The Google Pixel 7 is a flagship smartphone that delivers seamless performance, excellent AI-powered photography, and a clean Android experience, all in a sleek and durable design.",
        ProcessorAndPerformance: {
            Chipset: [
                "Google Tensor G2 (5nm)",
                "Custom-designed by Google for AI and machine learning tasks"
            ],
            CPU: [
                "2x Cortex-X1 (2.85 GHz) - Performance Cores",
                "2x Cortex-A78 (2.35 GHz) - Mid Cores",
                "4x Cortex-A55 (1.80 GHz) - Efficiency Cores"
            ],
            Memory: [
                { name: "RAM", msg: "8GB" },
                { name: "Storage", msg: "128GB or 256GB (UFS 3.1)" },
                { name: "ExpandableStorage", msg: "No expandable storage (no microSD card slot)" }
            ],
            Display: [
                { name: "Type", msg: "AMOLED, HDR10+" },
                { name: "Size", msg: "6.3 inches" },
                { name: "Resolution", msg: "2400 x 1080 pixels (FHD+, 416 ppi)" },
                { name: "Refresh Rate", msg: "90Hz" },
                { name: "Peak Brightness", msg: "1400 nits" },
                { name: "Protection", msg: "Corning Gorilla Glass Victus" },
                { name: "Support", msg: "Always-on display with At a Glance feature" }
            ],
            CameraSystem: [
                {
                    name: "Rear Cameras",
                    list: [
                        { name: "Main Camera", msg: "50 MP, f/1.85, 25mm (wide), OIS, Octa-PD" },
                        { name: "Ultra-wide", msg: "12 MP, f/2.2, 114-degree FOV" }
                    ]
                },
                { name: "Front Camera", msg: "10.8 MP, f/2.2, 21mm (ultra-wide), Fixed Focus, HDR" },
            ],
            BatteryAndCharging: [
                { name: "Capacity", msg: "4355 mAh" },
                { name: "Wired Charging", msg: "20W fast charging (50% in ~30 minutes)" },
                { name: "Wireless Charging", msg: "20W (with Pixel Stand), 12W Qi wireless charging" },
                { name: "USB", msg: "USB-C 3.2, supports Power Delivery 3.0" }
            ],
            BuildAndDesign: [
                { name: "Dimensions", msg: "155.6 x 73.2 x 8.7 mm" },
                { name: "Weight", msg: "197g" },
                { name: "Materials", msg: "Aluminum frame, Gorilla Glass Victus front and back" },
                { name: "Water and Dust Resistance", msg: "IP68 certified (up to 1.5 meters for 30 minutes)" }
            ],
            OperatingSystem: [
                { name: "OS", msg: "Android 13 (stock Android experience)" },
                { name: "UI", msg: "Google Pixel UI with exclusive features like Live Translate" }
            ],
            Connectivity: [
                { name: "5G", msg: "Supported (sub-6 GHz and mmWave)" },
                { name: "Wi-Fi", msg: "Wi-Fi 6E" },
                { name: "Bluetooth", msg: "5.2" },
                { name: "GPS", msg: "Dual-band GPS, GLONASS, GALILEO, QZSS, BeiDou" }
            ]
        }

    },
    {
        id: "4",
        name: "OnePlus 11",
        // image: '/images/Mobiles/OnePlus.png',
        image: '/images/Mobiles/OnePluse 2.png',
        price: "68000",
        count: 0,
        description: "OnePlus 11 with fast performance, excellent display, and long-lasting battery.",
        moreInfo: "The OnePlus 11 is a flagship smartphone combining powerful hardware, sleek design, and advanced camera capabilities. It offers a smooth performance experience with fast charging and a vibrant display.",
        ProcessorAndPerformance: {
            Chipset: [
                "Qualcomm Snapdragon 8 Gen 2 (4nm)",
                "Delivers top-tier performance and efficiency for demanding tasks"
            ],
            CPU: [
                "1x Cortex-X3 (3.2 GHz) - Prime Core",
                "2x Cortex-A715 (2.8 GHz) - Performance Cores",
                "2x Cortex-A710 (2.8 GHz) - Balanced Cores",
                "3x Cortex-A510 (2.0 GHz) - Efficiency Cores"
            ],
            Memory: [
                { name: "RAM", msg: "8GB or 16GB (LPDDR5X)" },
                { name: "Storage", msg: "128GB or 256GB (UFS 4.0)" },
                { name: "ExpandableStorage", msg: "No expandable storage (no microSD card slot)" }
            ],
            Display: [
                { name: "Type", msg: "AMOLED, HDR10+, Dolby Vision" },
                { name: "Size", msg: "6.7 inches" },
                { name: "Resolution", msg: "3216 x 1440 pixels (QHD+, 525 ppi)" },
                { name: "Refresh Rate", msg: "Adaptive 120Hz (LTPO 3.0)" },
                { name: "Peak Brightness", msg: "1300 nits" },
                { name: "Protection", msg: "Corning Gorilla Glass Victus" },
                { name: "Support", msg: "Always-on display with customizations" }
            ],
            CameraSystem: [
                {
                    name: "Rear Cameras",
                    list: [
                        { name: "Main Camera", msg: "50 MP, f/1.8, 24mm (wide), OIS" },
                        { name: "Ultra-wide", msg: "48 MP, f/2.2, 115-degree FOV" },
                        { name: "Telephoto", msg: "32 MP, f/2.0, 2x optical zoom" }
                    ]
                },
                { name: "Front Camera", msg: "16 MP, f/2.4, Fixed Focus, HDR" }
            ],
            BatteryAndCharging: [
                { name: "Capacity", msg: "5000 mAh" },
                { name: "Wired Charging", msg: "100W SUPERVOOC (100% in ~25 minutes)" },
                { name: "Wireless Charging", msg: "Not supported" },
                { name: "USB", msg: "USB-C 2.0, supports Power Delivery" }
            ],
            BuildAndDesign: [
                { name: "Dimensions", msg: "163.1 x 74.1 x 8.5 mm" },
                { name: "Weight", msg: "205g" },
                { name: "Materials", msg: "Glass front and back (Gorilla Glass Victus), aluminum frame" },
                { name: "Water and Dust Resistance", msg: "IP64 (limited splash resistance)" }
            ],
            OperatingSystem: [
                { name: "OS", msg: "Android 13" },
                { name: "UI", msg: "OxygenOS 13" }
            ],
            Connectivity: [
                { name: "5G", msg: "Supported (sub-6 GHz and mmWave)" },
                { name: "Wi-Fi", msg: "Wi-Fi 6E" },
                { name: "Bluetooth", msg: "5.3" },
                { name: "GPS", msg: "Dual-band GPS, GLONASS, GALILEO, BDS" }
            ]
        }

    },
    {
        id: "5",
        name: "Xiaomi Mi 13",
        image: "/images/Mobiles/Mi 3.png",
        price: "55000",
        count: 0,
        description: "Xiaomi Mi 13 with high-quality build, powerful performance, and impressive camera setup.",
        moreInfo: "The Xiaomi 13 is a premium smartphone combining flagship performance, advanced camera technology, and a stylish design. It's built for users who seek high-quality features and seamless performance.",
        ProcessorAndPerformance: {
            Chipset: [
                "Qualcomm Snapdragon 8 Gen 2 (4nm)",
                "Designed for top-tier performance and enhanced power efficiency"
            ],
            CPU: [
                "1x Cortex-X3 (3.2 GHz) - Prime Core",
                "2x Cortex-A715 (2.8 GHz) - Performance Cores",
                "2x Cortex-A710 (2.8 GHz) - Balanced Cores",
                "3x Cortex-A510 (2.0 GHz) - Efficiency Cores"
            ],
            Memory: [
                { name: "RAM", msg: "8GB or 12GB (LPDDR5X)" },
                { name: "Storage", msg: "128GB, 256GB, or 512GB (UFS 4.0)" },
                { name: "ExpandableStorage", msg: "No expandable storage (no microSD card slot)" }
            ],
            Display: [
                { name: "Type", msg: "AMOLED, HDR10+, Dolby Vision" },
                { name: "Size", msg: "6.36 inches" },
                { name: "Resolution", msg: "2400 x 1080 pixels (FHD+, 414 ppi)" },
                { name: "Refresh Rate", msg: "120Hz" },
                { name: "Peak Brightness", msg: "1900 nits" },
                { name: "Protection", msg: "Corning Gorilla Glass Victus" },
                { name: "Support", msg: "Always-on display with MIUI customizations" }
            ],
            CameraSystem: [
                {
                    name: "Rear Cameras",
                    list: [
                        { name: "Main Camera", msg: "50 MP, f/1.8, 23mm (wide), OIS" },
                        { name: "Ultra-wide", msg: "12 MP, f/2.2, 15mm, 120-degree FOV" },
                        { name: "Telephoto", msg: "10 MP, f/2.0, 75mm, 3.2x optical zoom, OIS" }
                    ]
                },
                { name: "Front Camera", msg: "32 MP, f/2.0, HDR, Panorama" }
            ],
            BatteryAndCharging: [
                { name: "Capacity", msg: "4500 mAh" },
                { name: "Wired Charging", msg: "67W fast charging (100% in ~38 minutes)" },
                { name: "Wireless Charging", msg: "50W wireless charging (100% in ~48 minutes)" },
                { name: "Reverse Wireless Charging", msg: "10W" },
                { name: "USB", msg: "USB-C 2.0, supports Power Delivery 3.0" }
            ],
            BuildAndDesign: [
                { name: "Dimensions", msg: "152.8 x 71.5 x 7.98 mm" },
                { name: "Weight", msg: "189g" },
                { name: "Materials", msg: "Glass front and back (Gorilla Glass Victus), aluminum frame" },
                { name: "Water and Dust Resistance", msg: "IP68 certified (up to 1.5 meters for 30 minutes)" }
            ],
            OperatingSystem: [
                { name: "OS", msg: "Android 13" },
                { name: "UI", msg: "MIUI 14" }
            ],
            Connectivity: [
                { name: "5G", msg: "Supported (sub-6 GHz and mmWave)" },
                { name: "Wi-Fi", msg: "Wi-Fi 7 ready" },
                { name: "Bluetooth", msg: "5.3" },
                { name: "GPS", msg: "Dual-band GPS, GLONASS, BDS, GALILEO" }
            ]
        }

    },
    {
        id: "6",
        name: "Sony Xperia 5 IV",
        image: "/images/Mobiles/Sony 2.png",
        price: "80000",
        count: 0,
        description: "Sony Xperia 5 IV with cinema-quality camera and smooth 120Hz OLED display.",
        moreInfo: "The Sony Xperia 5 IV is a compact flagship smartphone designed for multimedia enthusiasts and professionals. It offers a cinematic display, advanced camera features, and robust performance in a sleek form factor.",
        ProcessorAndPerformance: {
            Chipset: [
                "Qualcomm Snapdragon 8 Gen 1 (4nm)",
                "Optimized for powerful performance and efficient multitasking"
            ],
            CPU: [
                "1x Cortex-X2 (3.0 GHz) - Prime Core",
                "3x Cortex-A710 (2.5 GHz) - Performance Cores",
                "4x Cortex-A510 (1.8 GHz) - Efficiency Cores"
            ],
            Memory: [
                { name: "RAM", msg: "8GB (LPDDR5)" },
                { name: "Storage", msg: "128GB or 256GB (UFS 3.1)" },
                { name: "ExpandableStorage", msg: "Supports microSDXC up to 1TB" }
            ],
            Display: [
                { name: "Type", msg: "OLED, HDR BT.2020" },
                { name: "Size", msg: "6.1 inches" },
                { name: "Resolution", msg: "2520 x 1080 pixels (FHD+, 449 ppi)" },
                { name: "Refresh Rate", msg: "120Hz" },
                { name: "Aspect Ratio", msg: "21:9 CinemaWide" },
                { name: "Protection", msg: "Corning Gorilla Glass Victus" },
                { name: "Support", msg: "Always-on display" }
            ],
            CameraSystem: [
                {
                    name: "Rear Cameras",
                    list: [
                        { name: "Wide Camera", msg: "12 MP, f/1.7, 24mm, OIS" },
                        { name: "Ultra-wide Camera", msg: "12 MP, f/2.2, 16mm, 120-degree FOV" },
                        { name: "Telephoto Camera", msg: "12 MP, f/2.4, 60mm, 2.5x optical zoom, OIS" }
                    ]
                },
                { name: "Front Camera", msg: "12 MP, f/2.0, 24mm, HDR" }
            ],
            BatteryAndCharging: [
                { name: "Capacity", msg: "5000 mAh" },
                { name: "Wired Charging", msg: "30W fast charging (50% in ~30 minutes)" },
                { name: "Wireless Charging", msg: "Supported (Qi-compatible)" },
                { name: "Reverse Wireless Charging", msg: "Supported" },
                { name: "USB", msg: "USB-C 3.1, supports Power Delivery" }
            ],
            BuildAndDesign: [
                { name: "Dimensions", msg: "156 x 67 x 8.2 mm" },
                { name: "Weight", msg: "172g" },
                { name: "Materials", msg: "Glass front and back (Gorilla Glass Victus), aluminum frame" },
                { name: "Water and Dust Resistance", msg: "IP68/IP65 certified (up to 1.5 meters for 30 minutes)" }
            ],
            OperatingSystem: [
                { name: "OS", msg: "Android 12, upgradable to Android 13" },
                { name: "UI", msg: "Minimal Sony UI with professional features" }
            ],
            Connectivity: [
                { name: "5G", msg: "Supported (sub-6 GHz)" },
                { name: "Wi-Fi", msg: "Wi-Fi 6" },
                { name: "Bluetooth", msg: "5.2" },
                { name: "GPS", msg: "Dual-band GPS, GLONASS, BDS, GALILEO" },
                { name: "Audio", msg: "3.5mm headphone jack, stereo speakers with Dolby Atmos" }
            ]
        }
    },
    {
        id: "7",
        name: "Huawei P50 Pro",
        image: "/images/Mobiles/Huawi.png",
        price: "85000",
        count: 0,
        description: "Huawei P50 Pro with Leica cameras and a powerful Kirin 9000 processor.",
        moreInfo: "The Huawei P50 Pro is a high-end smartphone with exceptional photography capabilities, powerful performance, and an elegant design. It caters to users who value advanced imaging technology and premium build quality.",
        ProcessorAndPerformance: {
            Chipset: [
                "Qualcomm Snapdragon 888 4G (5nm)",
                "Kirin 9000 (5nm) variant available in some regions",
                "Both variants offer flagship-level performance"
            ],
            CPU: [
                "1x Cortex-X1 (2.84 GHz) - Prime Core",
                "3x Cortex-A78 (2.42 GHz) - Performance Cores",
                "4x Cortex-A55 (1.80 GHz) - Efficiency Cores"
            ],
            Memory: [
                { name: "RAM", msg: "8GB or 12GB" },
                { name: "Storage", msg: "128GB, 256GB, or 512GB (UFS 3.1)" },
                { name: "ExpandableStorage", msg: "Supports Nano Memory (up to 256GB)" }
            ],
            Display: [
                { name: "Type", msg: "OLED, 1B colors, HDR10+" },
                { name: "Size", msg: "6.6 inches" },
                { name: "Resolution", msg: "2700 x 1228 pixels (FHD+, ~450 ppi)" },
                { name: "Refresh Rate", msg: "120Hz" },
                { name: "Touch Sampling Rate", msg: "300Hz" },
                { name: "Protection", msg: "Kunlun Glass (select models)" }
            ],
            CameraSystem: [
                {
                    name: "Rear Cameras",
                    list: [
                        { name: "Main Camera", msg: "50 MP, f/1.8, 23mm (wide), OIS" },
                        { name: "Monochrome Camera", msg: "40 MP, f/1.6, 26mm" },
                        { name: "Telephoto Camera", msg: "64 MP, f/3.5, 90mm, 3.5x optical zoom, OIS" },
                        { name: "Ultra-wide Camera", msg: "13 MP, f/2.2, 13mm, 120-degree FOV" }
                    ]
                },
                { name: "Front Camera", msg: "13 MP, f/2.4, 18mm (ultra-wide), HDR" }
            ],
            BatteryAndCharging: [
                { name: "Capacity", msg: "4360 mAh" },
                { name: "Wired Charging", msg: "66W fast charging (100% in ~40 minutes)" },
                { name: "Wireless Charging", msg: "50W fast wireless charging" },
                { name: "Reverse Wireless Charging", msg: "5W" },
                { name: "USB", msg: "USB-C 3.1, supports Power Delivery 3.0" }
            ],
            BuildAndDesign: [
                { name: "Dimensions", msg: "158.8 x 72.8 x 8.5 mm" },
                { name: "Weight", msg: "195g" },
                { name: "Materials", msg: "Glass front and back, aluminum frame" },
                { name: "Water and Dust Resistance", msg: "IP68 certified (up to 1.5 meters for 30 minutes)" }
            ],
            OperatingSystem: [
                { name: "OS", msg: "HarmonyOS 2.0 (China), EMUI 12 (Global, no Google services)" },
                { name: "UI", msg: "Intuitive interface with advanced multitasking features" }
            ],
            Connectivity: [
                { name: "5G", msg: "Not supported (4G only due to trade restrictions)" },
                { name: "Wi-Fi", msg: "Wi-Fi 6" },
                { name: "Bluetooth", msg: "5.2" },
                { name: "GPS", msg: "Dual-band GPS, GLONASS, BDS, GALILEO, QZSS, NavIC" }
            ]
        }
    },
    {
        id: "8",
        name: "Realme GT 3",
        images: ["/images/Mobiles/RealmeGT32.png", "/images/Mobiles/RealmeGT3.png"],
        image: "/images/Mobiles/RealmeGT32.png",
        price: "45000",
        count: 0,
        description: "Realme GT 3 with a high refresh rate screen and great battery life for gamers.",
        moreInfo: "The Realme GT 3 is a performance-oriented smartphone designed for speed and efficiency. It boasts high-end hardware, stunning display features, and ultra-fast charging, catering to gamers and tech enthusiasts.",
        ProcessorAndPerformance: {
            Chipset: [
                "Qualcomm Snapdragon 8+ Gen 1 (4nm)",
                "Optimized for high performance and power efficiency"
            ],
            CPU: [
                "1x Cortex-X2 (3.2 GHz) - Prime Core",
                "3x Cortex-A710 (2.75 GHz) - Performance Cores",
                "4x Cortex-A510 (2.0 GHz) - Efficiency Cores"
            ],
            Memory: [
                { name: "RAM", msg: "8GB, 12GB, or 16GB (LPDDR5)" },
                { name: "Storage", msg: "128GB, 256GB, 512GB, or 1TB (UFS 3.1)" },
                { name: "ExpandableStorage", msg: "No expandable storage" }
            ],
            Display: [
                { name: "Type", msg: "AMOLED, 1B colors, HDR10+" },
                { name: "Size", msg: "6.74 inches" },
                { name: "Resolution", msg: "2772 x 1240 pixels (FHD+)" },
                { name: "Refresh Rate", msg: "144Hz adaptive" },
                { name: "Touch Sampling Rate", msg: "1500Hz" },
                { name: "Peak Brightness", msg: "1400 nits" },
                { name: "Protection", msg: "Corning Gorilla Glass 5" }
            ],
            CameraSystem: [
                {
                    name: "Rear Cameras",
                    list: [
                        { name: "Main Camera", msg: "50 MP, f/1.9, 24mm (wide), OIS" },
                        { name: "Ultra-wide Camera", msg: "8 MP, f/2.2, 112-degree FOV" },
                        { name: "Macro Camera", msg: "2 MP, f/3.3, 4cm focus distance" }
                    ]
                },
                { name: "Front Camera", msg: "16 MP, f/2.5, wide angle" }
            ],
            BatteryAndCharging: [
                { name: "Capacity", msg: "4600 mAh" },
                { name: "Wired Charging", msg: "240W fast charging (0-100% in ~9 minutes)" },
                { name: "Wireless Charging", msg: "Not supported" },
                { name: "USB", msg: "USB-C 2.0, supports OTG" }
            ],
            BuildAndDesign: [
                { name: "Dimensions", msg: "163.9 x 75.8 x 8.9 mm" },
                { name: "Weight", msg: "199g" },
                { name: "Materials", msg: "Glass front, plastic frame, and glass back" },
                { name: "Special Features", msg: "RGB lighting on the rear panel" }
            ],
            OperatingSystem: [
                { name: "OS", msg: "Android 13" },
                { name: "UI", msg: "Realme UI 4.0" }
            ],
            Connectivity: [
                { name: "5G", msg: "Supported (SA/NSA)" },
                { name: "Wi-Fi", msg: "Wi-Fi 6" },
                { name: "Bluetooth", msg: "5.3" },
                { name: "GPS", msg: "Dual-band GPS, GLONASS, GALILEO, BDS, NavIC" }
            ]
        }

    },



]