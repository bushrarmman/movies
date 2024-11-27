import "./Streaming.css";
import familyimg from '../../Assets/live_img.png'

const Streaming = () => {
  return (
    <section className="streaming">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <span>online streaming</span>
            <h2>Live Movie & TV Shows For Friends & Family</h2>
            <p>
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod{" "}
              <br></br> There are many variations of passages of lorem Ipsum
              available, but the<br></br> majority have suffered alteration.
            </p>
            <div className="views">
              <div className="views1">
                <h1>HD 4K</h1>
              </div>
              <div className="views2">
                <h3>20K+</h3>
                <h4>Active Customer</h4>
              </div>
            </div>
            <button><i className="fa-play">watch now</i></button>
          </div>
          <div className="col-lg-6">
          <img src={familyimg} alt="family" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Streaming;
