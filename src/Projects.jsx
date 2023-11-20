import React from "react";
// import ImageGallery from "react-image-gallery";
import "./Projects.css";

const images = [
  {
    src: "https://image3.mouthshut.com/images/imagesp/925106606s.jpg",
    // width: 500,
    // height: 174,
    isSelected: false,
    caption: "Post Office Details",
    alt: "Post Office",
    href: "https://pincodelookup.netlify.app/",
    target: "_blank",
    rel: "noreferrer",

  },
  {
    src: "https://image.winudf.com/v2/image1/Y29tLnBpeG9jaXR5YXBwcy5zcGVlZF9pY29uXzE1NDM5ODA3MDJfMDA4/icon.png?fakeurl=1&h=240&type=webp",
    // width: 320,
    // height: 174,
    alt: "Typing Test",
    href: "https://typingstudent.netlify.app",
    target: "_blank",
    rel: "noreferrer",
  },
  {
    src: "https://www.shutterstock.com/image-photo/selecting-candidates-profile-on-virtual-260nw-622563449.jpg",
    // width: 320,
    // height: 174,
    alt: "User Profile",
    href: "https://user-profile-dashboard.netlify.app/",
    target: "_blank",
    rel: "noreferrer",
    front_end: "ReactJs",
  },

  {
    src: "https://st3.depositphotos.com/4187167/14640/i/1600/depositphotos_146407923-stock-photo-makeup-products-in-shopping-cart.jpg",
    // width: 320,
    // height: 212,
    alt: "Shopping Cart",
    href: "https://visitshopping-cart.netlify.app/",
    target: "_blank",
    rel: "noreferrer",
    front_end: "ReactJs",
  },
  {
    src: "https://static.vecteezy.com/system/resources/previews/000/303/649/original/teacher-and-students-in-classroon-vector.jpg",
    // width: 320,
    // height: 212,
    alt: "Student Teacher Dashboard",
    href: "https://stud-teacher-dashboard.netlify.app/",
    target: "_blank",
    rel: "noreferrer",
    front_end: "ReactJs",
  },
];

const Projects = () => {
  return (
    <div>
      <div>Projects</div>
      {images.map((image) => {
        const { src, href, target, rel, alt, front_end, back_end, database } = image;

        return (
          <div className={"flip-card"}>
            <div className={"flip-card-inner"}>
              <div className="flip-card-front">
                <img
                  src={src}
                  alt={alt}
                  style={{ width: 300, height: 200 }}
                ></img>
              </div>
              <div class="flip-card-back">
                <a href={href} target={target} rel={rel}>
                <h1>{alt}</h1>
                  
                </a>
             
                  <p>Front-End: {front_end}</p>
                  <p>{back_end}</p>
                  <p>{database}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
