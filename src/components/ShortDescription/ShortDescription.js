import './ShortDescription.css';

function ShortDescription(props) {
    return (
        <div className="ShortDescriptionWrapper">
            <h3>{props.title}</h3>
            <p className="iPhoneParagraph">
                {props.text1}</p>
            <p>{props.text2}</p>

        </div>
    );
}

export default ShortDescription;