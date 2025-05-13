namespace Product {
  type GetData = {
    success: boolean;
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    data: ProductData[]
  };
  type ProductData = {
    _id: number;      
    img: string;
    name: string;
    brand: string;
    power: string;
    price: string;
    mileage: string;
    engineSize: string;
    engineType: string;
    isFavorite: boolean;
    yearOfIssue: string;
  }
}
