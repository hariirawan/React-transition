import * as React from 'react';
import { Button, Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

import * as uuid from 'uuid';

interface IState {
  items: any;
}

class App extends React.Component<{}, IState> {
  constructor(props?: any) {
    super(props);
    this.state = {
      items: [
        {
          id: uuid(),
          text: 'Hari Irawan'
        },
        {
          id: uuid(),
          text: 'Julhan Arif'
        },
        {
          id: uuid(),
          text: 'Muhammad Edo'
        }
      ]
    }
  }
  public render() {
    return (
      <Grid>
        <ListGroup>
          {
            this.state.items.map(({ id, text }: any, key: number) => {
              return (
                <ListGroupItem key={key}>
                  <Button bsStyle="danger">
                    X
                  </Button>
                  {text}
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
      </Grid>
    );
  }
}

export default App;
