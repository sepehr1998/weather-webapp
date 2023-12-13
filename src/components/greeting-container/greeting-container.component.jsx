import './greeting-container.styles.scss'
const Greetings = () => {
    return (
        <div className="greeting-container">
            <div className="greeting-header">
                <h2>Good Morning</h2>
                <div className='city-selector'>
                    <select>
                        <option value="someOption">Some option</option>
                        <option value="otherOption">Other option</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default Greetings