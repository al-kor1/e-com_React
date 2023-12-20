import "./Sidebar.css";
import Category from "./Category/Category"
import Price from "./Price/Price"
import Colors from "./Colors/Colors"

export default function Sidebare() {
    return <>
        <section className="sidebar">
            <div className="logo-container">
                <p>🛒</p>
            </div>
            <Category/>
            <Price/>
            <Colors/>
        </section>
    </>

}
