"use Client"

import React, { useEffect, useState } from 'react'

import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store/store';
import { useRouter } from 'next/navigation';
import { OrderSchema } from '@/model/Order';

export default function OrdersDetailsDataTable() {
  const router = useRouter();
  const [orderData, setOrderData] = useState<OrderSchema[]>([]);
  const data = useSelector((state: RootState) => state.Customer.order) as OrderSchema[];
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState<OrderSchema[]>([]);


  useEffect(() => {
    setOrderData(data)
  }, [])

  useEffect(() => {
    setFilteredData(orderData);
  }, [orderData])







  const columns = [
    {
      name: 'OrderSchema Id',
      selector: (row: OrderSchema) => row?.orderId,
      sortable: true,
    },
    {
      name: 'Total Price',
      selector: (row: OrderSchema) => row?.totalPrice,
      sortable: true,
    },
    {
      name: 'Delivered',
      selector: (row: OrderSchema) => row?.status,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row: OrderSchema) => (

        <button onClick={() => router.push(`/order/view-orders-details/${row?.orderId}`)} className=' w-20 py-2 mx-2 text-xs text-green-600 hover:text-white my-2 hover:bg-green-600 border border-green-600 rounded transition-all duration-700'>Details</button>

      )
    },

  ];






  useEffect(() => {
    if (search === '') {
      setFilteredData(orderData);
    } else {
      setFilteredData(orderData?.filter((item) => {
        const itemData = String(item?.orderId).toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }))
    }
  }, [search, orderData])



  return (
    <div className='w-full h-full'>
      <DataTable
        columns={columns}
        data={filteredData || []}
        key={'ThisOrdersData'}
        pagination
        keyField="id"
        title={`Orders list`}
        fixedHeader
        fixedHeaderScrollHeight='700px'
        selectableRows
        selectableRowsHighlight
        persistTableHead
        subHeader
        subHeaderComponent={
          <input className='w-60 dark:bg-transparent py-2 px-2  outline-none  border-b-2 border-orange-600' type={"search"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"Orders Id"} />
        }
        className="bg-white px-4 h-5/6 "
      />

    </div>
  )
}

