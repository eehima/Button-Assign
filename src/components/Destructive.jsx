import Button from "./Button"

const Destructive = () => {
  return (
    <div>
        <h3>
            <ul>
                <li>Destructive</li>
            </ul>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam nihil est quia.</p>
        <Button bgColor="red">Default Button</Button>
        <Button bgColor="palevioletred">Hover State</Button>
        <Button bgColor="lightred">Pressed State</Button>
        <Button bgColor="red">Disabled State</Button>
        <Button bgColor="lightred">Icon Before</Button>
        <Button bgColor="red">Icon After</Button>
    </div>
  )
}

export default Destructive