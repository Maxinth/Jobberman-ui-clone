import { batches } from "./data";
import JobBatch from "./JobBatch";

const JobBatches = () => {
  return (
    <>
      {batches.map((item) => {
        const { id, batch } = item;
        return <JobBatch batch={batch} key={id} />;
      })}
    </>
  );
};

export default JobBatches;
