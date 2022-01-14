import { Button } from "@material-ui/core";
import { Add, List } from "@material-ui/icons";
import "../styles/MainMenu.css";

function MainMenu() {
  return (
    <div className="mainMenu">
        <div className="mainTitleText">
      <h1>iList</h1>
      </div>
      <div className="menuButtons">
        <div className="addButton">
          <Button
            variant="contained"
            endIcon={<Add style={{ fontSize: 25 }} />}
            color="inherit"
          >
            New List
          </Button>
        </div>
        <div className="showButton">
          <Button
            variant="contained"
            endIcon={<List style={{ fontSize: 25 }} />}
            color="inherit"
          >
            Show Lists
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
