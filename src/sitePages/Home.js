import MainBanner from "../components/Banners/MainBanner";
import FindHelp from "../components/FindHelp/FindHelp";
import StandOut from "../components/StandOut/StandOut";
import Connect from "../components/Connect/Connect";
import JobsView from "../components/JobsOverview/JobsView";
import JobCount from "../components/JobCount";
import TransitionBox from "./TransitionBox";
const Home = () => {
  return (
    <TransitionBox>
      <MainBanner />
      <FindHelp />
      <JobsView />
      <StandOut />
      <Connect />
      <JobCount />
    </TransitionBox>
  );
};

export default Home;
