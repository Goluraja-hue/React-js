import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./Components/Card";

const App = () => {
  const jobs = [
    {
      BrandLogo:
        "https://img.freepik.com/premium-vector/google-logo_1273375-1572.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Google",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$25/hour",
      location: "Mumbai, India",
    },
    {
      BrandLogo:
        "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$40/hour",
      location: "Bangalore, India",
    },
    {
      BrandLogo:
        "https://cdn.iconscout.com/icon/free/png-512/free-amazon-icon-svg-download-png-432492.png?f=webp&w=512",
      companyName: "Amazon",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$20/hour",
      location: "Mumbai, India",
    },
    {
      BrandLogo:
        "https://cdn.iconscout.com/icon/free/png-512/free-flipkart-icon-svg-download-png-226594.png?f=webp&w=512",
      companyName: "Flipkart",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$30/hour",
      location: "Delhi, India",
    },
    {
      BrandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/2560px-Tata_Consultancy_Services_old_logo.svg.png",
      companyName: "TCS",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$18/hour",
      location: "Pune, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTddJ5d49mdbkk8yRFOXgz9SiZZNlRVo1Fy3g&s",
      companyName: "Infosys",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$35/hour",
      location: "Hyderabad, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72fptEIcmSxxi1u-f3_cG9HSM3dp1LAISWA&s",
      companyName: "Wipro",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$32/hour",
      location: "Bangalore, India",
    },
    {
      BrandLogo:
        "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem.png",
      companyName: "Accenture",
      post: "Business Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$22/hour",
      location: "Gurgaon, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEjY90pS-UfgHJU4glc8Aiupp1xCn_jcvRQ&s",
      companyName: "Paytm",
      post: "Product Manager",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$45/hour",
      location: "Noida, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLa2X3zXtN8OjQ5uWn7XVJpAj3ZazuOsa4A&s",
      companyName: "Zomato",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$24/hour",
      location: "Delhi, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vrJCPo3PblnKOX4K4eHFQSeNI9Ob-L3kcg&s",
      companyName: "Swiggy",
      post: "Operations Manager",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$28/hour",
      location: "Bangalore, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrP8SjaV1pHId_RV939m_FDISw_7mgjAvaw&s",
      companyName: "Byju's",
      post: "Content Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$15/hour",
      location: "Remote, India",
    },
    {
      BrandLogo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Ola_Cabs_logo.svg/1200px-Ola_Cabs_logo.svg.png",
      companyName: "Ola",
      post: "Android Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$38/hour",
      location: "Bangalore, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJU5P1pGOioxnqddCZMyZURPv-g-fGmX0y3Q&s",
      companyName: "Uber",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$36/hour",
      location: "Hyderabad, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTguPx72EqXwL11S4RnY17lpU5NiMcdNNK1jg&s",
      companyName: "Netflix",
      post: "Video Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$50/hour",
      location: "Remote, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkuThcxKPduUa3Q0Tb3APKgjWZRhFQp8N-A&s",
      companyName: "Spotify",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$42/hour",
      location: "Mumbai, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDhKYNErxlnh_TV4R6LNcZ4mR91MDvRPiJw&s",
      companyName: "Adobe",
      post: "Software Tester",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$21/hour",
      location: "Noida, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5wJ2gaDUpJikDw8nUzZiD57ynKJ_t_jpxBQ&s",
      companyName: "Intuit",
      post: "QA Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$27/hour",
      location: "Bangalore, India",
    },
    {
      BrandLogo:
        "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1956.jpg?width=672&height=454&name=ibm-logo-1956.jpg",
      companyName: "IBM",
      post: "System Administrator",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$34/hour",
      location: "Chennai, India",
    },
    {
      BrandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwt02Pvocmj2bC5dPEWVClHVw843KI_a6yNw&s",
      companyName: "Oracle",
      post: "Database Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$44/hour",
      location: "Mumbai, India",
    },
  ];
  return (
    <div id="parent">
      {jobs.map(function(elem){

        return <Card img={elem.BrandLogo} company={elem.companyName} post={elem.post} time={elem.tag1} level={elem.tag2} rate={elem.pay} place={elem.location} />
      })}
      

    </div>
  );
};

export default App;
