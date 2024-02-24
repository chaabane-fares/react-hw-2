import './Result.css'

function Result({score,res,description}){
    return(
        <div className='container'>
            <h2>Your Result</h2>
            <div className='your-score'>
                <h1>{score}</h1>
                <p className='of-100'>of 100</p>
            </div>
            <h1>{res}</h1>
            <p className='description'> {description}</p>
        </div>

    )
}
export default Result