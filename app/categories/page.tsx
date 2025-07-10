'use client'
import Link from 'next/link';
import Footer from '../components/Footer';
import {Card, CardContent} from '../ui/card';
import brioche from '../assets/brioche.jpeg';
import specialtyCakes from '../assets/specialty-cakes.png';
import milleCrepeCake from '../assets/mille-crepe-cake.jpg';
import bamboloni from '../assets/bamboloni.jpg';
import choux from '../assets/choux.jpg';
import tiramisu from '../assets/tiramisu.jpg';
import galette from '../assets/galette.jpg';
import poundCake from '../assets/pound-cake.jpg';
import brownie from '../assets/brownies.jpg';
import seasonal from '../assets/lemon-basil.png';
import chocolateMousse from "../assets/chocolate-mousse.jpeg";
import sourdough from '../assets/sourdough.jpg'
import tieredCake from '../assets/tieredCake.png'
import Image from "next/image";


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
                itemImages: [brioche, brioche]
            },
            {
                id: 'WholeWheat',
                itemName: "Whole Wheat Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche, brioche]
            },
            {
                id: 'sourbread3',
                itemName: "Artisanal Loaf Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche, brioche]
            },
            {
                id: 'Rye',
                itemName: "100% Rye Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche, brioche]
            },
            {
                id: 'MultiSeedWholeGrain',
                itemName: "MultiSeed Whole Grain Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche, brioche]
            }]
    },
    {
        "id": "rustic-breads",
        "name": "Rustic & Dinner Breads",
        "image": "rustic",
        "description": "Freshly baked table breads and classic sides for every meal.",
        "itemCount": 10,
        "items": [
            {
                "id": "ciabatta",
                "itemName": "Ciabatta",
                "itemDescription": "Italian rustic bread with an airy crumb and crisp crust — perfect for sandwiches.",
                "itemPrice": 3.50,
                "itemImages": ["ciabatta"]
            },
            {
                "id": "focaccia",
                "itemName": "Focaccia",
                "itemDescription": "Soft Italian flatbread brushed with olive oil, sea salt, and fresh herbs.",
                "itemPrice": 3.50,
                "itemImages": ["focaccia"]
            },
            {
                "id": "brioche-buns",
                "itemName": "Brioche Buns",
                "itemDescription": "Buttery, fluffy buns for gourmet burgers or breakfast sandwiches.",
                "itemPrice": 3.50,
                "itemImages": ["brioche-buns"]
            },
            {
                "id": "buttermilk-biscuits",
                "itemName": "Buttermilk Biscuits",
                "itemDescription": "Southern-style biscuits, flaky and rich — a comfort classic.",
                "itemPrice": 3.50,
                "itemImages": ["biscuits"]
            },
            {
                "id": "popovers",
                "itemName": "Popovers",
                "itemDescription": "Light, airy rolls with a crisp shell — best served warm with butter.",
                "itemPrice": 3.50,
                "itemImages": ["popovers"]
            },
            {
                "id": "parker-house-rolls",
                "itemName": "Parker House Rolls",
                "itemDescription": "Soft, folded dinner rolls brushed with butter — a timeless table favorite.",
                "itemPrice": 3.50,
                "itemImages": ["parker-house-rolls"]
            },
            {
                "id": "garlic-knots",
                "itemName": "Garlic Knots",
                "itemDescription": "Soft, chewy knots brushed with garlic butter and fresh herbs.",
                "itemPrice": 3.50,
                "itemImages": ["garlic-knots"]
            },
            {
                "id": "classic-cornbread",
                "itemName": "Classic Cornbread",
                "itemDescription": "Moist, buttery cornbread with a golden crust — a perfect side for any meal.",
                "itemPrice": 3.50,
                "itemImages": ["cornbread"]
            },
            {
                "id": "jalapeno-cheddar-cornbread",
                "itemName": "Jalapeño Cheddar Cornbread",
                "itemDescription": "Savory cornbread packed with sharp cheddar cheese and a mild jalapeño kick.",
                "itemPrice": 3.50,
                "itemImages": ["jalapeno-cheddar-cornbread"]
            },
            {
                "id": "cornbread-muffins",
                "itemName": "Honey Butter Cornbread Muffins",
                "itemDescription": "Individual cornbread muffins brushed with sweet honey butter — great for brunch.",
                "itemPrice": 3.50,
                "itemImages": ["cornbread-muffins"]
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
                itemImages: [brioche, brioche]
            },
            {
                id: 'sweet-bread2',
                itemName: "Cinnamon Roll Bread",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche, brioche]
            },
            {
                id: 'sweet-bread3',
                itemName: "Chocolate Babka",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche, brioche]
            },
            {
                id: 'sweet-bread4',
                itemName: "Apple Raisin Walnut Brioche",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche, brioche]
            },
            {
                id: 'sweet-bread5',
                itemName: "Cranberry Pecan Babka",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche, brioche]
            },
            {
                id: 'sweet-bread5',
                itemName: "Pull-apart Monkey Bread",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [brioche, brioche]
            }]
    },
    {
        "id": "breakfast-pastries",
        "name": "Breakfast Pastries & Muffins",
        "description": "Fresh baked morning treats, perfect with coffee or tea.",
        "items": [
            {
                "id": "blueberry-muffin",
                "itemName": "Blueberry Muffin",
                "itemDescription": "Fluffy muffin loaded with juicy blueberries.",
                "itemPrice": 2.50,
                "itemImages": ["blueberry-muffin"]
            },
            {
                "id": "banana-nut-muffin",
                "itemName": "Banana Nut Muffin",
                "itemDescription": "Moist muffin packed with ripe bananas and crunchy walnuts.",
                "itemPrice": 2.50,
                "itemImages": ["banana-nut-muffin"]
            },
            {
                "id": "cranberry-scone",
                "itemName": "Cranberry Orange Scone",
                "itemDescription": "Buttery scone with tart cranberries and a hint of orange zest.",
                "itemPrice": 2.50,
                "itemImages": ["cranberry-scone"]
            },
            {
                "id": "classic-scone",
                "itemName": "Classic English Scone",
                "itemDescription": "Tender, buttery scone, perfect with jam and cream.",
                "itemPrice": 2.50,
                "itemImages": ["classic-scone"]
            },
            {
                "id": "coffee-cake",
                "itemName": "Cinnamon Coffee Cake",
                "itemDescription": "Soft crumb cake swirled with cinnamon sugar.",
                "itemPrice": 2.50,
                "itemImages": ["coffee-cake"]
            }
        ]
    },
    {
        "id": "tiered-cakes",
        "name": "Tiered Cakes & Cupcakes",
        "image": "tieredCake",
        "description": "From classic favorites to inventive seasonal creations, our cakes and cupcakes are made to delight. Any cake flavor can be made into cupcakes, and we happily take custom orders. New flavors are added seasonally — check back often to see what’s fresh from the oven!",
        "itemCount": 12,
        "details": {
            "availableTiers": ["2-tier", "3-tier", "4-tier"],
            "availableSizes": ["6 inch", "8 inch", "10 inch"],
            "signatureFlavors": [
                "Vanilla",
                "Chocolate",
                "Red Velvet",
                "Carrot",
                "Banana",
                "Coffee",
                "Lemon"
            ],
            "fillings": [
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
                "Passion Fruit (Seasonal)",
                "Mango (Seasonal)",
                "Peach (Seasonal)"
            ],
            "frostings": {
                "frenchButtercream": [
                    "Vanilla Bean",
                    "Chocolate",
                    "White Chocolate",
                    "Salted Caramel",
                    "Mocha Lotus"
                ],
                "additionalOptions": [
                    "Toasted Meringue",
                    "Cream Cheese",
                    "Marshmallow",
                    "Whipped Cream",
                    "Ganache",
                    "Toasted Coconut"
                ]
            },
            "cupcakePricing": [
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
        images: [],
        "items": []
    },
    {
        "id": "specialty-cakes",
        "name": "Specialty Cakes",
        "image": "specialtyCakes",
        "description": "Unique flavors from our kitchen you won’t find anywhere else. Signature cakes with special flavor combinations crafted in-house.",
        "itemCount": 3,
        "items": [
            {
                "id": "king-chocolate-cake",
                "itemName": "King Chocolate Cake",
                "itemDescription": "Rich chocolate mousse cake layered with cream puffs for a decadent bite.",
                "itemPrice": 25.00,
                "itemImages": ["king-chocolate-1.jpg", "king-chocolate-2.jpg"]
            },
            {
                "id": "mikes-lemonade",
                "itemName": "Mike's Lemonade",
                "itemDescription": "Moist olive oil cake with zesty lemon curd, mascarpone frosting, and lemon basil sugar.",
                "itemPrice": 25.00,
                "itemImages": ["mikes-lemonade-1.jpg", "mikes-lemonade-2.jpg"]
            },
            {
                "id": "tias-chocolate-lotus",
                "itemName": "Tia's Chocolate Lotus Cake",
                "itemDescription": "Indulgent chocolate cake with layers of chocolate French buttercream and Lotus French buttercream.",
                "itemPrice": 25.00,
                "itemImages": ["tias-lotus-1.jpg", "tias-lotus-2.jpg"]
            }
        ]
    },
    {
        "id": "mille-crepe-cakes",
        "name": "Mille Crêpe Cakes",
        "image": "milleCrepeCake",
        "description": "Delicate mille crêpe cakes made with layers of thin crêpes, filled with luscious creams and elegantly frosted. Available in custom flavors too.",
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
                "itemImages": ["tiramisu-crepe-1.jpg", "tiramisu-crepe-2.jpg"]
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
                "itemImages": ["matcha-crepe-1.jpg", "matcha-crepe-2.jpg"]
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
                "itemImages": ["creme-brulee-crepe-1.jpg", "creme-brulee-crepe-2.jpg"]
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
                "itemImages": ["milk-tea-crepe-1.jpg", "milk-tea-crepe-2.jpg"]
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
                "itemImages": ["chocolate-mocha-crepe-1.jpg", "chocolate-mocha-crepe-2.jpg"]
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
                "itemImages": ["matcha-pistachio-crepe-1.jpg", "matcha-pistachio-crepe-2.jpg"]
            }
        ]
    },
    {
        "id": "pound-cakes",
        "name": "Pound, Bundt & Coffee Cakes",
        "image": "poundCake",
        "description": "Buttery, moist, and tender cakes — from classic pound cakes to marble, bundt, and coffee cake delights.",
        "itemCount": 6,
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
                "itemImages": ["sour-cream-pound-1.jpg", "sour-cream-pound-2.jpg"]
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
                "itemImages": ["napolitano-marble-1.jpg", "napolitano-marble-2.jpg"]
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
                "itemImages": ["lemon-pound-1.jpg", "lemon-pound-2.jpg"]
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
                "itemImages": ["spiced-coffee-cake-1.jpg", "spiced-coffee-cake-2.jpg"]
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
        "image": "bamboloni",
        "description": "Our Bamboloni are handcrafted Italian doughnuts made from enriched brioche dough for an irresistibly soft, airy texture. Each one is filled with decadent creams, curds, or jams and finished with unique coatings for a perfect bite. We also offer custom flavors and seasonal varieties to keep things deliciously fresh.",
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
                "itemImages": ["creme-brulee-bamboloni-1.jpg", "creme-brulee-bamboloni-2.jpg"]
            },
            {
                "id": "chocolate-bamboloni",
                "itemName": "Chocolate",
                "itemDescription": "Filled with silky chocolate pastry cream and coated with cocoa powder and sugar.",
                "itemImages": ["chocolate-bamboloni-1.jpg", "chocolate-bamboloni-2.jpg"]
            },
            {
                "id": "cafe-latte-bamboloni",
                "itemName": "Café Latte",
                "itemDescription": "Soft doughnut filled with smooth coffee cream for a perfect morning bite.",
                "itemImages": ["cafe-latte-bamboloni-1.jpg", "cafe-latte-bamboloni-2.jpg"]
            },
            {
                "id": "mexicano-bamboloni",
                "itemName": "Mexicano",
                "itemDescription": "Filled with creamy dulce de leche and coated in cinnamon sugar.",
                "itemImages": ["mexicano-bamboloni-1.jpg", "mexicano-bamboloni-2.jpg"]
            },
            {
                "id": "thai-dream-bamboloni",
                "itemName": "Thai Dream",
                "itemDescription": "Tropical coconut cream and mango mousse filling, finished with toasted coconut.",
                "itemImages": ["thai-dream-bamboloni-1.jpg", "thai-dream-bamboloni-2.jpg"]
            },
            {
                "id": "strawberry-bamboloni",
                "itemName": "Strawberry",
                "itemDescription": "Classic strawberry jam and pastry cream filling for a sweet, fresh bite.",
                "itemImages": ["strawberry-bamboloni-1.jpg", "strawberry-bamboloni-2.jpg"]
            },
            {
                "id": "lemon-bamboloni",
                "itemName": "Lemon",
                "itemDescription": "Bright lemon curd filling topped with toasted marshmallow for a zesty twist.",
                "itemImages": ["lemon-bamboloni-1.jpg", "lemon-bamboloni-2.jpg"]
            }
        ]
    },
    {
        id: 'choux-au-craquelin',
        name: 'Choux au Craquelin',
        image: choux,
        description: 'Delicate cream puffs with crisp craquelin tops.',
        itemCount: 4,
        items: []
    },
    {
        id: 'tiramisu',
        name: 'Tiramisu',
        image: tiramisu,
        description: 'Traditional and reimagined with seasonal fillings and modern flair.',
        itemCount: 4,
        items: []
    },
    {
        id: 'pies-cobblers-galettes',
        name: 'Pies, Cobblers & Galettes',
        image: galette,
        description: 'Rustic, seasonal fruit pies and hand-crafted pastries.',
        itemCount: 4,
        items: []
    },
    {
        id: 'cookies-bars-brownies',
        name: 'Cookies, Bars & Brownies',
        image: brownie,
        description: 'Classic and creative sweet bites for any occasion.',
        itemCount: 4,
        items: []
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
    backgroundImage: string;
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

const CategoryCard = ({category}) => (
    <Link key={category.id} href={`/category/${category.id}`}>
        <Card
            className="group cursor-pointer elegant-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={category.image}
                    alt={category.name}
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

const CategoriesGrid = ({categories}) => (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((category) => (
                    <CategoryCard key={category.id} category={category}/>
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
