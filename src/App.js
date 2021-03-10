import Menu from "./components/MenuComponent";
import React, { Component } from 'react'
import { Navbar, NavbarBrand} from 'reactstrap'
import { Dishes } from './initialData'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Dishes
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='#'>React menu resturant</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.data}/>
      </div>
    )
  }
}

