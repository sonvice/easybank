import { imageMockups } from "../assets/images";
import Buton from "../components/Button";

const Hero = () => {
  const label = 'Request Invite'
  return (
    <div className="container">
      <div className="hero pt-space-4xl">
        <div className="hero__text flow">
          <h1>Next generation digital banking</h1>
          <p className="text-gray-blue">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Buton text={label}></Buton>
        </div>
        <div className="hero__img">
          <img src={imageMockups} alt="Mockups" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
