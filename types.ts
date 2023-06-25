export interface Quote {
    text: string;
}

export interface Props {
    quote: Quote;
}

export interface Category {
    id: string,
    type: string,
    unicode: string,
    content: string
}