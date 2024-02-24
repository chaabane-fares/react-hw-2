import './Banner.css'
function Banner({source,value,name,note,bgColor,txtColor}){
    return(
        <div className='banner' style={{backgroundColor:bgColor}}>
            <div className='icon'>
                <img src={source} alt={value} />
                <h3 style={{color:txtColor}}>{name}</h3>
            </div>
            <div className='note'>
                <p className='the-note'>{note}</p>
                <p className='per-cent'>/ 100</p>
            </div>
        </div>
    )
}

export default Banner