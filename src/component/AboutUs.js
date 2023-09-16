import React, { useEffect } from "react";

function AboutUs() {
    useEffect(()=>{
window.scrollTo(0,0)
    },[])
  return (
    <>
      <div className="container" style={{ marginTop: "75pt" }}>
        <div className="row">
          <div className="col-lg-2">
            <h2>About Us</h2>
          </div>
          <div className="col-lg-10">
          <hr className="mt-4"/>

          </div>
        </div>
        <div className="row mt-4">
            <div className="col">
                <img src={require('../images/Authorised Service Provider MP.jpg')} alt="" width={"100%"} height={"750pt"} />
            </div>
             </div>
             <div className="row mt-4">
                <div className="col fs-5">
                    <p>
                        
iSystem has been established in 2006 and we where the first to introduce Apple Authorised Resellers to the Jordanian market where you can find and try the Apple experience.
                    </p>
                    <p>In 2016, we launched our first Apple Premium Reseller in Abdali Mall that not only elevated the Apple experience zone inside our store but was set to provide a diverse range of services that suit every consumer need along with an outstanding customer satisfaction offered by (your local Apple Experts). </p>
                <p>We are your destination for everything Apple, we are passionate about the services besides offering a full range of accessories, We are (your Local Apple Experts).</p>
                <p>Over the years we have grown both in size and experience. Today with 5 stores, we dont only offer our customers a variety of services, but we provide them with an outstanding customer experience delivered by your local Apple experts.

Whether you wish to purchase a Mac in easy instalments plans, upgrade your iPhone for a new one with our trade in service, maximise on accessories for any Apple product, attend a workshop on features you’re interested in or request a one-to-one training from one of our experienced and knowledgable Sales Team, iSystem will provide with what you need in a friendly environment.

From hardware to software, iPhones, iMacs, MacBook, Apple Watch and iPads, our selection of Apple products is full, complete, and complemented by a number of products which best suit your needs alongside, such as: JBL, Wacom, Beats, Belkin, JCpal, Lacie, and much more.</p>
              <p>Our Vision is to Give our customers:</p>
              <ol>
                <li>Retail Experience:</li>
                <p>A whole new concept that we are introducing in Jordan, Our Stores will have all the features iSystem offers from services, workshops to one-to-one trainings, helping our customers utilizing and using their Apple products maximizing their result to the max.</p>
                <li>Workshops:</li>
                <p>What we intend to do with these workshops is help our customers understand and use our products to their fullest. From teaching them how to draw on iPad to taking amazing picture with iPhone and much more, we are targeting all of our users. Adding iMovie Workshops, and Garage Band to the list, for our future musicians and film makers. </p>
              <li>Convenience:</li>
              <p>We have 5 stores in Amman, and we are growing each year and our locations are very well distributed to keep the experience as easy as possible, besides having our online shop, allowing our customers to always reach us.</p>
              <li>Services:</li>
              <p>We are an Authorized Apple Service Provider, we always put extra effort in giving out the best customer service possible. iSystem is not only here to sell the products, we will teach you how to use the products, and help to fix any problems you may face.

</p>
<li> Trainings:</li>
<p>Since we have our Apple Expert in iSystem, who can help you either in walking you through the Apple line up, recommending your next device from knowing your needs, live demonstration to get the feel of working on Apple products, and for after sale the one-to-one training.</p>
              </ol>
        
                </div>
             </div>
      </div>
    </>
  );
}

export default AboutUs;
