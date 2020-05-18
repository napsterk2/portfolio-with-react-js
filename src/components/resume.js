import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h4 style={{paddingTop:'2em'}}>KOUOKAM KAMDEM PAULIN</h4>
            <h4 style={{color: 'grey'}}>éleve ingénieur en Génie informatique</h4>
            <hr style={{borderTop: '3px solid #ffc820', width: '50%'}}/>
            <h5>Address</h5>
            <p>Cameroun, Douala yassa</p>
            <hr style={{borderTop: '3px solid #ffc820', width: '50%'}}/>
            <h5>Numéros</h5>
            <p>699081495</p>
            <h5>adresse mail </h5>
            <p>paulin.kouokam.cm@viacesi.fr</p>
            <hr style={{borderTop: '3px solid #ffc820', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2018}
              schoolName="Université de yaounde 1"
              schoolDescription=" j'ai obtenu une licence en informatique au cour de mes années passées à l'université de yaounde 1"
              />

               <Education
                 startYear={2018}
                 endYear={2021}
                 schoolName=" Institut UCAC-ICAM "
                 schoolDescription="je suis en cour d'obtention de mon diplome d'ingénieur en informatique"
                  />
                <hr style={{borderTop: '3px solid #ffc820'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={ 2019}
              jobName="Stage asecna"
              jobDescription="Conception d'une architecture d'annuaire"
              />

              <Experience
                startYear={2019}
                endYear={2020}
                jobName="stage 4eme année"
                jobDescription="conception d'une API de paiement au sein d'un e-wallet"
                />
              <hr style={{borderTop: '3px solid #ffc820'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={30}
                      />
                      <Skills
                      skill="Java"
                      progress={60}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
