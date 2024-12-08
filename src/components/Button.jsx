

const Button = ({text, bgColor, children}) => {

    const ButtonStyle = {
        backgroundColor: bgColor || "red",
        color: text ||"white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "5px",
        marginLeft: "40px"
    }
  return (
    <Button style={ButtonStyle}>{children}</Button>
  )
}

export default Button