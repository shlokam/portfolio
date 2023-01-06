import pro1 from '../assets/4.png';
import pro2 from '../assets/5.png';
import pro3 from '../assets/3.png';

const ProjectCardData= [
    {
        imgsrc: pro1,
        title: "Virtual Art Gallery",
        text:  "A virtual art gallery with basic user functionalities such as login, register, change password, and logout. A longedin user can like an image, add to favourite, and add comment. The tech stack used is Java, Spring Boot, Postgress SQL and React Js.",
        view : "https://github.com/shlokam/kalavithi"
    },
    {
        imgsrc: pro2,
        title: "Food Order",
        text: "A responsive food-order web page made using React Js. There are four pages About, Contact, Home and Menu along with components Navbar and Footer. This is made using React Js with knowledge of Javascript , HTML and CSS.",
        view : "https://github.com/shlokam/Food-Order"
    },
    {
        imgsrc: pro3,
        title: "Super Resolution of Images",
        text: "A machine learning model to super-reslove images using SRGAN. Super resolution is upsampling low-resolution image into a higher resolution with minimal infromation distortion. This was developed using Python, Keras, Tensorflow. ",
        view : "https://google.com"
    }
]

export default ProjectCardData;