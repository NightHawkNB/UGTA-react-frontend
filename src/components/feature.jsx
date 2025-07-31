
function FeatureItem(props) {
    return (
        <div className="feature-item">
            { props.title } { props.index }
        </div>
    )
}

export { FeatureItem };