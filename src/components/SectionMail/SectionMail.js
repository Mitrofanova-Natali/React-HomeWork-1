import './SectionMail.css';
import ButtonSendMail from "../ButtonSendMail/ButtonSendMail";

function SectionMail() {
    return (
        <div className="sectionMail">
            <div className="mailSectionWrapper">
                <p className="mailSectionTitle">Subscribe our newsletters</p>
                <ButtonSendMail/>

            </div>
        </div>
    );
}

export default SectionMail;