import images from "./images";
import {FaChartLine, FaDesktop, FaFileAlt} from "react-icons/fa";
import {BiDollarCircle} from "react-icons/bi";
import {AiOutlineReload} from "react-icons/ai";

const gradient = "url(#blue-gradient)" ;

const services = [
    {
        id: 1,
        icon: <FaDesktop style = {{ fill: gradient }} />,
        title: "Investment Learning",
        text: "Empower your financial journey with investment insights and learning tools.",
        url: "/Learning"
    },
    {
        id: 2,
        icon: <BiDollarCircle style = {{ fill: gradient }} />,
        title: "Stock news",
        text: "Stay updated with real-time stock news and market trends.",
        url:"/stocknews"
    },
    {
        id: 3,
        icon: <FaChartLine style = {{ fill: gradient }} />,
        title: "Live Trading",
        text: "Live trading lets you seize market opportunities instantly, maximizing profits while managing risks in real time.",
        url:"/livetrading"
    },

];

const about = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style = {{ fill: gradient }} />,
        title: "Ideas & Plans",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    },
    {
        id: 9,
        icon: <AiOutlineReload style = {{ fill: gradient }}  />,
        title: "Prompt Strategies",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    }
];

const features = [
    {
        id: 10,
        title: "Investment Learning",
        text: "Investment Learning is designed to empower users at every level of their financial journey. Through an array of resources such as detailed guides, video tutorials, expert podcasts, and insightful articles, you'll gain a solid foundation in investing principles and strategies. The platform also provides interactive tools and quizzes to reinforce your understanding, making complex topics approachable and engaging. Whether you're a beginner or an experienced investor, our resources are tailored to help you make informed and confident decisions in the stock market."
    
    },    
    {
        id: 11,
        title: "Stock news",
        text: "Stay ahead in the fast-paced world of stock markets with our comprehensive Stock News section. This feature provides real-time news updates, market trends, and in-depth analyses to keep you informed of the latest developments. With personalized news feeds, you'll have instant access to relevant financial information and expert opinions on stocks, companies, and industries. By staying informed, you can seize opportunities and respond to market shifts with greater confidence, making this your go-to hub for staying on top of the investment world."
    },
    {
        id: 12,
        title: "Live Trading",
        text: "Live trading involves executing real-time buy and sell orders in the financial markets. Traders make decisions based on up-to-date market data, including price movements, trends, and news. It requires quick execution, risk management, and strategy to capitalize on market opportunities."
    },
];

const testimonials = [
    {
        id: 19,
        name: "Marie Johnson",
        text: "This platform has helped me diversify my investments and make informed decisions. The insights are invaluable!",
        image: images.customer_img_1,
        rating: 3
    },
    {
        id: 20,
        name: "Annabelle Brown",
        text: "Thanks to this platform, I’ve successfully grown my portfolio with minimal risk. Highly recommend to anyone looking to invest wisely.",
        image: images.customer_img_2,
        rating: 5
    },
    {
        id: 21,
        name: "Andrew Miller",
        text: "The tools and resources provided have been instrumental in making strategic investment moves. Still learning, but I’m optimistic.",
        image: images.customer_img_3,
        rating: 2
    },
    {
        id: 22,
        name: "Jason Stewart",
        text: "I’ve seen consistent returns on my investments after using this platform. It’s user-friendly and highly effective.",
        image: images.customer_img_4,
        rating: 4
    },
    {
        id: 23,
        name: "Lisa Greenfield",
        text: "A great resource for anyone looking to secure their financial future. I’m excited to see my investment grow over time.",
        image: images.customer_img_5,
        rating: 2
    },
    {
        id: 24,
        name: "Anna Williams",
        text: "This platform has empowered me to take control of my investments with confidence. I’m seeing the benefits already!",
        image: images.customer_img_6,
        rating: 4
    }
    
]

const sections = {services, about, qualities, features, testimonials};

export default sections;