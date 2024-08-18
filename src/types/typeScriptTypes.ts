export type featuredDataType = {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    developer: string;
    isFeatured: boolean;
    image: string;
    features: string[];
}


export type partnersType = {
    partner: string,
    image: string,
    width: number,
    height: number,
    description?: string,
}