import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem, Thumbnail, Item, Input } from 'native-base';
let helperArray = require('./userList.json');
export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        allUsers: helperArray,
        usersFiltered:helperArray
      };
    }

  searchUser(textToSearch) {
    this.setState({
      usersFiltered: this.state.allUsers.filter(i =>
        i.name.toLowerCase().includes(textToSearch.toLowerCase()),
        ),
    });
  }  

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name='search'/>
            <Input placeholder="Search User" onChangeText={text=>{this.searchUser(text)}}/>
          </Item>
        </Header>
        <Content>
          {this.state.usersFiltered.map((item, index)=>(
            <List>
          <ListItem thumbnail>
              <Left>
                  <Thumbnail source={{uri: item.image}} />
              </Left>
                <Body>
                    <Text>{item.name}</Text>
                    <Text note>{item.address}</Text>
                </Body>
          </ListItem>
          </List>
           ))}
        </Content>
      </Container>
    );
  }
}
