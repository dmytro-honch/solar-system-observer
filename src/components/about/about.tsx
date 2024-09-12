export const About = () => (
  <div className="bg-[var(--primary-element-color)] rounded-[var(--container-border-radius)]">
    <h2 className="pt-5 pr-5 pl-5 my-5 text-2xl text-[var(--primary-text-color)] font-bold md:pt-10 md:pr-10 md:pl-10">
      About
    </h2>
    <div className="pr-5 pl-5 md:pr-10 md:pl-10">
      <p className="my-4">
        About Welcome to our non-profit project, "Exploring the Solar System"! We are Dmytro Honcharov and Oleksii
        Moroz, two passionate software developers with a shared fascination for the vastness and beauty of our cosmic
        neighborhood.
      </p>
      <p className="my-4">
        Our goal is to provide an interactive and educational experience that enables people to grasp the true scale of
        the Solar System. We believe that understanding the distances between celestial bodies can enhance our
        appreciation of the universe and our place within it. By leveraging the power of modern web technologies, we aim
        to make this knowledge easily accessible to everyone.
      </p>
      <p className="my-4">
        To achieve this, we have chosen to employ the WebGPU API, a cutting-edge feature in modern browsers similar to
        WebGL. WebGPU allows us to harness the capabilities of graphics processing units (GPUs) to render stunning
        visual representations of the Solar System with remarkable detail and performance. Through this technology, we
        can provide an immersive experience that brings the wonders of space right to your screen.
      </p>
      <p className="my-4">
        Our project is driven by a deep passion for astronomy and a commitment to open knowledge. We believe that by
        making science more accessible and engaging, we can inspire curiosity and foster a greater appreciation for the
        cosmos. Our website will provide a wealth of information about each planet, including its size, distance from
        the Sun, and other intriguing facts. We will also include captivating visuals, interactive simulations, and
        educational resources to enhance your learning experience.
      </p>
      <p className="my-4">
        We are excited to embark on this journey and invite you to join us as we explore the wonders of the Solar System
        together. Whether you're a student, a space enthusiast, or simply curious about the cosmos, our project aims to
        ignite your imagination and deepen your understanding of our celestial neighbors. Thank you for visiting
        "Exploring the Solar System." We hope you enjoy your journey through the vastness of space!
      </p>
      <p className="mt-4">We used here next resources:</p>
      <a
        className="text-[var(--accent-text-color)]"
        href="https://en.wikipedia.org/wiki/List_of_Solar_System_objects_by_size"
        target="_blank"
        rel="noreferrer"
      >
        List of Solar System objects by size
      </a>
    </div>
  </div>
);
