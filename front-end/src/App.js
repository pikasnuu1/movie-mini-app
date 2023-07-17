import './App.css';

function App() {

  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];


  return (
    <div className="App">
      movies
      {movies.map(movies => <li>{movies.title}</li>)}
    </div>
  );
}

export default App;
