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
              A motivated developer who enjoys building practical web and mobile solutions with modern tools like React and Node.js. Always eager to learn and improve.
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Self;
