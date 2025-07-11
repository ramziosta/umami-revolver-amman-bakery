
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ShoppingCart } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Artisan Sourdough',
    price: 24.99,
    originalPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    badge: 'Bestseller',
    description: 'Traditional 48-hour fermented sourdough with a perfect crust'
  },
  {
    id: 2,
    name: 'Chocolate Croissant',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1555507036-ab794f0eb6bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    badge: 'New',
    description: 'Buttery pastry filled with premium Belgian dark chocolate'
  },
  {
    id: 3,
    name: 'Vanilla Bean Cake',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    badge: 'Premium',
    description: 'Layers of vanilla sponge with Madagascar vanilla bean cream'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-umami-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-goglast text-umami-navy mb-4 font-bold tracking-[0.5rem]">
            Featured Favorites
          </h2>
          <p className="text-xl text-umami-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            Handpicked selections that showcase our commitment to exceptional quality and taste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group elegant-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <Badge 
                  className={`absolute top-4 left-4 ${
                    product.badge === 'Bestseller' ? 'bg-umami-pink' :
                    product.badge === 'New' ? 'bg-umami-blue' : 'bg-umami-navy'
                  } text-white`}
                >
                  {product.badge}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-goglast text-umami-navy mb-2 font-bold">
                  {product.name}
                </h3>
                
                <p className="text-umami-charcoal/70 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-umami-navy">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-umami-gray line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-umami-navy hover:bg-umami-charcoal text-white hover-invert transition-all duration-300 flex items-center justify-center space-x-2"
                  size="lg"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-umami-navy text-umami-navy hover:bg-umami-navy hover:text-white transition-all duration-300 px-8 py-4"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
