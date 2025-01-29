import StarImage from '../assets/images/Star_image.png';
export const starIcon = <svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-4.79 -4.79 57.52 57.52" xml:space="preserve" fill="#000000" stroke="#000000" stroke-width="0.00047939999999999994" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.28764"></g><g id="SVGRepo_iconCarrier"> <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg>
export const slidesData = [
    {
        id: 8,
        para: `I give this app 5 stars because it <span class="fw-700 app-color">Simplified Everything For Me</span>. It is an excellent app and would recommend it to everyone.`,
        starImage: StarImage,
        name: "Floral Essence Gifts",
        time: `January 11, 2025`
    },

    {
        id: 7,
        para: `Easy and user friendly to create more options on <span class="fw-700 app-color">Customer Account & Profiles</span>. Recommended this app. It fills gap where Shopify default features can not do. Some amazing features with lots of customization options. Absolutely love it.`,
        starImage: StarImage,
        name: "Vita Health Fresh Market",
        time: `November 8, 2024`
    },

    {
        id: 11,
        para: `<div><span class="fw-700 app-color">Sunil R's Support</span> is excellent. </div>
        The app is very good at keeping my <span class="fw-700 app-color">Page Clean And Organized</span> and <span class="fw-700 app-color">integrating with other apps</span> to make it easy for customers to use.`,
        starImage: StarImage,
        name: "mutta",
        time: `September 17, 2024`
    },
    {
        id: 1,
        para: `A very good app, <span class="fw-700 app-color">easy to use, navigate, nice design, very customisable and helpful customer service!</span>`,
        starImage: StarImage,
        name: "LIZA VETA",
        time: `March 9, 2023 `
    },
    {
        id: 2,
        para: `I didnt see a lot of reviews for this product when I downloaded it but I gave it a shot. It works great, and their dev team worked with me to add some <span class="fw-700 app-color">Custom Tabs and Buttons</span> for me super quickly. Can't beat the price for all the functionality you get out of the box with the free plan compared to some of the other Customer Account apps`,
        starImage: StarImage,
        name: "Kasper Sports",
        time: `January 9, 2023`
    },
    {
        id: 3,
        para: `This is farway the <span class="fw-700 app-color">Best Plugin For Customer Dashboard</span> , simple , fast with free plan and a such a amazing and fast assistance.`,
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
        para: `Really good app and customer service, they fixed every issue I had. The plan change, they <span class="fw-700 app-color">Integrated With The Other App</span> that I have. <span class="fw-700 app-color"> I'm very satisfied.</span>`,
        starImage: StarImage,
        name: "Özel Beslenme",
        time: `September 12, 2023`
    },
    {
        id: 10,
        para: `Great app to make <span class="fw-700 app-color">Customer Account Look More Professional.</span> .`,
        starImage: StarImage,
        name: "Vivaporta",
        time: `September 25, 2024`
    },
    {
        id: 9,
        para: `Great app. Helps a lot for our use case and <span class="fw-700 app-color">Great Customer Service</span> .`,
        starImage: StarImage,
        name: "CraftNest",
        time: `November 13, 2024`
    },
 
];
export const settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: false,
    speed: 500,
    // lazyLoad: 'progressive',
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2, 
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