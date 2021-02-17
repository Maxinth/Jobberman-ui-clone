export const data = {
  topSection: [
    {
      title: "Executive Recruitment ",
      text: `Our expert team will provide a professional Executive and Graduate Recruitment service up to the point that you have hired the ideal candidate.`,
    },
    {
      title: "Salary Benchmarking ",
      text: `As an authoritative reference point in the job market, 
      our consulting experts will help your business to benchmark salaries accurately. `,
    },
  ],

  finalSection: [
    {
      title: "HR Consulting",
      text: `Our HR consultants will work with you to ensure maximum business success by offering Customised
       Competency Assessments, Performance Management, Employee Outsourcing and Staff Training. `,
    },
  ],
};

const { topSection, finalSection } = data;

// custom function to modify Detail component based on its data;
const checkSize = (arr) => {
  return arr.length === 1;
};
export { topSection, finalSection, checkSize };
