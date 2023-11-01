"use Client"

import React, { useEffect, useState } from 'react'

import { useSWRConfig } from "swr"
import { toast } from 'react-toastify';
import { delete_a_category } from '@/Services/Admin/category';
import DataTable from 'react-data-table-component';
import Image from 'next/image';
import Loading from '@/app/loading';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import { useRouter } from 'next/navigation';
import { CategorySchema } from '@/model/Category';




export default function CategorySchemaTable() {
  const { mutate } = useSWRConfig()
  const router = useRouter();
  const [catData, setCatData] = useState<CategorySchema[] | []>([]);
  const data = useSelector((state: RootState) => state.Seller.categories)
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<CategorySchema[] | []>([]);



  useEffect(() => {
    setCatData(data)
  }, [data])



  useEffect(() => {
    setFilteredData(catData);
  }, [catData])




  const columns = [
    {
      name: 'Id',
      selector: (row: CategorySchema) => row?.categoryId,
      sortable: true,
    },
    {
      name: 'Icon',
      cell: (row: CategorySchema) => (
        <Image src={row?.catIconUrl ? `/icons/${row?.catIconUrl}` : "/no-photo.jpg"} alt='No Image Found' width={32} height={32} />
      )
    },
    {
      name: 'Name',
      selector: (row: CategorySchema) => row?.categoryName,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row: CategorySchema) => (
        <div className='flex items-center justify-start px-2 h-20'>
          <button onClick={() => router.push(`/category/update-category/${row?.categoryId}`)} className=' w-20 py-2 mx-2 text-xs text-green-600 hover:text-white my-2 hover:bg-green-600 border border-green-600 rounded transition-all duration-700'>Update</button>
          <button onClick={() => handleDeleteCategory(row?.categoryId)} className=' w-20 py-2 mx-2 text-xs text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600 rounded transition-all duration-700'>Delete</button>
        </div>
      )
    },

  ];



  const handleDeleteCategory = async (id: string) => {
    const res = await delete_a_category(id);
    if (res?.status === 200) {
      toast.success("deleteCategory success")
      mutate('/gettingAllCategoriesForSeller')
    }
    else {
      toast.error(res?.statusText)
    }
  }



  useEffect(() => {
    if (search === '') {
      setFilteredData(catData);
    } else {
      setFilteredData(catData?.filter((item) => {
        const itemData = item?.categoryName.toUpperCase()
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }))
    }
    console.log(catData);

  }, [search, catData])



  return (
    <div className='w-full h-full bg-white'>
      {
        filteredData ?
          <DataTable
            columns={columns}
            data={filteredData || []}
            key={'ThisisCategorySchema'}
            pagination
            keyField="id"
            title={`Categories list`}
            fixedHeader
            fixedHeaderScrollHeight='500px'
            selectableRows
            selectableRowsHighlight
            persistTableHead
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
          :
          ""
      }

    </div>
  )
}

