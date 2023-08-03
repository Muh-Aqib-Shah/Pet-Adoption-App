import dog from '../images/dog_walking_animation.png'

export const LoadingPrompt = () => {
    return(
        <div className="_container">
            <div className="dog_box">
            <img src={dog} alt="Walking Dog" className="dog_walk" />
            </div>
            <div className="Wait"><span>Please Wait...</span></div>
        </div>
    )
}