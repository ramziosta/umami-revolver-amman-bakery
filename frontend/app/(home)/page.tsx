import HeroSection from "@/app/components/HeroSection";
import UmamiDifference from "@/app/components/UmamiDifference";
import CategoriesShowcase from "@/app/components/CategoriesShowcase";
import Head from "next/head";

const Home = () => {
    return (
        <div className="min-h-screen">
            <Head>
                <script
                    id="mcjs"
                    dangerouslySetInnerHTML={{
                        __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],
            m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}
            (document,"script","https://chimpstatic.com/mcjs-connected/js/users/0d43d55926e180f6cdb8717ce/4b92f562cb4a2aa634ee54164.js");`
                    }}
                />
            </Head>
            <HeroSection />
            <UmamiDifference />
            <CategoriesShowcase />
        </div>
    );
};

export default Home