import React,{ Component}  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
      }

      toggleModal=()=>
      {
          this.setState(
              {isModalOpen:!this.state.isModalOpen}
          )
      }
  
      handleLogin=(event)=>
      {
          this.toggleModal();
          alert("Username: "+this.username.value + " Password: "+this.password.value+" Remember: "+this.remember.checked);
          event.preventDefault()
      }
  
      toggleNav=()=>
      {
          this.setState(
              {isNavOpen:!this.state.isNavOpen}
          )
      }
    render()  {
        return(
            <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} onClick={this.toggleNav}navbar>
                        <Nav navbar>
                        <NavItem>
                            <li className="nav-link"><a href="/home" className="text-white"><span className="fa fa-home fa-lg"></span>Home</a></li>
                        </NavItem>
                        <NavItem>
                            <li className="nav-link"><a href="/aboutus" className="text-white"><span className="fa fa-home fa-lg"></span>About-Us</a></li>
                        </NavItem>
                        <NavItem>
                            <li className="nav-link"><a href="/menu"className="text-white"><span className="fa fa-home fa-lg"></span>Menu</a></li>
                        </NavItem>
                        <NavItem>
                            <li className="nav-link"><a href="/contactus"className="text-white"><span className="fa fa-home fa-lg"></span>Contact-Us</a></li>
                        </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal} className="text-red bg-white"><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron className="bg-red">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1> The Indian Flyer</h1>
                                <p>Hop on the world’s second largest observation wheel, offering butler-serviced dinners in private capsules. Indulge in a four-course meal while rotating 540 feet above landmarks like the F1 Circuit and Collyer Quay.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                         <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                </>
        );
    }
}

export default Header;