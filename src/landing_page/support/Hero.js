import React from 'react'


function Hero() {
    return (
        <section className='container-fluid' id="supportHero">
            <div className='mt-5  p-4' id="supportWrapper">
                <h4>Support Portal</h4>
                <a className='move-left' href="" style={{ color: "white" }}>Track Tickets</a>
            </div>
            <div className='row move-right'>
                <div className='col-6 p-2   my-3'>
                    <h1 className='fs-5'>Search for an answer or browse help topics <br/>to create a ticket</h1>
                    <input className='fs-6' placeholder='Eg. How do I activate F&O, why is my order getting reject' /><br />
                    <a href="" style={{ textDecoration: "non", color: "white" }} className='me-3'>Track Account Opening</a>
                    <a href="" style={{ textDecoration: "non", color: "white" }}className='me-3'>Track segment activation</a>
                    <a href="" style={{ textDecoration: "noe", color: "white" }}className='me-3'>Intraday margins</a> <br />
                    <a href="" style={{ textDecoration: "noe", color: "white" }}className='me-3'>Kite user manual</a> <br />
                </div>
                <div className='col-6 p-2 ms-auto' >
                    <h2 className='fs-5'>Featured</h2>
                    <ol>
                        <li><a href="" style={{ color: "white" }}>Current TakeOvers and Delisting - August 2025</a>
                        </li>
                        <li><a href="" style={{ color: "white" }}>Latest Intraday Leverages - MIS & CO</a>
                        </li>
                    </ol>


                </div>

            </div>

        </section>
    )
}
export default Hero;