import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./Components/Card";

const App = () => {
  return (
    <div id="parent">
      <Card
        img="https://cdn.iconscout.com/icon/free/png-512/free-amazon-logo-icon-svg-download-png-1306063.png?f=webp&w=512"
        company="Amazon"
        post="Senior UI/UX Designer"
        time="Part Time"
        level="Senior Level"
        rate="$150/hr"
        place="Mumbai,India"
      />
      <Card
        img="https://cdn.iconscout.com/icon/free/png-512/free-google-pay-logo-icon-svg-download-png-1721670.png?f=webp&w=512"
        company="GPay"
        post="Software Engineer"
        time="Full Time"
        level="Junior Level"
        rate="$100/hr"
        place="Patna,India"
      />
    </div>
  );
};

export default App;
