import React from 'react'


function Universe() {
    return (
        <div className='container'>
            <div className='row text-center'>
                <h2 className='mt-4'>The Zerodha Universe</h2>
                <p className='mt-2'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-3'>
                    <img src="media/images/smallcaseLogo.png" style={{width:"50%"}} />
                    <p className='text-samll text-muted mt-2'>Thematic investment platform</p>

                </div>
                <div className='col-4 p-3 mt-3'>
                    <img src="media/images/streakLogo.png" style={{width:"50%"}} />
                    <p className='text-samll text-muted mt-2'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-4'>
                    <img src="media/images/sensibullLogo.svg" style={{width:"50%"}} />
                    <p className='text-samll text-muted mt-2'>Options trading platform</p>

                </div>
                <div className='col-4 p-3 mt-4'>
                    <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}} />
                    <p className='text-samll text-muted mt-2'>Asset management</p>

                </div>
                <div className='col-4 p-3 mt-4'>
                    <img src="media/images/goldenpiLogo.png"  style={{width:"50%"}}/>
                    <p className='text-samll text-muted mt-2'> Bonds trading platform</p>

                </div>
                <div className='col-4 p-3 mt-4'>
                    <img src="media/images/smallcaseLogo.png" style={{width:"50%"}} />
                    <p className='text-samll text-muted mt-2'>Insurance</p>

                </div>
        <button className='p-2 btn btn-primary fs-5 mb-3 mt-3 ' style={{ width: "20%", margin: "0 auto" }}>Signup</button>
            </div>
        </div>
    )
}
export default Universe;