const Where = () => {
  return (
    <>
      <div className="jumbotron" id="where">
        <div className="inner">
          <h1>Where</h1>
        </div>
      </div>
      <div className="container centered">
        <h1>Ceremony</h1>
        <p>
          <b>
            <a href="https://www.google.com/maps/place/Custer+Road+United+Methodist+Church/@33.066653,-96.737417,17z/data=!3m1!4b1!4m2!3m1!1s0x864c181abdca37c1:0xf377f877be5dd320">
              Custer Road United Methodist Church
            </a>
          </b>
          <br />
          <span>6601 Custer Road</span>
          <br />
          <span>Plano, TX 75023</span>
          <br />
          <span>10:00am</span>
        </p>
        <iframe
          frameBorder="0"
          height="450"
          src="https://www.google.com/maps/embed/v1/place?q=Custer%20Road%20United%20Methodist%20Church%2C%20Custer%20Road%2C%20Plano%2C%20TX%2C%20United%20States&key=AIzaSyBYVMk9GHCSvGOJhWHBEjEW58-6SVBmjis"
        />
        <h1>Reception</h1>
        <p>
          <b>
            <a href="https://www.google.com/maps/place/210+E+Stacy+Rd,+Allen,+TX+75002/@33.129677,-96.6534432,17z/data=!3m1!4b1!4m2!3m1!1s0x864c11288314facd:0xfb43304d42c9329">
              Courtyard by Marriott Dallas-Allen
            </a>
          </b>
          <br />
          <span>210 East Stacy Road</span>
          <br />
          <span>Allen, TX 75002</span>
          <br />
          <span>12:30pm</span>
        </p>
        <iframe
          frameBorder="0"
          height="450"
          src="https://www.google.com/maps/embed/v1/place?q=210%20East%20Stacy%20Road%2C%20Allen%2C%20TX%2C%20United%20States&key=AIzaSyBYVMk9GHCSvGOJhWHBEjEW58-6SVBmjis"
        />
      </div>
    </>
  );
};

export default Where;
