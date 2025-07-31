export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Food' | 'Drink';
  aiHint: string;
}

export interface CartItem extends Dish {
  quantity: number;
}
