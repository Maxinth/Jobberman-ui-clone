// import FavoriteIcon from "@material-ui/icons/Favorite";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";

const data = {
  linksData: [
    { linkText: "About Us", goTo: "about" },
    { linkText: "Website Terms of Use", goTo: "terms" },
    { linkText: "Privacy Policy", goTo: "privacy" },
    { linkText: "Companies Hiring", goTo: "companies" },
    { linkText: "Customer Success Stories", goTo: "customer-success" },
    { linkText: "Customer Solutions Overview", goTo: "product-rate" },
    { linkText: "Latest Research", goTo: "research" },
    { linkText: "Banner Rate Card", goTo: "banner-rate" },
    { linkText: "Widgets", goTo: "widgets" },
    { linkText: "What's New For Employers", goTo: "new-items" },
  ],

  iconsData: [
    { id: "facebook", icon: <FacebookIcon />, color: "#3b5998" },
    { id: "twitter", icon: <TwitterIcon />, color: "#00acee" },
    { id: "linkedIn", icon: <LinkedInIcon />, color: "#0e76a8" },
    { id: "instagram", icon: <InstagramIcon />, color: "purple" },
  ],
};

const { linksData, iconsData } = data;
export { linksData, iconsData };
