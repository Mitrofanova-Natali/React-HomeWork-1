import './ButtonSendMail.css';

function ButtonSendMail() {
    return (
        <div className="buttonEmailWrapper">
            <input className="sendEmail" type="email" placeholder="Your e-mail" value=""/>
                <button className="btnSubscribe">
                    <p>Subscribe</p> <i className="fas fa-arrow-right"></i>
                </button>
        </div>
);
}

export default ButtonSendMail;
