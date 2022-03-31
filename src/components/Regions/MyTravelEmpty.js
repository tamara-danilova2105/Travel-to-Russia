import empty from '../../photo/traveler.png'

function MyTravelEmpty() {
    return (
        <div className='empty-block'>
            <h2 className="empty">На карте путешествий нет отметок. Заполним?</h2>
            <img className='empty-img' src={empty} alt="давайте путешестовать больше!" />
        </div>
    );
}

export default MyTravelEmpty;