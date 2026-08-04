import type { Category, FeaturedCategory } from '@/app/types/categoryTypes';

import tiramisuCrepe from "@/app/assets/tiramisu.jpg";
import cremeBruleeCrepe from "@/app/assets/Whole Cake Heads-on.jpg";
import raspberryCrepe from "@/app/assets/raspberry-almond-mille-crepe.png";
import succes from "@/app/assets/succes.jpg";
import ajloun from "@/app/assets/OrangeBlossom.jpg";
import seasonal from "@/app/assets/lemon-basil.png";
import strawberryLychee from "@/app/assets/StrawberryMilleCrepe.jpg"
import coconutCrepe from "@/app/assets/coconutmille.jpg";
import troisCrepe from "@/app/assets/Trois.jpg";

import carrotCake from "@/app/assets/CarrotCake.jpg";
import chocolateNoir from "@/app/assets/ChocolateNoir.jpg";
import bananaCake from "@/app/assets/dulceAndBanana.png";
import chocolateMousse from "@/app/assets/chocolate-mousse.jpeg";
import chocolateCake from "@/app/assets/chocolate-cake.png";
import coconutCake from "@/app/assets/coconut-cake.png";
import confettiCake from "@/app/assets/funfetti1.jpg";

// ── RE-EXPORT TYPES ────────────────────────────────────────────────────────
export type { Category, FeaturedCategory };
export type { QuantityOption, Variation, CategoryItem } from '@/app/types/categoryTypes';


// ── CATEGORIES ─────────────────────────────────────────────────────────────

export const categories: Category[] = [

    // ━━ MILLE CRÊPE CAKES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "mille-crepe-cakes",
        name: "Mille Crêpe Cakes",
        image: ajloun,
        description: "Twenty paper-thin crêpe layers. Each cake assembled to order.",
        items: [
            {
                id: "creme-brulee-crepe",
                itemName: "Crème Brûlée Mille Crêpe",
                itemDescription: "Silky vanilla custard layers with a crisp brûléed top.",
                itemImages: [cremeBruleeCrepe],
                quantityOptions: [
                    { quantity: "9 inch — serves 12–14", price: "55 JOD" },
                    { quantity: "8 inch — serves 8-10", price: "47 JOD" },
                ],
                ingredients: "Flour, sugar, milk, cream, butter, eggs, vanilla bean",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "",
                variations: [],
            },
            {
                id: "tiramisu-crepe",
                itemName: "Tiramisu Mille Crêpe",
                itemDescription: "Twenty chocolate espresso crêpes, espresso-soaked sponge, and sabayon-mascarpone cream. Finished with cocoa.",
                itemImages: [tiramisuCrepe],
                quantityOptions: [
                    { quantity: "9 inch — serves 12-14", price: "63 JOD" },
                    { quantity: "8 inch — serves 8-10", price: "54 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, mascarpone, coffee",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "",
                variations: [],
            },
            {
                id: "succes-praline-crepe",
                itemName: "Succès Praliné Mille Crêpe",
                itemDescription: "Twenty layers of brown butter crêpes filled with almond and hazelnut praliné diplomat cream. A praliné crémeux ribbon is piped over a joconde disc insert, finished with crushed praliné and whole hazelnuts. Set overnight.",
                itemImages: [succes],
                quantityOptions: [
                    { quantity: "9 inch — serves 12-14", price: "63 JOD" },
                    { quantity: "8 inch — serves 8-10", price: "54 JOD" },
                ],
                ingredients: "Flour, almond flour, sugar, milk, butter, eggs, hazelnuts, almonds",
                allergens: "Gluten, dairy, eggs, tree nuts",
                seasonal: false,
                weight: "",
                variations: [],
            },
            {
                id: "orange-blossom-crepe",
                itemName: "Orange Blossom Mille Crêpe",
                itemDescription: "Twenty layers of olive oil crêpes scented with orange blossom water and ground mastic, filled with labneh diplomat cream. Finished with warm Ajloun honey, crushed pistachio, and dried rose petals. Set overnight.",
                itemImages: [ajloun],
                quantityOptions: [
                    { quantity: "9 inch — serves 12-14", price: "58 JOD" },
                    { quantity: "8 inch — serves 8-10", price: "50 JOD" },
                ],
                ingredients: "Flour, olive oil, orange blossom water, mastic, sugar, milk, eggs, labneh, butter, pistachio, honey, rose petals",
                allergens: "Gluten, dairy, eggs, tree nuts",
                seasonal: false,
                weight: "",
                variations: [],
            },
            {
                id: "strawberry-lychee-hibiscus-crepe",
                itemName: "Strawberry, Lychee & Hibiscus Mille Crêpe",
                itemDescription: "Twenty layers of strawberry yogurt crêpes, filled with strawberry and lychee diplomat cream and a set hibiscus gel core. Finished with a fresh strawberry compote glaze and freeze-dried strawberry. Set overnight.",
                itemImages: [strawberryLychee],
                quantityOptions: [
                    { quantity: "9 inch — serves 12–14", price: "63 JOD" },
                    { quantity: "8 inch — serves 8–10", price: "54 JOD" },
                ],
                ingredients: "Flour, eggs, milk, yogurt, strawberry, lychee, hibiscus, cream, butter, sugar, vanilla, rose water, lemon",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight:"" ,
                variations: [],
            },
            {
                id: "coconut-crepe",
                itemName: "Coconut & Passion Fruit Mille Crêpe",
                itemDescription: "Delicate coconut crêpe layers with coconut diplomat cream, passion fruit accents, and a glossy mango glaze.",
                itemImages: [coconutCrepe],
                quantityOptions: [
                    { quantity: "9 inch — serves 12–14", price: "63 JOD" },
                    { quantity: "8 inch — serves 8–10", price: "54 JOD" },
                ],
                ingredients: "Flour, sugar, milk, cream, butter, eggs, coconut, passion fruit, mango",
                allergens: "Gluten, dairy, eggs",
                seasonal: true,
                weight: "",
                variations: [],

            },
            {
                id: "trois-crepe",
                itemName: "Trois — Chocolate Mille Crêpe",
                itemDescription: "Three chocolates walked from bitter to soft — dark, toasted milk, caramelized white. A raspberry seam where the dark zone ends. A feuilletine disc that announces itself only when the knife goes through.",
                itemImages: [troisCrepe],
                quantityOptions: [
                    { quantity: "9 inch — serves 12 -14", price: "63 JOD" },
                    { quantity: "8 inch — serves 8–10", price: "54 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, dark chocolate, milk chocolate, caramelized white chocolate, heavy cream, freeze-dried raspberry, feuilletine, cocoa powder, fleur de sel",
                allergens: "Gluten, dairy, eggs, soy (caramelized white chocolate — check supplier)",
                seasonal: false,
                weight: "",
                variations: [],
            },

            {
                id: "raspberry-almond-crepe",
                itemName: "Raspberry Almond & White Chocolate Mille Crêpe",
                itemDescription: "Delicate layers of crêpes filled with almond cream, tangy raspberry compote, and a luscious white chocolate ganache.",
                itemImages: [raspberryCrepe],
                quantityOptions: [
                    { quantity: "9 inch — serves 12–14", price: "60 JOD" },
                    { quantity: "8 inch — serves 10–12", price: "52 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, mascarpone, white chocolate, raspberry, almond",
                allergens: "Gluten, dairy, eggs, nuts",
                seasonal: false,
                weight: "9 inch — serves 12–14",
                variations: [],
            },
        ],
    },

    // ━━ SIGNATURE CAKES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "tiered-cakes",
        name: "Signature Cakes",
        image: carrotCake,
        description: "Layered, tailored, and uniquely unforgettable.",
        items: [
            {
                id: "carrot-pecan-cake",
                itemName: "Brown Butter Carrot & Pecan Cake",
                itemDescription: "Three-layer spiced carrot cake made with brown butter, dual-cut carrots, toasted pecans, and a lactic-forward mascarpone–cream cheese frosting. Finished with honey carrot soak, a white chocolate feuilletine crunch, and crisp carrot curls.",
                itemImages: [carrotCake],
                quantityOptions: [
                    { quantity: "3 layer 8 inch serves generous 10-12", price: "65 JOD" },
                ],
                ingredients: "Flour, almond, sugar, butter, eggs, buttermilk, carrots, pecans, cream cheese, mascarpone",
                allergens: "Gluten, dairy, eggs, nuts",
                seasonal: false,
                weight: "3 layer 8 inch",
                variations: [],
            },
            {
                id: "chocolate-noir",
                itemName: "Chocolate Noir",
                itemDescription: "Three layers of dark chocolate olive oil cake with cardamom, filled with whipped miso chocolate ganache and a caramel feuilletine crunch. Finished with a feuilletine crust, cocoa dusting, and fleur de sel.",
                itemImages: [chocolateNoir],
                quantityOptions: [
                    { quantity: "3 layer 8 inch serves generous 10-12", price: "70 JOD" },
                ],
                ingredients: "Flour, cocoa, chocolate, sugar, olive oil, eggs, buttermilk, miso, cream, labneh, feuilletine, cardamom, malt, milk powder",
                allergens: "Gluten, dairy, eggs, soy",
                seasonal: false,
                weight: "3 layer 8 inch",
                variations: [],
            },
            {
                id: "white-confetti-cake",
                itemName: "Celebration Confetti Cake",
                itemDescription: "Soft, fluffy vanilla bean cake layered with rainbow confetti sprinkles and filled with a light mascarpone whipped cream. Frosted in silky French buttercream.",
                itemImages: [confettiCake],
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
                itemImages: [chocolateCake],
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
                itemImages: [coconutCake],
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
                itemImages: [bananaCake],
                quantityOptions: [
                    { quantity: "3 layer rectangular (6×6×12 inch)", price: "65 JOD" },
                ],
                ingredients: "Flour, sugar, milk, butter, eggs, pecans, banana, cream cheese, dulce de leche",
                allergens: "Gluten, dairy, eggs, nuts",
                seasonal: false,
                weight: "3 layer rectangular",
                variations: [],
            },
            {
                id: "mikes-lemonade",
                itemName: "Lemon Mascarpone Olive Oil Cake",
                itemDescription: "Moist olive oil cake with zesty lemon curd, vanilla bean mascarpone frosting, and lemon basil sugar.",
                itemImages: [seasonal],
                quantityOptions: [
                    { quantity: "3 layer 8 inch — serves 10–12", price: "65 JOD" },
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
                    { quantity: "2 layer 8 inch — serves 10–12", price: "65 JOD" },
                ],
                ingredients: "Flour, sugar, butter, cream, eggs, chocolate, raspberries",
                allergens: "Gluten, dairy, eggs",
                seasonal: false,
                weight: "2 layer 8 inch — serves 10–12",
                variations: [],
            },
        ],
    },

];
