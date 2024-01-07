import { AiFillStar } from "react-icons/ai";
import { IoBagAdd } from "react-icons/io5";

export default function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <section className="card">
      <img className="card-img" src={img} alt={title} />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star}
          {star}
          {star}
          {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> <span>{newPrice}</span>
          </div>
          <div className="bag">
            <IoBagAdd className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  )
}
