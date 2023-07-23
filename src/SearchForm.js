export const SearchForm = () => {
     
    const ANIMALS = ['Bird','Cat','Dog','Rabbit','Reptile']
    return(
    <div className="srch-container">
        <div className="form-container">
            <form>
                <div className="loct-box">
                <label>Location<input type="select"></input></label>
                </div>
                <div className="animal-box">
                <label>Animals
                    <select>
                        <option />
                        {ANIMALS.map(item => (<option>item</option>))}
                    </select>
                </label>
                </div>
                <div className="breed-box">
                <label>Breed<input type="select"></input></label>
                </div>
            </form>
        </div>
    </div>
    )
}