import Webcam from "react-webcam";


  
  export default function Main(){
    const webcamRef = React.useRef(null);
    const [imageSrc, setimageSrc] = React.useState('');
    const videoConstraints = {
        width: 300,
        height: 200,
        facingMode: "user"
      };
  
    const capture = () => {
        setimageSrc(webcamRef.current.getScreenshot());
      };
  
    return (
      <>
        <Webcam
          audio={false}
          height={200}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={300}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
        <div>
            <img src={imageSrc} />
            {imageSrc} Helloooooooooooo
        </div>

      </>
    );
  }
