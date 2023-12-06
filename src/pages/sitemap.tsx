import { MetadataRoute } from 'next'

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
    return [
        {
            url: 'https://pliper.kr/',
            lastModified: new Date(),
        },
        {
            url: 'https://pliper.kr/about',
            lastModified: new Date(),
        },
        {
            url: 'https://pliper.kr/policy/542179ad-6c36-4d82-b993-9ddf871d49f9',
            lastModified: new Date(),
        },
        {
            url: 'https://pliper.kr/policy/a573ca9d45e4426ebfbb6ef4ef128953',
            lastModified: new Date(),
        },
        {
            url: 'https://pliper.kr/policy/92a1f7fa-012b-45eb-9524-e11099c90645',
            lastModified: new Date(),
        },
        {
            url: 'https://pliper.kr/policy/a2048832-2cfe-4897-8ddf-a34ab59299eb',
            lastModified: new Date(),
        },
    ]
}

export default Sitemap;