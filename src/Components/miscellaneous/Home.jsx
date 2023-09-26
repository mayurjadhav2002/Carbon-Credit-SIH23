import React,{useState} from 'react'
import industry from "./isocity_factory.png"
function Home() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);
  const calculateCredits = () => {
    // Add your calculation logic here and set the result
  };
  return (
    
<div>
<header className="bg-gradient-to-r from-green-400 to-blue-500 p-40 text-white">
      <h1 className="text-4xl font-bold mb-2">Carbon Credits Initiative</h1>
      <p className="text-lg">Reducing Emissions, Saving the Planet</p>
      <button className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out">
        Learn More
      </button>
    </header>
    <section className="bg-white px-40 py-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 leading-loose">
          We are dedicated to reducing carbon emissions by working closely
          with factories and industries to develop sustainable solutions.
          Our mission is to make the world a better place.
        </p>
      </div>
    </section>
    <section className="bg-blue-100 p-40">
      <div className="container mx-auto flex items-center">
        <div className="w-1/2">
          <img src={industry} alt="Factory" className="rounded-lg w-[50%]" />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-2xl font-semibold mb-4">Carbon Emissions</h2>
          <p className="text-gray-700 leading-loose">
            Our innovative approach helps factories reduce carbon emissions
            by up to 40%. We provide data-driven solutions that make a
            significant impact.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-white p-40">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Carbon Credit Calculator</h2>
        <div className="mb-4">
          <input
            type="number"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter emissions data..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          onClick={calculateCredits}
        >
          Calculate Credits
        </button>
        {result !== null && (
          <div className="mt-4">
            <p className="text-gray-700">
              Your estimated carbon credits: <strong>{result} credits</strong>
            </p>
          </div>
        )}
      </div>
    </section>
    <footer className="bg-blue-900 text-white p-4 text-center">
      <p>&copy; 2023 Carbon Credits Initiative. All rights reserved.</p>
    </footer>
</div>   
  )
}

export default Home