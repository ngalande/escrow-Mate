import React from 'react'
import SideNav from '../Components/SideNav'
import CompaniesCard from '../Components/CompaniesCard'
import DeliveriesGrid from '../Components/DeliveriesGrid'
import DeliveriesPiechart from '../Components/DeliveriesPiechart'


const Delivery = () => {
  return (
    <SideNav>
      <div>Delivery</div>
      <div>
        <DeliveriesGrid />
        <div className='h-80 bg-white p-2 mt-4 rounded-md'>
          <DeliveriesPiechart />
        </div>
        {/* <CompaniesCard/> */}
      </div>
    </SideNav>
  )
}

export default Delivery