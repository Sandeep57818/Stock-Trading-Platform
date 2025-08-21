import React from 'react'


function Brokerage() {
    return (
        <div className='container mt-5 border-top'>

            <div className='row p-5 text-center'>
                <div className='col-8 p-5'>
                    <a href="" style={{ textDecoration: "none" }}><h2 className='fs-4' >Transaction/Turnover Charges</h2></a>

                    <ul className='mt-4 text-muted fs-7' style={{ textAlign: "left", textHeight: "2.9" }}>
                        <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>

                        <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</li>

                        <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>

                        <li>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</li>

                        <li>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</li>
                    </ul>
                </div>
                <div className='col-4 p-5'>
                    <a href="" style={{ textDecoration: "none" }}><h2 className='fs-4' >NRI brokerage charges</h2> </a>
                    <ul className='mt-4 text-muted fs-7' style={{ textAlign: "left", textHeight: "2.9" }}>
                       <li> ₹100 per order for futures and options.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                       <li> For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                       <li> ₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Brokerage;