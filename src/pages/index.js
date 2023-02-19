import React from 'react'
import { Cart, Footer, FooterBanner, HeroBanner, Layout, Navbar, Product } from '../../components'
import { client } from '../../lib/client'

const Home = ({ products, bannerData }) => {

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}

      </div>
      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`
  const products = await client.fetch(query)

  const bannerQuery = `*[_type == "banner"]`
  const bannerData = await client.fetch(bannerQuery)

  // console.log(products, bannerData, "test")

  return {
    props: { products, bannerData }
  }
}
export default Home