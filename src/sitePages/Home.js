import MainBanner from "../components/Banners/MainBanner";
import FindHelp from "../components/FindHelp/FindHelp";
import StandOut from "../components/StandOut/StandOut";
import Connect from "../components/Connect/Connect";
import JobsView from "../components/JobsOverview/JobsView";
import JobCount from "../components/JobCount";

const Home = () => {
  return (
    <>
      <MainBanner />
      <FindHelp />
      <JobsView />
      <StandOut />
      <Connect />
      <JobCount />
    </>
  );
};

export default Home;
