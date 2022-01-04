
import './App.css';
import tree from './tree.jpeg';

function App() {
  return (<>
    <div style={{border: '1px solid black',maxWidth :'100vw'}}>
      <h1 className='titelred'>Emer_Nemly</h1><br></br>
      <img src='/images.jpeg'alt='nature'/><br></br>
<img src={tree}alt='trees'/>
      </div>
      <video width="320" height="240" controls>
 <source src="/snow.mp4" type="video/mp4" ></source></video>
    </>
  );
}

export default App;
