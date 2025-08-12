import React from 'react'
function Awards() {
    return ( 
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6 p-5'>
                     <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-6 p-5 mt-5'>
                   <h1>Largest Stock Broker in India</h1>
                   <p className='mb-5'>
                    2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing:
                   </p>
                   <div className='row'>
                    <div className='col-6'>
                        <ul>
                       <li>
                         <p>Futures and Options</p>
                       </li>
                      <li>
                         <p>Commodity Derivations</p>
                      </li>
                      <li>
                         <p>Currency Derivations</p>
                      </li>

                   </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                       <li>
                         <p>Stocks & IPOS</p>
                       </li>
                      <li>
                         <p>Direct MutulFunds</p>
                      </li>
                      <li>
                         <p>Bonds and Govt. Securities</p>
                      </li>

                   </ul>
                    </div>
                   </div>
                   <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;