import React from 'react'

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-800">
      <h1 className="text-blue-50 text-center">Golu kumar</h1>

      <div>
        <h1>How to download tailwind css in project file step by step</h1>
        <p>
          step 1 :- first of all apne kon sa folder banaya hai wahi use karren
          EX:- hamne vite se banaya hai step 2 :- npm install tailwindcss
          @tailwindcss/vite is command ko project vs code ke terminal par chalao
          step 3:- jo project file open hai usme "vite.config.js" se ek file
          hoga usme jakar "import tailwindcss from '@tailwindcss/vite'" isko sabse uper me paste karke ;

          step 4:- last me uske niche //"export default defineConfig({
  // plugins: [react()],
})" aisa ek hoga usme react ke bagal me comma deker "tailwindcss()" likh dena .
        </p>
      </div>
    </div>
  );
}

export default App