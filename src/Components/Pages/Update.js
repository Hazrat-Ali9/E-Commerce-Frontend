
import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Update = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
      const url = `https://abccomerce.onrender.com/product/${id}`;
      fetch(url)
          .then(res => res.json())
          .then(data => setProduct(data))
          .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const updateUser = event => {
      event.preventDefault();
      const { name, description, price, category, image } = event.target;

      const updatedProduct = {
          name: name.value || product.name,
          description: description.value || product.description,
          price: price.value || product.price,
          category: category.value || product.category,
          image: image.value || product.image
      };

      const url = `https://abccomerce.onrender.com/product/${id}`;

      fetch(url, {
          method: "PUT",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
      })
          .then(res => res.json())
          .then(result => {
              console.log(result, 'success');
              navigate('/all');
              toast("Product Updated successfully", result);
              event.target.reset();
          })
          .catch(error => console.error('Error updating product:', error));
  };
    return (
        <div>
           <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            Hello there ?,{" "}
            <span className="font-normal">
              please fill in your information to continue
            </span>
          </h1>
          <form className="mt-6"onSubmit={updateUser}>
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={product.name}
              placeholder="Input Product Name"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
             
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Description
            </label>
            <textarea
            defaultValue={product.description}
              className="textarea textarea-bordered block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              placeholder="Type Description"
              name='description'
            ></textarea>
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Price
            </label>
            <input
              type="text"
              name="price"
              defaultValue={product.price}
              placeholder="Input Price"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Category
            </label>
            <input
              type="text"
              name="category"
              defaultValue={product.category}
              placeholder="Input Category"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Image
            </label>
            <input
              type="text"
              defaultValue={product.image}
              name="image"
              placeholder="Input Image Url"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
             
            />
            <div className="mt-5">
                        <input className=" w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none" type="submit" value="Update Now" />
                    </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default Update;