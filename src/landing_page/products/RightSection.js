import React from 'react'


function RightSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'style={{ marginTop: "180px" }}>

                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className=''><a href={tryDemo} style={{ marginLeft: "67px" }}>Try Demo </a>
                        <a href={learnMore} style={{ marginLeft: "120px" }}>Learn more </a></div>

                    <div className='mt-4'><a href={googlePlay} style={{ marginLeft: "50px" }}><img src="media/images/googlePlayBadge.svg" />  </a>
                        <a href={appStore} style={{ marginLeft: "50px" }}><img src="media/images/appstoreBadge.svg" /> </a>
                    </div>

                </div>
                <div className='col-6 p-5'>

                    <img src={imageUrl} />
                </div>
            </div>
        </div>
    
    )
}
export default RightSection;