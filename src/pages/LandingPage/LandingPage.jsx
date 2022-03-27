import "./landingPage.css";
export const LandingPage = () => {
  return (
    <div className="landingPage-container">
      <section className="left-section text-left">
        <h1>
          <span className="primary-text-color">My</span>Website
        </h1>
        <div className="content  px-8">
          <h6 className="secondary-text-color">Meet your modern</h6>
          <h5 className="primary-text-color">Note Taking App</h5>
          <p className="py-8">
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
        </div>
        <div className="py-32">
          <button className="btn primary-btn">Join Now</button>
          <div>
            <a className="link-btn">Already have an account?</a>
          </div>
        </div>
      </section>
      <section className="right-section ml-auto">
        <img src="hero-icon.png" />
      </section>
    </div>
  );
};
