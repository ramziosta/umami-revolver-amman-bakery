//
// // components/ItemPage/ItemImageGallery.tsx
// import Image from "next/image";
//
// interface ItemImageGalleryProps {
//     item: any;
//     selectedImage: any;
// }
//
// export function ItemImageGallery({ item, selectedImage }: ItemImageGalleryProps) {
//     return (
//         <div className="hidden lg:block rounded-lg overflow-hidden shadow-xl">
//             <Image
//                 src={selectedImage || item.itemImages[0]}
//                 alt={item.itemName}
//                 width={500}
//                 height={500}
//                 className="w-full h-full object-cover"
//             />
//         </div>
//     );
// }
