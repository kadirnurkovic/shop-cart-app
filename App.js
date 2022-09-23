import "./App.css";
 
function App() {
  return (
    <>
      <div className="App">
        <h1 className="text-4xl font-bold bg-red-100">Hello world!</h1>
      </div>
 
      <div className="flex justify-between flex-row items-center w-1/2 mx-auto h-24 bg-orange-500 mt-20 rounded-xl px-8">
        <div className="flex justify-center items-center bg-blue-500 w-16 h-16 text-white font-bold underline rounded-lg">
          1
        </div>
        <div className="flex justify-center items-center bg-red-500 w-16 h-16 text-white font-bold underline rounded-full">
          2
        </div>
        <div className="flex justify-center items-center bg-green-500 w-16 h-16 text-white font-bold underline rounded-2xl">
          3
        </div>
      </div>
    </>
  );
}
 
export default App;