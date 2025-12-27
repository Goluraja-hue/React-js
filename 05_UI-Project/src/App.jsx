import React from 'react'
import Section1 from './Components/Section1/Section1'

const App = () => {

  const companies = [
    {
      img: "https://plus.unsplash.com/premium_photo-1683880731020-83b984105a72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Google is a global technology company specializing in search, ads, and cloud computing.",
      tag: "Technology",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1682437317248-b8b00e36bb94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Apple designs innovative consumer electronics, software, and digital services.",
      tag: "Electronics",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1674055047782-76ccc87a1110?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Microsoft develops software, cloud solutions, and enterprise tools worldwide.",
      tag: "Software",
    },
    {
      img: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Amazon is a multinational e-commerce and cloud computing company.",
      tag: "E-Commerce",
    },
    {
      img: "https://images.unsplash.com/photo-1525095182007-3874c4e2b38b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Meta focuses on social media platforms and virtual reality technologies.",
      tag: "Social Media",
    },
    {
      img: "https://images.unsplash.com/photo-1603202662706-62ead3176b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Netflix provides streaming entertainment services across the globe.",
      tag: "Entertainment",
    },
    {
      img: "https://images.unsplash.com/photo-1524758870432-af57e54afa26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro:
        "Tesla manufactures electric vehicles and renewable energy solutions.",
      tag: "Automobile",
    },
    {
      img: "https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "Spotify offers digital music streaming and podcast services.",
      tag: "Music",
    },
    {
      img: "https://images.unsplash.com/photo-1584940120743-8981ca35b012?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Adobe creates creative software for design, video, and digital marketing.",
      tag: "Design",
    },
    {
      img: "https://images.unsplash.com/photo-1581092581294-a030b4f01a11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "Uber provides ride-sharing, delivery, and mobility services.",
      tag: "Transport",
    },
  ];


  return (
    <div>
     <Section1 users={companies} />
    </div>
  )
}

export default App