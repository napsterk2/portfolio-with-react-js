import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <div style={{textAlign: 'center'}}>
            <img
              src="https://media.dogfinance.com/files/users/paulin-kouokam-kamdem_b_1555533790.jpg"
              alt="avatar"
              className="avatar-img"
              />
              </div>
           

            <div className="banner-text">
              <h1 >Ingénieur informaticien</h1>

            <hr/>

          <p>HTML/CSS | UML | JavaScript | React | JAVA | NodeJS | Admin Sys | MySQL</p>

        </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
