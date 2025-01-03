export interface CardProps {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  name: string;
  price: number;
  count?: number; // Tornar opcional
  handleIncrement?: () => void; // Tornar opcional
  handleDecrement?: () => void; // Tornar opcional
}

export interface CartProductListProps {
  name: string;
  quantity: number;
  priceDiscount: number;
  price: number;
}

export interface CartProductListComponentProps {
  products: CartProductListProps[];
  handleDelete: (name: string) => void;
}

export interface Summary {
  summary: SummaryProductAdd[];
  total: number;
  handleCloseModal?: () => void;
}

export interface SummaryProductAdd {
  name: string;
  quantity: number;
  priceDiscount: number;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  }[];
}
