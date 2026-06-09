const Wrong = ({ errorMessage }) => {
    if (!errorMessage) return null
    const mystyle = {
        color: "red",
        backgroundColor: "lightgrey",
        padding: "2px",
        paddingLeft: "8px",
        marginBottom: "5px",
        fontFamily: "Arial",
        borderColor: "red",
        border: "solid",
        borderRadius: "4px"
    };
    return (
        <div style={mystyle}>
            <p>{errorMessage}</p>
        </div>
    )
}

export default Wrong