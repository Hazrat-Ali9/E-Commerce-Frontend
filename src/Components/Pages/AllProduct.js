import React, { useState } from 'react';
import ProductCard from '../../Hook/Card/ProductCard';
import useProduct from '../../Hook/useProduct';

const AllProduct = () => {
    const [products,setProduct] = useProduct();
  const categories = ["All Products","laptop", "phone", "camera"];
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((item) => item.category === selectedCategory);


      const handleDelate = id =>{
        const proceed = window.confirm('Are You Sure Delate This ???')
        if(proceed){
            const url = `https://abccomerce.onrender.com/product/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(student => student._id !== id);
                setProduct(remaining);
    
            })
        }
    }
    return (
        <div className="flex overflow-hidden bg-dark pt-16">
        <aside
          id="sidebar"
          className="fixed hidden overflow-hidden h-96 z-60 top-0 mt-4 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                
               
                {categories.map((category) => (
                  <li key={category} onClick={() => handleCategoryClick(category)}>
                    <a>{category}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-slate-700 relative overflow-y-auto lg:ml-64"
        >
          <main>
          
            <div className="pt-6 px-4">
              <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 mt-20 gap-y-14'>
                {filteredProducts.map((product) => (
                  <ProductCard 
                  key={product.id} 
                  product={product}
                  handleDelate={()=>handleDelate(product._id)} 
                  ></ProductCard>
                ))}
              </div>
            </div>

          </main>
        </div>
      </div>
    );
};

export default AllProduct;