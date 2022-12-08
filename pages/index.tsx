import type { NextPage } from 'next'
import Header from "../components/layouts/header"
import Footer from "../components/layouts/footer"
import axios from "axios"
import Products from "../components/products"
import {GET_PRODUCTS_ENDPOINT} from "../endpoints"

const Home: NextPage = ( props: any) => {

  const header = {
    headerMenuItems: [{ title: "Home", ID: 1 }, { title: "Shop", ID: 2 }, { title: "Contact", ID: 3 }],
    siteDescription: "Website description",
    siteLogoUrl: "https://apollo.code-village.ro/wp-content/uploads/2022/12/logo.webp",
    siteTitle: "Site title",
    favicon: "https://apollo.code-village.ro/wp-content/uploads/2022/12/logo.webp"
  }


  const {products, success, error } = props.data;
  return (
    <div>

      <Header header={header} />

      <div className='container p-4 mx-auto'>
        <Products products={products}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps() {

  // const { data }: any = await axios.get(`${process.env.NEXT_PUBLIC_WORDPRESS}/wp-json/wp/v2/pages`)
  const res = await axios.get(GET_PRODUCTS_ENDPOINT)

  return {
    props: { data: res.data || {success:false, products:[], error:null} },
    revalidate: 1
  }
}
