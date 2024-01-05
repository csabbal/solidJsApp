import { MetaProvider, Title } from "@solidjs/meta"
import "./menu.css"

function Menu() {
    return (
        <div class="menu-wrapper">
            <MetaProvider >
                <Title>SolidStart - Basic</Title>
                <a href="/">Index</a>
                <a href="/list/list">List</a>
                <a href="/about">About</a>
            </MetaProvider>
        </div>
    )
}
export default Menu
