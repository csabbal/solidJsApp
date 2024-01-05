import { MetaProvider, Title } from "@solidjs/meta"
import "./menu.css"

function Menu() {
    return (
        <div class="menu-wrapper">
            <MetaProvider >
                <Title>SolidStart - Basic</Title>
                <a href="/counter">Counter</a>
                <a href="/list/list">List</a>
            </MetaProvider>
        </div>
    )
}
export default Menu
