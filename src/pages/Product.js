import React from 'react';
import { useSearchParams } from "react-router-dom";

const Product = () => {
    let [query,setQuery]  = useSearchParams();
    console.log('query값',query.get('name'))
    return (
        <div>
            <h1>상품페이지</h1>  
        </div>
    );
};

export default Product;

/* 
useSearchParams
? 쿼리 값 
url 뒤에 추가적인 정보를 전달 하고 싶을때 

*/