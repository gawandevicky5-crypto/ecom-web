import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ setCategory }) {

  const cartData = useSelector(
    (state) => state.counter.cart
  );

  const totalItems = cartData.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between py-3">

          <h1 className="mb-0 fw-bold">
            Online Shopping
          </h1>

          <div className="side-bar d-flex align-items-center gap-4">

      
            <Link to="/" className="home fw-semibold">
              Home
            </Link>

           
            <div className="cart position-relative">

              <Link
                to="/cart"
                className="text-dark"
              >
                <FaShoppingCart size={25} />

                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                )}

              </Link>

            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
