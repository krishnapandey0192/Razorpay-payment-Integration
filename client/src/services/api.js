const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    
    return data.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      rating: product.rating.rate,
      badge: product.price < 100 ? 'Sale' : null
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};