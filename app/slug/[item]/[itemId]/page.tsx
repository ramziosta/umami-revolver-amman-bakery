'use client';

import {useState} from "react";
import {use} from "react";
import Image from "next/image";
import {categories} from "@/app/data/categoryData";
import {Button} from "@/app/ui/button";
import {Card} from "@/app/ui/card";
import {Heart, ShoppingCart} from "lucide-react";

interface Params {
    params: Promise<{
        slug: string;
        itemId: string;
    }>;
}

export default function ItemPage({params}: Params) {
    const {slug, itemId} = use(params);
    const category = categories.find((cat) => cat.id === slug);
    const item = category?.items.find((i) => i.id === itemId);

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const [isFavorited, setIsFavorited] = useState(false);

    if (!category || !item) {
        return <div>Item not found</div>;
    }

    const currentOption = item.quantityOptions?.[selectedQuantity] || { quantity: 1 };

    const handleAddToCart = () => {
        console.log(`Added ${currentOption.quantity} x ${item.itemName} to cart`);
        // Add to cart logic here
    };

    return (
        <div className="min-h-screen bg-background">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-lg">
                            <Image
                                src={item.itemImages[selectedImage]}
                                alt={item.itemName}
                                width={800}
                                height={500}
                                className="w-full h-96 lg:h-[500px] object-cover rounded"
                            />
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            {item.itemImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                                        selectedImage === index
                                            ? "border-primary shadow-medium"
                                            : "border-border hover:border-primary/50"
                                    }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${item.itemName} view ${index + 1}`}
                                        width={200}
                                        height={200}
                                        className="w-full h-20 object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h1 className="text-umami-black text-3xl text-primary mb-2 tracking-wide">
                                    {item.itemName}
                                </h1>
                                <p className="text-umami-black text-muted-foreground tracking-wide">{category.name}</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="lg"
                                className={`p-2 rounded-full ${
                                    isFavorited
                                        ? "text-red-500 hover:text-red-600"
                                        : "text-muted-foreground hover:text-red-500"
                                }`}
                                onClick={() => setIsFavorited(!isFavorited)}
                            >
                                <Heart
                                    className={`h-6 w-6 ${isFavorited ? "fill-current" : ""}`}
                                />
                            </Button>
                        </div>


                        {/* Quantity Selection */}
                        <Card className="p-6 border-umami-black border-2">
                            <h3 className="text-umami-black text-lg font-bold mb-4 tracking-wide">Choose Quantity</h3>
                            <div className="space-y-3 text-umami-navy">
                                {(item.quantityOptions || []).map((option, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                            selectedQuantity === index
                                                ? "border-umami-black bg-umami-black/50 "
                                                : "border-umami-black hover:border-umami-black/50 text-black"
                                        }`}
                                        onClick={() => setSelectedQuantity(index)}
                                    >
                                        <div className="flex items-center space-x-3 w-full">

                                            {/* The row with quantity & price */}
                                            <div className="flex flex-row justify-between w-full">
                                                <div className="text-xl font-bold text-umami-black tracking-wide">
                                                    {option.quantity}
                                                </div>

                                                <div className="text-xl font-bold text-umami-black tracking-wide">
                                                    {option.price}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Add to Cart */}
                        <div className="flex items-center space-x-4 text-umami-black">
                            <Button
                                size="lg"
                                className="text-white flex-1 bg-umami-black hover:bg-primary-glow transition-colors duration-300"
                                onClick={handleAddToCart}
                            >
                                <ShoppingCart className="h-5 w-5 mr-2 tracking-wide"/>
                                Add to Cart -${'price' in currentOption ? currentOption.price : 'N/A'}
                            </Button>
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                            <h3 className="text-umami-black text-lg  tracking-wide">Description</h3>
                            <p className="text-umami-black font-glimp text-muted-foreground leading-relaxed tracking-wide">
                                {item.itemDescription}
                            </p>
                        </div>

                        {/* Ingredients */}
                        {item.ingredients && (
                            <div className="space-y-4">
                                <h3 className="text-umami-black text-lg font-semibold tracking-wide">Ingredients</h3>
                                <p className="text-umami-black text-muted-foreground tracking-wide">{item.ingredients}</p>
                            </div>
                        )}

                        {/* Allergens */}
                        {item.allergens && (
                            <div className="space-y-4">
                                <h3 className="text-umami-black text-lg font-semibold tracking-wide">Allergen Information</h3>
                                <p className="text-umami-black text-muted-foreground text-sm tracking-wide">{item.allergens}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}