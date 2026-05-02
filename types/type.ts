export type CardType = {
    number?: number;
    title: string;
    description: string;
    icon?: any;
};


export type Marker = {
    id: number;
    label: string;
    top: string;   // percentage
    left: string;  // percentage
};