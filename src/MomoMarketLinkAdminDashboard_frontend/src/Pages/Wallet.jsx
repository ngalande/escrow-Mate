import React from 'react'
import SideNav from '../Components/SideNav'
import WalletBalance from '../Components/WalletBalance'
import DebitCreditAmounts from '../Components/DebitCreditAmounts'
import CompaniesCard from '../Components/CompaniesCard'
import TotalCommissions from '../Components/TotalCommissions'

const Wallet = () => {
  return (
    <SideNav>
      <div>
        <div className='flex'>
          <div className='w-1/2'>
            <div><WalletBalance /></div>
            <div><DebitCreditAmounts /></div>
          </div>
          <div className='w-1/2'>
            <TotalCommissions />
          </div>

        </div>

        <div>
          <CompaniesCard />
        </div>
      </div>
    </SideNav>
  )
}

export default Wallet