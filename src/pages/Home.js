import React from "react";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <div className="main__wrapper">
        <div className="banner__section">
          <Banner
            title="Experience the collections of beautiful stories"
            subtitle="Enjoy the first month free subscription"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
