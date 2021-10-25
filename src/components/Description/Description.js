import './Description.css';


function Description(props) {
    return (
        <>
            <h3 className="descriptionTitle">{props.title}</h3>
            <p className="descriptionText">The sight of the tumblers restored Bob Sawyer to a degree of equanimity which he
                had not
                possessed since his interview with his landlady. His face brightened up, and he began to feel quite
                convivial.</p>
        </>
    );
}

export default Description;


