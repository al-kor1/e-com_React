import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import { IoBagAdd } from "react-icons/io5";

export default function Products() {
  return <>
    <section className="card-container">
      <section className="card">
        <img className="card-img" src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar className="rating-star"/>
            <AiFillStar className="rating-star"/>
            <AiFillStar className="rating-star"/>
            <AiFillStar className="rating-star"/>
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$70</del> <span>55</span>
            </div>
            <div className="bag">
              <IoBagAdd className="bag-icon"/>
            </div>
          </section>
        </div>
      </section>
    </section>
  </>
}
