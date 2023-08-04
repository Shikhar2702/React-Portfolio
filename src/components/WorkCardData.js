import pro1 from "../assets/Chat.jpg";
import pro2 from "../assets/ToDo.png";
import pro3 from "../assets/FC.png";

const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "Talkie : The Chat App",
    text: "Talkie is a real-time chat application built using socket.io. It enables users to engage in instant messaging with live updates and supports multiple users in the same chat room. The MERN architecture provides a robust foundation for scalable and interactive chat functionality.",
    view: "https://talkie-tfic.onrender.com/",
  },
  {
    imgsrc: pro2,
    title: "ToDo List",
    text: "This todo app is a simple web application built using HTML, CSS, and JavaScript. It allows users to create, manage, and mark tasks as complete, providing a straightforward and user-friendly way to organize daily tasks efficiently. ToDo lists are always helpful for organizing daily schedule.",
    view: "https://shikhar2702.github.io/ToDo-List/",
  },
  {
    imgsrc: pro3,
    title: "Face Recognition System",
    text: "This face recognition system uses face_recognition and OpenCV libraries in Python to detect and recognize faces in real-time from a webcam feed, displaying the names of known individuals above their faces. This has a wide application with great use with authentication and security.",
    view: "https://github.com/Shikhar2702/Face-Recognition-Project.git",
  },
];

export default ProjectCardData;
