import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/BreadCrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {allproduct} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allproduct.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product = {product} />
      <ProductDisplay product = {product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
