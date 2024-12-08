import Button from "./Button"

const Primary = ({bgColor, children}) => {
    const Styles = {
        li : {
            color: "black",
            fontSize: "20px",
            padding: "10px"

        },
        p : {
            color: "black",
            fontSize: "16px",
           marginLeft: "40px"
        },
        btn: {
            color: "white",
            fontSize: "16px",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "5px"
        }
    }
  return (
    <div>
        <h3>
            <ul>
                <li style={Styles.li}>Primary</li>
            </ul>
        </h3>
        <p style={Styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam nihil est quia.</p>
        <Button bgColor="blue">Primary Button</Button>
        <Button bgColor="lightblue">Hover State</Button>
        <Button bgColor="blue">Pressed State</Button>
        <Button bgColor="gray">Disabled State</Button>
        <Button bgColor="blue">Icon Before</Button>
        <Button bgColor="blue">Icon After</Button>
    </div>
  )
}

export default Primary