import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_WORDPRESS,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
});

type Data = {
    success: boolean,
    products: [],
    error: null
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse) {

    const { perPage } = req?.query ?? {}

    let responseData: Data = {
        success: false,
        products: [],
        error: null
    }

    try {
        const { data } = await api.get("products", { per_page: perPage || 50 })
        responseData.success = true;
        responseData.products = data;
        res.status(200).json(responseData)

    } catch (error: any) {
        responseData.error = error.message
        responseData.success = false;
        res.status(500).json(responseData)
    }

}