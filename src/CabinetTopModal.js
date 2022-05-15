import React from 'react';
import closeSound from './sounds/close.mp3';
import Prediction from './project_media/Prediction7312020.jpg'
import Result from './project_media/Results7312020.jpg'
import rycenter from './project_media/Rycenter.JPG'
import cdl from './project_media/portfolio_cdl.JPG'
import nvda from './project_media/nvda.JPG'
import search from './project_media/omnimed.JPG'
import detection from './project_media/detection.png'
import labels from './project_media/labels.png'

const projects = [
  { title: "SAP: Object Detection AI for Grocery Store Discounts", content: "Consulted by Dr. Campbell of SAP R&D, I was tasked with the challenge of finding ways to reduce company travel costs for validating real-time store disocunt data. The solution I am developing is an AR mobile application that allows consumers to take picture of store discounts, have an AI confirm the picture, and report the data back to a company representative. I am training a custom YOLOv5 model with a dataset I built from scratch because I plan to publish it as open-source. Currently, there is no data like this on the internet so I definitely want to give others the chance to tackle this new challenge.", image: <div className="imageContainer"><img src={detection} alt="Covid predictions" className="prediction"/><img src={labels} alt="Covid cases" className="result"/></div>, id: 1},
  { title: "CDL Highlight Tracker", content: "I have always enjoyed playing video games and to have the opportunity to present a demo to a representative at Activision Blizzard was inconceivable. I pitched the idea of having an automated highlight generator so the viewers would not have to sift through a five-hour recording of the competition. Adding to the project, I developed a way to place the clips onto an interactive map of where the clip occurred in the game. To look at the front-end code, feel free to check out my GitHub", image: <div className="imageContainer"><img src={cdl} alt="CDL Highlight Map" className="modalPicture"/></div>, id: 2},
  { title: "Medical Search Engine", content: "Doing freelance work for a client, I was tasked with making a medical search engine that could bring up relevant abstracts. Using python to scrape websites for information, I could generate paraphrased information from five articles to a user in an average of 2 seconds. I used Django to house the servers and Reactjs to fetch the information on a different port. I also realized that the current medical search engines on the market lack UI design. I made sure to give that area some attention when developing this project.", image: <div className="imageContainer"><img src={search} alt="Search Engine Project" className="modalPicture"/></div>, id: 3},
  { title: "Rycenter", content: "Rycenter is a hobby project I created to provide free academic utilities to students during the COVID school years. I wrote 4 programs for the site: a homework schedule generator, a grammar checker, a final grade calculator, and a semester grade calculator. The homework schedule generator takes the classes you have homework in for the day, classifies if the homework is to study for a test or is an assignment, then makes a list of what order to finish them in. The grammar checker was my attempt at making a version of Grammarly. It detects past, present, and future tense, contractions, and personal pronouns. The final grade calculator was created to solve some inefficiencies I noticed with the original “Roger-Hub” version. With one grade input, it will automatically calculate the bordering letter grades as well; one input gives all the information a user needs. The semester grade calculator was added because I noticed people at my school debating their future semester grades on their calculators. This application makes the process of number entry more practical. After half a year, the website maintains an average of 200 unique monthly users.", image: <div className="imageContainer"><a href="https://www.rycenter.net/"><img src={rycenter} alt="Rycenter homepage" className="modalPicture"/></a></div>, id: 4},
  { title: "Stock Market Predictions", content: "I was first introduced to the stock market back in 2016 with my first investment being Nvidia Corporation. Using my experience with data science, I wondered how a predictive model could determine closing stock prices. Using TensorFlow for training the model and scikit-learn’s MinMaxScaler, I was able to create a Long Short Term Memory(LSTM) model to prove my theory. By visualizing my findings in matplotlib, I was glad to see my model played things on the safer side as most predictions were slightly below the actual closing price. As no model can achieve perfect accuracy, I am content with this buffer. Staying loyal to my history, I trained my model Nvidia stock data from 2016 up to the beginning of 2021. The test data consisted of the rest of the 2021 data. To increase the model’s accuracy I would need to add in more data from other factors, like a Natural Language Processor(NLP) to scrape article reviews for positive or negative feedback.", image: <div className="imageContainer"><img src={nvda} alt="NVDA Predictions" className="modalPicture"/></div>, id: 5},
  { title: "COVID-19 Case Prediction", content: "With a new interest in data science, COVID-19 provided a large dataset of opportunities and challenges to solve. I put my focus on the global COVID-19 cases because there were enough data points at the time to make predictions. To keep high accuracy, I had my model only predict one day into the future. I ended up using a linear regression model after comparing it with other methods like SVR and Lasso. After training the model in July of 2020, my model had missed tomorrow's number by only 98 total cases. This project sparked my interest in data science with a hope to pursue it as a career while I decide what industry will be the most interesting.", image: <><div className="imageContainer"><img src={Prediction} alt="Covid predictions" className="prediction"/><img src={Result} alt="Covid cases" className="result"/></div><a href="https://colab.research.google.com/drive/11tUg_KZdjB5wKD9AtpcahQ3wB7kMVx_6?usp=sharing">Google Colab</a></>, id: 6},
  { title: "Portfolio Website", content: "This website was honestly a blast to make because I got to learn how to make 3D models with Blender. I am using Reactjs to run a dependency of react-three-fiber to render in all of the 3D models I created. For full-stack web development, React will continue to be my choice for my front-end work.", image: <></>, id: 7},  
];

const closeCabinet = new Audio(closeSound);

const CabinetTopMidModal = ({topOpen, setTopOpen}) => {

  // Function to close the modal
  const CloseModal = () => {
    setTopOpen(!topOpen);
    closeCabinet.volume = 0.5;
    closeCabinet.play();
  };
  
  // Mount/unmount
  return(
    topOpen && (
      <div className='modal-wrapper'>
          <div onClick={CloseModal} className='overlay' />
          <div className="projects">
            <div className='modal-folder' >
              <div className='top'>
                <div className='header'>
                  <h4 className="title">Projects</h4>
                  <div onClick={CloseModal} className='close'>
                    x
                  </div>
                </div>
              </div>
                <div className="content">
                {projects.map(({ title, content, image, id }) => (
                  <div key={id}>
                    <h3 className="modalTitle">{title}</h3>
                    <p className="modalText">{content}</p>
                    {image}
                    <hr />
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
    )
  );
};

export default CabinetTopMidModal;