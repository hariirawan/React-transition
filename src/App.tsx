import * as React from 'react';
import * as uuid from 'uuid';
import './App.css';

import { Button, Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

import {
  CSSTransition, TransitionGroup,
} from 'react-transition-group'

interface IState {
  items: any;
}

class App extends React.Component<{}, IState> {
  constructor(props?: any) {
    super(props);
    this.state = {
      items: [
        {
          address: 'Lombok Timur',
          id: uuid(),
          name: 'Hari Irawan',
        },
        {
          address:'Bima',
          id: uuid(),
          name: 'Julhan Arif',
        },
        {
          address:'Jogjakarta',
          id: uuid(),
          name: 'Muhammad Edo',
        }
      ]
    }
    this.addItem = this.addItem.bind(this);
  }

  public addItem() {
    const name = prompt("Enter som nama...");
    const address = prompt("Enter some address...");
    if(name || address) {
      this.setState(state => ({
        items:[
          ...state.items,
          {
            address,
            id:uuid(),
            name,
          }
        ]
      }))
    }
  }
  public render() {
    return (
      <Grid>
        <ListGroup>
          <TransitionGroup>
          {
            this.state.items.map(({ id, name, address }: any) => {
              return (
                <CSSTransition 
                  key={id}
                  timeout={1000}
                  classNames="fade"
                  >
                  <ListGroupItem 
                    className="table">
                    <Button bsStyle="danger">
                      &times;
                    </Button>
                    <div className="col">
                      {name}
                    </div>
                    <div className="col">
                      {address}
                    </div>
                  </ListGroupItem>
                </CSSTransition>
              )
            })
          }
          </TransitionGroup>
          <Button 
            bsStyle="primary"
            onClick={this.addItem}>
            Add Item
          </Button>
        </ListGroup>
      </Grid>
    );
  }
}

export default App;
