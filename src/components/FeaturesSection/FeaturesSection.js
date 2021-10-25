import './FeaturesSection.css'
import FeatureBlock from "../FeatureBlock/FeatureBlock"
import { data } from "../../data"

function FeaturesSection() {
    return (
        <div className="featuresSection">
            <div className="innerFeaturesSection">
                {data.features.map((item) => {
                    return <FeatureBlock
                        icon={item.icon}
                        title={item.title}
                        text1={item.text1}
                        text2={item.text2}
                    />
                })}
            </div>
        </div>
    )
}

export default FeaturesSection;