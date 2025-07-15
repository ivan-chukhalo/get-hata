import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
// import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    // header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Fountains of Dreams",
      price: "$2 500 000",
      location: "Preobrazhenska",
      image: project_img_1
    },
    {
      title: "Imperial Hillsides",
      price: "$4 500,000",
      location: "Zhmerynka",
      image: project_img_2
    },
    {
      title: "Cascade of Luxury",
      price: "$6 750 000",
      location: "Mekhedivka",
      image: project_img_3
    },
    {
      title: "Aristocratic Suburbia",
      price: "$3 200 000",
      location: "Shostka",
      image: project_img_4
    },
    {
      title: "Aura of Versailles",
      price: "$1 950 000",
      location: "Chaplynka",
      image: project_img_5
    },
    {
      title: "Oasis of Prestige",
      price: "$1 050 000",
      location: "Yaremche",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Lubomyr Varenyk",
        title: "Rain Tent Coordinator for Rural Weddings",
        image: profile_img_1,
        alt: "Portrait of Lubomyr Varenyk",
        rating: 5,
        text: "I’ve always dreamed of living in a Provencal-style home. Now every morning I enjoy the view through delicate curtains — overlooking my neighbor’s tractor. It’s a visual contrast that inspires."
    },
    {
        name: "Anna Gholubets",
        title: "Chief Analyst of Village News Affairs",
        image: profile_img_2,
        alt: "Portrait of Anna Gholubets",
        rating: 4,
        text: "I was impressed by the level of service — the paperwork was completed in just 15 minutes, and I even received a gift of homegrown cabbage. The community is truly unique — a harmonious blend of locals and nature. The atmosphere is reminiscent of Versailles, with a rustic charm."
    },
    {
        name: "Ivan Poshchastylo",
        title: "Emergency Goose Herding Coach",
        image: profile_img_3,
        alt: "Ivan Poshchastylo",
        rating: 5,
        text: "The moment I saw the name of the residential complex, I knew it was meant for me. There’s even a decorative fountain on site. But what I appreciate most is the panoramic view of the chicken coop — simply stunning."
    }
];