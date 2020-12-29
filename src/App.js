import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup>
          <Button variant="contained"
          startIcon={<SaveIcon/>}
          size="large"
          color="primary"
          href="#"> 
            Click Me
          </Button>
          <Button variant="contained"
          startIcon={<DeleteIcon/>}
          size="large"
          color="secondary"
          href="#">
            Dont Click Me
          </Button>
        </ButtonGroup>
       

      </header>
    </div>
  );
}

export default App;
