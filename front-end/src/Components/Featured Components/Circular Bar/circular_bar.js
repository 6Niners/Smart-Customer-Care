import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////


const CircularBar = ({ data }) => {

let score =  Math.round(scale(data,0,100,-1,1) * 100) / 100                       
let unscaledScore = data
  
return (
    
  <div style={{ width: 200, height: 200 }}>
    
  <CircularProgressbar
      value={unscaledScore}
      text={`${score}`}
      styles={buildStyles({
      rotation: 0,
      strokeLinecap: 'round',
      textSize: '10px',
      pathTransitionDuration: 1.0,
      pathColor: 'rgb(128,0,128)',
      textColor: '#000000',
      trailColor: '#d6d6d6',
      backgroundColor: '#3e98c7',
  })}
    />
  </div>

  )
}

export default CircularBar
