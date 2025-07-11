import type {StaticImageData} from "next/image";
import multiSeedSourdough from "@/app/assets/multiseed-sourdough.jpg";
import brioche from "@/app/assets/brioche.jpeg";
import ciabatta from "@/app/assets/ciabatta.jpeg";
import muffins from "@/app/assets/muffins.jpg";
import tieredCake from "@/app/assets/tieredCake.png";
import specialtyCakes from "@/app/assets/specialty-cakes.png";
import milleCrepeCake from "@/app/assets/mille-crepe-cake.jpg";
import cheesecake from "@/app/assets/cheesecake.jpg";
import poundCake from "@/app/assets/pound-cake.jpg";
import bamboloni from "@/app/assets/bamboloni.jpg";
import choux from "@/app/assets/choux.jpg";
import tiramisu from "@/app/assets/tiramisu.jpg";
import galettes from "@/app/assets/galette.jpg";
import brownies from "@/app/assets/brownies.jpg";
import seasonal from "@/app/assets/lemon-basil.png";
import quicheImage from "@/app/assets/quiche.jpg";
import whiteSourdough from "@/app/assets/white-sourdough.jpg";
import wholeWheat from "@/app/assets/wholewheat.jpg";
import rye from "@/app/assets/rye.jpeg";
import artisan from "@/app/assets/artisan.jpeg";
import focaccia from "@/app/assets/focaccia.jpg";
import cornBread from "@/app/assets/corn-bread.jpg";
import jalapenoCornbread from "@/app/assets/jalapeno-corn-bread.png";
import garlicKnots from "@/app/assets/garlic-knots.jpg";
import parkerHouseRolls from "@/app/assets/parker-house-rolls.jpg";
import popovers from "@/app/assets/popovers.jpg";
import biscuits from "@/app/assets/buttermilk-biscuits.jpg";
import briocheBuns from "@/app/assets/brioche-buns.jpg";
import cinnamon from "@/app/assets/cinnamon.png";
import babka from "@/app/assets/babka.jpg";
import appleRaisinWalnut from "@/app/assets/apple-raisin-walnut.jpeg";
import cranberryPecan from "@/app/assets/cranberry-pecan.png";
import monkeyBread from "@/app/assets/monkey-bread.png";
import milkBread from "@/app/assets/milk-bread.png";


type Category = {
    id: string;
    name: string;
    image: StaticImageData;
    description: string;
    itemCount?: number;
    items: {
        id: string;
        itemName: string;
        itemDescription: string;
        itemImages: (StaticImageData | string)[];
    }[];
};

export const categories = [
    {
        id: 'artisan-sourdoughs',
        name: 'Artisan Sourdoughs',
        image: multiSeedSourdough,
        description: 'Using the best flours, grains and seeds.',
        itemCount: 8,
        items: [
            {
                id: 'sourdough',
                itemName: "White Sourdough",
                itemDescription: "A classic sourdough loaf with a crisp, golden crust and a light, tangy, airy crumb — perfect for sandwiches or as an everyday table bread. ",
                itemPrice: 3.50,
                itemImages: [whiteSourdough]
            },
            {
                id: 'WholeWheat',
                itemName: "Whole Wheat Sourdough",
                itemDescription: "A hearty whole wheat sourdough made with stone-ground Italian Primativa flour — rustic, nutty, and full of old-world character.",
                itemImages: [wholeWheat],
                itemPrice: 3.50
            },
            {
                id: 'artisanal',
                itemName: "Artisanal Loaf Sourdough",
                itemDescription: "A rustic country sourdough crafted from our unique blend of local, French, and Italian wheat, plus hints of barley for extra depth — hearty, aromatic, and naturally leavened.",
                itemPrice: 3.50,
                itemImages: [artisan]
            },
            {
                id: 'Rye',
                itemName: "100% Russian Rye Sourdough",
                itemDescription: "A dense, earthy rye loaf inspired by traditional Russian recipes — robust flavor with a deep, hearty crumb and a hint of sourness. Perfect for cheese boards, hearty soups, and sweet jams.",
                itemPrice: 3.50,
                itemImages: [rye]
            },
            {
                id: 'MultiSeedWholeGrain',
                itemName: "MultiSeed Whole Grain Sourdough",
                itemDescription: "A hearty sourdough loaf loaded with pumpkin seeds, sunflower seeds, flaxseed, nigella, sesame, and oatmeal multigrain. Crafted with a balanced blend of local, French, and Italian flours for deep flavor and a satisfying crunch.",
                itemPrice: 3.50,
                itemImages: [multiSeedSourdough]
            }]
    },
    {
        "id": "rustic-breads",
        "name": "Rustic & Dinner Breads",
        image: ciabatta,
        "description": "Table breads and classic sides for every meal.",
        "itemCount": 10,
        "items": [
            {
                "id": "ciabatta",
                "itemName": "Ciabatta",
                "itemDescription": "Italian rustic bread with an airy crumb and crisp crust — perfect for sandwiches.",
                itemPrice: 3.50,
                itemImages: [ciabatta]
            },
            {
                "id": "focaccia",
                "itemName": "Focaccia",
                "itemDescription": "A fluffy, olive oil-rich Italian flatbread brushed with olive oil, sea salt, and fresh herbs. From the classic to a wide selection of toppings.",
                itemPrice: 3.50,
                itemImages: [focaccia],
                "details": [
                    {
                        "id": "classic-focaccia",
                        "name": "Classic",
                        "description": "Plain focaccia drizzled with olive oil, sprinkled with sea salt, and topped with fresh herbs.",
                        "price": 3.50,
                        "images": [focaccia]
                    },
                    {
                        "id": "tomato-basil-feta",
                        "name": "Tomato, Basil & Feta",
                        "description": "Focaccia topped with juicy tomatoes, fragrant basil leaves, and creamy crumbled feta.",
                        "price": 3.50,
                        "images": [focaccia]
                    },
                    {
                        "id": "garlic-olive",
                        "name": "Garlic & Olive",
                        "description": "Focaccia with slow-roasted garlic confit and a mix of black and green olives.",
                        "price": 3.50,
                        "images": [focaccia]
                    },
                    {
                        "id": "sausage-cheddar",
                        "name": "Sausage & Cheddar",
                        "description": "Savory focaccia loaded with spiced sausage and melted sharp cheddar cheese.",
                        "price": 3.50,
                        "images": [focaccia]
                    },
                    {
                        "id": "mushroom-goat-cheese",
                        "name": "Mushroom & Goat Cheese",
                        "description": "Rustic focaccia topped with caramelized onions, sautéed mushrooms, and tangy goat cheese.",
                        "price": 3.50,
                        "images": [focaccia]
                    }
                ]
            },
            {
                "id": "brioche-buns",
                "itemName": "Brioche Buns",
                "itemDescription": "Buttery, fluffy buns for gourmet burgers or breakfast sandwiches.",
                itemPrice: 3.50,
                itemImages: [briocheBuns]
            },
            {
                "id": "buttermilk-biscuits",
                "itemName": "Buttermilk Biscuits",
                "itemDescription": "Southern-style biscuits, flaky and rich — a comfort classic.",
                itemPrice: 3.50,
                itemImages: [biscuits]
            },
            {
                "id": "popovers",
                "itemName": "Popovers",
                "itemDescription": "Light, airy rolls with a crisp shell — best served warm with butter.",
                itemPrice: 3.50,
                itemImages: [popovers]
            },
            {
                "id": "parker-house-rolls",
                "itemName": "Parker House Rolls",
                "itemDescription": "Soft, folded dinner rolls brushed with butter — a timeless table favorite.",
                itemPrice: 3.50,
                itemImages: [parkerHouseRolls]
            },
            {
                "id": "garlic-knots",
                "itemName": "Garlic Knots",
                "itemDescription": "Soft, chewy knots brushed with garlic butter and fresh herbs.",
                itemPrice: 3.50,
                itemImages: [garlicKnots]
            },
            {
                "id": "classic-cornbread",
                "itemName": "Classic Cornbread",
                "itemDescription": "Moist, buttery cornbread with a golden crust — a perfect side for any meal.",
                itemPrice: 3.50,
                itemImages: [cornBread]
            },
            {
                "id": "jalapeno-cheddar-cornbread",
                "itemName": "Jalapeño Cheddar Cornbread",
                "itemDescription": "Savory cornbread packed with sharp cheddar cheese and a mild jalapeño kick.",
                itemPrice: 3.50,
                itemImages: [jalapenoCornbread]
            },
        ]
    },
    {
        id: 'sweet-bread',
        name: 'Brioche and Sweet Breads',
        image: brioche,
        description: 'Classic, spiced or filled with irresistible inclusions.',
        itemCount: 5,
        items: [
            {
                id: 'brioche',
                itemName: "Classic Brioche",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            },
            {
                id: 'cinnamon',
                itemName: "Cinnamon Roll Bread",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [cinnamon]
            },
            {
                id: 'babka',
                itemName: "Chocolate Babka",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [babka]
            },
            {
                id: 'milk-bread',
                itemName: "Milk Bread",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [milkBread]
            },
            {
                id: 'apple-raisin',
                itemName: "Apple Raisin Walnut Brioche",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [appleRaisinWalnut]
            },
            {
                id: 'cranberry',
                itemName: "Cranberry Pecan Babka",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [cranberryPecan]
            },
            {
                id: 'monkey-bread',
                itemName: "Pull-apart Monkey Bread",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [monkeyBread]
            }]
    },
    {
        "id": "breakfast-pastries",
        "name": "Breakfast Pastries & Muffins",
        "description": "Fresh baked morning treats, perfect with coffee or tea.",
        image: muffins,
        "items": [
            {
                "id": "kouign-amann",
                "itemName": "Kouign-amann",
                "itemDescription": "The classic. Crispy flaky and caramelized layers of buttery pastry.",
                itemPrice: 2.50,
                itemImages: [brioche]
            },
            {
                "id": "chocolate-kouign-amann",
                "itemName": "Chocolate Ganache filled Kouign-amann",
                "itemDescription": "With chocolate ganache filling.",
                itemPrice: 2.50,
                itemImages: [brioche]
            },    {
                "id": "kouign-amann",
                "itemName": "Almond frangipane filled Kouign-amann",
                "itemDescription": "With almond frangipane filling..",
                itemPrice: 2.50,
                itemImages: [brioche]
            },
            {
                "id": "blueberry-muffin",
                "itemName": "Blueberry Muffin",
                "itemDescription": "Fluffy muffin loaded with juicy blueberries.",
                itemPrice: 2.50,
                itemImages: [brioche]
            },
            {
                "id": "banana-nut-muffin",
                "itemName": "Banana Nut Muffin",
                "itemDescription": "Moist muffin packed with ripe bananas and crunchy walnuts.",
                itemPrice: 2.50,
                itemImages: [brioche]
            },
            {
                "id": "cranberry-scone",
                "itemName": "Cranberry Orange Scone",
                "itemDescription": "Buttery scone with tart cranberries and a hint of orange zest.",
                itemPrice: 2.50,
                itemImages: [brioche]
            },
            {
                "id": "classic-scone",
                "itemName": "Classic English Scone",
                "itemDescription": "Tender, buttery scone, perfect with jam and cream.",
                itemPrice: 2.50,
                itemImages: [brioche]
            },
            {
                "id": "coffee-cake",
                "itemName": "Cinnamon Coffee Cake",
                "itemDescription": "Soft crumb cake swirled with cinnamon sugar.",
                itemPrice: 2.50,
                itemImages: [brioche]
            }
        ]
    },
    {
        "id": "tiered-cakes",
        "name": "Tiered Cakes & Cupcakes",
        image: tieredCake,
        "description": "Layered, tailored and unforgettable.",
        "itemCount": 7,
        "details": {
            "sizes": ["2-tier", "3-tier", "4-tier"],
            "diameters": ["6 inch", "8 inch", "10 inch"],
            "frostings": [
                "Vanilla Bean Butter Cream",
                "French Buttercream",
                "German Butter Cream",
                "Cream Cheese Frosting",
                "Chocolate Butter Cream",
                "Salted Caramel Butter Cream",
                "Lemon Butter Cream",
                "Raspberry Butter Cream",
                "Strawberry Butter Cream",
                "Blueberry Butter Cream",
                "Lavender Butter Cream",
                "Coffee Butter Cream",
                "Earl Grey Butter Cream",
                "Peanut Butter Butter Cream",
                "Toasted Meringue",
                "Whipped Marshmallow",
                "Whipped Cream",
                "Chocolate Ganache",
            ],
            "fillings and toppings": [
                "Vanilla Bean Custard",
                "Strawberry",
                "Raspberry",
                "Blueberry",
                "Caramel",
                "Chocolate",
                "Banana Mousse",
                "Lemon Curd",
                "Coffee Cream",
                "Oreo",
                "Lotus",
                "Passion Fruit",
                "Mango",
                "Peach",
                "Toasted Coconut",
                "Pineapple",
                "Peach",
                "Banana",
                "Peanut Butter",
            ]
        },
        "cupcakeQuantityOptions": [
            { "quantity": 4, "priceJOD": 15 },
            { "quantity": 6, "priceJOD": 20 },
            { "quantity": 8, "priceJOD": 25 },
            { "quantity": 10, "priceJOD": 30 },
            { "quantity": 12, "priceJOD": 35 },
            { "quantity": 24, "priceJOD": 65 }
        ],
        "items": [
            {
                "id": "white-confetti-cake",
                "itemName": "White Confetti Cake",
                "itemDescription": "Classic white cake layered with colorful confetti sprinkles and frosted with silky French buttercream.",
                itemImages: [brioche]
            },
            {
                "id": "chocolate-cake",
                "itemName": "Chocolate Cake",
                "itemDescription": "Rich, moist chocolate cake filled and frosted with decadent chocolate French buttercream.",
                "itemImages": [brioche]
            },
            {
                "id": "germans-chocolate-cake",
                "itemName": "German's Chocolate Cake",
                "itemDescription": "Classic German's chocolate cake layered with coconut-pecan filling and chocolate frosting.",
                itemImages: [brioche]
            },
            {
                "id": "coconut-cake",
                "itemName": "Coconut Cake",
                "itemDescription": "Soft coconut cake layered with German buttercream and finished with toasted coconut flakes.",
                "itemImages": [brioche]
            },
            {
                "id": "black-forest-cake",
                "itemName": "Black Forest Cake",
                "itemDescription": "Decadent chocolate sponge layered with fresh cherries, whipped cream, and dark chocolate shavings.",
                itemImages: [brioche]
            },
            {
                "id": "banana-nut-cake",
                "itemName": "Banana Nut Cake",
                "itemDescription": "Moist banana cake studded with nuts and layered with salted caramel filling and frosting.",
                itemImages: [brioche]
            },
            {
                "id": "carrot-pecan-cake",
                "itemName": "Classic Carrot Pecan Cake",
                "itemDescription": "Tender spiced carrot cake with crunchy pecans, filled and frosted with luscious cream cheese frosting.",
                itemImages: [brioche]
            }
        ]
    },
    {
        "id": "specialty-cakes",
        "name": "Specialty Cakes",
        image: specialtyCakes,
        "description": "Signature cakes with unique flavor combinations.",
        "itemCount": 3,
        "items": [
            {
                "id": "king-chocolate-cake",
                "itemName": "King Chocolate Cake",
                "itemDescription": "Rich chocolate mousse cake layered with cream puffs for a decadent bite.",
                itemPrice: 25.00,
                itemImages: [brioche]
            },
            {
                "id": "mikes-lemonade",
                "itemName": "Mike's Lemonade",
                "itemDescription": "Moist olive oil cake with zesty lemon curd, mascarpone frosting, and lemon basil sugar.",
                itemPrice: 25.00,
                itemImages: [brioche]
            },
            {
                "id": "tias-chocolate-lotus",
                "itemName": "Tia's Chocolate Lotus Cake",
                "itemDescription": "Indulgent chocolate cake with layers of chocolate French buttercream and Lotus French buttercream.",
                itemPrice: 25.00,
                itemImages: [brioche]
            }
        ]
    },
    {
        "id": "mille-crepe-cakes",
        "name": "Mille Crêpe Cakes",
        image: milleCrepeCake,
        "description": 'Light, layered crêpe cakes filled with luscious creams.',
        "itemCount": 6,
        "details": {
            "availableSizes": [
                "8 inch",
                "20 layers",
                "30 layers"
            ]
        },
        "items": [
            {
                "id": "tiramisu-crepe",
                "itemName": "Tiramisu Mille Crêpe",
                "itemDescription": "Classic tiramisu flavors layered with coffee-soaked crêpes and mascarpone cream.",
                itemPrice: [
                    {
                        "size": "20 layers",
                        "priceJOD": 30
                    },
                    {
                        "size": "30 layers",
                        "priceJOD": 40
                    }
                ],
                itemImages: [brioche]
            },
            {
                "id": "matcha-crepe",
                "itemName": "Matcha Mille Crêpe",
                "itemDescription": "Earthy matcha cream layered between delicate green tea crêpes.",
                itemPrice: [
                    {
                        "size": "20 layers",
                        "priceJOD": 30
                    },
                    {
                        "size": "30 layers",
                        "priceJOD": 40
                    }
                ],
                itemImages: [brioche]
            },
            {
                "id": "creme-brulee-crepe",
                "itemName": "Crème Brûlée Mille Crêpe",
                "itemDescription": "Silky vanilla custard layers with a crisp brûléed top.",
                itemPrice: [
                    {
                        "size": "20 layers",
                        "priceJOD": 30
                    },
                    {
                        "size": "30 layers",
                        "priceJOD": 40
                    }
                ],
                itemImages: [brioche]
            },
            {
                "id": "milk-tea-crepe",
                "itemName": "Milk Tea Mille Crêpe",
                "itemDescription": "Smooth milk tea pastry cream layered with delicate crêpes.",
                itemPrice: [
                    {
                        "size": "20 layers",
                        "priceJOD": 30
                    },
                    {
                        "size": "30 layers",
                        "priceJOD": 40
                    }
                ],
                itemImages: [brioche]
            },
            {
                "id": "chocolate-mocha-crepe",
                "itemName": "Chocolate Mocha Mille Crêpe",
                "itemDescription": "Rich chocolate and mocha cream layers for a decadent bite.",
                itemPrice: [
                    {
                        "size": "20 layers",
                        "priceJOD": 35
                    },
                    {
                        "size": "30 layers",
                        "priceJOD": 45
                    }
                ],
                itemImages: [brioche]
            },
            {
                "id": "matcha-pistachio-crepe",
                "itemName": "Matcha Pistachio Mille Crêpe",
                "itemDescription": "A twist on our matcha cake, layered with nutty pistachio cream.",
                itemPrice: [
                    {
                        "size": "20 layers",
                        "priceJOD": 35
                    },
                    {
                        "size": "30 layers",
                        "priceJOD": 45
                    }
                ],
                itemImages: [brioche]
            }
        ]
    },
    {
        "id": "cheesecake",
        "name": "Cheesecake",
        image: cheesecake,
        "description": "Classic NY, no-bake, burnt Basque, Italian ricotta, airy Japanese, and a savory goat cheese.",
        "itemCount": 7,
        "details": {
            "availableSize": "9 inch (serves 10–12)",
            "extraCharges": [
                {
                    "option": "Chocolate Cheesecake",
                    "additionalPriceJOD": 5
                }
            ],
            "toppings": [
                "Strawberry Compote",
                "Blueberry Compote",
                "Raspberry Compote",
                "Salted Caramel",
                "Chocolate Sauce",
                "Seasonal Fruit Compote",
                "Dulce De Leche",
                "Other specials"
            ],
            "crustOptions": [
                "Graham Cracker Crust",
                "Digestive Biscuit Crust",
                "Pastry Crust",
                "Cookie Crust (Oreo, Gingersnap, Biscoff, Chocolate)",
                "Sponge Base"
            ]
        },
        "items": [
            {
                "id": "baked-cheesecake",
                "itemName": "Baked Cheesecake",
                "itemDescription": "Classic rich baked cheesecake with your choice of topping.",
                itemPrice: 40,
                "itemImages": [brioche]
            },
            {
                "id": "no-bake-cheesecake",
                "itemName": "No-Bake Cheesecake",
                "itemDescription": "Creamy, smooth no-bake cheesecake served chilled with your favorite topping.",
                itemPrice: 35,
                "itemImages": [brioche]
            },
            {
                "id": "burnt-basque-cheesecake",
                "itemName": "Burnt Basque Cheesecake",
                "itemDescription": "Rustic, caramelized Basque-style cheesecake with a creamy center and charred top.",
                itemPrice: 45,
                "itemImages": [
                    "burnt-basque-cheesecake-1.jpg",
                    "burnt-basque-cheesecake-2.jpg"
                ]
            },
            {
                "id": "ricotta-cheesecake",
                "itemName": "Ricotta Cheesecake",
                "itemDescription": "Light, fluffy Italian-style cheesecake made with creamy ricotta and a touch of citrus zest.",
                itemPrice: 40,
                "itemImages": [brioche]
            },
            {
                "id": "japanese-souffle-cheesecake",
                "itemName": "Japanese Soufflé Cheesecake",
                "itemDescription": "Incredibly light, airy, and jiggly cheesecake with a delicate sweetness.",
                itemPrice: 40,
                "itemImages": [brioche]
            },
            {
                "id": "swirled-cheesecake",
                "itemName": "Swirled Cheesecake",
                "itemDescription": "Classic baked cheesecake swirled with rich chocolate ganache or fruit puree for a beautiful marble effect.",
                itemPrice: 40,
                "itemImages": [brioche]
            },
            {
                "id": "savory-goat-cheesecake",
                "itemName": "Savory Goat Cheese Cheesecake",
                "itemDescription": "A creamy, tangy goat cheese cheesecake with a herbed pastry crust — perfect as an elegant appetizer or unique brunch item.",
                itemPrice: 42,
                "itemImages": [brioche]
            }
        ]
    },
    {
        "id": "pound-cakes",
        "name": "Pound, Bundt & Coffee Cakes",
        image: poundCake,
        "description": 'Buttery, moist and tender, classic and beyond.',
        "details": {
            "availableSizes": [
                "Medium Bundt Cake (serves 6–8)",
                "Full Bundt Cake (serves 12–16)"
            ]
        },
        "items": [
            {
                "id": "sour-cream-pound",
                "itemName": "Sour Cream Pound Cake",
                "itemDescription": "Classic buttery pound cake made extra moist with tangy sour cream.",
                itemPrice: [
                    {
                        "size": "Medium",
                        "priceJOD": 18
                    },
                    {
                        "size": "Large",
                        "priceJOD": 25
                    }
                ],
                itemImages: [brioche]
            },
            {
                "id": "napolitano-marble",
                "itemName": "Vanilla Chocolate & Raspberry Napolitano Marble Cake",
                "itemDescription": "Beautifully marbled pound cake with layers of vanilla, chocolate, and raspberry.",
                itemPrice: [
                    {
                        "size": "Medium",
                        "priceJOD": 35
                    },
                    {
                        "size": "Large",
                        "priceJOD": 45
                    }
                ],
                itemImages: [brioche]
            },
            {
                "id": "lemon-pound",
                "itemName": "Lemon Pound Cake with Lemon Curd",
                "itemDescription": "Bright, zesty pound cake layered with tangy house-made lemon curd.",
                itemPrice: [
                    {
                        "size": "Medium",
                        "priceJOD": 25
                    },
                    {
                        "size": "Large",
                        "priceJOD": 35
                    }
                ],
                itemImages: [brioche]
            },
            {
                "id": "spiced-coffee-cake",
                "itemName": "Spiced Coffee Cake with Streusel Topping",
                "itemDescription": "Tender coffee cake warmly spiced with cinnamon and topped with buttery streusel.",
                itemPrice: [
                    {
                        "size": "Medium",
                        "priceJOD": 25
                    },
                    {
                        "size": "Large",
                        "priceJOD": 35
                    }
                ],
                itemImages: [brioche]
            },
            {
                "id": "red-velvet-pound",
                "itemName": "Red Velvet & White Chocolate Chip with Cream Cheese Frosting",
                "itemDescription": "Moist red velvet pound cake studded with white chocolate chips and topped with smooth cream cheese frosting.",
                itemPrice: [
                    {
                        "size": "Medium",
                        "priceJOD": 25
                    },
                    {
                        "size": "Large",
                        "priceJOD": 35
                    }
                ],
                "itemImages": [brioche]
            },
            {
                "id": "ultimate-chocolate-bundt",
                "itemName": "Ultimate Chocolate Triple Layer Bundt Cake",
                "itemDescription": "Decadent chocolate bundt cake with rich layers and glossy chocolate glaze.",
                itemPrice: [
                    {
                        "size": "Medium",
                        "priceJOD": 28
                    },
                    {
                        "size": "Large",
                        "priceJOD": 35
                    }
                ],
                "itemImages": [brioche]
            }
        ]
    },
    {
        "id": "bamboloni",
        "name": "Bamboloni",
        image: bamboloni,
        "description": 'Italian-style filled doughnuts — soft, fluffy, irresistible.',
        "itemCount": 7,
        "details": {
            "quantityOptions": [
                {
                    "quantity": 6,
                    "priceJOD": 18
                },
                {
                    "quantity": 8,
                    "priceJOD": 24
                },
                {
                    "quantity": 10,
                    "priceJOD": 30
                },
                {
                    "quantity": 12,
                    "priceJOD": 35
                }
            ]
        },
        "items": [
            {
                "id": "creme-brulee-bamboloni",
                "itemName": "Crème Brûlée",
                "itemDescription": "Filled with rich French pastry cream and topped with a burnt sugar crunch.",
                itemImages: [brioche]
            },
            {
                "id": "chocolate-bamboloni",
                "itemName": "Chocolate",
                "itemDescription": "Filled with silky chocolate pastry cream and coated with cocoa powder and sugar.",
                itemImages: [brioche]
            },
            {
                "id": "cafe-latte-bamboloni",
                "itemName": "Café Latte",
                "itemDescription": "Soft doughnut filled with smooth coffee cream for a perfect morning bite.",
                itemImages: [brioche]
            },
            {
                "id": "mexicano-bamboloni",
                "itemName": "Mexicano",
                "itemDescription": "Filled with creamy dulce de leche and coated in cinnamon sugar.",
                itemImages: [brioche]
            },
            {
                "id": "thai-dream-bamboloni",
                "itemName": "Thai Dream",
                "itemDescription": "Tropical coconut cream and mango mousse filling, finished with toasted coconut.",
                itemImages: [brioche]
            },
            {
                "id": "strawberry-bamboloni",
                "itemName": "Strawberry",
                "itemDescription": "Classic strawberry jam and pastry cream filling for a sweet, fresh bite.",
                itemImages: [brioche]
            },
            {
                "id": "lemon-bamboloni",
                "itemName": "Lemon",
                "itemDescription": "Bright lemon curd filling topped with toasted marshmallow for a zesty twist.",
                itemImages: [brioche]
            }
        ]
    },
    {
        "id": "choux-au-craquelin",
        "name": "Choux au Craquelin",
        image: choux,
        "description": 'Delicate cream puffs with crisp craquelin tops.',
        "itemCount": 8,
        "details": {
            "quantityOptions": [
                { "quantity": 6, "priceJOD": 18 },
                { "quantity": 8, "priceJOD": 24 },
                { "quantity": 10, "priceJOD": 30 },
                { "quantity": 12, "priceJOD": 35 }
            ]
        },
        "items": [
            {
                "id": "heavenly-vanilla-bean-diplomat",
                "itemName": "Heavenly Vanilla Bean Diplomat",
                "itemDescription": "Silky vanilla bean pastry cream lightened with chantilly in a classic golden shell.",
                itemImages: [brioche]
            },
            {
                "id": "chocolate-cremeux",
                "itemName": "Chocolate Crémeux",
                "itemDescription": "Filled with rich dark chocolate crémeux and topped with cocoa craquelin.",
                itemImages: [brioche]
            },
            {
                "id": "strawberry-mousse",
                "itemName": "Strawberry Mousse",
                "itemDescription": "Light strawberry mousse center with a hint of vanilla.",
                itemImages: [brioche]
            },
            {
                "id": "cinnamon-churro",
                "itemName": "Cinnamon Churro",
                "itemDescription": "Cinnamon-infused cream and a brown sugar craquelin shell rolled in cinnamon sugar.",
                itemImages: [brioche]
            },
            {
                "id": "lemon-mousse",
                "itemName": "Lemon Mousse",
                "itemDescription": "Zesty lemon mousse with candied lemon.",
                itemImages: [brioche]
            },
            {
                "id": "mocha-latte",
                "itemName": "Mocha Latte",
                "itemDescription": "Espresso cream with a dark chocolate glaze and a touch of sea salt.",
                itemImages: [brioche]
            },
            {
                "id": "coconut-cream",
                "itemName": "Coconut Cream",
                "itemDescription": "Filled with coconut cream and rolled in toasted coconut flakes.",
                itemImages: [brioche]
            },
            {
                "id": "arabesque",
                "itemName": "Arabesque",
                "itemDescription": "Delicate rose water cream with pistachio crunch and rose petal garnish.",
                itemImages: [brioche]
            }
        ]
    },
    {
        "id": "tiramisu",
        "name": "Tiramisu",
        image: tiramisu,
        "description": 'Classic and seasonal with a modern twist.',
        "itemCount": 7,
        "details": {
            "serves": "8–10 people",
            "quantityOptions": [
                { "size": "Standard", "serves": "8–10", "priceRangeJOD": "25–30" }
            ]
        },
        "items": [
            {
                "id": "original-tiramisu",
                "itemName": "Original Tiramisu",
                "itemDescription": "Classic Italian recipe with espresso-soaked sponge, mascarpone cream, and a hint of vanilla.",
                itemPrice: 25,
                itemImages: [brioche]
            },
            {
                "id": "marsala-zabayone-tiramisu",
                "itemName": "Marsala Wine Zabayone",
                "itemDescription": "A refined twist featuring Marsala zabayone folded into silky mascarpone and layered with espresso-dipped ladyfingers.",
                itemPrice: 30,
                itemImages: [brioche]
            },
            {
                "id": "strawberry-almond-tiramisu",
                "itemName": "Strawberry Almond",
                "itemDescription": "Strawberry-soaked ladyfingers layered with almond mascarpone cream and fresh strawberry compote.",
                itemPrice: 30,
                itemImages: [brioche]
            },
            {
                "id": "pistachio-matcha-tiramisu",
                "itemName": "Pistachio Matcha",
                "itemDescription": "Toasted pistachio cream and earthy matcha mascarpone, layered with coffee-kissed sponge.",
                itemPrice: 30,
                itemImages: [brioche]
            },
            {
                "id": "coconut-mango-tiramisu",
                "itemName": "Coconut Mango",
                "itemDescription": "Tropical fusion of coconut mascarpone and golden mango preserves layered with espresso sponge.",
                itemPrice: 30,
                itemImages: [brioche]
            },
            {
                "id": "milk-tea-tiramisu",
                "itemName": "Milk Tea",
                "itemDescription": "Earl Grey–infused mascarpone cream and milk tea glaze layered with coffee-soaked sponge.",
                itemPrice: 25,
                itemImages: [brioche]
            },
            {
                "id": "lemon-mascarpone-tiramisu",
                "itemName": "Lemon Mascarpone",
                "itemDescription": "Lemon-zest mascarpone layered with sponge and topped with glossy lemon curd.",
                itemPrice: 30,
                itemImages: [brioche]
            }
        ]
    },
    {
        "id": "pies-cobblers-galettes",
        name: "pies Cobblers & Galettes",
        "image": galettes,
        "description": 'Rustic, seasonal fruit pies and hand-crafted pastries.',
        "itemCount": 8,
        "details": {
            "sizes": [
                {
                    "type": "Medium",
                    "serves": "8–12",
                    "priceRangeJOD": "20–25"
                },
                {
                    "type": "Large",
                    "serves": "12–20",
                    "priceRangeJOD": "30–35"
                },
                {
                    "type": "Standard Pie",
                    "size": "8 inch",
                    "serves": "8–10"
                }
            ]
        },
        "items": [
            {
                "id": "rustic-seasonal-galette",
                "itemName": "Rustic Seasonal Galette",
                "itemDescription": "Free-form tart with seasonal options like cinnamon apples, grilled peaches with burrata, or stone fruits.",
                itemPrice: { "medium": 20, "large": 30 },
                itemImages: [brioche],
            },
            {
                "id": "berry-cobbler",
                "itemName": "Berry Cobbler",
                "itemDescription": "Mixed seasonal berries baked with vanilla biscuit topping.",
                itemPrice: { "medium": 25, "large": 35 },
                itemImages: [brioche],
            },
            {
                "id": "pecan-pie",
                "itemName": "Pecan Pie",
                "itemDescription": "Toasted pecans in a rich brown sugar custard with flaky pie crust.",
                itemPrice: 25,
                itemImages: [brioche],
            },
            {
                "id": "pumpkin-pie",
                "itemName": "Pumpkin Pie",
                "itemDescription": "Pumpkin in a rich butternut custard with flaky pie crust.",
                itemPrice: 25,
                itemImages: [brioche],
            },
            {
                "id": "chocolate-cream-pie",
                "itemName": "Chocolate Cream Pie",
                "itemDescription": "Rich chocolate custard in a flaky pie crust with whipped cream and chocolate shavings.",
                itemPrice: 25,
                itemImages: [brioche],
            },
            {
                "id": "apple-pie",
                "itemName": "Apple Pie",
                "itemDescription": "Classic apple pie with flaky crust and spiced apple filling.",
                itemPrice: 20,
                itemImages: [brioche],
            },
            {
                "id": "banoffee-pie",
                "itemName": "Banoffee Pie",
                "itemDescription": "Banana, chocolate, toffee, and whipped cream in a graham cracker crust.",
                itemPrice: 25,
                itemImages: [brioche],
            },
            {
                "id": "lemon-meringue-pie",
                "itemName": "Lemon Meringue Pie",
                "itemDescription": "Tart and creamy lemon custard in a flaky pie crust with toasted meringue.",
                itemPrice: 20,
                itemImages: [brioche],
            },
            {
                "id": "peach-cobbler",
                "itemName": "Peach Cobbler",
                "itemDescription": "Fresh peaches baked with vanilla biscuit topping.",
                itemPrice: { "medium": 20, "large": 30 },
                itemImages: [brioche],
            }
        ]
    },
    {
        "id": "cookies-bars-brownies",
        "name": "Cookies, Bars & Brownies",
        image: brownies,
        "description": 'Classic and creative sweet bites for any occasion.',
        "itemCount": 18,
        "details": {
            "quantityOptions": {
                "cookies": [
                    { "quantity": 6, "priceJOD": 18 },
                    { "quantity": 8, "priceJOD": 24 },
                    { "quantity": 10, "priceJOD": 30 },
                    { "quantity": 12, "priceJOD": 35 }
                ],
                "barsBrownies": [
                    { "quantity": 6, "priceJOD": 20 },
                    { "quantity": 8, "priceJOD": 32 },
                    { "quantity": 10, "priceJOD": 38 },
                    { "quantity": 12, "priceJOD": 40 }
                ]
            }
        },
        "items": [
            {
                "id": "best-chocolate-chip",
                "itemName": "Best Chocolate Chip Cookie",
                "itemDescription": "Brown butter cookie with a mix of fine chocolates and a sprinkle of sea salt for balance.",
                itemImages: [brioche]
            },
            {
                "id": "dark-chocolate-peanut-butter-chip",
                "itemName": "Dark Chocolate Peanut Butter Chip",
                "itemDescription": "Decadent dark chocolate cookie with peanut butter chips.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "oatmeal-raisin",
                "itemName": "Oatmeal Raisin",
                "itemDescription": "Classic chewy cookie with plump black and golden raisins.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "lemon-drop",
                "itemName": "Lemon Drop",
                "itemDescription": "Zesty lemon cookie with white chocolate chips.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "samoa-cookie",
                "itemName": "Samoa Cookie",
                "itemDescription": "Inspired by the Girl Scout classic: chocolate, gooey caramel, and toasted coconut over shortbread.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "stamped-sugar-cookies",
                "itemName": "Stamped Sugar Cookies",
                "itemDescription": "Classic buttery and nutty sugar cookies, hand-stamped for an artisanal touch. Flavors include: Almond Honey, Espresso Chocolate, Lemon Zest, Chai Spice, Orange Cardamom.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "ginger-cookies",
                "itemName": "Ginger Cookies",
                "itemDescription": "Classic ginger spice cookies with molasses and a crackly sugar crust.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "red-velvet-macadamia",
                "itemName": "Red Velvet Macadamia",
                "itemDescription": "Chewy, crunchy red velvet cookie with macadamia nuts and chocolate chips.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "gf-chocolate-chip",
                "itemName": "GF Chocolate Chip",
                "itemDescription": "Gluten-free version of our classic chocolate chip cookie.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "limoncello-cheesecake-bars",
                "itemName": "Limoncello Cheesecake Bars",
                "itemDescription": "Citrusy, creamy cheesecake bars with a fresh zest.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "strawberry-crumble-bar",
                "itemName": "Strawberry Crumble",
                "itemDescription": "Soft, chewy bar with strawberry filling and crunchy streusel topping.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "millionaire-shortbread",
                "itemName": "Millionaire Shortbread",
                "itemDescription": "Classic buttery shortbread with caramel center and chocolate frosting.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "brownie-tahini-swirls",
                "itemName": "Brownie with Tahini Swirls",
                "itemDescription": "Rich brownie with tahini swirls and halva bits.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "rich-brownies",
                "itemName": "Rich as F@#$ Brownies",
                "itemDescription": "Ultra-rich brownies with all Valrhona chocolate chips and dulce de leche.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "the-decadent-blondie",
                "itemName": "The Decadent Blondie",
                "itemDescription": "Buttery blondie bar with toasted walnuts and white chocolate chips.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "matcha-brownies",
                "itemName": "Matcha Brownies",
                "itemDescription": "Earthy matcha brownies with pistachios.",
                itemImages: [brioche],
                itemPrice: 3.99
            },
            {
                "id": "red-velvet-cream-cheese-brownies",
                "itemName": "Red Velvet & Cream Cheese Brownies",
                "itemDescription": "Light chocolate brownies with a swirl of tangy cream cheese.",
                itemImages: [brioche],
                itemPrice: 3.99
            }
        ]
    },
    {
        id: 'seasonal-treats',
        name: 'Seasonal Treats',
        image: seasonal,
        description: 'Inspired by the freshest seasonal ingredients.',
        itemCount: 4,
        items: [],
        itemPrice: 3.99
    },
    {
        id: "brunch",
        name: "Brunch & Savory",
        image: quicheImage,
        description: "Delicious brunch and savory treats for leisurely mornings.",
        itemCount: 7,
        items: [
            {
                id: "scones",
                itemName: "Classic Scones",
                itemDescription: "Flaky, buttery scones in seasonal flavors. Perfect for brunch or teatime.",
                itemPrice: { "6": 15, "8": 20, "10": 25, "12": 30 },
                itemImages: [quicheImage] // ✅ use your actual import
            },
            {
                id: "quiche-lorraine",
                itemName: "Quiche Lorraine",
                itemDescription: "Classic deep-dish quiche with smoky bacon and Swiss cheese.",
                itemPrice: 22,
                itemImages: [quicheImage]
            },
            {
                id: "quiche-mediterranean",
                itemName: "Mediterranean Quiche",
                itemDescription: "Tomato, basil, and creamy feta in a golden pastry crust.",
                itemPrice: 20,
                itemImages: [quicheImage]
            },
            {
                id: "quiche-three-cheese",
                itemName: "Three Cheese Quiche",
                itemDescription: "Fluffy, cheesy egg custard baked in a crisp shell.",
                itemPrice: 18,
                itemImages: [quicheImage]
            },
            {
                id: "quiche-mushroom-goat",
                itemName: "Mushroom & Goat Cheese Quiche",
                itemDescription: "Sautéed mushrooms and tangy goat cheese in a rich egg custard.",
                itemPrice: 20,
                itemImages: [quicheImage]
            },
            {
                id: "quiche-salmon-asparagus",
                itemName: "Smoked Salmon & Asparagus Quiche",
                itemDescription: "Delicate smoked salmon and tender asparagus in a flaky crust.",
                itemPrice: 25,
                itemImages: [quicheImage]
            },
            {
                id: "egg-bake",
                itemName: "Egg Bake Casserole",
                itemDescription: "Hearty potato strata topped with eggs and your choice of fillings. Options: Mushroom & Sausage, Chorizo & Peppers with Ranchero Sauce, or Salmon & Asparagus.",
                itemPrice: { "MushroomSausage": 20, "ChorizoPeppers": 25, "SalmonAsparagus": 30 },
                itemImages: [quicheImage]
            }
        ]
    }
];
