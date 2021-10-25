import './FeatureBlock.css';

function FeatureBlock(props){
    return(
        <div className="featureBlock">
            <i className={props.icon}/>
            <h4 className="featureBlockTitle">{props.title}</h4>
            <p className="featureBlockText">{props.text1}
            </p>
            <p className="featureBlockText">{props.text2}</p>
        </div>
    );
}

export default FeatureBlock;