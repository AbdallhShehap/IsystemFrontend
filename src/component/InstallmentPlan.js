import React, { useEffect } from "react";
import "../assests/InstallmentPlan.css";
import { Link } from "react-router-dom";
function InstallmentPlan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div class="container container_installment">
      <div class="row">
        <div class="col">
          <h2>Instalment Plan EPP :</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div class="col">
          <p className="installment_title">
            Starting as low as JOD 8.3 per month with 0% interest. Get your new
            Apple device and pay in installments with 0% interest on your
            purchase of JD 200 and above.
          </p>{" "}
          <Link className="link_credit">
            <p className="ms-1 mt-5 mb-5">
              You only need a Credit Card from one of the following banks:
            </p>
          </Link>
        </div>
      </div>
      <div className="row">
<div className="col-lg-4 col-sm-12">
<img src={require('../images/kuwaitBank.webp')} alt="" width={"80%"} height={"70%"}/>
</div>
<div className="col-lg-4 col-sm-12">
<img src={require('../images/etihadBank.webp')} alt="" width={"80%"} height={"70%"}/>

</div>
<div className="col-lg-4 col-sm-12">
<img src={require('../images/ahliBank.webp')} alt="" width={"80%"} height={"85%"}/>

</div>
      </div>
      <div className="row">
<div className="col-lg-4 col-sm-12">
<img src={require('../images/investbank.png')} alt="" width={"80%"} height={"70%"}/>
</div>
<div className="col-lg-4 col-sm-12">
<img src={require('../images/safwaBank.webp')} alt="" width={"80%"} height={"70%"}/>

</div>
<div className="col-lg-4 col-sm-12">
<img src={require('../images/arabBank.webp')} alt="" width={"80%"} height={"70%"}/>

</div>
      </div>
      <div className="row">
<div className="col-lg-4 col-sm-12">
<img src={require('../images/Capital Bank.webp')} alt="" width={"80%"} height={"50%"}/>
</div>
<div className="col-lg-4 col-sm-12">
<img src={require('../images//Bank of Jordan new.png')} alt="" width={"80%"} height={"50%"}/>

</div>
<div className="col-lg-4 col-sm-12">
<img src={require('../images/cairoBank.webp')} alt="" width={"80%"}height={"40%"}/>

</div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <ul>
            <li className="payment_steps">
              Maximum monthly payments are up to 24 months.
            </li>
            <li className="payment_steps">
              Maximum monthly payments are up to 18 months for Bank of Jordan
              and Jordan Kuwait Bank.
            </li>
            <li className="payment_steps">
              Maximum monthly payments are up to 14 months for Capital Bank.
            </li>
            <li className="payment_steps">
              Maximum monthly payments are up to 12 months for Jordan Ahli Bank,
              Bank al Etihad, Safwa Islamic Bank, Cairo Amman Bank.
            </li>
          </ul>
          <p className="terms">Terms & Conditions apply.</p>
        </div>
      </div>
 
    </div>
    </>

  );
}

export default InstallmentPlan;
