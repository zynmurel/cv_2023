import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Infos from "./Components/Infos";
import Self from "./Components/Self";
import { usePDF } from "react-to-pdf";

const Resume = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "(CV) Sean Maruel Comigues.pdf",
  });
  return (
    <div>
      <div ref={targetRef}>
        <Paper className={"resume"}>
          <Self />
          <Infos />
        </Paper>
      </div>
      <button
        onClick={() => {
          console.log("im clicking");
          try {
            toPDF();
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

export default Resume;
