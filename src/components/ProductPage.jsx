import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const ProductPage = ({ activeSection, setActiveSection }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [sortOption, setSortOption] = useState(''); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const filteredProductsMemo = useMemo(() => {
    let filtered = products;

  
    if (activeSection !== 'all categories') {
      filtered = products.filter(
        (product) => product.category.toLowerCase() === activeSection
      );
    }


    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }


    if (sortOption === 'priceLowToHigh') {
      filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === 'priceHighToLow') {
      filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortOption === 'ratingHighToLow') {
      filtered.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    }

    return filtered;
  }, [activeSection, products, searchQuery, sortOption]);

  useEffect(() => {
    setFilteredProducts(filteredProductsMemo);
  }, [filteredProductsMemo]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin border-t-4 border-blue-600 border-solid rounded-full w-16 h-16 mb-4"></div>
          <p className="text-xl font-semibold text-gray-800">Loading Products...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
  
      <main className="p-4 mt-6">
        <div className="flex justify-between w-[90%] mb-4">
          <h1 className="text-2xl font-bold capitalize">{activeSection}</h1>
          <div className="flex items-center gap-2">
            <FaSearch size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="border rounded-lg p-2"
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border rounded-lg p-2"
            >
              <option value="">Sort by</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="ratingHighToLow">Rating: High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="cursor-pointer border rounded-lg shadow-md p-4 hover:shadow-lg transition"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded-md mb-3"
                />
                <h2 className="font-semibold text-lg">{product.title}</h2>
                <p className="text-gray-600">Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-900 font-bold mt-2">${product.price}</p>
                  <p className="bg-green-600 text-white mt-2 p-1 rounded-lg">{product.rating}⭐</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-600 text-center col-span-full">
              No products found for this category.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
