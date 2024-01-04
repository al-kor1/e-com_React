import "./Sidebar.css";
import Category from "./Category/Category"
import Price from "./Price/Price"
import Colors from "./Colors/Colors"

export default function Sidebare({handleChange}) {

    return <>
        <section className="sidebar">
            <div className="logo-container">
                <p>🛒</p>
            </div>
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>
        </section>
    </>

}
