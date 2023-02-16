const logotext = "INICIO";
const meta = {
    title: "Leandro, Fiorotto",
    description: "Soy Leandro, Fiorotto",
};

const introdata = {
    title: "Soy Leandro, Fiorotto",
    animated: {
        first: "Estudiante avanzado de Ing en Sistemas",
    },
    description: "",
};

const dataabout = {
    title: "Leandro, Fiorotto",
    title2: "24 años",
    title3: "La Plata. Bs As. Argentina",
    aboutme: "Soy estudiante avanzado de la carrera de Ingeniería en Sistemas de Información de la UTN. Estoy en constante aprendizaje sobre nuevas tecnologías y trato de adaptarme lo mejor posible a cada marco de trabajo.",
};


const skills = [{
        name: "HTML",
        value: 80,
    },
    {
        name: "CSS",
        value: 80,
    },
    {
        name: "Javascript",
        value: 70,
    },
    {
        name: "React",
        value: 75,
    },
    {
        name: "MySQL",
        value: 50,
    },
];

const services = [{
        title: "Diseño UI & UX",
        description: "Materias cursadas en relacion a la experiencia del usuario, como también de la navegación de la aplicación.",
    },
    {
        title: "Aplicaciones Moviles",
        description: "Breve conocimiento utilizando el entorno de Android Studio con Java para deployar una app movil ",
    },
    {
        title: "Wordpress",
        description: "Webs desarrolladas mediante esta herramienta ",
    },
    {
        title: "Manejo de Linux con bash",
        description: "Buen conocimiento para trabajar en Linux mediante consola bash sin necesidad de utilizar interface grafica",
    },
];

const dataportfolio = [{
        img: "https://img.freepik.com/vector-premium/logotipo-calculadora_10250-2607.jpg?w=740",
        desctiption: "Calculadora realizada con React.js",
        link: "https://calculadora-jet-kappa.vercel.app/",
        link2: "https://github.com/leofiorotto/calculadora",
    },
    {
        img: "https://img.freepik.com/iconos-gratis/boton-izquierdo-raton_318-48280.jpg",
        desctiption: "Contador de clicks realizado con react",
        link: "https://contador-blush-kappa.vercel.app/",
        link2: "https://github.com/leofiorotto/contador",
    },
    {
        img: "https://thumbs.dreamstime.com/b/amigos-que-cenan-dibujo-hecho-mano-en-el-fondo-blanco-131566951.jpg",
        desctiption: "Descripcion de amigos",
        link2: "https://github.com/leofiorotto",
    },
    {
        img: "https://previews.123rf.com/images/sanek13744/sanek137441704/sanek13744170400296/75687309-para-hacer-la-lista-icono-lista-de-comprobaci%C3%B3n-ilustraci%C3%B3n-del-vector-de-la-lista-de-tareas-en-esti.jpg",
        desctiption: "Lista de tareas para ABM de tus tareas diarias realizado en React",
        link: "https://lista-tareas-seven.vercel.app/",
        link2: "https://github.com/leofiorotto/listaTareas",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "leo.fiorotto@hotmail.com",
    YOUR_FONE: "+54 2345 659559",

    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/leofiorotto",
    facebook: "https://www.facebook.com/leofioro",
    linkedin: "https://www.linkedin.com/in/leandro-fiorotto/",
    twitter: "https://twitter.com/LeandroFiorotto",
};
export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};