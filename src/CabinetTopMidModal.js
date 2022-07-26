import React from 'react';
import profile from './project_media/headshot.png';
import closeSound from './sounds/close.mp3';

const closeCabinet = new Audio(closeSound);

const CabinetTopMidModal = ({topMidOpen, setTopMidOpen}) => {

  const CloseModal = () => {
    setTopMidOpen(!topMidOpen);
    closeCabinet.volume = 0.5;
    closeCabinet.play();
  };

  // Mount/unmount
  return(
    topMidOpen && (
      <div className='modal-wrapper'>
        <div onClick={CloseModal} className='overlay' />
        <div className="projects">
          <div className='modal-folder' >
            <div className='top'>
              <div className='header'>
                <h4 className="title">About Me</h4>
                <div onClick={CloseModal} className='close'>
                  x
                </div>
              </div>
            </div>
            <div className="content">
              <h3 className="modalTitle">Hello!</h3>
              <p className="modalText">My name is Ryan Shihabi. I am 19 years old and currently live in Southern California. I have been teaching myself how to program since I was ten years old and have always seen computer science as a way to express my creativity. I am a Data Science major with a minor in Information Security & Policy because it combines my love for business, mathematics, and cybersecurity. I hope I can use the skills I have learned throughout my life to contribute to the workings of our world.</p>
              <div className="imageContainer">
                <img className="profile" src={profile} alt="Portfolio of creator"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CabinetTopMidModal;