const Square = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section
            className="square"
            style={{
                backgroundColor: colorValue,
                color: isDarkText ? "#000" : "#FFF"
            }}
        >
    <p>{
    //If there is a color value return it else show msg "Empty Value"
    colorValue ? colorValue : "Empty Value"}</p>
    <p>{
    //If there is a Hex value return it,else don't display anything.
    hexValue ? hexValue : null}</p>
    </section>
    )
}
Square.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Square