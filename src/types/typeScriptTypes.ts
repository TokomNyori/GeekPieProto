import { IconType } from "react-icons"

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


export type servicesType = {
    id: number,
    title: string,
    description: string,
    isFuncional: boolean,
    icons: {
        iconId: string,
        icon: React.ReactNode,
    }[];
}