import {useEffect, useState} from "react";
import { collection, getDocs } from 'firebase/firestore';
import type { Category } from './categoryData';
import {db} from "@/firebaseConfig";


const useMenuData = () => {
    const [bakedGoodsMenuCategories, setBakedGoodsMenuCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "bakedGoods"));
                const menuData = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        name: data.name || '',
                        image: data.image || null,
                        categoryDescription: data.categoryDescription || '',
                        description: data.description || '',
                        itemCount: data.itemCount || 0,
                        items: data.items || [],
                        order: data.order || 0
                    };
                });

                // Sort by order field
                const sortedMenuData = menuData.sort((a, b) => a.order - b.order);
                setBakedGoodsMenuCategories(sortedMenuData as Category[]);

                if (sortedMenuData.length > 0) {
                    // Set the first item in sorted order as active tab, or find "breads" if it exists
                    const firstTabId = sortedMenuData.find(item => item.id === "breads")?.id || sortedMenuData[0]?.id;

                }
            } catch (error) {
                console.error("Error fetching menu from Firestore:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    return { bakedGoodsMenuCategories, loading };
};