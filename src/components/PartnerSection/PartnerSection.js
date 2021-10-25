import './PartnerSection.css';
import ShortDescription from "../ShortDescription/ShortDescription";
import {data} from "../../data";
import DropBox from '../../img/DropboxLogo.png';
import Evernote from '../../img/EvernoteLogo.png';

function PartnerSection() {
    return (
        <div className="partnerWrapper">
            <div className="partnerInformBlock">
                <ShortDescription
                    title={data.shortDescription[1].title}
                    text1={data.shortDescription[1].text1}
                    text2={data.shortDescription[1].text2}
                />
                <p className="partnerList">PARTNERS</p>
                <div className="partnerLogoWrapper">
                    <img src={DropBox} alt="DropBoxLogo"/>
                    <img src={Evernote} alt="EvernoteLogo"/>
                </div>
            </div>
            <div className="mapBlock"></div>
        </div>
    );
}

export default PartnerSection;