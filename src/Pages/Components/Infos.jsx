import { Box } from "@mui/system";
import { DiJavascript1, DiHtml5, DiCss3, DiPhotoshop, DiReact } from "react-icons/di";
import { FaLaravel, FaPhoneAlt } from "react-icons/fa";
import { FcOpenedFolder } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Infos = () => {
    return ( 
        <Box className='infos'>
            <div className="info2">
            <div className="info2margin">
                <div className="title">
                    <h1 className="exp">
                        EXPERIENCE
                    </h1>
            </div>

            <div className="org">
                <h2 className="year">2021-2022</h2>
                <h2 className="orgtitle">GRAPHIC DESIGN</h2>
                <div className="posint">
                    <p className="position">
                    Worked with school organization ( SSG and Campus Access ) and created images and layouts using Adobe Photoshop.
                    </p>
                </div>
            </div>

            <div className="org">
                <h2 className="year">2021-2022</h2>
                <h2 className="orgtitle">SOFTWARE DEVELOPMENT</h2>
                <div className="posint">
                    <p className="position">
                    Undergone Software Development training in Vijaya Inc and currently creating our Web App for our Capstone Project and Research.
                    </p>
                </div>
            </div>

            <div className="title">
                    <h1 className="exp">
                        EDUCATION
                    </h1>
            </div>

            <div className="org">
                <h2 className="orgtitle">BILAR CENTRAL ELEMENTARY SCHOOL</h2>
                <div className="posint">
                    <p className="position" style={{  fontStyle:'italic' }}>
                        Poblacion, Bilar, Bohol
                    </p>
                </div>
            </div>

            <div className="org">
                <h2 className="orgtitle">BILAR NATIONAL HIGH SCHOOL</h2>
                <div className="posint">
                    <p className="position" style={{  fontStyle:'italic' }}>
                        Yanaya, Bilar, Bohol
                    </p>
                </div>
            </div>


            <div className="org">
                <h2 className="orgtitle">BOHOL ISLAND STATE UNIVERSITY</h2>
                <div className="posint">
                    <p className="position" style={{  fontStyle:'italic' }}>
                        BS Information Technology / Magsija, Balilihan, Bohol
                    </p>
                </div>
            </div>
                </div>
                <div className="info2margin">
                <div className="title">
                    <h1 className="exp">
                        PROJECTS
                    </h1>
            </div>

            <div className="org">
                <h2 className="orgtitleproject">GRAPHIC DESIGN PROJECTS</h2>
                <div className="skl" style={{ margin:'0 0 20px 0', fontSize:15 }}>
                    <FcOpenedFolder fontSize={"22px"}/>
                    <h4 style={{ margin:'0 0 0 5px' }}><a href="https://drive.google.com/drive/folders/1ca1HyLKhJdjFR9kzdWH8W08cIO3XMVpZ?usp=share_link" target='_blank'>All Graphic Design Projects</a></h4>
                </div>
            </div>

            <div className="org">
                <h2 className="orgtitleproject">SOFTWARE DEVELOPMENT PROJECTS</h2>
                <div className="skl" style={{ margin:'0 0 5px 0', fontSize:15 }}>
                    <BsGithub fontSize={"21px"}/>
                    <h4 style={{ margin:'0 0 0 5px' }}>Github Repositories:</h4>
                </div>
                    <ul>
                        <li><a href="https://github.com/zynmurel/DOTA2-HTML-CSS" target='_blank'>DOTA 2 ( HTML / CSS )</a></li>
                        <li><a href="https://github.com/zynmurel/DOTA2-ReactApp" target='_blank'>DOTA 2 ( React )</a></li>
                        <li><a href="https://github.com/zynmurel/TodoList-ReactNative" target='_blank'>Todo List ( React Native )</a></li>
                        <li><a href="https://github.com/zynmurel/waterBilling1" target='_blank'>Water Billing App ( React )</a></li>
                    </ul>
            </div>

                </div>
                
            </div>

            
            <div className="info1">
                <div className="line"></div>
                <div className="contacts">
                    <div className="title">
                    <div className="color">
                        
                    </div>
                    <h1>
                        PERSONAL INFO
                    </h1>
                    </div>
                    <div className="skillsinfo">

                        <div className="pinfo" style={{ marginTop: '20px' }}>
                            <h3>ADDRESS</h3>
                            <p>Poblacion, Bilar, Bohol</p>
                        </div>

                        <div className="pinfo" style={{ marginTop: '20px' }}>
                            <h3>PHONE</h3>
                            <p>+639307038821</p>
                        </div>

                        <div className="pinfo" style={{ marginTop: '20px' }}>
                            <h3>EMAIL</h3>
                            <p>comingues99@gmail.com</p>
                        </div>
                    </div>
                    

                </div>
                <div className="line"></div>
                <div className="skills">
                    <div className="title">
                    <div className="color">

                    </div>
                    <h1>
                        SKILLS
                    </h1>
                    </div>
                    <div className="skillsinfo">
                        <div className="skl">
                            <DiJavascript1 color="yellow" fontSize={"25px"}/>
                            <h4>JAVASCRIPT</h4>
                        </div>
                        <div className="percentbox">
                            <div className="percent" style={{ width:"75%" }}></div>
                        </div>

                        <div className="skl">
                            <DiHtml5 color="rgb(255, 145, 0)" fontSize={"25px"}/>
                            <h4>HTML</h4>
                        </div>
                        <div className="percentbox">
                            <div className="percent" style={{ width:"85%" }}></div>
                        </div>
                        

                        <div className="skl">
                            <DiCss3 color="rgb(45, 189, 255)" fontSize={"25px"}/>
                            <h4>CSS</h4>
                        </div>
                        <div className="percentbox">
                            <div className="percent" style={{ width:"80%" }}></div>
                        </div>


                        <div className="skl">
                            <DiReact color="rgb(45, 189, 255)" fontSize={"25px"}/>
                            <h4>REACT</h4>
                        </div>
                        <div className="percentbox">
                            <div className="percent" style={{ width:"85%" }}></div>
                        </div>

                        <div className="skl">
                            <DiPhotoshop color="rgb(45, 189, 255)" fontSize={"25px"}/>
                            <h4>PHOTOSHOP</h4>
                        </div>
                        <div className="percentbox">
                            <div className="percent" style={{ width:"80%" }}></div>
                        </div>


                        <div className="skl">
                            <FaLaravel color="red" fontSize={"18px"}/>
                            <h4>LARAVEL</h4>
                        </div>
                        <div className="percentbox">
                            <div className="percent" style={{ width:"30%" }}></div>
                        </div>
                    </div>

                </div>
                <div className="line"></div>
                
                
            </div>
        </Box>
     );
}
 
export default Infos;