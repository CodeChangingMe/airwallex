import './App.css';
import PageLayout from "./components/PageLayout";
import PageContent from "./components/PageContent";

function App() {
  return (
    <div className="App">
      <PageLayout>
        <PageContent />
      </PageLayout>
    </div>
  );
}

export default App;
