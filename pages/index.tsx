import type { NextPage } from 'next'
import Header from "../components/header"
import Footer from "../components/footer"
import axios from "axios"

const Home: NextPage = ({ data }: any) => {

  const header = {
    headerMenuItems: [{title:"Home"}, {title:"Shop"}, {title:"Contact"}],
    siteDescription: "Website description",
    siteLogoUrl: "https://apollo.code-village.ro/wp-content/uploads/2022/12/logo.webp",
    siteTitle: "Site title",
    favicon: "https://apollo.code-village.ro/wp-content/uploads/2022/12/logo.webp"
  }

  return (
    <div>

      <Header header={header} />

      <main>
        main
      </main>

      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps() {

  const { data }: any = await axios.get(`${process.env.NEXT_PUBLIC_WORDPRESS}/wp-json/wp/v2/pages`)
  return {
    props: { data: data || {} },
    revalidate: 1
  }
}
