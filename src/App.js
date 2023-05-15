import './App.css';
import { useState } from 'react';

function App() {
  let [value, setValue] = useState("fahril");
  async function ak()
  {
    let response = await fetch("https://newsapi.org/v2/everything?q=Apple&from=2023-05-15&sortBy=popularity&apiKey=bb5e381f440043d3acf803f0431e5c32");
    let result = await response.json();
    console.log(result);
    console.log(result.articles);
    let p = result.articles.map((a) => {return ( <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={a.urlToImage} alt="Mountain"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{a.title}</div>
          <p class="text-gray-700 text-base">
            {a.description}
          </p>
          <a class="font-bold text-xl" href={a.url}>Read More</a>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>)})
    console.log(p);
    setValue(p);
  }
  ak();
  return <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">I am happy {value}</div>;
}

export default App;
