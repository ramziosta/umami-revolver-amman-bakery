export interface QuantityOption {
    quantity: number;
    price: string;
}

export interface MenuItem {
    id: string;
    itemName: string;
    itemDescription: string;
    itemImages: string[];
    seasonal?: boolean;
    quantityOptions: QuantityOption[];
}

export interface Category {
    id: string;
    name: string;
    image: string;
    description: string;
    itemCount: number;
    items: MenuItem[];
}
