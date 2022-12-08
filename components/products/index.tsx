import Link from 'next/link'
import React from 'react'

interface IProduct {
    id: number,
    permalink: string,
    name: string,
}

interface IProps {
    products: IProduct[]
}

const Products = (props: IProps) => {


    return (
        <div className='flex flex-wrap -mx-2 overflow-hidden'>
            {
                props.products?.map(product => (
                    <div key={product?.id} className='w-full px-2 my-2 overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4'>
                        <Link href={product?.permalink ?? "/"}>
                            <h3>{product?.name ?? ""}</h3>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Products