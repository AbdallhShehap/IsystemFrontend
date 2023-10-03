import React, { useState, useEffect } from "react";
import "../assests/Cards.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardsData from "../Data/CardsData";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "react-use-cart";

function  TopSelling({ title }) {
  const [slider, setSlider] = useState(null);
  const [cardsData, setCardsData] = useState([]);
  const { addItem } = useCart();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false, // Disable the default arrows
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrevSlide = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  // Initialize the slider reference once the component has mounted
  useEffect(() => {
    if (slider) {
      // You can access the slider methods here, e.g., slider.slickNext(), slider.slickPrev()
    }
  }, [slider]);
  // const [product_id, setProduct_id] = useState("");

  // useEffect(() => {
  //   console.log("Fetching data...");
  //   window.scrollTo(0, 0);

  //   axios
  //     .get("http://localhost:1010/productdetails/getproductdetails")
  //     .then((res) => {
  //       const dataWithImages = res.data.map((data) => ({
  //         ...data,
  //         // Ensure you handle the image_base64 correctly
  //         image_main: `data:image/jpeg;base64,${data.image_base64}`,
  //       }));
  //       console.log("Data with images:", dataWithImages);
  //       setCardsData(dataWithImages); // Update the state to display images
  //       setProduct_id(res.data.p_id)
  //       console.log("idddddddddd",product_id)
  //     })
  //     .catch((err) => {
  //       console.log(`Error: ${err}`);
  //     });
  //     axios
  //     .get  (`http://localhost:1010/newimgproducts/images/${product_id}`)
  //     .then((res) => {
  //       const relativePaths = res.data.images;

  //         // Convert relative paths to absolute URLs
  //         // const absolutePaths = relativePaths.map(relativePath => {
  //         //   return `http://localhost:1010${relativePath}`;
  //         // });
  //         setGetImg(relativePaths); // Update getImg state with absolute image URLs
  //         console.log("image", relativePaths);
  //     })
  //     .catch((err) => {
  //       console.log(`Error fetching images: ${err}`);
  //     });
  //     // const fetchImages = async () => {
  //     //   try {
  //     //     const response = await axios.get(
  //     //       `http://localhost:1010/newimgproducts/images/${product_id}`
  //     //     );
  //     //     const relativePaths = response.data.images;

  //     //     // Convert relative paths to absolute URLs
  //     //     // const absolutePaths = relativePaths.map(relativePath => {
  //     //     //   return `http://localhost:1010${relativePath}`;
  //     //     // });
  //     //     setGetImg(relativePaths); // Update getImg state with absolute image URLs
  //     //     console.log("image", relativePaths);
  //     //     // console.log("getimage",getImg)
  //     //   } catch (error) {
  //     //     console.log(`Error fetching images: ${error}`);
  //     //   }
  //     // };
  //     // fetchImages()
  // }, []);
  // const [getImg, setGetImg] = useState([]);
  const [product_id, setProduct_id] = useState("");
  const [getImg, setGetImg] = useState([]);
  useEffect(() => {
    // Fetch product details
    axios
      .get("http://localhost:1010/topselling/gettopselling")
      .then((res) => {
        setCardsData(res.data);

      })
      .catch((err) => {
        console.log(`Error fetching product details: ${err}`);
      });
  }, []);
  // useEffect(() => {
  //   console.log("Fetching data...");
  //   window.scrollTo(0, 0);

  //   // Fetch product details
  //   axios
  //     .get("http://localhost:1010/productdetails/getproductdetails")
  //     .then((res) => {
  //       const dataWithImages = res.data;
  //       console.log("Data with images:", dataWithImages);
  //       setCardsData(dataWithImages); // Update the state to display images

  //       // Create an object to store images for each product
  //       const imagesByProductId = {};

  //       // Iterate through the products and fetch images for each product
  //       dataWithImages.forEach((product) => {
  //         const productId = product.p_id;
  //         console.log("Fetching images for product with ID:", productId);

  //         // Make the Axios call for each product's images
  //         axios
  //           .get(`http://localhost:1010/newimgproducts/images/${productId}`)
  //           .then((res) => {
  //             const relativePaths = res.data.images;

  //             // Store the images in the object using the product ID as the key
  //             imagesByProductId[productId] = relativePaths;

  //             console.log("Images for product with ID", productId, ":", relativePaths);
  //             console.log("Images object:", imagesByProductId);
  //             // If you want to update the state after fetching all images, you can do it here
  //             setGetImg(imagesByProductId);
  //           })
  //           .catch((err) => {
  //             console.log(`Error fetching images for product with ID ${productId}: ${err}`);
  //           });
  //       });

  //       // If you want to update the state after fetching all images, you can do it here
  //       // setGetImg(imagesByProductId);
  //     })
  //     .catch((err) => {
  //       console.log(`Error: ${err}`);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log("Fetching data...");
  //   window.scrollTo(0, 0);

  //   axios
  //     .get("http://localhost:1010/productdetails/getproductdetails")
  //     .then((res) => {
  //       // const dataWithImages = res.data.map((data) => ({
  //       //   ...data,
  //       //   // Ensure you handle the image_base64 correctly
  //       //   image_main: `data:image/jpeg;base64,${data.image_base64}`,
  //       // }));
  //        const dataWithImages = res.data
  //       console.log("Data with images:", dataWithImages);
  //       setCardsData(dataWithImages); // Update the state to display images
  //       const firstProductId = dataWithImages[0].p_id; // Assuming you want to use the first product's ID
  //       setProduct_id(firstProductId); // Set the product_id
  // console.log("id",firstProductId)
  //       // Make the second Axios call here with the product_id
  //       axios
  //         .get(`http://localhost:1010/newimgproducts/images/221`)
  //         .then((res) => {
  //           const relativePaths = res.data.images;
  //           // Convert relative paths to absolute URLs
  //           // const absolutePaths = relativePaths.map(relativePath => {
  //           //   return `http://localhost:1010${relativePath}`;
  //           // });
  //           setGetImg(relativePaths); // Update getImg state with absolute image URLs
  //           console.log("image", relativePaths);
  //         })
  //         .catch((err) => {
  //           console.log(`Error fetching images: ${err}`);
  //         });
  //     })
  //     .catch((err) => {
  //       console.log(`Error: ${err}`);
  //     });
  // }, []);

  // Rest of your component code

  return (
    <>
      <div className="container">
        <div className="card-slider">
          <h2 className="title_card">{title}</h2>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cardsData.map((data) => (
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="card" key={data.p_id}>
                  {data.images?.length > 0 ? (
                    <img
                      src={`http://localhost:1010/${data.images[0]?.image_path}`}
                      alt={data.product_name}
                    />
                  ) : (
                    <p>No image available</p>
                  )}

                  <div className="d-flex justify-content-between p-3">
                    <p className="lead mb-0 card_title">{data.product_name}</p>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <p className="small text-danger">{data.price} JD</p>
                      <p className="small oldPrice">{data.old_price} JD</p>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">
                        {data.stock === 1 ? "In stock" : "Out of stock"}{" "}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      {data.stock == 1 ? (
                        <Link
                          to={`productdetails/${data.p_id}`}
                          className="w-100"
                        >
                          <button
                            className="btn btn-outline-primary w-100 more_info_btn"
                            type="button"
                          >
                            More Info
                          </button>
                        </Link>
                      ) : (
                        <button
                          className="btn btn-outline-primary w-100 "
                          type="button"
                          disabled
                          style={{ borderColor: "#838282", color: "#838282" }}
                        >
                          Out of stock{" "}
                        </button>
                      )}

                      <Link to={"cart"}>
                        <button
                          type="button"
                          className="btn btn-danger ms-2 h-100"
                          onClick={() => {
                            addItem({
                              id: data.p_id, // Make sure selectData has an id property
                              price: data.price, // Make sure selectData has a price property
                              product_name: data.product_name,
                            });
                          }}
                        >
                          {" "}
                          <img
                            src={require("../images/cart.png")}
                            className="card-img-top"
                            alt="Laptop"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div
            className="col-md-12 col-sm-12 col_btn_prevNext"
            style={{ marginTop: "10px" }}
          >
            <button
              onClick={goToPrevSlide}
              className="btn btn-primary mb-3  slider_home custom_btn_margin1"
            >
              {" "}
              <i className="fa fa-arrow-left" style={{ color: "#fff" }}></i>
            </button>
            <button
              onClick={goToNextSlide}
              className="btn btn-primary mb-3 slider_home custom_btn_margin2"
            >
              {" "}
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopSelling;
