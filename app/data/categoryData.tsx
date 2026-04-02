

import type { Category, FeaturedCategory } from '@/app/types/categoryTypes';


import multiSeedSourdough from "@/app/assets/multiseed-sourdough.jpg";
import whiteSourdough from "@/app/assets/white-sourdough.jpg";
import wholeWheat from "@/app/assets/wholewheat.jpg";
import rye from "@/app/assets/peasantRye.jpg";
import artisan from "@/app/assets/artisan.jpeg";
import whiteSourdough1 from "@/app/assets/sourdough1.jpg";
import whiteSourdough2 from "@/app/assets/sourdough2.jpg";
import GFMultiGrainLoaf from "@/app/assets/GFMultiGrainLoaf.jpg";
import gfWhiteBread from "@/app/assets/gfWhiteBread.jpg";

import muffins from "@/app/assets/kouigan-amann2.jpg";
import kouignAmann from "@/app/assets/kouigan-amann5.jpg";

import brownies from "@/app/assets/brownies.jpg";
import chocolateChip from "@/app/assets/chocolate-chip-cookies.jpg";
import oatmealRaisin from "@/app/assets/oatmeal-raisin.jpg";
import sugarCookie from "@/app/assets/sugar-cookies.jpg";
import gingerCookie from "@/app/assets/ginger-cookies.jpg";

import tieredCake from "@/app/assets/tieredCake.png";
import bananaCake from "@/app/assets/dulceAndBanana.png";
import chocolateMousse from "@/app/assets/chocolate-mousse.jpeg";
import chocolateCake from "@/app/assets/chocolate-cake.png";
import strawberryCake from "@/app/assets/strawberryCake.jpg";
import carrotCake from "@/app/assets/carrotCake.png";
import coconutCake from "@/app/assets/coconut-cake.png";
import confettiCake from "@/app/assets/funfetti1.jpg";
import bucheCake from "@/app/assets/bucheDeNoel.jpeg";

import milleCrepeCake from "@/app/assets/mille-crepe-cake.jpg";
import tiramisuCrepe from "@/app/assets/tiramisu-mille-crepe.jpeg";
import matchaCrepe from "@/app/assets/matcha-mille-crepe.jpg";
import cremeBruleeCrepe from "@/app/assets/cWhole Cake Heads-on.jpg";
import milkTeaCrepe from "@/app/assets/milk-tea-mille-crepe.png";
import pistachioCrepe from "@/app/assets/pistachio-mille-crepe.png";
import raspberryCrepe from "@/app/assets/raspberry-almond-mille-crepe.png";

import seasonal from "@/app/assets/lemon-basil.png";


// ── RE-EXPORT TYPES ────────────────────────────────────────────────────────
export type { Category, FeaturedCategory };
export type { QuantityOption, Variation, CategoryItem } from '@/app/types/categoryTypes';


// ── CATEGORIES ─────────────────────────────────────────────────────────────

export const categories: Category[] = [

    // ━━ MILLE CRÊPE CAKES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "mille-crepe-cakes",
        name: "Mille Crêpe Cakes",
        image: milleCrepeCake,
        description: "Twenty paper-thin crêpe layers, filled with house-made diplomat creams. Each cake assembled to order.",
        itemCount: 7,
        items: [
            {
                id: "creme-brulee-crepe",
                itemName: "Crème Brûlée Mille Crêpe",
                itemDescription: "Silky vanilla custard layers with a crisp brûléed top.",
                itemImages: [cremeBruleeCrepe],
                quantityOptions: [
                    { quantity: "9 inch — serves 12–14", price: "55 JOD" },
                    { quantity: "8 inch — serves 10–12", price: "42 JOD" },
                ],
                ingredients: "Flour, sugar, milk, cream, butter, eggs, vanilla bean",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "9 inch — serves 12–14",
                variations: [],
            },
            {
                id: "tiramisu-crepe",
                itemName: "Tiramisu Mille Crêpe",
                itemDescription: "Classic tiramisu flavors layered with coffee-soaked crêpes and mascarpone cream.",
                itemImages: [tiramisuCrepe],
                quantityOptions: [
                    { quantity: "9 inch — serves 14–16", price: "58 JOD" },
                    { quantity: "8 inch — serves 10–12", price: "47 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, mascarpone, coffee",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "9 inch — serves 14–16",
                variations: [],
            },
            {
                id: "matcha-crepe",
                itemName: "Matcha Mille Crêpe",
                itemDescription: "Earthy matcha cream layered between delicate green tea crêpes.",
                itemImages: [matchaCrepe],
                quantityOptions: [
                    { quantity: "9 inch — serves 12–14", price: "58 JOD" },
                    { quantity: "8 inch — serves 10–12", price: "47 JOD" },
                ],
                ingredients: "Flour, sugar, milk, cream, butter, eggs, matcha",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "9 inch — serves 12–14",
                variations: [],
            },
            {
                id: "milk-tea-crepe",
                itemName: "Earl Grey Milk Tea Mille Crêpe",
                itemDescription: "Lightly fragrant and smooth Earl Grey infused milk tea pastry cream layered with delicate crêpes.",
                itemImages: [milkTeaCrepe],
                quantityOptions: [
                    { quantity: "9 inch — serves 12–14", price: "58 JOD" },
                    { quantity: "8 inch — serves 10–12", price: "47 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, mascarpone, Earl Grey tea",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "9 inch — serves 12–14",
                variations: [],
            },
            {
                id: "chocolate-crepe",
                itemName: "Chocolate Mille Crêpe",
                itemDescription: "Rich chocolate and smooth vanilla cream layers for a decadent bite.",
                itemImages: [milleCrepeCake],
                quantityOptions: [
                    { quantity: "9 inch — serves 12–14", price: "60 JOD" },
                    { quantity: "8 inch — serves 10–12", price: "50 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, mascarpone, chocolate",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "9 inch — serves 12–14",
                variations: [],
            },
            {
                id: "matcha-pistachio-crepe",
                itemName: "Matcha Pistachio Mille Crêpe",
                itemDescription: "A twist on our matcha cake, layered with nutty pistachio cream.",
                itemImages: [pistachioCrepe],
                quantityOptions: [
                    { quantity: "9 inch — serves 12–14", price: "60 JOD" },
                    { quantity: "8 inch — serves 10–12", price: "50 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, mascarpone, pistachio, matcha",
                allergens: "Gluten, dairy, eggs, nuts",
                seasonal: true,
                weight: "9 inch — serves 12–14",
                variations: [],
            },
            {
                id: "raspberry-almond-crepe",
                itemName: "Raspberry Almond & White Chocolate Mille Crêpe",
                itemDescription: "Delicate layers of crêpes filled with almond cream, tangy raspberry compote, and a luscious white chocolate ganache.",
                itemImages: [raspberryCrepe],
                quantityOptions: [
                    { quantity: "9 inch — serves 12–14", price: "60 JOD" },
                    { quantity: "8 inch — serves 10–12", price: "50 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, mascarpone, white chocolate, raspberry, almond",
                allergens: "Gluten, dairy, eggs, nuts",
                seasonal: false,
                weight: "9 inch — serves 12–14",
                variations: [],
            },
        ],
    },

    // ━━ TIERED CAKES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "tiered-cakes",
        name: "Signature Cakes",
        image: tieredCake,
        description: "Layered, tailored, and unforgettable.",
        itemCount: 7,
        items: [
            {
                id: "white-confetti-cake",
                itemName: "Celebration Confetti Cake",
                itemDescription: "Soft, fluffy vanilla bean cake layered with rainbow confetti sprinkles and filled with a light mascarpone whipped cream. Frosted in silky French buttercream.",
                itemImages: [confettiCake,],
                quantityOptions: [
                    { quantity: "3 layer 8 inch", price: "55 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, vanilla bean, mascarpone",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "3 layer 8 inch",
                variations: [],
            },
            {
                id: "chocolate-cake",
                itemName: "Triple Chocolate Cake",
                itemDescription: "Rich, moist dark chocolate sponge layered with milk chocolate crèmeux, chocolate crunch feuilletine and French chocolate buttercream.",
                itemImages: [chocolateCake,],
                quantityOptions: [
                    { quantity: "3 layer 8 inch", price: "65 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, chocolate",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "3 layer 8 inch",
                variations: [],
            },
            {
                id: "coconut-cake",
                itemName: "Coconut Passion Fruit Dream Cake",
                itemDescription: "Soft coconut cake layered with German buttercream, passion fruit filling and finished with toasted coconut flakes.",
                itemImages: [coconutCake, ],
                quantityOptions: [
                    { quantity: "3 layer 8 inch", price: "60 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, coconut, passion fruit",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "3 layer 8 inch",
                variations: [],
            },
            {
                id: "banana-nut-cake",
                itemName: "Dulce and Banana",
                itemDescription: "A moist banana sponge studded with toasted pecans, layered with banana pudding filling and finished with a tangy cream cheese frosting and dulce de leche glaze.",
                itemImages: [bananaCake,],
                quantityOptions: [
                    { quantity: "3 layer rectangular (6×6×12 inch)", price: "55 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, pecans, banana, cream cheese, dulce de leche",
                allergens: "Gluten, dairy, eggs, nuts",
                seasonal: false,
                weight: "3 layer rectangular",
                variations: [],
            },
            {
                id: "carrot-pecan-cake",
                itemName: "Brown Butter Carrot & Pecan Cake",
                itemDescription: "Three-layer spiced carrot cake made with brown butter, dual-cut carrots, toasted pecans, and a lactic-forward mascarpone–cream cheese frosting. Finished with honey carrot soak, a white chocolate feuilletine crunch, and crisp carrot curls.",
                itemImages: [carrotCake,],
                quantityOptions: [
                    { quantity: "3 layer 8 inch", price: "65 JOD" },
                ],
                ingredients: "Flour, almond, sugar, butter, eggs, buttermilk, carrots, pecans, cream cheese, mascarpone",
                allergens: "Gluten, dairy, eggs, nuts",
                seasonal: false,
                weight: "3 layer 8 inch",
                variations: [],
            },
            {
                id: "strawberry-cake",
                itemName: "Roasted Strawberry White Chocolate Ganache Cake",
                itemDescription: "Strawberry cake with strawberry mascarpone white chocolate ganache, roasted strawberry filling and fresh strawberries.",
                itemImages: [strawberryCake, ],
                quantityOptions: [
                    { quantity: "2 layer 8 inch", price: "40 JOD" },
                    { quantity: "3 layer 8 inch", price: "55 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, strawberry, white chocolate, mascarpone",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "3 layer 8 inch",
                variations: [],
            },
            {
                id: "buche-de-noel",
                itemName: "Bûche de Noël",
                itemDescription: "A delicate almond sponge layered with chocolate truffle, cookie praline, finished with ganache, topped with cookie crunch and strawberry dots.",
                itemImages: [bucheCake],
                quantityOptions: [
                    { quantity: "½ sheet (30×40 cm) — ~12 slices", price: "45 JOD" },
                ],
                ingredients: "Eggs, sugar, almond, cocoa, butter, chocolate, heavy cream",
                allergens: "Gluten, dairy, eggs, nuts",
                seasonal: true,
                weight: "½ sheet — ~12 slices",
                variations: [],
            },
            {
                id: "mikes-lemonade",
                itemName: "Lemon Mascarpone Olive Oil Cake",
                itemDescription: "Moist olive oil cake with zesty lemon curd, vanilla bean mascarpone frosting, and lemon basil sugar.",
                itemImages: [seasonal],
                quantityOptions: [
                    { quantity: "2 layer 8 inch — serves 10–12", price: "48 JOD" },
                ],
                ingredients: "Flour, sugar, olive oil, eggs, mascarpone, lemon, basil",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "2 layer 8 inch — serves 10–12",
                variations: [],
            },
            {
                id: "chocolate-mousse",
                itemName: "King's Crown Cake",
                itemDescription: "Chocolate Mousse Cake, Raspberry Ganache, Choux Crown",
                itemImages: [chocolateMousse],
                quantityOptions: [
                    { quantity: "2 layer 8 inch — serves 10–12", price: "48 JOD" },
                ],
                ingredients: "Flour, sugar, butter, cream, eggs, chocolate, raspberries",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "2 layer 8 inch — serves 10–12",
                variations: [],
            },
        ],
    },

    // ━━ BREAKFAST PASTRIES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "breakfast-pastries",
        name: "Petits Gâteaux",
        image: muffins,
        description: "Fresh baked morning treats — the perfect indulgence with coffee or tea.",
        itemCount: 1,
        items: [
            {
                id: "kouign-amann",
                itemName: "Kouign-Amann",
                itemDescription: "A classic Breton pastry — crisp, caramelized layers of buttery laminated dough with a delicate sweet-salty finish. Golden on the outside, soft and flaky inside.",
                itemImages: [kouignAmann],
                quantityOptions: [
                    { quantity: "12", price: "48 JOD" },
                ],
                ingredients: "Flour, butter, sugar, salt",
                allergens: "Gluten, dairy",
                seasonal: false,
                weight: "100 g",
                variations: [],
            },
        ],
    },

    // ━━ COOKIES, BARS & BROWNIES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "cookies-bars-brownies",
        name: "Confections ",
        image: brownies,
        description: "Classic and creative sweet bites for any occasion.",
        itemCount: 5,
        items: [
            {
                id: "best-chocolate-chip",
                itemName: "Best Chocolate Chip Cookie",
                itemDescription: "Brown butter cookie with a mix of fine chocolates and a sprinkle of sea salt for balance.",
                itemImages: [chocolateChip],
                quantityOptions: [
                    { quantity: "4", price: "14 JOD" },
                    { quantity: "8", price: "25 JOD" },
                    { quantity: "12", price: "32 JOD" },
                    { quantity: "24", price: "55 JOD" },
                ],
                ingredients: "Flour, sugar, brown butter, eggs, chocolate, sea salt",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "70 g",
                variations: [],
            },
            {
                id: "oatmeal-raisin",
                itemName: "Pecan Brittle and Oats",
                itemDescription: "Not your average oat cookie — loaded with pecan brittle.",
                itemImages: [oatmealRaisin],
                quantityOptions: [
                    { quantity: "4", price: "14 JOD" },
                    { quantity: "8", price: "25 JOD" },
                    { quantity: "12", price: "32 JOD" },
                    { quantity: "24", price: "55 JOD" },
                ],
                ingredients: "Flour, sugar, butter, eggs, oats, pecans",
                allergens: "Gluten, dairy, eggs, nuts",
                seasonal: false,
                weight: "70 g",
                variations: [],
            },
            {
                id: "stamped-sugar-cookies",
                itemName: "Stamped Sugar Cookies",
                itemDescription: "Classic buttery and nutty sugar cookies, hand-stamped. Made with a unique blend of white, whole wheat and almond flours.",
                itemImages: [sugarCookie],
                quantityOptions: [
                    { quantity: "4", price: "14 JOD" },
                    { quantity: "8", price: "25 JOD" },
                    { quantity: "12", price: "32 JOD" },
                    { quantity: "24", price: "55 JOD" },
                ],
                ingredients: "Flour, almond flour, sugar, butter, eggs",
                allergens: "Gluten, dairy, eggs, nuts",
                seasonal: false,
                weight: "60 g",
                variations: [
                    { id: "almond-honey", name: "Almond Honey", description: "", price: "", images: [sugarCookie] },
                    { id: "espresso-chocolate", name: "Espresso Chocolate", description: "", price: "", images: [sugarCookie] },
                    { id: "lemon-zest", name: "Lemon Zest", description: "", price: "", images: [sugarCookie] },
                    { id: "chai-spice", name: "Chai Spice", description: "", price: "", images: [sugarCookie] },
                    { id: "orange-cardamom", name: "Orange Cardamom", description: "", price: "", images: [sugarCookie] },
                ],
            },
            {
                id: "ginger-cookies",
                itemName: "Ginger Cookies",
                itemDescription: "Classic ginger spice cookies with molasses and a crackly sugar crust.",
                itemImages: [gingerCookie],
                quantityOptions: [
                    { quantity: "4", price: "14 JOD" },
                    { quantity: "8", price: "25 JOD" },
                    { quantity: "12", price: "32 JOD" },
                    { quantity: "24", price: "55 JOD" },
                ],
                ingredients: "Flour, sugar, butter, eggs, ginger, molasses",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "60 g",
                variations: [],
            },
            {
                id: "rich-brownies",
                itemName: "Rich Brownies",
                itemDescription: "Ultra-rich brownies with Valrhona chocolate chips and dulce de leche.",
                itemImages: [brownies],
                quantityOptions: [
                    { quantity: "4", price: "14 JOD" },
                    { quantity: "8", price: "25 JOD" },
                    { quantity: "12", price: "32 JOD" },
                    { quantity: "24", price: "55 JOD" },
                ],
                ingredients: "Flour, sugar, butter, eggs, Valrhona chocolate, dulce de leche",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "100 g",
                variations: [],
            },
        ],
    },


    // ━━ ARTISAN SOURDOUGHS & GLUTEN FREE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: 'artisan-sourdoughs',
        name: 'Artisan Sourdoughs & Gluten Free',
        image: multiSeedSourdough,
        description: 'Using the best local and imported flours, grains and seeds.',
        itemCount: 7,
        items: [
            {
                id: 'sourdough',
                itemName: "White Sourdough",
                itemDescription: "A classic sourdough loaf with a crisp, golden crust and a light, tangy, airy crumb — perfect for sandwiches or as an everyday table bread.",
                itemImages: [whiteSourdough2, whiteSourdough1, whiteSourdough],
                quantityOptions: [
                    { quantity: "1 Loaf", price: "6 JOD" },
                ],
                ingredients: "Flour, water, salt, sourdough starter",
                allergens: "Made with flour and is prepared in a kitchen that processes nuts, eggs, and dairy products.",
                seasonal: false,
                weight: "900",
                variations: [
                    { id: "white-kilo", name: "1250 g Loaf", description: "", price: "8 JOD", images: [whiteSourdough1, whiteSourdough2, whiteSourdough] },
                ],
            },
            {
                id: 'WholeWheat',
                itemName: "Whole Wheat Sourdough",
                itemDescription: "A hearty sourdough made with stone-ground Italian Primativa flour — rustic, nutty, and full of old-world character.",
                itemImages: [wholeWheat],
                quantityOptions: [
                    { quantity: "1 Loaf", price: "6 JOD" },
                ],
                ingredients: "Whole wheat flour, water, salt, sourdough starter",
                allergens: "Made with flour and is prepared in a kitchen that processes nuts, eggs, and dairy products.",
                seasonal: false,
                weight: "800",
                variations: [
                    { id: "wheat-kilo", name: "1250 g Loaf", description: "", price: "8 JOD", images: [wholeWheat] },
                ],
            },
            {
                id: 'Rye',
                itemName: "100% Russian Rye Sourdough",
                itemDescription: "Dense, earthy rye loaf inspired by traditional Russian recipes — robust flavor with a deep, hearty crumb and a hint of sourness.",
                itemImages: [rye],
                quantityOptions: [
                    { quantity: "1 Loaf", price: "6 JOD" },
                ],
                ingredients: "Rye flour, water, salt, sourdough starter",
                allergens: "Made with flour and is prepared in a kitchen that processes nuts, eggs, and dairy products.",
                seasonal: false,
                weight: "800",
                variations: [
                    { id: "rye-kilo", name: "1250 g Loaf", description: "", price: "8 JOD", images: [rye] },
                ],
            },
            {
                id: 'artisanal',
                itemName: "Artisanal Loaf Sourdough",
                itemDescription: "Crafted from our unique blend of local, French, and Italian wheat, plus hints of barley for extra depth.",
                itemImages: [artisan],
                quantityOptions: [
                    { quantity: "1 Loaf", price: "6 JOD" },
                ],
                ingredients: "Multi-grain flour, water, salt, sourdough starter",
                allergens: "Made with flour and is prepared in a kitchen that processes nuts, eggs, and dairy products.",
                seasonal: false,
                weight: "800",
                variations: [
                    { id: "artisan-kilo", name: "1250 g Loaf", description: "", price: "8 JOD", images: [artisan] },
                ],
            },
            {
                id: 'multi-seed-whole-grain',
                itemName: "MultiSeed Whole Grain Sourdough",
                itemDescription: "Our Artisan Loaf loaded with pumpkin seeds, sunflower seeds, flaxseed, nigella, sesame, and oatmeal.",
                itemImages: [multiSeedSourdough],
                quantityOptions: [
                    { quantity: "1 Loaf", price: "8 JOD" },
                ],
                ingredients: "Multi-grain flour, seeds, nuts, water, salt, sourdough starter",
                allergens: "Made with flour, seeds and nuts and is prepared in a kitchen that processes eggs, and dairy products.",
                seasonal: false,
                weight: "900 g",
                variations: [
                    { id: "multi-seed-kilo", name: "1250 g Loaf", description: "", price: "8 JOD", images: [multiSeedSourdough] },
                ],
            },
            {
                id: 'gf-multigrain-bread',
                itemName: "Gluten-Free Multigrain Bread",
                itemDescription: "A hearty gluten-free loaf made with quinoa, brown rice, millet, and buckwheat flour, enriched with flaxseed and psyllium for natural structure and chew.",
                itemImages: [GFMultiGrainLoaf],
                quantityOptions: [
                    { quantity: "1 Loaf", price: "12 JOD" },
                ],
                ingredients: "Quinoa flour, brown rice flour, millet flour, buckwheat flour, flaxseed, psyllium husk, water, salt, yeast",
                allergens: "Prepared in a kitchen that processes eggs, dairy, and nuts.",
                seasonal: false,
                weight: "1000",
                variations: [],
            },
            {
                id: 'gf-white-bread',
                itemName: "Gluten-Free White Bread",
                itemDescription: "Soft and light gluten-free bread made mainly with white rice flour and potato starch, balanced with flaxseed and psyllium for a tender crumb.",
                itemImages: [gfWhiteBread],
                quantityOptions: [
                    { quantity: "1 Loaf", price: "9 JOD" },
                ],
                ingredients: "White rice flour, potato starch, flaxseed, psyllium husk, water, salt, yeast",
                allergens: "Prepared in a kitchen that processes eggs, dairy, and nuts.",
                seasonal: false,
                weight: "1000",
                variations: [],
            },
        ],
    },

];

