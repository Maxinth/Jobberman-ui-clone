import powerFulCareerImg from "../../assets/why/seeker-powerful-career.jpg";
import manageJobSearchImg from "../../assets/why/seeker-manage-job-search.jpg";
import smartJobSearchImg from "../../assets/why/seeker-smart-job-search.jpg";
import greatCareerAdviceImg from "../../assets/why/seeker-great-career-advice.jpg";

export const data = [
  {
    title: "A Powerful Career",
    mainText: ` Let opportunity find you with a Jobberman Profile. Show off your
                skills, education and experience to employers.`,
    image: powerFulCareerImg,
  },

  {
    title: "Smart Job Search ",
    mainText: ` Thousands of jobs are waiting for you. Find the right one matched to your experience, skills and job role.
                Find jobs with some of the countries top companies and in the most popular industries`,
    image: smartJobSearchImg,
  },

  {
    title: "Manage Your Job Search",
    mainText: ` Take control of your job search through your very own Dashboard.
                Track your applications, save interesting jobs to come back to later, and create job alerts so you never miss an opportunity. `,
    image: manageJobSearchImg,
  },

  {
    title: "Great Career Advice ",
    mainText: ` Find the training you need to boost your career.
            Or visit our Career Center for advice and tips on how to be a better candidate and find the job of your dreams. `,
    image: greatCareerAdviceImg,
  },
];

// custom function to match the current item and make an item current when the circleControls are clicked
export const matchAndMakeCurrent = (currentIndex, setCurrentIndex) => {
  const makeCurrentItem = (itemIndex) => setCurrentIndex(itemIndex);

  // custom function to style control box
  const matchCurrentItem = (itemIndex) =>
    itemIndex === currentIndex ? "current" : "";

  return { makeCurrentItem, matchCurrentItem };
};
