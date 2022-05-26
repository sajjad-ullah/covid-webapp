import {GLTFModel,AmbientLight,DirectionLight} from 'react-3d-viewer'
import abc from '../3Dmodels/untitled.glb';

// import abc from '../3Dmodels/lung.obj';
// function ThreeScene(){
//   return(
//     <div>
//       <OBJModel src={abc} texPath=""/>
//     </div>
//   )
//   }
//   export default ThreeScene;


function ThreeScene(){
return(
  <div>
    <>
    </>
    <GLTFModel src={abc}>
    <AmbientLight color={0xffffff}/>
      <DirectionLight color={0xffffff} position={{x:100,y:200,z:100}}/>
      <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/>
    </GLTFModel>

  </div>
)
}
export default ThreeScene;
