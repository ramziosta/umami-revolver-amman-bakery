'use client'
import Link from 'next/link';
import Footer from '../components/Footer';
import {Card, CardContent} from '../ui/card';
import brioche from '@/app/assets/brioche.jpeg';
import specialtyCakes from '@/app/assets/specialty-cakes.png';
import milleCrepeCake from '@/app/assets/mille-crepe-cake.jpg';
import bamboloni from '@/app/assets/bamboloni.jpg';
import choux from '@/app/assets/choux.jpg';
import tiramisu from '@/app/assets/tiramisu.jpg';
import galettes from '@/app/assets/galette.jpg';
import poundCake from '@/app/assets/pound-cake.jpg';
import brownies from '@/app/assets/brownies.jpg';
import seasonal from '@/app/assets/lemon-basil.png';
import chocolateMousse from "@/app/assets/chocolate-mousse.jpeg";
import sourdough from '@/app/assets/sourdough.jpg'
import tieredCake from '@/app/assets/tieredCake.png'
import cheesecake from '@/app/assets/cheesecake.jpg'
import ciabatta from '@/app/assets/ciabatta.jpeg'
import muffins from '@/app/assets/muffins.jpg'
import Image from "next/image";
import type { StaticImageData } from 'next/image';
type Category = {
    id: string;
    name: string;
    image: StaticImageData;
    description: string;
    itemCount: number;
};
const categories = [
    {
        id: 'artisan-sourdoughs',
        name: 'Artisan Sourdoughs',
        image: sourdough,
        description: 'Using the best flours, grains and seeds.',
        itemCount: 8,
        items: [
            {
                id: 'sourbread',
                itemName: "White Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            },
            {
                id: 'WholeWheat',
                itemName: "Whole Wheat Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            },
            {
                id: 'sourbread3',
                itemName: "Artisanal Loaf Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            },
            {
                id: 'Rye',
                itemName: "100% Rye Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            },
            {
                id: 'MultiSeedWholeGrain',
                itemName: "MultiSeed Whole Grain Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            }]
    },
    {
        "id": "rustic-breads",
        "name": "Rustic & Dinner Breads",
        image: ciabatta,
        "description": "Freshly baked table breads and classic sides for every meal.",
        "itemCount": 10,
        "items": [
            {
                "id": "ciabatta",
                "itemName": "Ciabatta",
                "itemDescription": "Italian rustic bread with an airy crumb and crisp crust — perfect for sandwiches.",
                "itemPrice": 3.50,
                itemImages: [brioche]
            },
            {
                "id": "focaccia",
                "itemName": "Focaccia",
                "itemDescription": "Soft Italian flatbread brushed with olive oil, sea salt, and fresh herbs.",
                "itemPrice": 3.50,
                itemImages: [brioche]
            },
            {
                "id": "brioche-buns",
                "itemName": "Brioche Buns",
                "itemDescription": "Buttery, fluffy buns for gourmet burgers or breakfast sandwiches.",
                "itemPrice": 3.50,
                itemImages: [brioche]
            },
            {
                "id": "buttermilk-biscuits",
                "itemName": "Buttermilk Biscuits",
                "itemDescription": "Southern-style biscuits, flaky and rich — a comfort classic.",
                "itemPrice": 3.50,
                itemImages: [brioche]
            },
            {
                "id": "popovers",
                "itemName": "Popovers",
                "itemDescription": "Light, airy rolls with a crisp shell — best served warm with butter.",
                "itemPrice": 3.50,
                itemImages: [brioche]
            },
            {
                "id": "parker-house-rolls",
                "itemName": "Parker House Rolls",
                "itemDescription": "Soft, folded dinner rolls brushed with butter — a timeless table favorite.",
                "itemPrice": 3.50,
                itemImages: [brioche]
            },
            {
                "id": "garlic-knots",
                "itemName": "Garlic Knots",
                "itemDescription": "Soft, chewy knots brushed with garlic butter and fresh herbs.",
                "itemPrice": 3.50,
                itemImages: [brioche]
            },
            {
                "id": "classic-cornbread",
                "itemName": "Classic Cornbread",
                "itemDescription": "Moist, buttery cornbread with a golden crust — a perfect side for any meal.",
                "itemPrice": 3.50,
                itemImages: [brioche]
            },
            {
                "id": "jalapeno-cheddar-cornbread",
                "itemName": "Jalapeño Cheddar Cornbread",
                "itemDescription": "Savory cornbread packed with sharp cheddar cheese and a mild jalapeño kick.",
                "itemPrice": 3.50,
                itemImages: [brioche]
            },
            {
                "id": "cornbread-muffins",
                "itemName": "Honey Butter Cornbread Muffins",
                "itemDescription": "Individual cornbread muffins brushed with sweet honey butter — great for brunch.",
                "itemPrice": 3.50,
                itemImages: [brioche]
            }
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
                id: 'sweet-bread1',
                itemName: "Classic Brioche",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            },
            {
                id: 'sweet-bread2',
                itemName: "Cinnamon Roll Bread",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            },
            {
                id: 'sweet-bread3',
                itemName: "Chocolate Babka",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            },
            {
                id: 'sweet-bread4',
                itemName: "Apple Raisin Walnut Brioche",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            },
            {
                id: 'sweet-bread5',
                itemName: "Cranberry Pecan Babka",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            },
            {
                id: 'sweet-bread5',
                itemName: "Pull-apart Monkey Bread",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche]
            }]
    },
    {
        "id": "breakfast-pastries",
        "name": "Breakfast Pastries & Muffins",
        "description": "Fresh baked morning treats, perfect with coffee or tea.",
        image: muffins,
        "items": [
            {
                "id": "blueberry-muffin",
                "itemName": "Blueberry Muffin",
                "itemDescription": "Fluffy muffin loaded with juicy blueberries.",
                "itemPrice": 2.50,
                itemImages: [brioche]
            },
            {
                "id": "banana-nut-muffin",
                "itemName": "Banana Nut Muffin",
                "itemDescription": "Moist muffin packed with ripe bananas and crunchy walnuts.",
                "itemPrice": 2.50,
                itemImages: [brioche]
            },
            {
                "id": "cranberry-scone",
                "itemName": "Cranberry Orange Scone",
                "itemDescription": "Buttery scone with tart cranberries and a hint of orange zest.",
                "itemPrice": 2.50,
                itemImages: [brioche]
            },
            {
                "id": "classic-scone",
                "itemName": "Classic English Scone",
                "itemDescription": "Tender, buttery scone, perfect with jam and cream.",
                "itemPrice": 2.50,
                itemImages: [brioche]
            },
            {
                "id": "coffee-cake",
                "itemName": "Cinnamon Coffee Cake",
                "itemDescription": "Soft crumb cake swirled with cinnamon sugar.",
                "itemPrice": 2.50,
                itemImages: [brioche]
            }
        ]
    },
    {
        "id": "tiered-cakes",
        "name": "Tiered Cakes & Cupcakes",
        image: tieredCake,
        "description": "Multi-layered and customizable for any occasion.",
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
                "itemImages": ["chocolate-cake-1.jpg", "chocolate-cake-2.jpg"]
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
                "itemImages": ["coconut-cake-1.jpg", "coconut-cake-2.jpg"]
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
                "itemPrice": 25.00,
                itemImages: [brioche]
            },
            {
                "id": "mikes-lemonade",
                "itemName": "Mike's Lemonade",
                "itemDescription": "Moist olive oil cake with zesty lemon curd, mascarpone frosting, and lemon basil sugar.",
                "itemPrice": 25.00,
                itemImages: [brioche]
            },
            {
                "id": "tias-chocolate-lotus",
                "itemName": "Tia's Chocolate Lotus Cake",
                "itemDescription": "Indulgent chocolate cake with layers of chocolate French buttercream and Lotus French buttercream.",
                "itemPrice": 25.00,
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
                "itemPrices": [
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
                "itemPrices": [
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
                "itemPrices": [
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
                "itemPrices": [
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
                "itemPrices": [
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
                "itemPrices": [
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
        "description": "Classic, no-bake, burnt Basque, Italian ricotta and airy Japanese",
        "itemCount": 6,
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
            ]
        },
        "items": [
            {
                "id": "baked-cheesecake",
                "itemName": "Baked Cheesecake",
                "itemDescription": "Classic rich baked cheesecake with your choice of topping.",
                "itemPriceJOD": 40,
                itemImages: [brioche]
            },
            {
                "id": "no-bake-cheesecake",
                "itemName": "No-Bake Cheesecake",
                "itemDescription": "Creamy, smooth no-bake cheesecake served chilled with your favorite topping.",
                "itemPriceJOD": 35,
                itemImages: [brioche]
            },
            {
                "id": "burnt-basque-cheesecake",
                "itemName": "Burnt Basque Cheesecake",
                "itemDescription": "Rustic, caramelized Basque-style cheesecake with a creamy center and charred top.",
                "itemPriceJOD": 45,
                "itemImages": ["burnt-basque-cheesecake-1.jpg", "burnt-basque-cheesecake-2.jpg"]
            },
            {
                "id": "ricotta-cheesecake",
                "itemName": "Ricotta Cheesecake",
                "itemDescription": "Light, fluffy Italian-style cheesecake made with creamy ricotta and a touch of citrus zest.",
                "itemPriceJOD": 40,
                itemImages: [brioche]
            },
            {
                "id": "japanese-souffle-cheesecake",
                "itemName": "Japanese Soufflé Cheesecake",
                "itemDescription": "Incredibly light, airy, and jiggly cheesecake with a delicate sweetness.",
                "itemPriceJOD": 40,
                itemImages: [brioche]
            },
            {
                "id": "swirled-cheesecake",
                "itemName": "Swirled Cheesecake",
                "itemDescription": "Classic baked cheesecake swirled with rich chocolate ganache or fruit puree for a beautiful marble effect.",
                "itemPriceJOD": 40,
                itemImages: [brioche]
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
                "itemPrices": [
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
                "itemPrices": [
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
                "itemPrices": [
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
                "itemPrices": [
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
                "itemPrices": [
                    {
                        "size": "Medium",
                        "priceJOD": 25
                    },
                    {
                        "size": "Large",
                        "priceJOD": 35
                    }
                ],
                "itemImages": ["red-velvet-pound-1.jpg", "red-velvet-pound-2.jpg"]
            },
            {
                "id": "ultimate-chocolate-bundt",
                "itemName": "Ultimate Chocolate Triple Layer Bundt Cake",
                "itemDescription": "Decadent chocolate bundt cake with rich layers and glossy chocolate glaze.",
                "itemPrices": [
                    {
                        "size": "Medium",
                        "priceJOD": 28
                    },
                    {
                        "size": "Large",
                        "priceJOD": 35
                    }
                ],
                "itemImages": ["ultimate-chocolate-bundt-1.jpg", "ultimate-chocolate-bundt-2.jpg"]
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
        "description": 'Traditional and reimagined with seasonal fillings and modern flair.',
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
                "itemPriceJOD": 25,
                itemImages: [brioche]
            },
            {
                "id": "marsala-zabayone-tiramisu",
                "itemName": "Marsala Wine Zabayone",
                "itemDescription": "A refined twist featuring Marsala zabayone folded into silky mascarpone and layered with espresso-dipped ladyfingers.",
                "itemPriceJOD": 30,
                itemImages: [brioche]
            },
            {
                "id": "strawberry-almond-tiramisu",
                "itemName": "Strawberry Almond",
                "itemDescription": "Strawberry-soaked ladyfingers layered with almond mascarpone cream and fresh strawberry compote.",
                "itemPriceJOD": 30,
                itemImages: [brioche]
            },
            {
                "id": "pistachio-matcha-tiramisu",
                "itemName": "Pistachio Matcha",
                "itemDescription": "Toasted pistachio cream and earthy matcha mascarpone, layered with coffee-kissed sponge.",
                "itemPriceJOD": 30,
                itemImages: [brioche]
            },
            {
                "id": "coconut-mango-tiramisu",
                "itemName": "Coconut Mango",
                "itemDescription": "Tropical fusion of coconut mascarpone and golden mango preserves layered with espresso sponge.",
                "itemPriceJOD": 30,
                itemImages: [brioche]
            },
            {
                "id": "milk-tea-tiramisu",
                "itemName": "Milk Tea",
                "itemDescription": "Earl Grey–infused mascarpone cream and milk tea glaze layered with coffee-soaked sponge.",
                "itemPriceJOD": 25,
                itemImages: [brioche]
            },
            {
                "id": "lemon-mascarpone-tiramisu",
                "itemName": "Lemon Mascarpone",
                "itemDescription": "Lemon-zest mascarpone layered with sponge and topped with glossy lemon curd.",
                "itemPriceJOD": 30,
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
                "itemPriceJOD": { "medium": 20, "large": 30 },
                itemImages: [brioche]
            },
            {
                "id": "berry-cobbler",
                "itemName": "Berry Cobbler",
                "itemDescription": "Mixed seasonal berries baked with vanilla biscuit topping.",
                "itemPriceJOD": { "medium": 25, "large": 35 },
                itemImages: [brioche]
            },
            {
                "id": "pecan-pie",
                "itemName": "Pecan Pie",
                "itemDescription": "Toasted pecans in a rich brown sugar custard with flaky pie crust.",
                "itemPriceJOD": 25,
                itemImages: [brioche]
            },
            {
                "id": "pumpkin-pie",
                "itemName": "Pumpkin Pie",
                "itemDescription": "Pumpkin in a rich butternut custard with flaky pie crust.",
                "itemPriceJOD": 25,
                itemImages: [brioche]
            },
            {
                "id": "chocolate-cream-pie",
                "itemName": "Chocolate Cream Pie",
                "itemDescription": "Rich chocolate custard in a flaky pie crust with whipped cream and chocolate shavings.",
                "itemPriceJOD": 25,
                itemImages: [brioche]
            },
            {
                "id": "apple-pie",
                "itemName": "Apple Pie",
                "itemDescription": "Classic apple pie with flaky crust and spiced apple filling.",
                "itemPriceJOD": 20,
                itemImages: [brioche]
            },
            {
                "id": "banoffee-pie",
                "itemName": "Banoffee Pie",
                "itemDescription": "Banana, chocolate, toffee, and whipped cream in a graham cracker crust.",
                "itemPriceJOD": 25,
                itemImages: [brioche]
            },
            {
                "id": "lemon-meringue-pie",
                "itemName": "Lemon Meringue Pie",
                "itemDescription": "Tart and creamy lemon custard in a flaky pie crust with toasted meringue.",
                "itemPriceJOD": 20,
                itemImages: [brioche]
            },
            {
                "id": "peach-cobbler",
                "itemName": "Peach Cobbler",
                "itemDescription": "Fresh peaches baked with vanilla biscuit topping.",
                "itemPriceJOD": { "medium": 20, "large": 30 },
                itemImages: [brioche]
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
                itemImages: [brioche]
            },
            {
                "id": "oatmeal-raisin",
                "itemName": "Oatmeal Raisin",
                "itemDescription": "Classic chewy cookie with plump black and golden raisins.",
                itemImages: [brioche]
            },
            {
                "id": "lemon-drop",
                "itemName": "Lemon Drop",
                "itemDescription": "Zesty lemon cookie with white chocolate chips.",
                itemImages: [brioche]
            },
            {
                "id": "samoa-cookie",
                "itemName": "Samoa Cookie",
                "itemDescription": "Inspired by the Girl Scout classic: chocolate, gooey caramel, and toasted coconut over shortbread.",
                itemImages: [brioche]
            },
            {
                "id": "stamped-sugar-cookies",
                "itemName": "Stamped Sugar Cookies",
                "itemDescription": "Classic buttery and nutty sugar cookies, hand-stamped for an artisanal touch. Flavors include: Almond Honey, Espresso Chocolate, Lemon Zest, Chai Spice, Orange Cardamom.",
                itemImages: [brioche]
            },
            {
                "id": "ginger-cookies",
                "itemName": "Ginger Cookies",
                "itemDescription": "Classic ginger spice cookies with molasses and a crackly sugar crust.",
                itemImages: [brioche]
            },
            {
                "id": "red-velvet-macadamia",
                "itemName": "Red Velvet Macadamia",
                "itemDescription": "Chewy, crunchy red velvet cookie with macadamia nuts and chocolate chips.",
                itemImages: [brioche]
            },
            {
                "id": "gf-chocolate-chip",
                "itemName": "GF Chocolate Chip",
                "itemDescription": "Gluten-free version of our classic chocolate chip cookie.",
                itemImages: [brioche]
            },
            {
                "id": "limoncello-cheesecake-bars",
                "itemName": "Limoncello Cheesecake Bars",
                "itemDescription": "Citrusy, creamy cheesecake bars with a fresh zest.",
                itemImages: [brioche]
            },
            {
                "id": "strawberry-crumble-bar",
                "itemName": "Strawberry Crumble",
                "itemDescription": "Soft, chewy bar with strawberry filling and crunchy streusel topping.",
                itemImages: [brioche]
            },
            {
                "id": "millionaire-shortbread",
                "itemName": "Millionaire Shortbread",
                "itemDescription": "Classic buttery shortbread with caramel center and chocolate frosting.",
                itemImages: [brioche]
            },
            {
                "id": "brownie-tahini-swirls",
                "itemName": "Brownie with Tahini Swirls",
                "itemDescription": "Rich brownie with tahini swirls and halva bits.",
                itemImages: [brioche]
            },
            {
                "id": "rich-brownies",
                "itemName": "Rich as F@#$ Brownies",
                "itemDescription": "Ultra-rich brownies with all Valrhona chocolate chips and dulce de leche.",
                itemImages: [brioche]
            },
            {
                "id": "the-decadent-blondie",
                "itemName": "The Decadent Blondie",
                "itemDescription": "Buttery blondie bar with toasted walnuts and white chocolate chips.",
                itemImages: [brioche]
            },
            {
                "id": "matcha-brownies",
                "itemName": "Matcha Brownies",
                "itemDescription": "Earthy matcha brownies with pistachios.",
                itemImages: [brioche]
            },
            {
                "id": "red-velvet-cream-cheese-brownies",
                "itemName": "Red Velvet & Cream Cheese Brownies",
                "itemDescription": "Light chocolate brownies with a swirl of tangy cream cheese.",
                itemImages: [brioche]
            }
        ]
    },
    {
        id: 'seasonal-treats',
        name: 'Seasonal Treats',
        image: seasonal,
        description: 'Limited-time offerings inspired by the freshest seasonal ingredients.',
        itemCount: 4,
        items: []
    },
];

type CategoriesHeroProps = {
    title: string;
    subtitle: string;
    backgroundImage: StaticImageData;
};

const CategoriesHero = ({title, subtitle, backgroundImage}: CategoriesHeroProps) => (
    <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 parallax-bg">
            <Image
                src={backgroundImage}
                alt="Pound cake"
                fill
                sizes="100vh"
                className="object-cover"
                priority
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
            <h1 className="text-5xl font-goglast text-umami-cream tracking-[0.5rem] mb-4 font-bold">
                {title}
            </h1>
            <p className="max-w-6xl mx-auto text-umami-cream/90 font-glimp text-4xl leading-relaxed">
                {subtitle}
            </p>
        </div>
    </section>
);

const CategoryCard = ({ category }: { category: Category }) => (
    <Link href={`/category/${category.id}`}>
        <Card
            className="group cursor-pointer elegant-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={category.image}
                    alt={category.name}
                    width={800}    // ✅ Required!
                    height={600}   // ✅ Required!
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-goglast font-bold mb-1 text-shadow tracking-[0.5rem]">
                        {category.name}
                    </h3>
                    <p className="text-sm text-umami-cream/90">
                        {category.itemCount} items
                    </p>
                </div>
            </div>

            <CardContent className="p-6 bg-white group-hover:bg-umami-cream transition-colors duration-300">
                <p className="text-umami-navy text-lg font-bold leading-relaxed">
                    {category.description}
                </p>
            </CardContent>
        </Card>
    </Link>
);

const CategoriesGrid = ({ categories }: { categories: Category[] }) => (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    </section>
);

const Categories = () => {
    return (
        <div className="min-h-screen bg-umami-cream">

            <CategoriesHero
                title="What We Bake"
                subtitle="Our curated menu showcases exclusive flavors and small-batch creations you won’t find anywhere else — including seasonal specialties and refined takes on cult favorites."
                backgroundImage={chocolateMousse}
            />
            <CategoriesGrid categories={categories}/>
            <Footer/>
        </div>
    );
};

export default Categories;
