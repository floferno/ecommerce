import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'tunsie8m',
    dataset: 'production',
    apiVersion: '2023-02-17',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true

})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)