import StarImage from '../assets/images/Star_image.png';
export const slidesData = [
    {
        id: 1,
        para: `A very good app, easy to use, navigate, nice design, very customisable; and helpful customer service!`,
        starImage: StarImage,
        name: "LIZA VETA",
        time: `March 9, 2023 `
    },
    {
        id: 2,
        para: `I didnt see a lot of reviews for this product when I downloaded it but I gave it a shot. It works great, and their dev team worked with me to add some custom tabs and buttons for me super quickly. Can't beat the price for all the functionality you get out of the box with the free plan compared to some of the other Customer Account apps`,
        starImage: StarImage,
        name: "Kasper Sports",
        time: `January 9, 2023`
    },
    {
        id: 3,
        para: `This is farway the best plugin for customer dashboard , simple , fast with free plan and a such a amazing and fast assistance.`,
        starImage: StarImage,
        name: "synee.",
        time: `January 16, 2023`
    },
    {
        id: 4,
        para: `This is by far the best app we've tried for this and its affordable! Does what it says and runs smoothly on our site. Really Excellent!`,
        starImage: StarImage,
        name: "Kidzconnectsa",
        time: `April 5, 2023`
    },
    {
        id: 5,
        para: `wonderful app.. i tried everything for customer accounts and this is the best no doubt.. Easy to install, smooth layout and quick and great support to style a little css :) Everything i needed at best pirce!`,
        starImage: StarImage,
        name: "VintageEcoes",
        time: `June 27, 2023`
    },
    {
        id: 6,
        para: `Really good app and customer service, they fixed every issue I had. The plan change, they integrated with the other app that I have. I'm very satisfied.`,
        starImage: StarImage,
        name: "Özel Beslenme",
        time: `September 12, 2023`
    }
];
export const settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: 'progressive',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
};