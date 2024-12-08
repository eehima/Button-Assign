import Button from "./Button"

const Default = () => {
  return (
    <div>
        <h3>
            <ul>
                <li>Default</li>
            </ul>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam nihil est quia.</p>
        <Button bgColor="white" text={"black"}>Default Button</Button>
        <Button bgColor="lightgray" text={"black"}>Hover State</Button>
        <Button bgColor="darkgray" text={"black"}>Pressed State</Button>
        <Button bgColor="lightgray" text={"black"}>Disabled State</Button>
        <Button bgColor="white" text={"black"}>Icon Before</Button>
        <Button bgColor="gray" text={"black"}>Icon After</Button>
    </div>
  )
}

export default Default