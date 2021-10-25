import './IPhoneSection.css';
import iPhone from '../../img/iPhone6.png'
import ShortDescription from "../ShortDescription/ShortDescription";
import {data} from "../../data";

function IPhoneSection() {
    return (
        <div className="iPhoneSection">
            <div className="iphoneImg">
                <img src={iPhone} alt="pictureOfPhone"/>
            </div>

            <div className="iPhoneInfo">
                <ShortDescription
                    title={data.shortDescription[0].title}
                    text1={data.shortDescription[0].text1}
                    text2={data.shortDescription[0].text2}
                />
                <div className="buttonWrapper">
                    <button className="blueBtn">
                        <p>Try to hack us</p>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                    <button className="whiteBtn">Learn more</button>
                </div>
            </div>

        </div>


    );
}

export default IPhoneSection;