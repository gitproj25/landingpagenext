interface ContactUs {
    title: string;
    description: string[];
    desktopImage: string;
    mobileImage: string;
    workTo: WorkTo;
    locationTitle: string;
    location: Location[];
}

interface WorkTo {
    title: string;
    description: string;
    imageDesktop: string;
    imageMobile: string;
    email: string;
}

interface Location {
    name: string;
    mail: string;
    address: string;
    logo: string;
}

export const contactUsData: ContactUs = {
    title: "Contact Us",
    description: [
        "At BoxcoWorld, we believe great logistics starts with a conversation. Whether you're exploring global freight solutions, optimizing your supply chain, or simply curious about how we can support your business — we’re here, ready to listen and help.",
        "Get in touch — and let’s build something exceptional, together."
    ],
    desktopImage: "/contactUs/imageDesktop.jpg",
    mobileImage: "/contactUs/imageMobile.jpg",
    workTo: {
        title: "Let's Work  Together",
        description: "Want to get in touch with us? Prefer human over chatbot? Just call us or mail your details.",
        imageDesktop: "/contactUs/map.png",
        imageMobile: "",
        email: "www.boxcoworld.io"
    },
    locationTitle: "Our Office Locations",
    location: [
        {
            name: "Singapore",
            mail: "information@boxcoworld.io",
            address: "17 Philip Street, #05-01 Grand Building, Singapore, 048695.",
            logo: "/contact-logos/logo1.png"
        },
        {
            name: "Dubai",
            mail: "information@boxcoworld.io",
            address: "Plot S10714, JAFZA South (Jebel Ali Free Zone Area), Dubai, UAE, 18118.",
            logo: "/contact-logos/logo2.png"
        },
        {
            name: "Houston",
            mail: "information@boxcoworld.io",
            address: "609 Main Street, Suite 2500, Houston, Texas, USA, 77002.",
            logo: "/contact-logos/logo3.png"
        },
        {
            name: "Amsterdam",
            mail: "information@boxcoworld.io",
            address: "Kingsfordweg 151, 1043GR, Amsterdam, Netherlands.",
            logo: "/contact-logos/logo4.png"
        },
        {
            name: "Noida",
            mail: "information@boxcoworld.io",
            address: "6th Floor, Tower A, Lotus Business Park, Plot 8, Sector 127, Noida, India, 201301.",
            logo: "/contact-logos/logo5.png"
        },
        {
            name: "Mumbai",
            mail: "information@boxcoworld.io",
            address: "707, 7th floor, D-wing, Neelkanth Business Park, Nathani Road, Vidyavihar (W), Mumbai - 400086, India.",
            logo: "/contact-logos/logo6.png"
        },
        {
            name: "Gandhidham",
            mail: "information@boxcoworld.io",
            address: "Unit No. 5, First Floor, Plot No. 19, Ward No. 6 (Commercial), Airport Road, near Om Cineplex, Gandhidham, Gujarat, Gujarat, 370201, India.",
            logo: "/contact-logos/logo7.png"
        },
        {
            name: "Chennai",
            mail: "information@boxcoworld.io",
            address: "The Executive Zone, Shakti Towers - 1, 766, Anna Salai, Chennai, 600002, India",
            logo: "/contact-logos/logo8.png"
        }
    ]
};
