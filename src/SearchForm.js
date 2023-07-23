import Logo2 from './images/petshop_logo (2).png';

export const SearchForm = () => {     
    const ANIMALS = ['Bird','Cat','Dog','Rabbit','Reptile']
    return(
    <div className="srch-container">
        <div className="form-container">
            <div className='message-block'>
           <img className="srch-logo" src={Logo2} />
           <div className="srch-msg">Search for Pets 
           <br />
           in Your Local Area</div>
           </div>
           <hr /> 
            <form>
                <div className="loct-box">
                <label>Location
                    <br />
                <input type="select"></input></label>
                </div>
                <div className="animal-box">
                <label>Animal
                    <br />
                    <select>
                        <option />
                        {ANIMALS.map(item => (<option>{item}</option>))}
                    </select>
                </label>
                </div>
                <div className="breed-box">
                <label>Breed
                    <br />
                    <input type="select"></input></label>
                </div>
                <div className='submit-btn'>
                    <input className='sub-btn' type='submit' value="Go!"/>
                </div>
            </form>
        </div>
    </div>
    )
}