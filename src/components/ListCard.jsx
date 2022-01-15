import { Card, CardActions, CardContent, IconButton, List, ListItem, ListItemText, TextField} from "@material-ui/core";
import { DeleteForever, Add } from "@material-ui/icons";


function ListCard(){
    return(
        <Card className='listCard' variant='outlined'>
            <CardContent>
                <TextField multiline='true' fullWidth='true' style={{ display: "inline", justifyContent: 'left'}}/>
                <IconButton style={{ display: "flex", justifyContent: "center"}}>
                    <Add/>
                </IconButton>
                <List>
                    <ListItem>
                        <ListItemText primary={'Sexo'}/>
                        <IconButton>
                    <DeleteForever/>
                </IconButton>
                        </ListItem>
                </List>
                <CardActions>

                </CardActions>
            </CardContent>
        </Card>
    );
}

export default ListCard;