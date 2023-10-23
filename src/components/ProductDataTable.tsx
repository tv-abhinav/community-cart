"use Client"

import React, { useEffect, useState } from 'react'

import { useSWRConfig } from "swr"
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import Image from 'next/image';
import Loading from '@/app/loading';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import { useRouter } from 'next/navigation';
import { delete_a_product } from '@/Services/Admin/product';
import { ProductSchema } from '@/model/Product';




export default function ProductDataTable() {
  const { mutate } = useSWRConfig()
  const router = useRouter();
  const [prodData, setprodData] = useState<ProductSchema[] | []>([]);
  const data = useSelector((state: RootState) => state.Seller.product)
  const catData = useSelector((state: RootState) => state.Seller.categories)
  const isLoading = useSelector((state: RootState) => state.Seller.productLoading);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<ProductSchema[] | []>([]);


  useEffect(() => {
    setprodData(data)
  }, [data])

  useEffect(() => {
    setFilteredData(prodData);
  }, [prodData])







  const columns = [
    {
      name: 'Name',
      selector: (row: ProductSchema) => row?.productName,
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row: ProductSchema) => row?.categoryId,
      sortable: true,
    },
    {
      name: 'Image',
      cell: (row: ProductSchema) => <Image src={row?.productImageUrl ? row?.productImageUrl : ""} alt='No Image Found' className='py-2' width={100} height={100} />
    },
    {
      name: 'Action',
      cell: (row: ProductSchema) => (
        <div className='flex items-center justify-start px-2 h-20'>
          <button onClick={() => router.push(`/product/update-product/${row?.productId}`)} className=' w-20 py-2 mx-2 text-xs text-green-600 hover:text-white my-2 hover:bg-green-600 border border-green-600 rounded transition-all duration-700'>Update</button>
          <button onClick={() => handleDeleteProduct(row?.productId)} className=' w-20 py-2 mx-2 text-xs text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600 rounded transition-all duration-700'>Delete</button>
        </div>
      )
    },

  ];



  const handleDeleteProduct = async (id: string) => {
    const res = await delete_a_product(id);
    if (res?.status === 200) {
      toast.success("delete success")
      mutate('/gettingAllProductsForSeller')
    }
    else {
      toast.error(res?.statusText)
    }
  }


  useEffect(() => {
    if (search === '') {
      setFilteredData(prodData);
    } else {
      setFilteredData(prodData?.filter((item) => {
        const itemData = item?.categoryId;
        // const itemData = item?.productCategory?.categoryName.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }))
    }


  }, [search, prodData])



  return (
    <div className='w-full h-full'>
      <DataTable
        columns={columns}
        data={filteredData || []}
        key={'ThisProductData'}
        pagination
        keyField="id"
        title={`Products list`}
        fixedHeader
        fixedHeaderScrollHeight='500px'
        selectableRows
        selectableRowsHighlight
        persistTableHead
        progressPending={isLoading}
        progressComponent={<Loading />}
        subHeader
        subHeaderComponent={
          <input className='w-60 dark:bg-transparent py-2 px-2  outline-none  border-b-2 border-orange-600' type={"search"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"Category Name"} />
        }
        className="bg-white px-4 h-4/6 "
      />

    </div>
  )
}

