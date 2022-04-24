import { FaPython, FaNodeJs, FaReact, FaJs, FaCss3 } from 'react-icons/fa'
import { DiBootstrap, DiGithubAlt, DiNodejs, DiReact, DiGitBranch, DiPython, DiSqllite } from 'react-icons/di'
import {SiPostgresql, SiArduino} from 'react-icons/si'
import {CgCPlusPlus} from 'react-icons/cg'
import {IoLogoJavascript} from 'react-icons/io'
import {GrDocker} from 'react-icons/gr'
const data = [

  {
    id: 3,
    image: <FaNodeJs size={50} color={'#6cc24a'}/>,
    completed: 85,
    title: 'NodeJS'
   
  },
  {
    id: 4,
    image: <FaPython size={50} />,
    completed: 90,
    title: 'Python'
   
  },
  {
    id: 6,
    image: <FaReact size={50} color={'#65d8f7'} />,
    completed: 90,
    title: 'React'
  },
  {
    id: 6,
    image: <GrDocker size={50} color={"#24b7eb"} />,
    completed: 90,
    title: 'Docker'
  },
  ,
  {
    id: 6,
    image: <CgCPlusPlus size={50} color={"#01589d"}/>,
    completed: 70,
    title: 'C++'
  },
  {
    id: 7,
    image: <FaCss3 size={50} color={"#00abe4"} />,
    completed: 80,
    title: 'CSS3'
  },
  {
    id: 8,
    image: <SiPostgresql  size={50} color={"#336790"} />,
    completed: 85,
    title: 'SQL'
   
  },
  {
    id: 5,
    image: <DiGitBranch size={50} color={"#f1502f"} />,
    completed: 85,
    title: 'Git'
   
  },
]
export default data
