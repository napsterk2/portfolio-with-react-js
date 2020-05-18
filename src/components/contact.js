import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>KOUOKAM PAULIN</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '100px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>passionné par la natation à cause de sa rigueur, le tennis pour la concentration, le football pour son esprit d'équipe,la lecture,l'internet et les jeux de société, je suis un jeune élève ingénieur qui désire s'orienter vers l'architecture des systèmes d'informations, l'architecture logicielles, le développement et le conseil.toute fois , je m'intéresse également aux métiers d'administrateur système et donc je souhaite faire carrière dans le secteur devops ceci pour pouvoir concilier mes compétences dans l'ingénierie logicielle et l'administration système ! une bonne partie de ma formation personnelle est consacrée au « problem solving », à la créativité, et enfin à la gouvernance des systèmes d 'informations, organisées entres elles pour développer un état d'esprit que l'on reconnait chez les plus grand dirigeants  </p>

          </Cell>
          <Cell col={6}>
            <h2>me contacter</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                      699081495
                  </ListItemContent>
                </ListItem>

               

                <ListItem>
              <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
              <i className="fa fa-envelope" aria-hidden="true"/>
            napsterpaulin@gmail.com
                  </ListItemContent>
                </ListItem>

                


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
