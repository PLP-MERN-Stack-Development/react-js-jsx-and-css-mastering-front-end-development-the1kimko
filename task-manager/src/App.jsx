import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import ApiData from "./components/ApiData";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-base-300 text-base-content flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TaskManager />
        <ApiData />
      </main>
      <Footer />
    </div>
  );
}

export default App;
