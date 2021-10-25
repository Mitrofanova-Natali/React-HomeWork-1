import './FooterLinksBlock.css';
import Logo from "../Logo/Logo";
import ButtonDownloadApp from "../ButtonDownloadApp/ButtonDownloadApp";
import SocialNetworksLinks from "../SocialNetworksLinks/SocialNetworksLinks"

function FooterLinksBlock() {
    return (
        <div className="footerLinksWrapper">
            <Logo/>
            <p className="footerLinksText">It was some time before he obtained any answer,
                and the reply, when made, was unpropitious.</p>
            <ButtonDownloadApp/>
            <SocialNetworksLinks/>

        </div>
    );
}

export default FooterLinksBlock;