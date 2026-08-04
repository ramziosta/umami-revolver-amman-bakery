import type { Category, FeaturedCategory, LocalizedText } from '@/app/types/categoryTypes';

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
export type { Category, FeaturedCategory, LocalizedText };
export type { QuantityOption, Variation, CategoryItem } from '@/app/types/categoryTypes';

/** Shorthand for building a bilingual string. */
const t = (en: string, ar: string): LocalizedText => ({ en, ar });


// ── CATEGORIES ─────────────────────────────────────────────────────────────

export const categories: Category[] = [

    // ━━ MILLE CRÊPE CAKES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "mille-crepe-cakes",
        name: t("Mille Crêpe Cakes", "كيك ميل كريب"),
        image: ajloun,
        description: t(
            "Twenty paper-thin crêpe layers. Each cake assembled to order.",
            "عشرون طبقة رقيقة كورق الكريب. كل كيكة تُجمَّع حسب الطلب."
        ),
        items: [
            {
                id: "creme-brulee-crepe",
                itemName: t("Crème Brûlée Mille Crêpe", "ميل كريب كريم بروليه"),
                itemDescription: t(
                    "Silky vanilla custard layers with a crisp brûléed top.",
                    "طبقات كريمة فانيليا حريرية مع طبقة علوية مقرمشة محروقة بالكراميل."
                ),
                itemImages: [cremeBruleeCrepe],
                quantityOptions: [
                    { quantity: t("9 inch — serves 12–14", "9 إنش — يكفي 12 إلى 14 شخصًا"), price: "55 JOD" },
                    { quantity: t("8 inch — serves 8-10", "8 إنش — يكفي 8 إلى 10 أشخاص"), price: "47 JOD" },
                ],
                ingredients: t("Flour, sugar, milk, cream, butter, eggs, vanilla bean", "طحين، سكر، حليب، كريمة، زبدة، بيض، حبة فانيليا"),
                allergens: t("Gluten, dairy, eggs", "غلوتين، ألبان، بيض"),
                seasonal: false,
                weight: t("", ""),
                variations: [],
            },
            {
                id: "tiramisu-crepe",
                itemName: t("Tiramisu Mille Crêpe", "ميل كريب تيراميسو"),
                itemDescription: t(
                    "Twenty chocolate espresso crêpes, espresso-soaked sponge, and sabayon-mascarpone cream. Finished with cocoa.",
                    "عشرون طبقة كريب بالشوكولاتة والإسبريسو، مع إسفنجية منقوعة بالإسبريسو وكريمة سابايون-ماسكاربوني. تُنهى بالكاكاو."
                ),
                itemImages: [tiramisuCrepe],
                quantityOptions: [
                    { quantity: t("9 inch — serves 12-14", "9 إنش — يكفي 12 إلى 14 شخصًا"), price: "63 JOD" },
                    { quantity: t("8 inch — serves 8-10", "8 إنش — يكفي 8 إلى 10 أشخاص"), price: "54 JOD" },
                ],
                ingredients: t("Flour, sugar, milk, butter, eggs, mascarpone, coffee", "طحين، سكر، حليب، زبدة، بيض، ماسكاربوني، قهوة"),
                allergens: t("Gluten, dairy, eggs", "غلوتين، ألبان، بيض"),
                seasonal: false,
                weight: t("", ""),
                variations: [],
            },
            {
                id: "succes-praline-crepe",
                itemName: t("Succès Praliné Mille Crêpe", "ميل كريب سوكسيه برالينيه"),
                itemDescription: t(
                    "Twenty layers of brown butter crêpes filled with almond and hazelnut praliné diplomat cream. A praliné crémeux ribbon is piped over a joconde disc insert, finished with crushed praliné and whole hazelnuts. Set overnight.",
                    "عشرون طبقة كريب بالزبدة المحمّرة، محشوة بكريمة دبلومات البرالينيه باللوز والبندق. تُضاف طبقة كريمو برالينيه فوق قرص جوكوندا، وتُنهى بالبرالينيه المطحون وحبات بندق كاملة. تُترك لترتاح ليلة كاملة."
                ),
                itemImages: [succes],
                quantityOptions: [
                    { quantity: t("9 inch — serves 12-14", "9 إنش — يكفي 12 إلى 14 شخصًا"), price: "63 JOD" },
                    { quantity: t("8 inch — serves 8-10", "8 إنش — يكفي 8 إلى 10 أشخاص"), price: "54 JOD" },
                ],
                ingredients: t("Flour, almond flour, sugar, milk, butter, eggs, hazelnuts, almonds", "طحين، طحين لوز، سكر، حليب، زبدة، بيض، بندق، لوز"),
                allergens: t("Gluten, dairy, eggs, tree nuts", "غلوتين، ألبان، بيض، مكسرات"),
                seasonal: false,
                weight: t("", ""),
                variations: [],
            },
            {
                id: "orange-blossom-crepe",
                itemName: t("Orange Blossom Mille Crêpe", "ميل كريب زهر البرتقال"),
                itemDescription: t(
                    "Twenty layers of olive oil crêpes scented with orange blossom water and ground mastic, filled with labneh diplomat cream. Finished with warm Ajloun honey, crushed pistachio, and dried rose petals. Set overnight.",
                    "عشرون طبقة كريب بزيت الزيتون معطرة بماء الزهر والمستكة المطحونة، محشوة بكريمة دبلومات اللبنة. تُنهى بعسل عجلون الدافئ، والفستق المطحون، وبتلات الورد المجففة. تُترك لترتاح ليلة كاملة."
                ),
                itemImages: [ajloun],
                quantityOptions: [
                    { quantity: t("9 inch — serves 12-14", "9 إنش — يكفي 12 إلى 14 شخصًا"), price: "58 JOD" },
                    { quantity: t("8 inch — serves 8-10", "8 إنش — يكفي 8 إلى 10 أشخاص"), price: "50 JOD" },
                ],
                ingredients: t(
                    "Flour, olive oil, orange blossom water, mastic, sugar, milk, eggs, labneh, butter, pistachio, honey, rose petals",
                    "طحين، زيت زيتون، ماء زهر، مستكة، سكر، حليب، بيض، لبنة، زبدة، فستق، عسل، بتلات ورد"
                ),
                allergens: t("Gluten, dairy, eggs, tree nuts", "غلوتين، ألبان، بيض، مكسرات"),
                seasonal: false,
                weight: t("", ""),
                variations: [],
            },
            {
                id: "strawberry-lychee-hibiscus-crepe",
                itemName: t("Strawberry, Lychee & Hibiscus Mille Crêpe", "ميل كريب الفراولة والليتشي والكركديه"),
                itemDescription: t(
                    "Twenty layers of strawberry yogurt crêpes, filled with strawberry and lychee diplomat cream and a set hibiscus gel core. Finished with a fresh strawberry compote glaze and freeze-dried strawberry. Set overnight.",
                    "عشرون طبقة كريب بزبادي الفراولة، محشوة بكريمة دبلومات الفراولة والليتشي وقلب هلامي من الكركديه. تُنهى بتغليف كومبوت الفراولة الطازجة وفراولة مجففة بالتجميد. تُترك لترتاح ليلة كاملة."
                ),
                itemImages: [strawberryLychee],
                quantityOptions: [
                    { quantity: t("9 inch — serves 12–14", "9 إنش — يكفي 12 إلى 14 شخصًا"), price: "63 JOD" },
                    { quantity: t("8 inch — serves 8–10", "8 إنش — يكفي 8 إلى 10 أشخاص"), price: "54 JOD" },
                ],
                ingredients: t(
                    "Flour, eggs, milk, yogurt, strawberry, lychee, hibiscus, cream, butter, sugar, vanilla, rose water, lemon",
                    "طحين، بيض، حليب، زبادي، فراولة، ليتشي، كركديه، كريمة، زبدة، سكر، فانيليا، ماء ورد، ليمون"
                ),
                allergens: t("Gluten, dairy, eggs", "غلوتين، ألبان، بيض"),
                seasonal: false,
                weight: t("", ""),
                variations: [],
            },
            {
                id: "coconut-crepe",
                itemName: t("Coconut & Passion Fruit Mille Crêpe", "ميل كريب جوز الهند وفاكهة الباشن"),
                itemDescription: t(
                    "Delicate coconut crêpe layers with coconut diplomat cream, passion fruit accents, and a glossy mango glaze.",
                    "طبقات كريب جوز الهند الرقيقة مع كريمة دبلومات جوز الهند، لمسات فاكهة الباشن، وتغليف لامع من المانجو."
                ),
                itemImages: [coconutCrepe],
                quantityOptions: [
                    { quantity: t("9 inch — serves 12–14", "9 إنش — يكفي 12 إلى 14 شخصًا"), price: "63 JOD" },
                    { quantity: t("8 inch — serves 8–10", "8 إنش — يكفي 8 إلى 10 أشخاص"), price: "54 JOD" },
                ],
                ingredients: t("Flour, sugar, milk, cream, butter, eggs, coconut, passion fruit, mango", "طحين، سكر، حليب، كريمة، زبدة، بيض، جوز الهند، فاكهة الباشن، مانجو"),
                allergens: t("Gluten, dairy, eggs", "غلوتين، ألبان، بيض"),
                seasonal: true,
                weight: t("", ""),
                variations: [],

            },
            {
                id: "trois-crepe",
                itemName: t("Trois — Chocolate Mille Crêpe", "تروا — ميل كريب الشوكولاتة"),
                itemDescription: t(
                    "Three chocolates walked from bitter to soft — dark, toasted milk, caramelized white. A raspberry seam where the dark zone ends. A feuilletine disc that announces itself only when the knife goes through.",
                    "ثلاث شوكولاتات تنتقل من المرارة إلى النعومة — داكنة، حليب محمّص، وبيضاء مكرملة. خط من التوت حيث تنتهي منطقة الشوكولاتة الداكنة. قرص فوييتين مقرمش لا يُكتشف إلا عند قطع الكيكة."
                ),
                itemImages: [troisCrepe],
                quantityOptions: [
                    { quantity: t("9 inch — serves 12 -14", "9 إنش — يكفي 12 إلى 14 شخصًا"), price: "63 JOD" },
                    { quantity: t("8 inch — serves 8–10", "8 إنش — يكفي 8 إلى 10 أشخاص"), price: "54 JOD" },
                ],
                ingredients: t(
                    "Flour, sugar, milk, butter, eggs, dark chocolate, milk chocolate, caramelized white chocolate, heavy cream, freeze-dried raspberry, feuilletine, cocoa powder, fleur de sel",
                    "طحين، سكر، حليب، زبدة، بيض، شوكولاتة داكنة، شوكولاتة حليب، شوكولاتة بيضاء مكرملة، كريمة ثقيلة، توت مجفف بالتجميد، فوييتين، مسحوق كاكاو، ملح فلور دو سيل"
                ),
                allergens: t(
                    "Gluten, dairy, eggs, soy (caramelized white chocolate — check supplier)",
                    "غلوتين، ألبان، بيض، صويا (الشوكولاتة البيضاء المكرملة — يُرجى التأكد من المورد)"
                ),
                seasonal: false,
                weight: t("", ""),
                variations: [],
            },

            {
                id: "raspberry-almond-crepe",
                itemName: t("Raspberry Almond & White Chocolate Mille Crêpe", "ميل كريب التوت واللوز والشوكولاتة البيضاء"),
                itemDescription: t(
                    "Delicate layers of crêpes filled with almond cream, tangy raspberry compote, and a luscious white chocolate ganache.",
                    "طبقات كريب رقيقة محشوة بكريمة اللوز، وكومبوت التوت المنعش، وغاناش الشوكولاتة البيضاء الغنية."
                ),
                itemImages: [raspberryCrepe],
                quantityOptions: [
                    { quantity: t("9 inch — serves 12–14", "9 إنش — يكفي 12 إلى 14 شخصًا"), price: "60 JOD" },
                    { quantity: t("8 inch — serves 10–12", "8 إنش — يكفي 10 إلى 12 شخصًا"), price: "52 JOD" },
                ],
                ingredients: t("Flour, sugar, milk, butter, eggs, mascarpone, white chocolate, raspberry, almond", "طحين، سكر، حليب، زبدة، بيض، ماسكاربوني، شوكولاتة بيضاء، توت، لوز"),
                allergens: t("Gluten, dairy, eggs, nuts", "غلوتين، ألبان، بيض، مكسرات"),
                seasonal: false,
                weight: t("9 inch — serves 12–14", "9 إنش — يكفي 12 إلى 14 شخصًا"),
                variations: [],
            },
        ],
    },

    // ━━ SIGNATURE CAKES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
        id: "tiered-cakes",
        name: t("Signature Cakes", "الكيكات المميزة"),
        image: carrotCake,
        description: t("Layered, tailored, and uniquely unforgettable.", "طبقات مصممة بعناية، لا تُنسى بتفردها."),
        items: [
            {
                id: "carrot-pecan-cake",
                itemName: t("Brown Butter Carrot & Pecan Cake", "كيك الجزر والبيكان بالزبدة المحمّرة"),
                itemDescription: t(
                    "Three-layer spiced carrot cake made with brown butter, dual-cut carrots, toasted pecans, and a lactic-forward mascarpone–cream cheese frosting. Finished with honey carrot soak, a white chocolate feuilletine crunch, and crisp carrot curls.",
                    "كيك جزر متبّل من ثلاث طبقات، مُحضّر بالزبدة المحمّرة، وجزر مقطّع بطريقتين، وبيكان محمّص، مع كريمة تغطية من الماسكاربوني وجبنة الكريمة ذات النكهة اللبنية. يُنهى بنقيع الجزر بالعسل، وطبقة مقرمشة من فوييتين الشوكولاتة البيضاء، وشرائح جزر مقرمشة."
                ),
                itemImages: [carrotCake],
                quantityOptions: [
                    { quantity: t("3 layer 8 inch serves generous 10-12", "3 طبقات، 8 إنش — يكفي 10 إلى 12 شخصًا بسخاء"), price: "65 JOD" },
                ],
                ingredients: t("Flour, almond, sugar, butter, eggs, buttermilk, carrots, pecans, cream cheese, mascarpone", "طحين، لوز، سكر، زبدة، بيض، حليب مخيض، جزر، بيكان، جبنة كريمة، ماسكاربوني"),
                allergens: t("Gluten, dairy, eggs, nuts", "غلوتين، ألبان، بيض، مكسرات"),
                seasonal: false,
                weight: t("3 layer 8 inch", "3 طبقات، 8 إنش"),
                variations: [],
            },
            {
                id: "chocolate-noir",
                itemName: t("Chocolate Noir", "شوكولاتة نوار"),
                itemDescription: t(
                    "Three layers of dark chocolate olive oil cake with cardamom, filled with whipped miso chocolate ganache and a caramel feuilletine crunch. Finished with a feuilletine crust, cocoa dusting, and fleur de sel.",
                    "ثلاث طبقات من كيك الشوكولاتة الداكنة بزيت الزيتون والهيل، محشوة بغاناش الشوكولاتة والميسو المخفوق وطبقة مقرمشة من الكراميل والفوييتين. تُنهى بقشرة فوييتين، ورشة كاكاو، وملح فلور دو سيل."
                ),
                itemImages: [chocolateNoir],
                quantityOptions: [
                    { quantity: t("3 layer 8 inch serves generous 10-12", "3 طبقات، 8 إنش — يكفي 10 إلى 12 شخصًا بسخاء"), price: "70 JOD" },
                ],
                ingredients: t(
                    "Flour, cocoa, chocolate, sugar, olive oil, eggs, buttermilk, miso, cream, labneh, feuilletine, cardamom, malt, milk powder",
                    "طحين، كاكاو، شوكولاتة، سكر، زيت زيتون، بيض، حليب مخيض، ميسو، كريمة، لبنة، فوييتين، هيل، شعير محمّص، حليب بودرة"
                ),
                allergens: t("Gluten, dairy, eggs, soy", "غلوتين، ألبان، بيض، صويا"),
                seasonal: false,
                weight: t("3 layer 8 inch", "3 طبقات، 8 إنش"),
                variations: [],
            },
            {
                id: "white-confetti-cake",
                itemName: t("Celebration Confetti Cake", "كيك الاحتفال بالكونفيتي"),
                itemDescription: t(
                    "Soft, fluffy vanilla bean cake layered with rainbow confetti sprinkles and filled with a light mascarpone whipped cream. Frosted in silky French buttercream.",
                    "كيك فانيليا طري وهش، مطبّق برشات كونفيتي ملونة ومحشو بكريمة ماسكاربوني مخفوقة خفيفة. مغطى بكريمة زبدة فرنسية حريرية."
                ),
                itemImages: [confettiCake],
                quantityOptions: [
                    { quantity: t("3 layer 8 inch", "3 طبقات، 8 إنش"), price: "55 JOD" },
                ],
                ingredients: t("Flour, sugar, milk, butter, eggs, vanilla bean, mascarpone", "طحين، سكر، حليب، زبدة، بيض، حبة فانيليا، ماسكاربوني"),
                allergens: t("Gluten, dairy, eggs", "غلوتين، ألبان، بيض"),
                seasonal: false,
                weight: t("3 layer 8 inch", "3 طبقات، 8 إنش"),
                variations: [],
            },
            {
                id: "chocolate-cake",
                itemName: t("Triple Chocolate Cake", "كيك الشوكولاتة الثلاثية"),
                itemDescription: t(
                    "Rich, moist dark chocolate sponge layered with milk chocolate crèmeux, chocolate crunch feuilletine and French chocolate buttercream.",
                    "إسفنجية شوكولاتة داكنة غنية ورطبة، مطبّقة بكريمو شوكولاتة الحليب، وطبقة مقرمشة من فوييتين الشوكولاتة، وكريمة زبدة الشوكولاتة الفرنسية."
                ),
                itemImages: [chocolateCake],
                quantityOptions: [
                    { quantity: t("3 layer 8 inch", "3 طبقات، 8 إنش"), price: "65 JOD" },
                ],
                ingredients: t("Flour, sugar, milk, butter, eggs, chocolate", "طحين، سكر، حليب، زبدة، بيض، شوكولاتة"),
                allergens: t("Gluten, dairy, eggs", "غلوتين، ألبان، بيض"),
                seasonal: false,
                weight: t("3 layer 8 inch", "3 طبقات، 8 إنش"),
                variations: [],
            },
            {
                id: "coconut-cake",
                itemName: t("Coconut Passion Fruit Dream Cake", "كيك أحلام جوز الهند وفاكهة الباشن"),
                itemDescription: t(
                    "Soft coconut cake layered with German buttercream, passion fruit filling and finished with toasted coconut flakes.",
                    "كيك جوز الهند الطري، مطبّق بكريمة الزبدة الألمانية، وحشوة فاكهة الباشن، ويُنهى برقائق جوز الهند المحمّصة."
                ),
                itemImages: [coconutCake],
                quantityOptions: [
                    { quantity: t("3 layer 8 inch", "3 طبقات، 8 إنش"), price: "60 JOD" },
                ],
                ingredients: t("Flour, sugar, milk, butter, eggs, coconut, passion fruit", "طحين، سكر، حليب، زبدة، بيض، جوز الهند، فاكهة الباشن"),
                allergens: t("Gluten, dairy, eggs", "غلوتين، ألبان، بيض"),
                seasonal: false,
                weight: t("3 layer 8 inch", "3 طبقات، 8 إنش"),
                variations: [],
            },
            {
                id: "banana-nut-cake",
                itemName: t("Dulce and Banana", "دولسي والموز"),
                itemDescription: t(
                    "A moist banana sponge studded with toasted pecans, layered with banana pudding filling and finished with a tangy cream cheese frosting and dulce de leche glaze.",
                    "إسفنجية موز رطبة مرصّعة بالبيكان المحمّص، مطبّقة بحشوة بودينغ الموز، وتُنهى بكريمة تغطية جبنة الكريمة المنعشة وتغليف الدولسي دي ليتشي."
                ),
                itemImages: [bananaCake],
                quantityOptions: [
                    { quantity: t("3 layer rectangular (6×6×12 inch)", "3 طبقات، مستطيلة (6×6×12 إنش)"), price: "65 JOD" },
                ],
                ingredients: t("Flour, sugar, milk, butter, eggs, pecans, banana, cream cheese, dulce de leche", "طحين، سكر، حليب، زبدة، بيض، بيكان، موز، جبنة كريمة، دولسي دي ليتشي"),
                allergens: t("Gluten, dairy, eggs, nuts", "غلوتين، ألبان، بيض، مكسرات"),
                seasonal: false,
                weight: t("3 layer rectangular", "3 طبقات، مستطيلة"),
                variations: [],
            },
            {
                id: "mikes-lemonade",
                itemName: t("Lemon Mascarpone Olive Oil Cake", "كيك زيت الزيتون بالليمون والماسكاربوني"),
                itemDescription: t(
                    "Moist olive oil cake with zesty lemon curd, vanilla bean mascarpone frosting, and lemon basil sugar.",
                    "كيك زيت زيتون رطب مع كريمة الليمون المنعشة، وكريمة تغطية ماسكاربوني بحبة الفانيليا، وسكر الليمون والريحان."
                ),
                itemImages: [seasonal],
                quantityOptions: [
                    { quantity: t("3 layer 8 inch — serves 10–12", "3 طبقات، 8 إنش — يكفي 10 إلى 12 شخصًا"), price: "65 JOD" },
                ],
                ingredients: t("Flour, sugar, olive oil, eggs, mascarpone, lemon, basil", "طحين، سكر، زيت زيتون، بيض، ماسكاربوني، ليمون، ريحان"),
                allergens: t("Gluten, dairy, eggs", "غلوتين، ألبان، بيض"),
                seasonal: false,
                weight: t("2 layer 8 inch — serves 10–12", "طبقتان، 8 إنش — يكفي 10 إلى 12 شخصًا"),
                variations: [],
            },
            {
                id: "chocolate-mousse",
                itemName: t("King's Crown Cake", "كيك تاج الملك"),
                itemDescription: t("Chocolate Mousse Cake, Raspberry Ganache, Choux Crown", "كيك موس الشوكولاتة، غاناش التوت، تاج الشو"),
                itemImages: [chocolateMousse],
                quantityOptions: [
                    { quantity: t("2 layer 8 inch — serves 10–12", "طبقتان، 8 إنش — يكفي 10 إلى 12 شخصًا"), price: "65 JOD" },
                ],
                ingredients: t("Flour, sugar, butter, cream, eggs, chocolate, raspberries", "طحين، سكر، زبدة، كريمة، بيض، شوكولاتة، توت"),
                allergens: t("Gluten, dairy, eggs", "غلوتين، ألبان، بيض"),
                seasonal: false,
                weight: t("2 layer 8 inch — serves 10–12", "طبقتان، 8 إنش — يكفي 10 إلى 12 شخصًا"),
                variations: [],
            },
        ],
    },

];
