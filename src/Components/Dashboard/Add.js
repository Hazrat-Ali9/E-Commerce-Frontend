import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {useNavigate } from "react-router-dom";

const Add = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data,event) => {
        const url = `https://abccomerce.onrender.com/product/`;
        console.log(url)
        fetch(url,{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then (result =>{
            console.log(result)
            navigate('/all')
            event.target.reset()
            toast('product added Successfully',result);
            

        })
    }
    return (
        <div className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
            Hello there ?,{" "}
            <span className="font-normal">
              please fill in your information to continue
            </span>
          </h1>
          <form className="mt-6"onSubmit={handleSubmit( onSubmit)}>
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Input Product Name"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              {...register("name", {})}
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Description
            </label>
            <textarea
              className="textarea textarea-bordered block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              placeholder="Type Description"
              {...register("description", {})}
            ></textarea>
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Input Price"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              {...register("price", {})}
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Input Category"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              {...register("category", {})}
            />
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
              Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="Input Image Url"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              {...register("image", {})}
            />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
             Add Now
            </button>
            
          </form>
        </div>
      </div>
    );
};

export default Add;