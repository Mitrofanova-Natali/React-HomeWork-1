import './FooterSection.css';
import FooterInformBlock from "../FooterInformBlock/FooterInformBlock";
import FooterLinksBlock from "../FooterLinksBlock/FooterLinksBlock";


function FooterSection() {
    return (
        <div className="footerSection">
            <div className="footerWrapper">
                <FooterLinksBlock/>
                <FooterInformBlock/>
            </div>
        </div>
    );
}

export default FooterSection;