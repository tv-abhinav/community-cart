"use client"

import { update_order_status } from '@/Services/Admin/order';
import { ProductSchema } from '@/model/Product'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


export default function DatePicker({ orderId, deliveryDate, key }: { orderId: number, deliveryDate?: Date | null, key: number }) {
    const [dateForDelivery, setDateForDelivery] = useState<Date | undefined | null>(deliveryDate ? new Date(deliveryDate) : null);
    const [yetToUpdate, setYetToUpdate] = useState<boolean>(true);
    useEffect(() => {
        setYetToUpdate(!Boolean(deliveryDate));
    }, [])
    const submitDeilveryDate = async () => {
        if (!dateForDelivery) return;

        const res = await update_order_status({ orderId, deliveryDate: dateForDelivery });
        if (res?.status === 200) {
            toast.success("Order updated")
            setYetToUpdate(false);
        } else {
            toast.error(res?.statusText)
        }
    }

    return (
        <div key={key}>
            {!yetToUpdate && dateForDelivery ? dateForDelivery.toISOString().split('T')[0] :
                <div>
                    <input type="date" id="deliveryDate" name="deliveryDate" onChange={(e) => setDateForDelivery(new Date(e.target.value))}></input>
                    <button onClick={() => submitDeilveryDate()} className=' w-20 py-2 mx-2 text-xs text-green-600 hover:text-white my-2 hover:bg-green-600 border border-green-600 rounded transition-all duration-700'>☑️</button>
                </div>
            }
        </div>
    )
}
