(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],{68:function(e,t,o){},79:function(e,t,o){},80:function(e,t,o){"use strict";o.r(t);var i=o(2),a=o.n(i),s=o(43),n=o.n(s),r=(o(68),o(12)),c=o(36),l=o(81),d=o(64),m=o(20),p=o(6),j=o(5),h=o(57),b=o.p+"static/media/open.35b0c319.mp3",O=o.p+"static/media/close.5ad82b9f.mp3",u=o(3),g=new Audio(b),x=new Audio(O);function y(e){var t=Object(i.useRef)(),o=Object(h.a)("./fullfoldercabinet.glb"),a=o.nodes,s=o.materials,n=Object(m.useSpring)({config:{duration:1e3},position:e.topOpen?[-17,30,13]:[-17,30,0]}),r=Object(m.useSpring)({config:{duration:1e3},position:e.topMidOpen?[-17,43.5,13]:[-17,43.5,0]}),c=Object(m.useSpring)({config:{duration:1e3},position:e.bottomMidOpen?[-17,16.5,13]:[-17,16.5,0]}),l=Object(m.useSpring)({config:{duration:1e3},position:e.bottomOpen?[-17,3,13]:[-17,3,0]});return Object(u.jsxs)("group",Object(p.a)(Object(p.a)({ref:t},e),{},{dispose:null,position:e.position,rotation:[0,-Math.PI/3.5,0],scale:e.scale,children:[Object(u.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[Object(u.jsx)("mesh",{geometry:a.cabinetfullhollow_1.geometry,material:s.base}),Object(u.jsx)("mesh",{geometry:a.cabinetfullhollow_2.geometry,material:s.gap})]}),Object(u.jsxs)(m.a.group,{position:c.position,rotation:[Math.PI/2,0,0],onPointerOver:function(t){return e.setBottomMidHandle(!0)},onPointerOut:function(t){return e.setBottomMidHandle(!1)},children:[Object(u.jsx)("mesh",{geometry:a.cubby.geometry,material:s["base.005"]}),Object(u.jsx)("mesh",{geometry:a.cubby_1.geometry,material:s["base.005"]}),Object(u.jsx)("mesh",{geometry:a.cubby_2.geometry,material:s["base.005"]}),Object(u.jsx)("mesh",{geometry:a.cubby_3.geometry,material:e.bottomMidHandle?new j.MeshBasicMaterial({color:new j.Color("yellow"),transparent:!0}):s["handles.001"],onClick:function(){e.setBottomMidOpen(!e.bottomMidOpen),g.volume=.5,x.volume=.5,e.bottomMidOpen?x.play():g.play()}}),Object(u.jsx)("mesh",{geometry:a.folderMidBot.geometry,material:s["folder.003"],position:[7.5,-6.5,-6.5],rotation:[0,0,-Math.PI/2]})]}),Object(u.jsxs)(m.a.group,{position:r.position,rotation:[Math.PI/2,0,0],onPointerOver:function(t){return e.setTopMidHandle(!0)},onPointerOut:function(t){return e.setTopMidHandle(!1)},children:[Object(u.jsx)("mesh",{geometry:a.cubby001.geometry,material:s["base.006"]}),Object(u.jsx)("mesh",{geometry:a.cubby001_1.geometry,material:s["base.006"]}),Object(u.jsx)("mesh",{geometry:a.cubby001_2.geometry,material:s["base.006"]}),Object(u.jsx)("mesh",{geometry:a.cubby001_3.geometry,material:e.topMidHandle?new j.MeshBasicMaterial({color:new j.Color("yellow"),transparent:!0}):s["handles.002"],onClick:function(){e.setTopMidOpen(!e.topMidOpen),g.volume=.5,g.play()}}),Object(u.jsx)("mesh",{geometry:a.folderTop.geometry,material:s["folder.002"],position:[7.5,-6.41,-6.5],rotation:[0,0,-Math.PI/2]})]}),Object(u.jsxs)(m.a.group,{position:n.position,rotation:[Math.PI/2,0,0],onPointerOver:function(t){return e.setTopHandle(!0)},onPointerOut:function(t){return e.setTopHandle(!1)},children:[Object(u.jsx)("mesh",{geometry:a.cubby002.geometry,material:s["base.007"]}),Object(u.jsx)("mesh",{geometry:a.cubby002_1.geometry,material:s["base.007"]}),Object(u.jsx)("mesh",{geometry:a.cubby002_2.geometry,material:s["base.007"]}),Object(u.jsx)("mesh",{geometry:a.cubby002_3.geometry,material:e.topHandle?new j.MeshBasicMaterial({color:new j.Color("yellow"),transparent:!0}):s["handles.003"],onClick:function(){e.setTopOpen(!e.topOpen),g.volume=.5,g.play()}}),Object(u.jsx)("mesh",{geometry:a.folderMidTop.geometry,material:s["folder.001"],position:[7.5,-6.71,-6.5],rotation:[0,0,-Math.PI/2]})]}),Object(u.jsxs)(m.a.group,{position:l.position,rotation:[Math.PI/2,0,0],onPointerOver:function(t){return e.setBottomHandle(!0)},onPointerOut:function(t){return e.setBottomHandle(!1)},children:[Object(u.jsx)("mesh",{geometry:a.cubby003.geometry,material:s["base.008"]}),Object(u.jsx)("mesh",{geometry:a.cubby003_1.geometry,material:s["base.008"]}),Object(u.jsx)("mesh",{geometry:a.cubby003_2.geometry,material:s["base.008"]}),Object(u.jsx)("mesh",{geometry:a.cubby003_3.geometry,material:e.bottomHandle?new j.MeshBasicMaterial({color:new j.Color("yellow"),transparent:!0}):s["handles.004"],onClick:function(){e.setBottomOpen(!e.bottomOpen),g.volume=.5,x.volume=.5,e.bottomOpen?x.play():g.play()}}),Object(u.jsx)("mesh",{geometry:a.folderBottom.geometry,material:s["folder.004"],position:[7.5,-6.5,-6.5],rotation:[0,0,-Math.PI/2]})]}),Object(u.jsx)("mesh",{geometry:a.About_Me.geometry,material:s.white,position:[1.06,48.12,-7.02],rotation:[Math.PI/2,0,-Math.PI/2]}),Object(u.jsx)("mesh",{geometry:a.Projects.geometry,material:s["white.001"],position:[1.17,34.64,-7.08],rotation:[Math.PI/2,0,-Math.PI/2]})]}))}function f(e){var t=Object(i.useRef)(),o=Object(h.a)("./title.glb"),a=o.nodes,s=o.materials;return Object(u.jsx)("group",Object(p.a)(Object(p.a)({ref:t},e),{},{dispose:null,position:e.position,scale:e.scale,children:Object(u.jsx)("mesh",{material:s.white,geometry:a.Ryan_Shihabi.geometry,rotation:[Math.PI/1.9,0,0]})}))}function w(e){var t=Object(i.useRef)(),o=Object(h.a)("./github.glb"),a=o.nodes,s=o.materials;return Object(u.jsx)("group",Object(p.a)(Object(p.a)({ref:t},e),{},{dispose:null,onClick:function(){window.location.href="https://github.com/RyanShihabi"},onPointerOver:function(t){return e.setGit(!0)},onPointerOut:function(t){return e.setGit(!1)},children:Object(u.jsx)("mesh",{geometry:a.Default.geometry,material:e.git?new j.MeshBasicMaterial({color:new j.Color("orange"),transparent:!0}):s.white,rotation:[Math.PI/2,0,0]})}))}function v(e){var t=Object(i.useRef)(),o=Object(h.a)("./LinkedIn.glb"),a=o.nodes,s=o.materials;return Object(u.jsx)("group",Object(p.a)(Object(p.a)({ref:t},e),{},{dispose:null,onClick:function(){window.location.href="https://www.linkedin.com/in/ryan-shihabi"},onPointerOver:function(t){return e.setLinkedin(!0)},onPointerOut:function(t){return e.setLinkedin(!1)},children:Object(u.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[Object(u.jsx)("mesh",{geometry:a.Mesh_0.geometry,material:s.white}),Object(u.jsx)("mesh",{geometry:a.Mesh_0_1.geometry,material:e.linkedin?new j.MeshBasicMaterial({color:new j.Color("orange"),transparent:!0}):s.blue})]})}))}function M(e){var t=Object(i.useRef)(),o=Object(h.a)("./arrow.glb").nodes;return Object(u.jsx)("group",Object(p.a)(Object(p.a)({ref:t},e),{},{dispose:null,position:e.position,scale:e.scale,rotation:e.rotation,onClick:function(){e.setArrow(!e.arrow)},onPointerOver:function(t){return e.setHover(!0)},onPointerOut:function(t){return e.setHover(!1)},children:Object(u.jsx)("mesh",{geometry:o.Cube.geometry,material:e.hover?new j.MeshBasicMaterial({color:new j.Color("yellow"),transparent:!0}):new j.MeshBasicMaterial({color:new j.Color("white"),transparent:!0})})}))}h.a.preload("./fullfoldercabinet.glb"),h.a.preload("./title.glb"),h.a.preload("./github.glb"),h.a.preload("./LinkedIn.glb"),h.a.preload("./arrow.glb");var H=o(33),k=o.p+"static/media/profile.357903f7.jpg",T=new Audio(O),I=function(e){var t=e.topMidOpen,o=e.setTopMidOpen,i=function(){o(!t),T.volume=.5,T.play()};return Object(H.useTransition)(t,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}})((function(e,t){return t&&Object(u.jsxs)(H.animated.div,{style:e,className:"modal-wrapper",children:[Object(u.jsx)("div",{onClick:i,className:"overlay"}),Object(u.jsx)("div",{className:"projects",children:Object(u.jsxs)("div",{className:"modal-folder",children:[Object(u.jsx)("div",{className:"top",children:Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h4",{className:"title",children:"About Me"}),Object(u.jsx)("div",{onClick:i,className:"close",children:"x"})]})}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("h3",{className:"modalTitle",children:"Hello!"}),Object(u.jsx)("p",{className:"modalText",children:"My name is Ryan Shihabi, I am 18 years old and currently live in Southern California. I have been teaching myself how to program since I was 10 years old and have always seen computer science as my way to express myself. As I head into college, I plan on studying Data Science because it combines my love for business analytics and mathematics. I hope I can use the skills I have learned throughout my life to contribute to the workings of our world."}),Object(u.jsx)("div",{className:"imageContainer",children:Object(u.jsx)("img",{className:"profile",src:k,alt:"Profile"})})]})]})})]})}))},P=o.p+"static/media/Prediction7312020.74dac546.jpg",N=o.p+"static/media/Results7312020.77669c58.jpg",B=o.p+"static/media/Rycenter.ccda3625.JPG",C=o.p+"static/media/portfolio_cdl.8a54d6af.JPG",S=o.p+"static/media/nvda.f92ffc05.JPG",A=o.p+"static/media/omnimed.735d799f.JPG",L=o.p+"static/media/draw.3a94a6c9.JPG",_=[Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"modalTitle",children:"Rycenter"}),Object(u.jsx)("p",{className:"modalText",children:"Rycenter is a hobby project I created to provide free academic utilities to students during the COVID school years. I wrote 4 programs for the site: a homework schedule generator, a grammar checker, a final grade calculator, and a semester grade calculator. The homework schedule generator takes the classes you have homework in for the day, classifies if the homework is to study for a test or is an assignment, then makes a list of what order to finish them in. The grammar checker was my attempt at making a version of Grammarly. It detects past, present, and future tense, contractions, and personal pronouns. The final grade calculator was created to solve some inefficiencies I noticed with the original \u201cRoger-Hub\u201d version. With one grade input, it will automatically calculate the bordering letter grades as well; one input gives all the information a user needs. The semester grade calculator was added because I noticed people at my school debating their future semester grades on their calculators. This application makes the process of number entry more practical. After half a year, the website maintains an average of 200 unique monthly users."}),Object(u.jsx)("div",{className:"imageContainer",children:Object(u.jsx)("a",{href:"https://www.rycenter.net/",children:Object(u.jsx)("img",{src:B,alt:"Rycenter homepage",className:"modalPicture"})})})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"modalTitle",children:"COVID-19 Case Prediction"}),Object(u.jsx)("p",{className:"modalText",children:"With a new interest in data science, COVID-19 provided a large dataset of opportunities and challenges to solve. I put my focus on the global COVID-19 cases because there were enough data points at the time to make predictions. To keep high accuracy, I had my model only predict one day into the future. I ended up using a linear regression model after comparing it with other methods like SVR and Lasso. After training the model in July of 2020, my model had missed tomorrow's number by only 98 total cases. This project sparked my interest in data science with a hope to pursue it as a career while I decide what industry will be the most interesting."}),Object(u.jsxs)("div",{className:"imageContainer",children:[Object(u.jsx)("img",{src:P,alt:"Covid predictions",className:"prediction"}),Object(u.jsx)("img",{src:N,alt:"Covid cases",className:"result"})]}),Object(u.jsx)("a",{href:"https://colab.research.google.com/drive/11tUg_KZdjB5wKD9AtpcahQ3wB7kMVx_6?usp=sharing",children:"Google Colab"})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"modalTitle",children:"CDL Highlight Tracker"}),Object(u.jsx)("p",{className:"modalText",children:"I have always enjoyed playing video games and to have the opportunity to present a demo to a representative at Activision Blizzard was inconceivable. I pitched the idea of having an automated highlight generator so the viewers would not have to sift through a five-hour recording of the competition. Adding to the project, I developed a way to place the clips onto an interactive map of where the clip occurred in the game. I built this demo in a week so I am currently adding more functionality to the final product. To look at the front-end code, feel free to check out my GitHub."}),Object(u.jsx)("div",{className:"imageContainer",children:Object(u.jsx)("img",{src:C,alt:"CDL Highlight Map",className:"modalPicture"})})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"modalTitle",children:"Stock Market Predictions"}),Object(u.jsx)("p",{className:"modalText",children:"I was first introduced to the stock market back in 2016 with my first investment being Nvidia Corporation. Using my experience with data science, I wondered how a predictive model could determine closing stock prices. Using TensorFlow for training the model and scikit-learn\u2019s MinMaxScaler, I was able to create a Long Short Term Memory(LSTM) model to prove my theory. By visualizing my findings in matplotlib, I was glad to see my model played things on the safer side as most predictions were slightly below the actual closing price. As no model can achieve perfect accuracy, I am content with this buffer. Staying loyal to my history, I trained my model Nvidia stock data from 2016 up to the beginning of 2021. The test data consisted of the rest of the 2021 data. To increase the model\u2019s accuracy I would need to add in more data from other factors, like a Natural Language Processor(NLP) to scrape article reviews for positive or negative feedback."}),Object(u.jsx)("div",{className:"imageContainer",children:Object(u.jsx)("img",{src:S,alt:"NVDA Predictions",className:"modalPicture"})})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"modalTitle",children:"Medical Search Engine"}),Object(u.jsx)("p",{className:"modalText",children:"Doing freelance work for a client, I was tasked with making a medical search engine that could bring up relevant abstracts. Using python to scrape websites for information, I could generate paraphrased information from five articles to a user in an average of 2 seconds. I used Django to house the servers and Reactjs to fetch the information on a different port. I also realized that the current medical search engines on the market lack UI design. I made sure to give that area some attention when developing this project."}),Object(u.jsx)("div",{className:"imageContainer",children:Object(u.jsx)("img",{src:A,alt:"Search Engine Project",className:"modalPicture"})})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"modalTitle",children:"Computer Vision: Air Draw Application"}),Object(u.jsx)("p",{className:"modalText",children:"Requested from a friend, I built an application that allows users to draw on their camera input using OpenCV for Python. The only error that I encountered with this project was with the lighting threshold. If the room had no light, the algorithm I wrote crashes because this value was a denominator value. I fixed this issue by checking the exposure value before sending the number to the algorithm. Replacing an expected zero with an infinitely small number fixed the ZeroDivisionError. Learning OpenCV was a great experience as it opened my interest in Convolutional Neural Networks(CNN) for AI and mathematics."}),Object(u.jsx)("div",{className:"imageContainer",children:Object(u.jsx)("img",{src:L,alt:"Search Engine Project",className:"modalPicture"})})]}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"modalTitle",children:"Portfolio Website"}),Object(u.jsx)("p",{className:"modalText",children:"This website was honestly a blast to make because I got to learn how to make 3D models with Blender. I am using Reactjs to run a dependency of react-three-fiber to render in all of the 3D models I created. For full-stack web development, React will continue to be my choice for my front-end work."})]})],R=new Audio(O),F=function(e){var t=e.topOpen,o=e.setTopOpen,a=Object(i.useState)(0),s=Object(r.a)(a,2),n=s[0],c=s[1],l=Object(i.useState)("<"),d=Object(r.a)(l,2),m=d[0],p=d[1],j=Object(i.useState)(">"),h=Object(r.a)(j,2),b=h[0],O=h[1],g=function(){o(!t),R.volume=.5,R.play(),c(0),O(">"),p("<")},x=function(){n<_.length-1?(c(n+1),O(">"),p("<")):(O(""),p("<"))},y=function(){0!==n?(c(n-1),p("<"),O(">")):(p(""),O(">"))};return Object(H.useTransition)(t,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}})((function(e,t){return t&&Object(u.jsxs)(H.animated.div,{style:e,className:"modal-wrapper",children:[Object(u.jsx)("div",{onClick:g,className:"overlay"}),Object(u.jsxs)("div",{className:"projects",children:[Object(u.jsxs)("div",{className:"arrows",children:[Object(u.jsx)("p",{onClick:y,className:"left",children:m}),Object(u.jsx)("p",{onClick:x,className:"right",children:b})]}),Object(u.jsxs)("div",{className:"modal-folder",children:[Object(u.jsx)("div",{className:"top",children:Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h4",{className:"title",children:"Projects"}),Object(u.jsx)("div",{onClick:g,className:"close",children:"x"})]})}),Object(u.jsx)("div",{className:"content",children:_[n]})]})]})]})}))},G=(o(79),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ambientLight",{intensity:.3}),Object(u.jsx)("directionalLight",{position:[10,10,5],intensity:1}),Object(u.jsx)("directionalLight",{position:[0,10,0],intensity:1.5}),Object(u.jsx)("spotLight",{intensity:.3,position:[-1e3,0,0]})]})}),D=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),o=t[0],a=t[1],s=Object(i.useState)(!1),n=Object(r.a)(s,2),p=n[0],j=n[1],h=Object(i.useState)(!1),b=Object(r.a)(h,2),O=b[0],g=b[1],x=Object(i.useState)(!1),H=Object(r.a)(x,2),k=H[0],T=H[1],P=Object(i.useState)(!1),N=Object(r.a)(P,2),B=N[0],C=N[1],S=Object(i.useState)(!1),A=Object(r.a)(S,2),L=A[0],_=A[1],R=Object(i.useState)(!1),D=Object(r.a)(R,2),V=D[0],J=D[1],z=Object(i.useState)(!1),E=Object(r.a)(z,2),U=E[0],q=E[1],W=Object(i.useState)(!1),K=Object(r.a)(W,2),Z=K[0],Q=K[1],X=Object(i.useState)(!1),Y=Object(r.a)(X,2),$=Y[0],ee=Y[1],te=Object(i.useState)(!1),oe=Object(r.a)(te,2),ie=oe[0],ae=oe[1],se=Object(i.useState)(!1),ne=Object(r.a)(se,2),re=ne[0],ce=ne[1],le=Object(m.useSpring)({config:{duration:500},position:$?[0,335,0]:[0,0,0]});return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(c.a,{colorManagement:!0,shadowMap:!0,camera:{position:[0,0,120],fov:70},children:[Object(u.jsx)(G,{}),Object(u.jsx)(i.Suspense,{fallback:null,children:Object(u.jsx)(d.a,{queries:{desktop:"(min-width: 1025px)",medium:"(max-width: 1024px) and (min-width: 800px)",smedium:"(max-width: 799px) and (min-width: 600px)",small:"(max-width: 599px) and (min-width: 500px)",xs:"(max-width: 499px) and (min-width: 480px)",mobile:"(max-width: 479px) and (min-width: 281px)",galaxyFold:"(max-width: 280px)"},children:function(e){return Object(u.jsxs)(i.Fragment,{children:[e.small&&Object(u.jsxs)(m.a.group,{position:le.position,children:[Object(u.jsx)(f,{position:[0,40,10],scale:[20,20,20]}),Object(u.jsx)(w,{position:[-25,0,0],scale:[.75,.75,.75],git:re,setGit:ce}),Object(u.jsx)(v,{position:[30,0,-45],scale:[2.75,2.75,2.75],linkedin:ie,setLinkedin:ae}),Object(u.jsx)(M,{position:[0,-50,0],scale:[10,10,1],rotation:[0,0,Math.PI],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(M,{position:[0,-265,0],scale:[10,10,1],rotation:[0,0,0],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(y,{position:[0,-420,0],scale:[2.5,2.5,2.5],topOpen:o,setTopOpen:a,topMidOpen:p,setTopMidOpen:j,bottomMidOpen:O,setBottomMidOpen:g,bottomOpen:k,setBottomOpen:T,topHandle:B,setTopHandle:C,topMidHandle:L,setTopMidHandle:_,bottomMidHandle:V,setBottomMidHandle:J,bottomHandle:U,setBottomHandle:q})]}),e.desktop&&Object(u.jsxs)(m.a.group,{position:le.position,children:[Object(u.jsx)(f,{position:[0,40,10],scale:[35,35,35]}),Object(u.jsx)(w,{position:[-40,0,0],scale:[1,1,1],git:re,setGit:ce}),Object(u.jsx)(v,{position:[40,0,-45],scale:[3.25,3.25,3.25],linkedin:ie,setLinkedin:ae}),Object(u.jsx)(M,{position:[0,-60,0],scale:[10,10,1],rotation:[0,0,Math.PI],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(M,{position:[0,-265,0],scale:[10,10,1],rotation:[0,0,0],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(y,{position:[5,-420,0],scale:[2.5,2.5,2.5],topOpen:o,setTopOpen:a,topMidOpen:p,setTopMidOpen:j,bottomMidOpen:O,setBottomMidOpen:g,bottomOpen:k,setBottomOpen:T,topHandle:B,setTopHandle:C,topMidHandle:L,setTopMidHandle:_,bottomMidHandle:V,setBottomMidHandle:J,bottomHandle:U,setBottomHandle:q})]}),e.medium&&Object(u.jsxs)(m.a.group,{position:le.position,children:[Object(u.jsx)(f,{position:[0,40,10],scale:[29,29,29]}),Object(u.jsx)(w,{position:[-36,0,0],scale:[1,1,1],git:re,setGit:ce}),Object(u.jsx)(v,{position:[36,0,-45],scale:[3.25,3.25,3.25],linkedin:ie,setLinkedin:ae}),Object(u.jsx)(M,{position:[0,-60,0],scale:[10,10,1],rotation:[0,0,Math.PI],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(M,{position:[0,-265,0],scale:[10,10,1],rotation:[0,0,0],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(y,{position:[0,-420,0],scale:[2.5,2.5,2.5],topOpen:o,setTopOpen:a,topMidOpen:p,setTopMidOpen:j,bottomMidOpen:O,setBottomMidOpen:g,bottomOpen:k,setBottomOpen:T,topHandle:B,setTopHandle:C,topMidHandle:L,setTopMidHandle:_,bottomMidHandle:V,setBottomMidHandle:J,bottomHandle:U,setBottomHandle:q})]}),e.smedium&&Object(u.jsxs)(m.a.group,{position:le.position,children:[Object(u.jsx)(f,{position:[0,40,10],scale:[24.5,24.5,24.5]}),Object(u.jsx)(w,{position:[-30,0,0],scale:[.8,.8,.8],git:re,setGit:ce}),Object(u.jsx)(v,{position:[30,0,-45],scale:[3,3,3],linkedin:ie,setLinkedin:ae}),Object(u.jsx)(M,{position:[0,-60,0],scale:[10,10,1],rotation:[0,0,Math.PI],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(M,{position:[0,-265,0],scale:[10,10,1],rotation:[0,0,0],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(y,{position:[0,-420,0],scale:[2.5,2.5,2.5],topOpen:o,setTopOpen:a,topMidOpen:p,setTopMidOpen:j,bottomMidOpen:O,setBottomMidOpen:g,bottomOpen:k,setBottomOpen:T,topHandle:B,setTopHandle:C,topMidHandle:L,setTopMidHandle:_,bottomMidHandle:V,setBottomMidHandle:J,bottomHandle:U,setBottomHandle:q})]}),e.xs&&Object(u.jsxs)(m.a.group,{position:le.position,children:[Object(u.jsx)(f,{position:[0,40,10],scale:[18,18,18]}),Object(u.jsx)(w,{position:[-25,0,0],scale:[.6,.6,.6],git:re,setGit:ce}),Object(u.jsx)(v,{position:[30,0,-45],scale:[2.25,2.25,2.25],linkedin:ie,setLinkedin:ae}),Object(u.jsx)(M,{position:[0,-50,0],scale:[10,10,1],rotation:[0,0,Math.PI],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(M,{position:[0,-265,0],scale:[10,10,1],rotation:[0,0,0],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(y,{position:[5,-420,0],scale:[2.5,2.5,2.5],topOpen:o,setTopOpen:a,topMidOpen:p,setTopMidOpen:j,bottomMidOpen:O,setBottomMidOpen:g,bottomOpen:k,setBottomOpen:T,topHandle:B,setTopHandle:C,topMidHandle:L,setTopMidHandle:_,bottomMidHandle:V,setBottomMidHandle:J,bottomHandle:U,setBottomHandle:q})]}),e.mobile&&Object(u.jsxs)(m.a.group,{position:le.position,children:[Object(u.jsx)(f,{position:[0,40,10],scale:[18,18,18]}),Object(u.jsx)(w,{position:[-20,0,0],scale:[.6,.6,.6],git:re,setGit:ce}),Object(u.jsx)(v,{position:[25,0,-45],scale:[2.25,2.25,2.25],linkedin:ie,setLinkedin:ae}),Object(u.jsx)(M,{position:[0,-50,0],scale:[10,10,1],rotation:[0,0,Math.PI],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(M,{position:[0,-265,0],scale:[10,10,1],rotation:[0,0,0],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(y,{position:[5,-420,0],scale:[2.5,2.5,2.5],topOpen:o,setTopOpen:a,topMidOpen:p,setTopMidOpen:j,bottomMidOpen:O,setBottomMidOpen:g,bottomOpen:k,setBottomOpen:T,topHandle:B,setTopHandle:C,topMidHandle:L,setTopMidHandle:_,bottomMidHandle:V,setBottomMidHandle:J,bottomHandle:U,setBottomHandle:q})]}),e.xs&&Object(u.jsxs)(m.a.group,{position:le.position,children:[Object(u.jsx)(f,{position:[0,40,10],scale:[18,18,18]}),Object(u.jsx)(w,{position:[-25,0,0],scale:[.6,.6,.6],git:re,setGit:ce}),Object(u.jsx)(v,{position:[30,0,-45],scale:[2.25,2.25,2.25],linkedin:ie,setLinkedin:ae}),Object(u.jsx)(M,{position:[0,-50,0],scale:[10,10,1],rotation:[0,0,Math.PI],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(M,{position:[0,-265,0],scale:[10,10,1],rotation:[0,0,0],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(y,{position:[5,-420,0],scale:[2.5,2.5,2.5],topOpen:o,setTopOpen:a,topMidOpen:p,setTopMidOpen:j,bottomMidOpen:O,setBottomMidOpen:g,bottomOpen:k,setBottomOpen:T,topHandle:B,setTopHandle:C,topMidHandle:L,setTopMidHandle:_,bottomMidHandle:V,setBottomMidHandle:J,bottomHandle:U,setBottomHandle:q})]}),e.galaxyFold&&Object(u.jsxs)(m.a.group,{position:le.position,children:[Object(u.jsx)(f,{position:[0,40,10],scale:[16,16,16]}),Object(u.jsx)(w,{position:[-17,0,0],scale:[.6,.6,.6],git:re,setGit:ce}),Object(u.jsx)(v,{position:[20,0,-45],scale:[2.25,2.25,2.25],linkedin:ie,setLinkedin:ae}),Object(u.jsx)(M,{position:[0,-50,0],scale:[10,10,1],rotation:[0,0,Math.PI],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(M,{position:[0,-265,0],scale:[10,10,1],rotation:[0,0,0],arrow:$,setArrow:ee,hover:Z,setHover:Q}),Object(u.jsx)(y,{position:[10,-420,0],scale:[2.25,2.25,2.25],topOpen:o,setTopOpen:a,topMidOpen:p,setTopMidOpen:j,bottomMidOpen:O,setBottomMidOpen:g,bottomOpen:k,setBottomOpen:T,topHandle:B,setTopHandle:C,topMidHandle:L,setTopMidHandle:_,bottomMidHandle:V,setBottomMidHandle:J,bottomHandle:U,setBottomHandle:q})]})]})}})})]}),Object(u.jsx)(l.a,{}),Object(u.jsx)(F,{topOpen:o,setTopOpen:a}),Object(u.jsx)(I,{topMidOpen:p,setTopMidOpen:j})]})},V=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,82)).then((function(t){var o=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;o(e),i(e),a(e),s(e),n(e)}))};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root")),V()}},[[80,1,2]]]);
//# sourceMappingURL=main.55f09f1d.chunk.js.map