import React from "react";
import bg from "../assets/image1.jpg";
import {AiFillAmazonCircle,AiFillGoogleCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TeachyStore</h1>
          <p>every teach software availabe. Never miss discount </p>
        </main>
      </div>

      <div className="contents">
        <img src={bg} alt="bakcImage" />
        <div>
          <p>
            Your all tech problem solution is here. We are proding all tech
            services like web-development, app development, ms-office, ms-word
          </p>
        </div>
      </div>

      <div className="content2" id="about">
        <div>
          <h2>Who we are?</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repudiandae autem sed tenetur ut? Ipsa, asperiores iure. Minus necessitatibus non sequi optio, eaque assumenda unde fugiat repudiandae quasi accusantium eos repellat in eum incidunt porro reprehenderit aliquid illo inventore nostrum rerum molestias? Dignissimos beatae aspernatur corrupti quia repudiandae odit! Expedita suscipit aut qui quos vero nulla labore et sequi pariatur at dolorum sunt ducimus, provident quod, distinctio magnam vel aspernatur eveniet tenetur fugiat. Sunt quidem dolores voluptatum mollitia, dolorem deserunt magnam dolore doloremque saepe, dolor odit sit sequi eius, incidunt ex excepturi! Architecto, voluptates! Maiores natus nisi voluptate corporis aspernatur voluptas repudiandae omnis consectetur nemo obcaecati. Asperiores cupiditate accusamus, fugiat officiis magnam dignissimos exercitationem pariatur, delectus reprehenderit nihil aliquam, nisi alias? Error assumenda facilis in, optio nihil illum odio culpa fugit repellendus qui? Saepe hic illum sequi placeat exercitationem illo modi accusantium quia beatae reprehenderit, labore veritatis doloremque odit. Adipisci.
          </p>
        </div>
      </div>

      <div className="content3" id="brands">
          <div>
            <h2>brands</h2>
            <div className="brands">
              <div className="brand"
                style={{animationDelay:"0.4s"}}
              >
                <AiFillGoogleCircle/>
                <p>Google</p>
              </div>
              <div className="brand"
                style={{animationDelay:".6s"}}
              >
                <AiFillAmazonCircle/>
                <p>Amazon</p>
              </div>
              <div className="brand"
                style={{animationDelay:".8s"}}
              >
                <AiFillYoutube/>
                <p>Youtube</p>
              </div>
              <div className="brand"
                style={{animationDelay:"1s"}}
              >
                <AiFillInstagram/>
                <p>Instragram</p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Home;
