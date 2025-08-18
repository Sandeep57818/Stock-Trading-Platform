import React from 'react'


function LeftSection ({
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
                <div className='col-6'>
                    <img src={imageUrl}/>
                </div>
                 <div className='col-6 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className=''><a href={tryDemo} style={{marginLeft:"67px"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"120px"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div>
                    
                    <div className='mt-4'><a href={googlePlay} style={{marginLeft:"50px"}}><img src="media/images/googlePlayBadge.svg"/>  </a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg"/> </a>
                 </div></div>
                    
                    
            </div>
        </div>
    )
}
export default LeftSection;