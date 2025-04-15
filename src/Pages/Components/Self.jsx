import { Box } from "@mui/system";

const Self = () => {
  return (
    <Box className="self">
      <img src="/12.png" alt="selfpic" className="selfpic" />
      <div className="intro">
        <div className="intro1">
          <h1>SEAN MARUEL A.</h1>
          <h1>COMINGUES</h1>
          <h5>Full-Stack Developer</h5>
        </div>
        <div className="intro2">
          <div className="introduction">
            <p>
              I'm a Software Developer with 2 years of experience in web and
              mobile development. I focus on building scalable applications
              while continuously learning new technologies.
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Self;
