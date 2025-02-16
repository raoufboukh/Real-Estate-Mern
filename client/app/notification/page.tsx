'use client'
import { approveRequest, checkAuth, rejectRequest } from '@/components/store/AuthSlices';
import { AppDispatch, RootState } from '@/components/store/store'
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Notification = () => {
  const {user} = useSelector((state:RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return (
    <section>
      <div className='container my-4'>
        <h2 className='text-3xl font-medium text-blue-900 text-center'>Requests</h2>
        <div className='my-4'>
          {user && user.notification.length > 0 ? (
            user?.notification.map((not,index) => (
            <div key={index} className='p-5 shadow-xl bg-gray-100'>
              <div>
                <Image src={not.property.image} alt={not.property.title} width={1000} height={1000} className='w-full h-96' />
              </div>
              <div className=''>
                <p>Title: {not.property.title}</p>
                <p>Price: ${not.property.price}</p>
                <p>Country: {not.property.country}</p>
                <p>City: {not.property.city}</p>
                <p>Address: {not.property.address}</p>
                <p>Description{not.property.description}</p>
                <ul>
                  <li>Bedroom: {not.property.bedrooms}</li>
                  <li>Parking: {not.property.parkings}</li>
                  <li>Bathroom: {not.property.bathrooms}</li>
                </ul>
              </div>
              <div className='flex gap-4 text-white py-2'>
                <button className='bg-green-500 py-1 px-3 shadow-sm hover:shadow-md transition-all duration-300 hover:shadow-gray-400 shadow-gray-500' onClick={() => dispatch(approveRequest(not._id))}>Approve</button>
                <button className='bg-red-500 py-1 px-3 shadow-sm hover:shadow-md transition-all duration-300 hover:shadow-gray-400 shadow-gray-500' onClick={() => dispatch(rejectRequest(not._id))}>Decline</button>
              </div>
            </div>
          ))
          ): (
            <p className='text-center text-2xl'>No Requests</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Notification
