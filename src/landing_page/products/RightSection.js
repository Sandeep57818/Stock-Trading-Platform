import React from 'react'


function RightSection({
    imageUrl,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6' style={{ marginTop: "180px" }}>

                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className=''>
                        <a href={learnMore} style={{ marginLeft: "120px" }}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
                     </div>
                <div className='col-6 p-5'>
                    <img src={imageUrl} />
                </div>
            </div>
        </div>

    )
}
export default RightSection;