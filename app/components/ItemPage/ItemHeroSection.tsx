// // components/ItemPage/ItemHeroSection.tsx
// import Image from "next/image";
//
// interface ItemHeroSectionProps {
//     item: any;
//     selectedImage: any;
// }
//
// export function ItemHeroSection({ item, selectedImage }: ItemHeroSectionProps) {
//     return (
//         <section className="relative h-[60vh] overflow-hidden">
//             <Image
//                 src={selectedImage || item.itemImages[0]}
//                 alt={item.itemName}
//                 fill
//                 sizes="100vh"
//                 className="object-cover"
//                 priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
//             <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10 drop-shadow-lg">
//                 <h1 className="text-7xl md:text-8xl font-blanka text-umami-white tracking-[0.2em] mb-4">
//                     {item.itemName}
//                 </h1>
//             </div>
//         </section>
//     );
// }