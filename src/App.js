import React, { useState, Suspense, Fragment } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Media from 'react-media';
import { a, useSpring } from '@react-spring/three';
import Fullfoldercabinet from './Fullfoldercabinet';
import Title from './Title';
import Github from './Github';
import LinkedIn from './LinkedIn';
import Arrow from './Arrow';
import CabinetTopMidModal from './CabinetTopMidModal';
import CabinetTopModal from './CabinetTopModal';
import './App.css';

const Lights = () => {
  return(
    <>
      <ambientLight intensity={0.3}/>
      <directionalLight position={[10, 10, 5]} intensity={1}/>
      <directionalLight position={[0, 10, 0]} intensity={1.5}/>
      <spotLight intensity={0.3} position={[-1000, 0, 0]}/>
    </>
  );
}

const App = () =>{
  const [topOpen, setTopOpen] = useState(false);
  const [topMidOpen, setTopMidOpen] = useState(false);
  const [bottomMidOpen, setBottomMidOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);
  const [topHandle, setTopHandle] = useState(false);
  const [topMidHandle, setTopMidHandle] = useState(false);
  const [bottomMidHandle, setBottomMidHandle] = useState(false);
  const [bottomHandle, setBottomHandle] = useState(false);
  const [hover, setHover] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [git, setGit] = useState(false);

  const cameraTransition = useSpring({
    config: {duration: 500},
    position: arrow ? [0, 335, 0] : [0, 0, 0]
  });

  return(
    <>
      <Canvas camera={{ position: [0, 0, 120], fov: 70}}>
        <Lights />
        <Suspense fallback={null}>
          <Media queries={{
            desktop: "(min-width: 1025px)",
            medium: "(max-width: 1024px) and (min-width: 800px)",
            smedium: "(max-width: 799px) and (min-width: 600px)",
            small: "(max-width: 599px) and (min-width: 500px)",
            xs: "(max-width: 499px) and (min-width: 480px)",
            mobile: "(max-width: 479px) and (min-width: 281px)",
            galaxyFold: "(max-width: 280px)"
          }}>
            {matches => (
              <Fragment>
                {matches.small && 
                  <a.group position={cameraTransition.position}>
                    <Title position={[0, 40, 10]} scale={[20, 20, 20]} />
                    <Github position={[-25, 0, 0]} scale={[.75, .75, .75]} git={git} setGit={setGit} />
                    <LinkedIn position={[30, 0, -45]} scale={[2.75, 2.75, 2.75]} linkedin={linkedin} setLinkedin={setLinkedin} />
                    <Arrow position={[0, -50, 0]} scale={[10, 10, 1]} rotation={[0, 0, Math.PI]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover} />
                    <Arrow position={[0, -265, 0]} scale={[10, 10, 1]} rotation={[0, 0, 0]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover}/>
                  
                    <Fullfoldercabinet position={[0, -420, 0]} scale={[2.5, 2.5, 2.5]}
                      topOpen={topOpen} setTopOpen={setTopOpen} 
                      topMidOpen={topMidOpen} setTopMidOpen={setTopMidOpen} 
                      bottomMidOpen={bottomMidOpen} setBottomMidOpen={setBottomMidOpen} 
                      bottomOpen={bottomOpen} setBottomOpen={setBottomOpen} 
                      topHandle={topHandle} setTopHandle={setTopHandle}
                      topMidHandle={topMidHandle} setTopMidHandle={setTopMidHandle}
                      bottomMidHandle={bottomMidHandle} setBottomMidHandle={setBottomMidHandle}
                      bottomHandle={bottomHandle} setBottomHandle={setBottomHandle} />
                  </a.group>
                }

                {matches.desktop && 
                  <a.group position={cameraTransition.position}>
                    <Title position={[0, 40, 10]} scale={[35, 35, 35]} />
                    <Github position={[-40, 0, 0]} scale={[1, 1, 1]} git={git} setGit={setGit} />
                    <LinkedIn position={[40, 0, -45]} scale={[3.25, 3.25, 3.25]} linkedin={linkedin} setLinkedin={setLinkedin} />
                    <Arrow position={[0, -60, 0]} scale={[10, 10, 1]} rotation={[0, 0, Math.PI]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover} />
                    <Arrow position={[0, -265, 0]} scale={[10, 10, 1]} rotation={[0, 0, 0]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover}/>
                  
                    <Fullfoldercabinet position={[5, -420, 0]} scale={[2.5, 2.5, 2.5]}
                      topOpen={topOpen} setTopOpen={setTopOpen} 
                      topMidOpen={topMidOpen} setTopMidOpen={setTopMidOpen} 
                      bottomMidOpen={bottomMidOpen} setBottomMidOpen={setBottomMidOpen} 
                      bottomOpen={bottomOpen} setBottomOpen={setBottomOpen} 
                      topHandle={topHandle} setTopHandle={setTopHandle}
                      topMidHandle={topMidHandle} setTopMidHandle={setTopMidHandle}
                      bottomMidHandle={bottomMidHandle} setBottomMidHandle={setBottomMidHandle}
                      bottomHandle={bottomHandle} setBottomHandle={setBottomHandle} />
                  </a.group>
                }

                {matches.medium && 
                  <a.group position={cameraTransition.position}>
                    <Title position={[0, 40, 10]} scale={[29, 29, 29]} />
                    <Github position={[-36, 0, 0]} scale={[1, 1, 1]} git={git} setGit={setGit} />
                    <LinkedIn position={[36, 0, -45]} scale={[3.25, 3.25, 3.25]} linkedin={linkedin} setLinkedin={setLinkedin} />
                    <Arrow position={[0, -60, 0]} scale={[10, 10, 1]} rotation={[0, 0, Math.PI]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover} />
                    <Arrow position={[0, -265, 0]} scale={[10, 10, 1]} rotation={[0, 0, 0]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover}/>
                  
                    <Fullfoldercabinet position={[0, -420, 0]} scale={[2.5, 2.5, 2.5]}
                      topOpen={topOpen} setTopOpen={setTopOpen} 
                      topMidOpen={topMidOpen} setTopMidOpen={setTopMidOpen} 
                      bottomMidOpen={bottomMidOpen} setBottomMidOpen={setBottomMidOpen} 
                      bottomOpen={bottomOpen} setBottomOpen={setBottomOpen} 
                      topHandle={topHandle} setTopHandle={setTopHandle}
                      topMidHandle={topMidHandle} setTopMidHandle={setTopMidHandle}
                      bottomMidHandle={bottomMidHandle} setBottomMidHandle={setBottomMidHandle}
                      bottomHandle={bottomHandle} setBottomHandle={setBottomHandle} />
                  </a.group>
                }

                {matches.smedium && 
                  <a.group position={cameraTransition.position}>
                    <Title position={[0, 40, 10]} scale={[24.5, 24.5, 24.5]} />
                    <Github position={[-30, 0, 0]} scale={[.8, .8, .8]} git={git} setGit={setGit} />
                    <LinkedIn position={[30, 0, -45]} scale={[3, 3, 3]} linkedin={linkedin} setLinkedin={setLinkedin} />
                    <Arrow position={[0, -60, 0]} scale={[10, 10, 1]} rotation={[0, 0, Math.PI]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover} />
                    <Arrow position={[0, -265, 0]} scale={[10, 10, 1]} rotation={[0, 0, 0]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover}/>
                  
                    <Fullfoldercabinet position={[0, -420, 0]} scale={[2.5, 2.5, 2.5]}
                      topOpen={topOpen} setTopOpen={setTopOpen} 
                      topMidOpen={topMidOpen} setTopMidOpen={setTopMidOpen} 
                      bottomMidOpen={bottomMidOpen} setBottomMidOpen={setBottomMidOpen} 
                      bottomOpen={bottomOpen} setBottomOpen={setBottomOpen} 
                      topHandle={topHandle} setTopHandle={setTopHandle}
                      topMidHandle={topMidHandle} setTopMidHandle={setTopMidHandle}
                      bottomMidHandle={bottomMidHandle} setBottomMidHandle={setBottomMidHandle}
                      bottomHandle={bottomHandle} setBottomHandle={setBottomHandle} />
                  </a.group>
                }

                {matches.xs && 
                  <a.group position={cameraTransition.position}>
                    <Title position={[0, 40, 10]} scale={[18, 18, 18]} />
                    <Github position={[-25, 0, 0]} scale={[.6, .6, .6]} git={git} setGit={setGit} />
                    <LinkedIn position={[30, 0, -45]} scale={[2.25, 2.25, 2.25]} linkedin={linkedin} setLinkedin={setLinkedin} />
                    <Arrow position={[0, -50, 0]} scale={[10, 10, 1]} rotation={[0, 0, Math.PI]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover} />
                    <Arrow position={[0, -265, 0]} scale={[10, 10, 1]} rotation={[0, 0, 0]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover}/>
                  
                    <Fullfoldercabinet position={[5, -420, 0]} scale={[2.5, 2.5, 2.5]}
                      topOpen={topOpen} setTopOpen={setTopOpen} 
                      topMidOpen={topMidOpen} setTopMidOpen={setTopMidOpen} 
                      bottomMidOpen={bottomMidOpen} setBottomMidOpen={setBottomMidOpen} 
                      bottomOpen={bottomOpen} setBottomOpen={setBottomOpen} 
                      topHandle={topHandle} setTopHandle={setTopHandle}
                      topMidHandle={topMidHandle} setTopMidHandle={setTopMidHandle}
                      bottomMidHandle={bottomMidHandle} setBottomMidHandle={setBottomMidHandle}
                      bottomHandle={bottomHandle} setBottomHandle={setBottomHandle} />
                  </a.group>
                }

                {matches.mobile && 
                  <a.group position={cameraTransition.position}>
                    <Title position={[0, 40, 10]} scale={[18, 18, 18]} />
                    <Github position={[-20, 0, 0]} scale={[.6, .6, .6]} git={git} setGit={setGit} />
                    <LinkedIn position={[25, 0, -45]} scale={[2.25, 2.25, 2.25]} linkedin={linkedin} setLinkedin={setLinkedin} />
                    <Arrow position={[0, -50, 0]} scale={[10, 10, 1]} rotation={[0, 0, Math.PI]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover} />
                    <Arrow position={[0, -265, 0]} scale={[10, 10, 1]} rotation={[0, 0, 0]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover}/>
                  
                    <Fullfoldercabinet position={[5, -420, 0]} scale={[2.5, 2.5, 2.5]}
                      topOpen={topOpen} setTopOpen={setTopOpen}
                      topMidOpen={topMidOpen} setTopMidOpen={setTopMidOpen}
                      bottomMidOpen={bottomMidOpen} setBottomMidOpen={setBottomMidOpen}
                      bottomOpen={bottomOpen} setBottomOpen={setBottomOpen}
                      topHandle={topHandle} setTopHandle={setTopHandle}
                      topMidHandle={topMidHandle} setTopMidHandle={setTopMidHandle}
                      bottomMidHandle={bottomMidHandle} setBottomMidHandle={setBottomMidHandle}
                      bottomHandle={bottomHandle} setBottomHandle={setBottomHandle} />
                  </a.group>
                }

                {matches.xs && 
                  <a.group position={cameraTransition.position}>
                    <Title position={[0, 40, 10]} scale={[18, 18, 18]} />
                    <Github position={[-25, 0, 0]} scale={[.6, .6, .6]} git={git} setGit={setGit} />
                    <LinkedIn position={[30, 0, -45]} scale={[2.25, 2.25, 2.25]} linkedin={linkedin} setLinkedin={setLinkedin} />
                    <Arrow position={[0, -50, 0]} scale={[10, 10, 1]} rotation={[0, 0, Math.PI]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover} />
                    <Arrow position={[0, -265, 0]} scale={[10, 10, 1]} rotation={[0, 0, 0]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover}/>
                  
                    <Fullfoldercabinet position={[5, -420, 0]} scale={[2.5, 2.5, 2.5]}
                      topOpen={topOpen} setTopOpen={setTopOpen} 
                      topMidOpen={topMidOpen} setTopMidOpen={setTopMidOpen} 
                      bottomMidOpen={bottomMidOpen} setBottomMidOpen={setBottomMidOpen} 
                      bottomOpen={bottomOpen} setBottomOpen={setBottomOpen} 
                      topHandle={topHandle} setTopHandle={setTopHandle}
                      topMidHandle={topMidHandle} setTopMidHandle={setTopMidHandle}
                      bottomMidHandle={bottomMidHandle} setBottomMidHandle={setBottomMidHandle}
                      bottomHandle={bottomHandle} setBottomHandle={setBottomHandle} />
                  </a.group>
                }
                {matches.galaxyFold && 
                  <a.group position={cameraTransition.position}>
                    <Title position={[0, 40, 10]} scale={[16, 16, 16]} />
                    <Github position={[-17, 0, 0]} scale={[.6, .6, .6]} git={git} setGit={setGit} />
                    <LinkedIn position={[20, 0, -45]} scale={[2.25, 2.25, 2.25]} linkedin={linkedin} setLinkedin={setLinkedin} />
                    <Arrow position={[0, -50, 0]} scale={[10, 10, 1]} rotation={[0, 0, Math.PI]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover} />
                    <Arrow position={[0, -265, 0]} scale={[10, 10, 1]} rotation={[0, 0, 0]} arrow={arrow} setArrow={setArrow} hover={hover} setHover={setHover}/>
                  
                    <Fullfoldercabinet position={[10, -420, 0]} scale={[2.25, 2.25, 2.25]}
                      topOpen={topOpen} setTopOpen={setTopOpen} 
                      topMidOpen={topMidOpen} setTopMidOpen={setTopMidOpen} 
                      bottomMidOpen={bottomMidOpen} setBottomMidOpen={setBottomMidOpen} 
                      bottomOpen={bottomOpen} setBottomOpen={setBottomOpen} 
                      topHandle={topHandle} setTopHandle={setTopHandle}
                      topMidHandle={topMidHandle} setTopMidHandle={setTopMidHandle}
                      bottomMidHandle={bottomMidHandle} setBottomMidHandle={setBottomMidHandle}
                      bottomHandle={bottomHandle} setBottomHandle={setBottomHandle} />
                  </a.group>
                }
              </Fragment>
            )}
          </Media>
        </Suspense>
      </Canvas>
      <Loader />
      <CabinetTopModal topOpen={topOpen} setTopOpen={setTopOpen} />
      <CabinetTopMidModal topMidOpen={topMidOpen} setTopMidOpen={setTopMidOpen} />
    </>
  );
};

export default App;