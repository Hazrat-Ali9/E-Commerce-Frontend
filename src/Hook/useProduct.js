import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
      fetch("https://abccomerce.onrender.com/product/")
        .then((res) => res.json())
        .then((data) => {
          setMenu(data);
        });
    }, []);
    return [menu,setMenu];
};

export default useProduct;