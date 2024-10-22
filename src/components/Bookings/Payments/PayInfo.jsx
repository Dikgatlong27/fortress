import React from 'react';

import './PayInfo.css';

const PayInfo = () => {
  return (
    <>
      <div style={{textAlign:'center', marginTop:'1rem'}}>
          <h2 className='p__cursive' style={{fontSize: '28px', color: 'goldenRod'}}>Payment details</h2>
          <p className="p__opensans">FNB</p>
          <p className="p__opensans">The Chairman Lifestyle</p>
          <p className="p__opensans">63011069176</p>
          <p className="p__opensans">Cheque Account</p>
          <p className="POP">Send POP to <a className="POP__email" href='mailto:social@chairmanforte.co.za'>social@chairmanforte.co.za</a></p>
      </div>
      <p className="app__payInfo-conditions_header">Payment Terms & Conditions:</p>
      <p className="app__payInfo-conditions">Booking Confirmation: A non-refundable deposit of R3500 is required for reservations with more than 10 people.<br/> Deposit Payment: The deposit will be deducted from the final bill.<br/> Final Payment: The remaining balance must be settled on the reservation day.<br/> Additional Charges: Any extra services or items will be added to the final bill.<br/> Payment Methods: Cash or direct deposits.<br/> Service Charge: A discretionary service charge may apply for larger groups.<br/> Agreement: By booking and paying the deposit, you agree to the terms and conditions.</p>
    </>
    
  )
}

export default PayInfo
