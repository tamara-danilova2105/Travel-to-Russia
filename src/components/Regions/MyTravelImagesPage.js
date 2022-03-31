import russia from '../../photo/russia.jpg';
import russiaMobil from '../../photo/russia-mobil.jpg'

function MyTravelImagesPage() {

    return (
        <div>
            <img className='russia-picture' src={ russia } alt='путешествие по России' />
            <img className='russia-picture-mobil' src={ russiaMobil } alt='путешествие по России' />
        </div>
    );
}

export default MyTravelImagesPage;