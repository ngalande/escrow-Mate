import React from 'react'
import SideNav from '../Components/SideNav'
import ActiveResolvedDisputes from '../Components/ActiveResolvedDisputes'
import AllDisputesLineGraph from '../Components/AllDisputesLineGraph'

const Dispute = () => {
  return (
    <SideNav>
      <div>Dispute</div>
      <div><ActiveResolvedDisputes /></div>
      <div className=''>
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Overview
        </h3>
        <AllDisputesLineGraph />
      </div>
    </SideNav>
  )
}

export default Dispute