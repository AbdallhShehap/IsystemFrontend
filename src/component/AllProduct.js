import React, { useState } from "react";
import DataCategory from "../Data/DataCategory.js";
// import '../assests/Cards.css'
import "../assests/Category.css";
function AllProduct({data=[],filteredProducts=[]}) {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          {filteredProducts.length > 0 ?(filteredProducts.map((product) => (
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 "key={product.id}>
              <div class="card">
                <img src={product.image} class="card-img-top"  />
                <div class="d-flex justify-content-between ps-3 pt-3">
                  <p
                    class="lead mb-0 card_title category_title"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    {product.product_name}{" "}
                  </p>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p className="small price" style={{ color: "#C6C6C6",fontSize:"14px "}}>
                      Starting at{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "17px",
                        }}
                      >
                        {product.price}
                      </span>
                    </p>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{product.stock} </p>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))):
          (data.map((product) => (
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 "key={product._id}>
              <div class="card">
                <img src={product.image} class="card-img-top" alt="product" />
                <div class="d-flex justify-content-between ps-3 pt-3">
                  <p
                    class="lead mb-0 card_title category_title"
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    {product.product_name}{" "}
                  </p>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p className="small price" style={{ color: "#C6C6C6",fontSize:"14px "}}>
                      Starting at{" "}
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "17px",
                        }}
                      >
                        {product.price}
                      </span>
                    </p>
                    <div class="d-flex justify-content-between mb-2">
                      <p class="mb-0 inStock">{product.stock} </p>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          )))
        
             }
          
        </div>
      </div>
    </div>
  );
}

export default AllProduct;

// import React, { useState } from "react";
// import DataCategory from "../Data/DataCategory.js";
// import "../assests/Category.css";

// function AllProduct({ data = [], filteredProducts = [] }) {
//   return (
//     <div>
//       <div className="container text-center">
//         <div className="row">
//           {filteredProducts.length > 0 ?(filteredProducts.map((product) => (
//             <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 "key={product.id}>
//               <div class="card">
//                 <img src={product.image} class="card-img-top"  />
//                 <div class="d-flex justify-content-between ps-3 pt-3">
//                   <p
//                     class="lead mb-0 card_title category_title"
//                     style={{
//                       textAlign: "center",
//                       fontWeight: "bold",
//                       fontSize: "1rem",
//                     }}
//                   >
//                     {product.product_name}{" "}
//                   </p>
//                 </div>
//                 <div class="card-body">
//                   <div class="d-flex justify-content-between">
//                     <p className="small price" style={{ color: "#C6C6C6",fontSize:"14px "}}>
//                       Starting at{" "}
//                       <span
//                         style={{
//                           color: "red",
//                           fontWeight: "bold",
//                           fontSize: "17px",
//                         }}
//                       >
//                         {product.price}
//                       </span>
//                     </p>
//                     <div class="d-flex justify-content-between mb-2">
//                       <p class="mb-0 inStock">{product.stock === 1 ? "In stock" :"Out of stock"} </p>
//                     </div>{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))): 
//             data.length > 0 ? (
//               data.map((product) => (
//                 <div class="col-md-6 col-lg-4 mb-4 mb-lg-4 "key={product.id}>
//                 <div class="card">
//                   <img src={product.image} classname="card-img-top"  />
//                   <div class="d-flex justify-content-between ps-3 pt-3">
//                     <p
//                       class="lead mb-0 card_title category_title"
//                       style={{
//                         textAlign: "center",
//                         fontWeight: "bold",
//                         fontSize: "1rem",
//                       }}
//                     >
//                       {product.product_name}{" "}
//                     </p>
//                   </div>
//                   <div class="card-body">
//                     <div class="d-flex justify-content-between">
//                       <p className="small price" style={{ color: "#C6C6C6",fontSize:"14px "}}>
//                         Starting at{" "}
//                         <span
//                           style={{
//                             color: "red",
//                             fontWeight: "bold",
//                             fontSize: "17px",
//                           }}
//                         >
//                           {product.price}
//                         </span>
//                       </p>
//                       <div class="d-flex justify-content-between mb-2">
                        
//                         <p class="mb-0 inStock">{product.stock === 1 ? "In stock" :"Out of stock"} </p>
//                       </div>{" "}
//                     </div>
//                   </div>
//                 </div>
//               </div>         
//                  ))
// ) : (
//               <div className="col-12">
//                 <p>No products found</p>
//               </div>
//             )
//           }
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllProduct;
