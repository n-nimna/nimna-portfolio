import{j as e,F as p,a as u,b as g,c as b,d as j,r as c,S as w,P as v,W as y,B as N,e as k,f as C,g as I,h as S,i as D}from"./vendor-DsJ1yyDf.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}})();const M="/nimna-portfolio/assets/pic3-DOfSqDaG.png";function W(){return e.jsxs("section",{id:"about",className:"bg-transparent text-white flex flex-col lg:flex-row items-center justify-center h-auto lg:h-screen p-8 lg:p-16 mt-6",children:[e.jsx("div",{className:"w-full lg:w-1/3 lg:h-130 overflow-hidden rounded-lg shadow-lg mr-5 mb-6 lg:mb-0",children:e.jsx("img",{src:M,alt:"Undergraduate Student Hero Section",className:"w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"})}),e.jsxs("div",{className:"w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6",children:[e.jsx("br",{}),e.jsxs("p",{className:"text-lg lg:text-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent",children:["Undergraduate at NSBM Green University",e.jsx("br",{})]}),e.jsx("p",{className:"text-sm lg:text-lg bg-gray-900 bg-opacity-60 backdrop-blur-md p-4 rounded-lg shadow-md",children:"I am a dedicated undergraduate student with a passion for UX/UI design and web development. My focus is on blending creativity with functionality to build seamless and engaging user interfaces. With a strong attention to detail and a commitment to user-centered design, I have completed various design projects and personal coding endeavors. Continuously learning and adapting to the evolving digital landscape, I strive to create innovative, user-friendly solutions that improve the overall user experience."}),e.jsx("div",{className:"counter-wrap ftco-animate d-flex mt-md-3",children:e.jsxs("ul",{className:"social-icons list-unstyled float-md-left mt-5 flex space-x-4 justify-center lg:justify-start",children:[e.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"45px",height:"45px"},children:e.jsx("a",{href:"https://www.linkedin.com/in/nimeshi-dilshara-b2508a255/","aria-label":"LinkedIn",children:e.jsx(p,{style:{fontSize:"24px",color:"#fff"}})})}),e.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"45px",height:"45px"},children:e.jsx("a",{href:"https://www.behance.net/nimeshidilshara","aria-label":"Behance",children:e.jsx(u,{style:{fontSize:"24px",color:"#fff"}})})}),e.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"45px",height:"45px"},children:e.jsx("a",{href:"https://dribbble.com/nimna7_","aria-label":"Dribbble",children:e.jsx(g,{style:{fontSize:"24px",color:"#fff"}})})}),e.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"45px",height:"45px"},children:e.jsx("a",{href:"https://github.com/n-nimna","aria-label":"GitHub",children:e.jsx(b,{style:{fontSize:"24px",color:"#fff"}})})})]})}),e.jsx("div",{className:"md:flex items-center justify-center mt-6",children:e.jsxs("a",{href:"/path-to-cv.pdf","aria-label":"Download CV",download:"Nimeshi_Dilshara_CV.pdf",className:"relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none",children:[e.jsx("span",{className:"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"}),e.jsxs("span",{className:"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2",children:[e.jsx(j,{className:"mr-2"}),"Download CV"]})]})})]})]})}function _(){const a=c.useRef(null);return c.useEffect(()=>{const i=a.current,n=new w,l=new v(75,i.offsetWidth/i.offsetHeight,.1,1e3);l.position.z=5;const s=new y({alpha:!0});s.setSize(i.offsetWidth,i.offsetHeight),s.setPixelRatio(window.devicePixelRatio),i.appendChild(s.domElement);const t=new N,r=1e3,o=new Float32Array(r*3);for(let d=0;d<r;d++)o[d*3]=(Math.random()-.5)*2e3,o[d*3+1]=(Math.random()-.5)*2e3,o[d*3+2]=(Math.random()-.5)*2e3;t.setAttribute("position",new k(o,3));const m=new C({color:16777215,size:1.5,transparent:!0,opacity:.8}),h=new I(t,m);n.add(h);const x=()=>{requestAnimationFrame(x),h.rotation.y+=5e-4,s.render(n,l)};x();const f=()=>{l.aspect=i.offsetWidth/i.offsetHeight,l.updateProjectionMatrix(),s.setSize(i.offsetWidth,i.offsetHeight)};return window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f),i.removeChild(s.domElement)}},[]),e.jsx("div",{ref:a,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,overflow:"hidden",backgroundColor:"#000"}})}const L=()=>{const[a,i]=c.useState(!1),n=()=>{i(!a)};return e.jsxs("div",{children:[e.jsxs("nav",{className:"bg-black text-white py-4 fixed top-0 left-0 w-full z-50 hidden md:flex justify-between items-center px-20 shadow-md mt-0 mb-3",children:[e.jsx("div",{className:"font-bold text-2xl bg-custom-gradient bg-clip-text text-transparent mt-3",children:"NIMESHI"}),e.jsxs("div",{className:"space-x-8 text-m flex relative mt-3",children:[e.jsx("a",{href:"#hero1",className:"hover:text-white-700 relative font-medium",children:"Home"}),e.jsx("a",{href:"#about",className:"hover:text-white-700 relative font-medium",children:"About"}),e.jsx("a",{href:"#service",className:"hover:text-white-700 relative font-medium",children:"Service"}),e.jsx("a",{href:"#skills",className:"hover:text-white-700 relative font-medium",children:"Skills"}),e.jsx("a",{href:"#project",className:"hover:text-white-700 relative font-medium",children:"Projects"})]})]}),e.jsxs("div",{className:"md:hidden ",children:[e.jsx("div",{className:"fixed top-0 left-0 z-10 mt-3",children:e.jsx("button",{onClick:n,className:"text-white p-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),e.jsxs("div",{className:`fixed top-0 left-0 w-3/4 h-60 bg-[#1A1A1A] text-white p-6 transform ${a?"translate-x-0":"-translate-x-full"} transition-transform ease-in-out duration-300 z-40`,children:[e.jsx("button",{onClick:n,className:"text-white absolute top-4 right-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),e.jsxs("div",{className:"space-y-3 text-lg mt-2",children:[e.jsx("a",{href:"#home",className:"block hover:text-gray-400 font-medium",children:"Home"}),e.jsx("a",{href:"#about",className:"block hover:text-gray-400 font-medium",children:"About"}),e.jsx("a",{href:"#service",className:"block hover:text-gray-400 font-medium",children:"Service"}),e.jsx("a",{href:"#skills",className:"block hover:text-gray-400 font-medium",children:"Skills"}),e.jsx("a",{href:"#project",className:"block hover:text-gray-400 font-medium",children:"Projects"})]})]})]})]})},A=()=>{const a={dots:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:1500,fade:!0,appendDots:i=>e.jsx("div",{style:{position:"absolute",bottom:"4px",width:"100%"},children:e.jsx("ul",{style:{display:"flex",justifyContent:"center",padding:0},children:i})})};return e.jsxs("section",{id:"hero1",className:"relative text-white h-[60vh] flex items-center justify-center",children:[e.jsx("style",{children:`
          /* Default styles for larger screens */
          #hero1 {
            margin-top: 200px;
            margin-bottom: -160px;
          }

          /* Adjust position for mobile screens only */
          @media (max-width: 768px) {
            #hero1 {
              margin-top: 100px; /* Move it up */
              margin-bottom: -50px; /* Adjust bottom margin */
            }
          }

          @media (max-width: 480px) {
            #hero1 {
              margin-top: 80px; /* Further adjustment for very small screens */
              margin-bottom: -120px;
            }
          }

          .slider-container {
            position: relative;
          }

          .slick-dots {
            bottom: 55px !important;
          }

          .slick-dots li {
            width: 15px; /* Increase dot width */
            height: 15px; /* Increase dot height */
            margin: 0 5px; /* Add space between dots */
          }

          .slick-dots li button:before {
            font-size: 0; /* Hide default font size */
            content: ''; /* Remove default content */
            display: block;
            width: 100%; /* Set width of dot */
            height: 100%; /* Set height of dot */
            border-radius: 50%; /* Make dots round */
            background: #ffffff; /* Default inactive dot color */
          }

          .slick-dots li.slick-active button:before {
            background: linear-gradient(to right, #ec4899, #a855f7, #3b82f6); /* Apply gradient for active dot */
          }

          /* Responsive adjustments for mobile view */
          @media (max-width: 768px) {
            .slick-dots li {
              width: 10px; /* Smaller dots for mobile */
              height: 10px; /* Smaller dots for mobile */
            }

            .slick-dots {
              top: 190px !important; /* Adjust top for mobile */
            }
          }

          @media (max-width: 480px) {
            .slick-dots li {
              width: 12px; /* Even smaller dots for small screens */
              height: 12px;
            }

            .slick-dots {
              bottom: 10px !important; /* Adjust bottom even further */
            }
          }
        `}),e.jsxs(S,{...a,className:"w-full relative",children:[e.jsxs("div",{className:"relative h-[60vh] flex items-center justify-center",children:[e.jsx("div",{className:"absolute w-full h-full bg-black bg-opacity-50 z-10"}),e.jsxs("div",{className:"relative z-20 text-center",children:[e.jsx("span",{className:"block text-xl lg:text-2xl text-pink-300 font-semibold tracking-widest mb-4",children:"Hello!"}),e.jsxs("h1",{className:"text-4xl lg:text-6xl font-bold leading-snug text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text",children:[e.jsx("span",{className:"text-white",children:"I'm "}),e.jsx("span",{className:"decoration-purple-300",children:"Nimeshi Dilshara"})]})]})]}),e.jsxs("div",{className:"relative h-[60vh] flex items-center justify-center",children:[e.jsx("div",{className:"absolute w-full h-full bg-black bg-opacity-50 z-10"}),e.jsxs("div",{className:"relative z-20 text-center",children:[e.jsx("span",{className:"block text-xl lg:text-2xl text-pink-300 font-semibold tracking-widest mb-4",children:"Hello!"}),e.jsxs("h1",{className:"text-4xl lg:text-6xl font-bold leading-snug text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text",children:[e.jsx("span",{className:"text-white",children:"I'm "}),e.jsx("span",{className:"text-white",children:"a "}),e.jsx("span",{className:"bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent",children:"UI/UX Designer"}),e.jsx("br",{}),e.jsx("span",{className:"text-white",children:"and "}),e.jsx("span",{className:"bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent",children:"Web Designer"})]})]})]})]})]})},z=()=>e.jsxs("div",{id:"service",children:[e.jsx("br",{}),e.jsx("div",{className:"py-8",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h1",{className:"text-4xl font-bold text-center mb-20 text-white p-2",children:"Services"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-20",children:[e.jsxs("div",{className:"service-card p-10 text-sm font-light rounded-lg",children:[e.jsx("i",{className:"fa-solid fa-crop text-5xl mb-8"}),e.jsx("h2",{className:"text-2xl text-[#fff] font-medium mb-4",children:"UI/UX Design"}),e.jsx("p",{className:"mb-4",children:"I focus on creating user-centered designs that are both functional and visually appealing."})]}),e.jsxs("div",{className:"service-card p-10 text-sm font-light rounded-lg",children:[e.jsx("i",{className:"fa-solid fa-code text-5xl mb-8"}),e.jsx("h2",{className:"text-2xl font-medium mb-4 text-[#fff]",children:"Web Design"}),e.jsx("p",{className:"mb-4 text-[#fff]",children:"Crafting intuitive, modern, and user-friendly web designs with creativity."})]}),e.jsxs("div",{className:"service-card p-10 text-sm font-light rounded-lg",children:[e.jsx("i",{className:"fa-brands fa-app-store text-5xl mb-8"}),e.jsx("h2",{className:"text-2xl text-[#fff] font-medium mb-4",children:"App Design"}),e.jsx("p",{className:"mb-4 text-[#fff]",children:"Designing engaging, functional, and visually appealing mobile app experiences."})]})]})]})})]}),F="/nimna-portfolio/assets/java-C75OIrns.png",P="/nimna-portfolio/assets/nodejs-AVAm2jiS.png",R="/nimna-portfolio/assets/react-DWiQIKq_.png",B="/nimna-portfolio/assets/css-C_mIxnK_.png",H="/nimna-portfolio/assets/html-Dzd6W1Yf.png",U="/nimna-portfolio/assets/js-CQYsVOK8.png",E="/nimna-portfolio/assets/php-CLta4eW4.png",G="/nimna-portfolio/assets/mongodb-BdVWGrF4.png",O="/nimna-portfolio/assets/github-BSDumq2m.png",q="/nimna-portfolio/assets/ms365-Ci6qpyKF.png",T="/nimna-portfolio/assets/figma-H2MGUB-Y.png",V="/nimna-portfolio/assets/photoshop3-C5PrbbKh.png",Y=[{name:"Java",icon:F},{name:"JavaScript",icon:U},{name:"PHP",icon:E},{name:"HTML",icon:H},{name:"CSS",icon:B},{name:"React",icon:R},{name:"Node.js",icon:P},{name:"MongoDB",icon:G},{name:"Figma",icon:T},{name:"Photoshop",icon:V},{name:"Microsoft 365",icon:q},{name:"GitHub",icon:O}];function K(){const a=n=>{n.currentTarget.classList.add("scale-105","shadow-lg"),n.currentTarget.querySelector("img").classList.add("scale-110")},i=n=>{n.currentTarget.classList.remove("scale-105","shadow-lg"),n.currentTarget.querySelector("img").classList.remove("scale-110")};return e.jsxs("section",{id:"skills",className:"mt-24 p-4 max-w-7xl mx-auto",children:[" ",e.jsx("br",{}),e.jsx("br",{}),"   ",e.jsx("h1",{className:"text-4xl font-bold text-center text-white p-2 mb-10",children:"My Skills"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center",children:Y.map((n,l)=>e.jsxs("div",{className:"flex flex-col items-center p-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:bg-gray-800/30",onMouseEnter:a,onMouseLeave:i,children:[e.jsx("img",{src:n.icon,alt:n.name,className:"skill-image w-16 h-16 object-contain mb-2 transition-transform duration-300 ease-in-out"}),e.jsx("p",{className:"text-white text-sm font-semibold text-center",children:n.name})]},l))})]})}const J="/nimna-portfolio/assets/flowershop-BCw-GCxU.png",X="/nimna-portfolio/assets/yogaclass-Icy3p6vN.jpg",$="/nimna-portfolio/assets/medical-Dhlx6N09.jpg",Q="/nimna-portfolio/assets/lr-DHd87FZp.png",Z="/nimna-portfolio/assets/auction-BMjyi0v4.jpg",ee="/nimna-portfolio/assets/Tution-MkMhjwJY.jpg",te="/nimna-portfolio/assets/port-7wLwR62-.jpg",se=()=>{const[a,i]=c.useState(null),[n,l]=c.useState("UI Designs"),s=[{id:2,image:te,title:"Personal Portfolio Website",pharagraph:"Using React JS",category:"Web Development",links:[{icon:"fab fa-github",url:"https://github.com/n-nimna/nimna-portfolio"},{icon:"fab fa-linkedin",url:"https://www.linkedin.com/in/nimeshi-dilshara-b2508a255/details/projects/"},{icon:"fas fa-globe",url:""}]},{id:1,image:ee,title:"Website Development Tution Class",pharagraph:"Using React JS",category:"Web Development",links:[{icon:"fab fa-github",url:"https://github.com/n-nimna/BrightMind-Website"},{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_react-vite-webdevelopment-activity-7277520260579172352-cEXq?utm_source=share&utm_medium=member_desktop"},{icon:"fas fa-globe",url:"https://n-nimna.github.io/BrightMind-Website/"}]},{id:5,image:Z,title:"Website Design Auction",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uiuxdesign-design-auctionwebsite-activity-7275312227665002496-_w46?utm_source=share&utm_medium=member_desktop"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/215059919/Auction-Website-Design"},{icon:"fab fa-dribbble",url:""}]},{id:4,image:Q,title:"Redesign Design Leisure World Website",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/example"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/212455075/LeisureWorld-Redesign-Website"},{icon:"fab fa-dribbble",url:""}]},{id:3,image:$,title:"Website Design Medical Center",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.behance.net/gallery/208523379/Beauty-Clinic-Website-Design"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/208523379/Beauty-Clinic-Website-Design"},{icon:"fab fa-dribbble",url:""}]},{id:2,image:X,title:"Website Design Yoga Institute ",subtitle:"",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uxdesign-uidesign-webdesign-activity-7224998346023714816-npQq?utm_source=share&utm_medium=member_desktop"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/208132257/Yoga-Studio-Website-Design"},{icon:"fab fa-dribbble",url:""}]},{id:1,image:J,title:"Website Design Flower Shop",subtitle:"",category:"UI Designs",links:[{icon:"fab fa-linkedin",url:"https://www.linkedin.com/posts/nimeshi-dilshara-b2508a255_uxdesign-uidesign-webdesign-activity-7221179796414734336-VA59?utm_source=share&utm_medium=member_desktop"},{icon:"fab fa-behance",url:"https://www.behance.net/gallery/208526013/Flower-Shop-Website-Design"},{icon:"fab fa-dribbble",url:""}]}];return e.jsxs("section",{id:"project",className:"bg-black p-5 md:p-[20px]",children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"text-center mb-5 md:mb-[20px]",children:[e.jsx("h1",{className:"text-4xl font-bold text-center mb-20 text-white p-2",children:"My Projects"}),e.jsx("div",{className:"flex justify-center flex-wrap gap-6 mt-8 text-white",children:["UI Designs","Web Development"].map(t=>e.jsxs("span",{className:`cursor-pointer pb-2 text-base md:text-lg lg:text-xl relative
                ${n===t?"font-bold":""}
                hover:text-white transition-colors duration-300`,onClick:()=>l(t),children:[t,n===t&&e.jsx("span",{className:"absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-sm"})]},t))})]}),e.jsx("br",{}),e.jsx("div",{className:"mx-auto px-8 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8",children:s.filter(t=>t.category===n).map(t=>e.jsxs("div",{className:"relative overflow-hidden cursor-pointer rounded-lg transition-transform duration-300 hover:scale-105 h-[300px] sm:h-[300px] md:h-[300px] lg:h-[300px]",onClick:()=>i(t.id===a?null:t.id),children:[e.jsx("div",{className:"w-full h-full overflow-hidden rounded-lg",children:e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:`absolute inset-0 bg-[rgba(50,0,90,0.7)] backdrop-blur-sm flex flex-col justify-center items-center
                transition-opacity duration-300
                ${a===t.id?"opacity-100":"opacity-0 hover:opacity-100"}`,children:[e.jsx("h3",{className:"text-base md:text-lg lg:text-xl font-medium text-white mb-2",children:t.title}),e.jsx("p",{className:"text-base md:text-lg text-white mb-5",children:t.pharagraph}),t.subtitle&&e.jsx("span",{className:"text-sm md:text-base text-white/80 mb-5",children:t.subtitle}),e.jsx("div",{className:"flex justify-center gap-4",children:t.links.map((r,o)=>r.url&&e.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",className:`w-[50px] h-[50px] md:w-[40px] md:h-[40px] bg-white/20 rounded-full\r
                          flex items-center justify-center transition-all duration-300\r
                          hover:bg-white/40 hover:scale-110`,onClick:m=>m.stopPropagation(),children:e.jsx("i",{className:`${r.icon} text-base md:text-lg text-white
                          group-hover:text-black transition-colors duration-300`})},o))})]})]},t.id))})]})},ie=()=>e.jsxs("div",{className:"bg-black p-8 m-7 rounded-lg shadow-2xl",children:[" ",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("h1",{className:"text-4xl font-bold text-center mb-20 text-white p-2",children:"Contact"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 text-lg text-white m-20",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",viewBox:"0 0 24 24",fill:"none",stroke:"#8762F6",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M22 16.92v3.01c0 1.1-.9 2-2 2a19.937 19.937 0 01-8.94-2.36 19.937 19.937 0 01-6.58-6.58A19.937 19.937 0 012.07 4C2.07 2.9 2.97 2 4.07 2h3.01c.88 0 1.67.57 1.88 1.44l.62 2.54c.16.64-.02 1.31-.46 1.76l-2.2 2.2a15.978 15.978 0 006.58 6.58l2.2-2.2c.45-.45 1.12-.63 1.76-.46l2.54.62c.87.21 1.44 1 1.44 1.88z"})}),e.jsx("span",{children:"070 2805593"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"#8762F6",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 12h.01M21 16.8c0 .39-.28.68-.64.68H3.64a.7.7 0 01-.64-.68V5.2c0-.38.28-.68.64-.68H20.4c.36 0 .64.3.64.68v11.6zM3.6 5.8l8.4 5.7 8.4-5.7"})}),e.jsx("span",{children:"nimeshid24@gmail.com"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"#8762F6",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 2C8.13401 2 5 5.13401 5 9C5 13.858 12 21 12 21C12 21 19 13.858 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z"})}),e.jsx("span",{children:"No. 208/1, Walpita ,Batawala, Padukka"})]})]})]}),ne=()=>e.jsx("footer",{className:"bg-[#1A1A1A] text-white py-8 mt-20",children:e.jsxs("div",{className:"container mx-auto text-center",children:[e.jsx("p",{className:"mb-2",children:"©2024 Nimeshi Dilshara. All Rights Reserved."}),e.jsx("div",{className:"counter-wrap ftco-animate d-flex mt-md-3",children:e.jsxs("ul",{className:"social-icons list-unstyled flex justify-center space-x-4 mt-5",children:[e.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"40px",height:"40px"},children:e.jsx("a",{href:"https://www.linkedin.com/in/nimeshi-dilshara-b2508a255/","aria-label":"LinkedIn",children:e.jsx(p,{style:{fontSize:"20px",color:"#fff"}})})}),e.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"40px",height:"40px"},children:e.jsx("a",{href:"https://www.behance.net/nimeshidilshara","aria-label":"Behance",children:e.jsx(u,{style:{fontSize:"20px",color:"#fff"}})})}),e.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"40px",height:"40px"},children:e.jsx("a",{href:"https://dribbble.com/nimna7_","aria-label":"Dribbble",children:e.jsx(g,{style:{fontSize:"20px",color:"#fff"}})})}),e.jsx("li",{className:"icon-circle",style:{backgroundColor:"#8762F6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",width:"40px",height:"40px"},children:e.jsx("a",{href:"https://github.com/n-nimna","aria-label":"GitHub",children:e.jsx(b,{style:{fontSize:"20px",color:"#fff"}})})})]})})]})});function ae(){return e.jsxs("div",{className:"relative",children:[e.jsx(_,{})," ",e.jsx(L,{}),e.jsxs("main",{className:"mt-16",children:[e.jsx(A,{}),e.jsx(W,{}),e.jsx(z,{}),e.jsx(K,{}),e.jsx(se,{}),e.jsx(ie,{}),e.jsx(ne,{})]})]})}D.createRoot(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(ae,{})}));
