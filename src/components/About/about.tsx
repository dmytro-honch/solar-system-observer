import './about.css';

export const About = () => {
  return (
    <div className="page-wrapper">
      <h2 className="about-title">About</h2>
      <div className="about-text">
        <p>
          About Welcome to our non-profit project, "Exploring the Solar System"! We are Dmytro Honcharov and Oleksii
          Moroz, two passionate software developers with a shared fascination for the vastness and beauty of our cosmic
          neighborhood.
        </p>
        <p>
          Our goal is to provide an interactive and educational experience that enables people to grasp the true scale
          of the Solar System. We believe that understanding the distances between celestial bodies can enhance our
          appreciation of the universe and our place within it. By leveraging the power of modern web technologies, we
          aim to make this knowledge easily accessible to everyone.
        </p>
        <p>
          To achieve this, we have chosen to employ the WebGPU API, a cutting-edge feature in modern browsers similar to
          WebGL. WebGPU allows us to harness the capabilities of graphics processing units (GPUs) to render stunning
          visual representations of the Solar System with remarkable detail and performance. Through this technology, we
          can provide an immersive experience that brings the wonders of space right to your screen.
        </p>
        <p>
          Our project is driven by a deep passion for astronomy and a commitment to open knowledge. We believe that by
          making science more accessible and engaging, we can inspire curiosity and foster a greater appreciation for
          the cosmos. Our website will provide a wealth of information about each planet, including its size, distance
          from the Sun, and other intriguing facts. We will also include captivating visuals, interactive simulations,
          and educational resources to enhance your learning experience.
        </p>
        <p>
          We are excited to embark on this journey and invite you to join us as we explore the wonders of the Solar
          System together. Whether you're a student, a space enthusiast, or simply curious about the cosmos, our project
          aims to ignite your imagination and deepen your understanding of our celestial neighbors. Thank you for
          visiting "Exploring the Solar System." We hope you enjoy your journey through the vastness of space!
        </p>
        <p>We used here next resources:</p>
        <a href="https://en.wikipedia.org/wiki/List_of_Solar_System_objects_by_size" target="_blank">
          List of Solar System objects by size
        </a>
      </div>
    </div>
  );
};
