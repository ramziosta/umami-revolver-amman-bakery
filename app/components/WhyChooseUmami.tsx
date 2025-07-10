
import { Award, Clock, Heart, Settings, ChefHat, Cake, Truck, Shell, SunSnow, Gem } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Over 15 years of artisan excellence',
  },
  {
    icon: Clock,
    title: 'Everything Freshly Baked to Order',
  },
  {
    icon: Heart,
    title: 'Customer Service that goes above and beyond',
  },
  {
    icon: ChefHat,
    title: 'The finest ingredients available',
  },
  {
    icon: Settings,
    title: 'Bespoke options and customizations available',
  },
  {
    icon: Cake,
    title: 'Design your own cake and tiered cakes n fillings',
  },
  {
    icon: Shell,
    title: 'All additions & inclusions made in-house',
  },
  {
    icon: SunSnow,
    title: "Desserts inspired by the season’s best",
  },
  {
    icon: Truck,
    title: 'Delivered to your doorstep',
  }
];

const WhyChooseUmami = () => {
  return (
    <section className="py-32 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-goglast text-umami-navy mb-3 font-bold goglast-tracking">
            Why Choose Umami?
          </h2>
          <p className="text-xl font-[900] font-glimp text-umami-charcoal/80 max-w-xl mx-auto leading-relaxed">
            Discover what makes our artisan bakery stand out from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group  hover:bg-umami-pink/5 p-6 rounded-lg transition-all duration-300 elegant-shadow hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-umami-navy rounded-full flex items-center justify-center group-hover:bg-umami-blue transition-colors duration-300">
                    <IconComponent size={44} strokeWidth={1.0} className=" text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-black font-glimp  glimp-tracking text-umami-navy mb-2 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-umami-charcoal leading-relaxed">
                  {/*{feature.description}*/}
                </p>
              </div>

            );
          })}
        </div>
        <div className="flex-center">
          <div className="text-center group  hover:bg-umami-pink/5 p-6 rounded-lg transition-all duration-300 elegant-shadow hover:shadow-xl">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 border-umami-pink border-2 rounded-full flex items-center justify-center mt-4 group-hover:bg-umami-blue transition-colors duration-300">
                <Gem size={44} strokeWidth={1.25}   className="text-[#DE1B87]"/>
              </div>
            </div>

            <h3 className="text-3xl font-black font-glimp  glimp-tracking text-umami-navy  mb-2 leading-tight">
              Signature Flavours You Won’t Find Anywhere Else
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUmami;
