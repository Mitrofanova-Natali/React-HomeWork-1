import './InnerIntroSection.css';
import Description from "../Description/Description";
import ButtonWatchVideo from "../ButtonWatchVideo/ButtonWatchVideo";


function InnerIntroSection() {
    return (
        <>
            <div className="InnerIntroSection">
                <Description title={"What happens tomorrow?"}/>
                <ButtonWatchVideo/>
            </div>

        </>
    );
}

export default InnerIntroSection;


