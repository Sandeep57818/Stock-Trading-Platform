import React from 'react'


function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h3>To create a ticket, select a relecant topic</h3>
                <div className='col-4 p-5 mt-5 mb-5'>
                    <h5 className=''><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h5>
                    
                </div>
                <div className='col-4 p-5 mt-5 mb-5'>
                    <h5 className=''><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</h5>
                </div>
                <div className='col-4 p-5 mt-5 mb-5'>
                    <h5 className=''><i class="fa fa-bar-chart" aria-hidden="true"></i> Your Zerodha Account</h5>
                </div>
            </div>

        </div>
    )
}
export default CreateTicket;