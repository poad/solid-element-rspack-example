import './App.css';
import './counter/index.jsx';

const App = () => {
  return (
    <>
      <div class="content">
        <h1>Rsbuild with Solid</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <solid-counter />
      </div>
    </>
  );
};

export default App;
