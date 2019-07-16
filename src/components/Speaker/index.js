import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './style.module.scss'
import Container from '../Container/index'
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image'



const Speakers =({props})=>
(



    <StaticQuery 

    query={graphql`
    fragment SpeakerImages on File {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      query {
        imageFirst: file(relativePath: { eq: "Speaker_1.JPG" }) {
          ...SpeakerImages
        }
        imageSecond: file(relativePath: { eq: "Speaker_2.jpg" }) {
          ...SpeakerImages
        }
        imageSixth: file(relativePath: { eq: "Speaker_6.jpg" }) {
          ...SpeakerImages
        }
        imageSeventh: file(relativePath: { eq: "Speaker_7.jpg" }) {
          ...SpeakerImages
        }
        imageEiegth: file(relativePath: { eq: "Speaker_8.jpg" }) {
          ...SpeakerImages
        }
        
      }

    `}

    render={ data =>(<div className={style.section}>
        <Container>
        <div className={style.container}>
            <p className={style.title}> Our <span className={style.red}>Speakers</span></p>
            <div className={style.speaker_container}>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Siddharth Rajahans</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageSecond.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Dhanya Ravi</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Brigadier | N Rai</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Swasthik Padma</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageFirst.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Kivita Mishra</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageSixth.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Dr RohanChandra Gatty</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageSeventh.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Swami Ekagamyananda</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>
            <div className={style.speaker_holder}>
            <Img
            fluid={data.imageEiegth.childImageSharp.fluid}
            className={style.speaker}
            alt="Speaker image"
            /> 
            <p className={style.speaker_name}>Ankith Kumar</p>
            <p className={style.about_speaker}>Doctor</p>               
            </div>


        </div>
        

        </div>

        </Container>

    </div>
)
    }
    />

);
export default Speakers;


