import './Summary.css'
import Banner from './Banner'
import boltImg from '../Assets/bolt.svg'
import brainImg from '../Assets/brain.svg'
import eyeImg from '../Assets/eye.svg'
import messageImg from '../Assets/message.svg'
function Summary(){
    return(
        <>
        <h2 className='title-sum'>Summary</h2>
        <div className='banner-container'>
            <Banner source={boltImg} value={'bolt'}
                    name={'Reaction'} note={80}
                    bgColor={'#FFF6F5'} txtColor={'#E67479'}
            />
            <Banner source={brainImg} value={'brain'}
                    name={'Memory'} note={92}
                    bgColor={'#FFFBF2'} txtColor={'#E8C974'}
            />
            <Banner source={messageImg} value={'message'}
                    name={'Verbal'} note={61}
                    bgColor={'#F2FBFA'} txtColor={'#4AAD93'}
            />
            <Banner source={eyeImg} value={'eye'}
                    name={'Visual'} note={72}
                    bgColor={'#F3F3FD'} txtColor={'#454FAF'}
            />
        </div>
        <button>Continue</button>
        </>
    )
}

export default Summary