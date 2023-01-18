import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
const items = [
  {
    title: "What is React?",
    content: "React is front-end JS framework" 
  },
  {
    title: "Why React?",
    content: "React is favorite framework for developers"
  },
  {
    title: "How to use React?",
    content: "Use React by creating components"
  }
]
function App() {
  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  );
}

export default App;
