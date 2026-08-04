import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
    trailingSlash: true,

    // Add headers for video files
    async headers() {
        return [
            {
                source: '/umamiamman.mp4',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'video/mp4',
                    },
                    {
                        key: 'Accept-Ranges',
                        value: 'bytes',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default withNextIntl(nextConfig);
