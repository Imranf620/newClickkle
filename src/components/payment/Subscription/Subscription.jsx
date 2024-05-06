import React from "react";
import "../Subscription/subscription.css";
import Card from "../Card/Card";
import atm from "../Images/ATMe.png";
import Card2 from "../card2/Card2";
import cloud from "./../../images/Assets/fluent_cloud-backup-24-regular.png"

const Subscription = () => {
  return (
    <div className="mx-4">
      <div className="container-fluid p-2">
        <div className="container">
          <h2 className="text-secondary ">Payments & Subscriptions</h2>
        </div>
        <div className="container text-center p-5 main">
          <h1 className="mb-3">Payments & Subscriptions</h1>
          <p>
            Your Payment Info, Transaction, recurring payments and reservations.
          </p>
        </div>
      </div>
      <Card
        heading="Payment method"
        para="Payment method are saved in your Clickkle Account so you can use them across Clickkle Services Compaign of Ads"
        link="Menage Payment method"
        img={atm}
      />
    
      <div className="my-3">
        <Card
          heading="Payment info"
          para="Payment method and transaction you've made using Clickkle pay."
          link="Manage experience"
        />
      </div>
      <div className="my-3">
        <Card
          heading="Purchase"
          para="Your Transaction, encompassing deliveries and other online purchase, conducted with any of our products"
          link="Manage Purchase"
          img={atm}
        />
      </div>
      <div className="my-3">
        <div className="container p-2 bg-daner rounded border">
          <div className="container bg-waing ">
            <div className="row m-0 d-flex align-items-center">
              <div className=" col-lg-8 col-12 bg-seconary cardo m-0 ps-3">
                <h2>Account Storage</h2>
                <p>
                  Your account storage is shared across Clickkle services, like
                  File, Ads, Compaign, E-sign, Host, C-mail, Projects and Pitch.
                </p>
              </div>
              <div className="container col bg-warig p-2 card-img">
                <img src={cloud} alt="" />
              </div>
              <div className="container-fluid">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "20%" }}
                  ></div>
                </div>
                <p>8.85 GB used of 40 GB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-ifo p-3 border cardi">
          <a href="/" className="ms-4">
            Manage Purchase
          </a>
        </div>
      </div>
      <div className="my-3">
        <Card
          heading="Subscription"
          para="Your recurring payment of subscription method."
          link="Manage Clickkle subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle Ads"
          para="Maximize your Ad ROI with Clickkle's AI-powered platform. Real time Programmatic buying dynamic retargeting, and hyper-targeted geofencing"
          link="Manage Clickkle Ads Subscription"
          img={atm}
        />
      </div>
      <div className="mt-3">
        <Card2
          heading="Clickkle Host"
          para="NYMe SSD for lightening fast programming. Advanced DDoS protection and WAF for website security. Scalable Resources for Cost-Efficient Hosting. 99.9% Uptime Guarantee."
          link="Manage Clickkle Host subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle Campaigns"
          para="Clickkle Campaign offer smart content tools to improve writing and prevant spam, Along with powerful AI features for secure business promotion. Perfect for all Businesses sizes"
          link="Manage Clickkle campaign subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle File"
          para="Secure and efficient file storage with Clickkle. Seamless file management, flexible sharing option, advanced encryption, and two factor authentication. Unleash your potential with Clickkle."
          link="Manage Clickkle File subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle E-sign"
          para="Streamline document work flow with our e-signature technology. Sign and manage document securely, with advance features and audit trails. Collaborate effectively, anywhere, anytime"
          link="Manage Clickkle E-sign subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle Pitch"
          para="Clickkle elevates your pitch with storytelling, strategic brilliance, visual symphonies, dynamic delivery, and flawless execution. Trust us to bring your ideas to life and leave an impression. "
          link="Manage Clickkle Pitch subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle C-mail"
          para="Get the best in secure email and collaboration with C-mail. Advanced features, top-of-the-line-security, and easy life sharing. Join now for businesses and individual alike."
          link="Manage Clickkle C-mail subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle Projects"
          para="Discover our innovative project management solutions, powered by cutting-edge technology. Streamline workflows foster collaboration and achieve enhanced success in your projects effortlessly"
          link="Manage Clickkle Projects subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle Launch"
          para="Clickkle is dedicated to simplifying legal processes for startups, providing efficient solutions to streamline compliance and enable business growth
          "
          link="Manage Clickkle Launch subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle Chat"
          para="Clikkie chat swiftly resolves issues, boosting team officiency whillo also enhancing customer satisfaction
          "
          link="Manage Clickkle Chat subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle Social"
          para="Millions of people having fun and making new friends on Cikikle Social every day. You can too!"
          link="Manage Clickkle Social subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle Whatsup"
          para="Connect seamlessly with loved ones through Clickkle Watsup, accessing premium features such as voice-to-text, swift replles, in-app video, and a host of others secure services on our platform"
          link="Manage Clickkle Whatsup subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle Swiprr"
          para="Adding more of your authentic self so create a dating experienice that feels genuinely wonderful"
          link="Manage Clickkle Swiprr subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle KeptUp"
          para="Simplify home maintenance She never before with Kaptlip your comprehensive solution for interior and exterior upkeep"
          link="Manage Clickkle KeptUp subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle Hivrr"
          para="Hiver: Where Rool Love Finds You. Discover deeper connections where hearts meet."
          link="Manage Clickkle Hivrr subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card2
          heading="Clickkle News"
          para="Stay ahead of the curve with Clickkle News, your go-to source for the freshest trends and breaking stories. Explore, engage, and be in the know with Clickkle News."
          link="Manage Clickkle News subscription"
          img={atm}
        />
      </div>
      <div className="my-3">
        <Card
          heading="Reservation"
          para="Your past and upcoming reservations for fights, hotels and events using our services"
          link="Manage reservation"
          img={atm}
        />
      </div>
    </div>
  );
};

export default Subscription;
