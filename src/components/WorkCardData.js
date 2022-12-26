import pro1 from '../assets/img.jpeg';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/img.jpeg';

const ProjectCardData= [
    {
        imgsrc: pro1,
        title: "Virtual Art Gallery",
        text:  "A virtual art gallery with basic user functionalities such as login, register, change password, and logout. A longedin user can like an image, add to favourite, and add comment. These all features are provided when user clicks on an image and an image carousel opens. The tech stack used is Java, Spring Boot, Postgress SQL and React Js",
        view : "https://google.com"
    },
    {
        imgsrc: pro2,
        title: "Food Order",
        text: "A responsive food-order web page made using React Js.",
        view : "https://github.com/shlokam/Food-Order"
    },
    {
        imgsrc: pro3,
        title: "Title3",
        text: "Description3",
        view : "https://google.com"
    }
]

export default ProjectCardData;