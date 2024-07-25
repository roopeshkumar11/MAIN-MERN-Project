// import { useEffect, useRef, useState } from 'react'

// import './App.css'
// import { uploadfile } from './services/api.js';

// function App() {

//   const [file,setfile]=useState('');
//   const [result,setresult]=useState()
//   const log="https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";
// const fileinput=useRef()
// useEffect(()=>{
//   const getimage= async ()=>{
//     if(file){
//       const data=new FormData();
//       data.append("name",file.name);
//       data.append("file",file)
//     const response=   await uploadfile(data)
//        setresult(response.path)
//     }
//   }
//   getimage();
// },[file])
//  const onupload=()=>{
//   fileinput.current.click()
//  }


//   return (
//     <>
//        <div className="container">
//         <img src={log} alt="banner" />
//         <div className="wrapper">
//           <h1>simple file sharing !</h1>
//           <p>Upload and share the download link</p>
//           <button onClick={()=>onupload()}>Upload</button>
//           <input type="file" ref={fileinput} style={{display:"none"}} onChange={(e)=>setfile(e.target.files)}/>
//           <a href={result}>{result}</a>
//         </div>
//         </div>
//     </>
//   )
// }

// export default App
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { uploadfile } from './services/api.js';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const log = "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";
  const fileInput = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await uploadfile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file]);

  const onUpload = () => {
    fileInput.current.click();
  };

  return (
    <>
      <div className="container">
        <img src={log} alt="banner" />
        <div className="wrapper">
          <h1>Simple File Sharing!</h1>
          <p>Upload and share the download link</p>
          <button onClick={onUpload}>Upload</button>
          <input 
            type="file" 
            ref={fileInput} 
            style={{ display: "none" }} 
            onChange={(e) => setFile(e.target.files[0])} 
          />
          {result && <a href={result} target="_blank" rel="noopener noreferrer">Download Link</a>}
        </div>
      </div>
    </>
  );
}

export default App;

