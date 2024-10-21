import { Link } from "react-router-dom";

function Hero(){
  return(
    <div>
    <section id="home" class="hero">
    <div class="bg-img"></div>
    <div class="hero-text">
      <h1>Hello, I'm Rosela Berberi</h1>
      <p>A passionate Software Engineer</p>
      <Link to="/projects" className="view-work-btn">View My Work</Link>
  </div>
  </section>
  </div>
  );
}

export default Hero;