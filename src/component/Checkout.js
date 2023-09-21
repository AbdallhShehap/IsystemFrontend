import React, { useState } from "react";
import "../assests/Checkout.css";
import { useLocation } from "react-router-dom";

function Checkout() {
  const [openDelivery, setOpenDelivery] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const location = useLocation();
  const { cartItems,total } = location.state;

  console.log("item", cartItems);
  console.log("total",total)
  const handleDelivery = () => {
    setOpenDelivery(true);
  };
  const handlePayment = () => {
    setOpenPayment(true);
  };
  const handleReview = () => {
    setOpenReview(true);
  };
  return (
    <div>
      <div className="maincontainer ">
        <div class="container container_checkout">
          {/* <div class="py-4 text-center">
            
            
          </div> */}
          <div class="row">
            <div class="col-md-4 order-md-2 ">
              <h4 class="d-flex justify-content-between align-items-center mb-4 ">
                <span class="mt-4">Order summary </span>
                {/* <span class="badge badge-secondary badge-pill">3</span> */}
              </h4>

              {cartItems.map((item) => (
                <ul class="list-group mb-3" key={item.p_id}>
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">{item.product_name}</h6>
                      <small class="text-muted">{item.color_name}</small>
                    </div>
                    <span class="text-muted">{item.price}</span>
                  </li>
                </ul>
              ))}
              <li class="list-group-item d-flex justify-content-between bg-light">
                <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">-$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (JD)</span>
                <strong>{total}</strong>
              </li>
              {/* <form class="card p-2">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Promo code"
                  />
                  <div class="input-group-append">
                    <button type="button" class="btn btn-secondary">
                      Redeem
                    </button>
                  </div>
                </div>
              </form> */}
            </div>

            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Customer details</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Phone</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">Valid phone is required.</div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                </div>

                <h4 class="mb-3">Delivery details</h4>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">
                      Valid Address is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">City</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div class="invalid-feedback">Valid City is required.</div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="country">Country</label>
                    <select
                      class="custom-select d-block w-100"
                      id="country"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div class="col-md-6 mb-3">
                    <label for="zip">Zip / Postal code</label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Zip code required.</div>
                  </div>
                </div>

                <hr class="mb-4" />
                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="button"
                  onClick={handleDelivery}
                  style={{ backgroundColor: "#27579a", marginBottom: "3%" }}
                >
                  Continue
                </button>
                {openDelivery && (
                  <div>
                    <h4 class="mb-3">Delivery Method</h4>
                    <p>Shipping & delivery</p>
                    <div className="delivery">
                      <div class="form-check">
                        <div className="type_delivery">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Shipping-Amman
                          </label>
                          <p>Free</p>
                        </div>
                        <p className="delivery_days">1-2 Working Days</p>
                      </div>
                      <hr />
                      <div class="form-check">
                        <div className="type_delivery">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Shipping-Amman
                          </label>
                          <p>Free</p>
                        </div>
                        <p className="delivery_days">3 Working Days</p>
                      </div>
                    </div>
                    <p style={{ marginTop: "1%" }}>Pickup</p>

                    <div className="delivery">
                      <div class="form-check">
                        <div className="type_delivery">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Store Pickup
                          </label>
                          <p>Free</p>
                        </div>
                        <p className="delivery_days">
                          Mecca St., Amman, , 11185, Jordan
                        </p>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block "
                      style={{
                        backgroundColor: "#27579a",
                        width: "80%",
                        marginTop: "3%",
                        marginBottom: "3%",
                      }}
                      type="button"
                      onClick={handlePayment}
                    >
                      Continue
                    </button>
                  </div>
                )}
                {openPayment && (
                  <div>
                    <h4 class="mb-3">Payment</h4>
                    <div className="paymentOption">
                      <p>
                        Cash or Visa on Delivery If you wish to pay by
                        installments then you can use your visa on delivery.
                      </p>
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block "
                      style={{
                        backgroundColor: "#27579a",
                        width: "80%",
                        marginTop: "3%",
                        marginBottom: "3%",
                      }}
                      type="button"
                      onClick={handleReview}
                    >
                      Continue
                    </button>
                  </div>
                )}
                {openReview && (
                  <div>
                    <h4 class="mb-3">Review & place order</h4>
                    <p>
                      Review the order details above, and place your order when
                      you’re ready.
                    </p>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckIndeterminate"
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        I agree to the Return Policy{" "}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckIndeterminate"
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckIndeterminate"
                      >
                        I agree emails to receive marketing communications via
                        email and/or SMS to and phone numbers added above.{" "}
                      </label>
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block "
                      style={{
                        backgroundColor: "#27579a",
                        width: "80%",
                        marginTop: "3%",
                        marginBottom: "3%",
                      }}
                      type="button"
                      onClick={handlePayment}
                    >
                      Place Order & Pay
                    </button>
                  </div>
                )}

                {/* <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      class="custom-control-input"
                      checked
                      required
                    />
                    <label class="custom-control-label" for="credit">
                      Credit card
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      class="custom-control-input"
                      required
                    />
                    <label class="custom-control-label" for="debit">
                      Debit card
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      class="custom-control-input"
                      required
                    />
                    <label class="custom-control-label" for="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <small class="text-muted">
                      Full name as displayed on card
                    </small>
                    <div class="invalid-feedback">Name on card is required</div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Expiration date required</div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">Security code required</div>
                  </div>
                </div> */}
                <hr class="mb-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
