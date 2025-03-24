import React from "react";
import Product from "./Product";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Jewerly = ({ products }) => {
  const navigate = useNavigate();
  const jeweleryProducts = products.filter(
    (product) => product.category === "Jewelery"
  );

  return (
    <div>
      <div>
        <h1
          style={{
            marginTop: "50px",
            textAlign: "center",
            fontSize: "50px",
            fontWeight: "lighter",
            borderBottom: "1px solid #ddd",
            paddingBottom: "20px",
            marginRight: "100px",
            marginLeft: "100px",
          }}
        >
          Latest Products
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: "20px",
            marginTop: "80px",
            fontSize: "12px",
            fontWeight: "initial",
            marginBottom: "40px",
          }}
        >
          <Button
            children={"All"}
            click={() => {
              navigate("/product");
            }}
          />
          <Button
            children={"Men's Clothing"}
            click={() => {
              navigate("/mens");
            }}
          />
          <Button
            children={"Women's clothing"}
            click={() => {
              navigate("/womens");
            }}
          />
          <Button
            children={"Jewelery"}
            click={() => {
              navigate("/jewelery");
            }}
          />
          <Button
            children={"Electronics"}
            click={() => {
              navigate("/electronic");
            }}
          />
        </div>
      </div>
      <div style={{ marginRight: "100px", marginLeft: "100px" }}>
        <div
          style={{
            display: "grid",

            gridTemplateColumns: " repeat(3,1fr)",

            marginBottom: "50px",
            gap: "50px",
          }}
        >
          {jeweleryProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Jewerly;
