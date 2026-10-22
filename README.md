# Umami Amman

## Editing the menu

All menu content lives in `app/data/categoryData.tsx` (English and Arabic side by side).

### Adding photos to a cake

1. Drop the image file into `app/assets/`.
2. In `app/data/categoryData.tsx`, import it at the top, then list it in that cake's `images`:

```tsx
images: [
    { src: creamBruleeHeadOn, isPrimary: true, alt: t("Whole cake, head-on", "الكيكة كاملة من الأمام") },
    { src: creamBruleeSlice,  alt: t("A slice, from above", "شريحة من الأعلى") },
    { src: creamBruleeDetail },
],
```

- `isPrimary: true` marks the cover photo (menu cards, and the photo shown first). If none is marked, the first one is used.
- `alt` is optional; without it the photo is described by the cake's name.
- With two or more photos, a row of clickable thumbnails appears under the main photo. Arrow keys, Home and End also work.
- Order in the list = order of the thumbnails.

### Changing Mille Crêpe prices or sizes

Each Mille Crêpe cake just lists three prices (JOD):

```tsx
quantityOptions: sizeOptions({ large: 63, medium: 54, le_petit: 47 }),
```

The size names and serving counts (Large 14–16, Medium 10–12, Le Petit 6–8) live once in `app/data/sizes.ts`, and rows always display Large → Medium → Le Petit.
Signature Cakes keep a single hand-written size/price in `quantityOptions`.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
