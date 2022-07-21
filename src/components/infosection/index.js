import React from 'react'

import { Button } from '../ButtonElements'

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';

const InfoSection = ({imgStart}) => {
  return (
    <>
      <InfoContainer id='about' style={{color:'#fff', background: '#010606'}} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Premium Bank</TopLine>
                <Heading style={{color: '#f7f8fa'}} >Unlimited Transactions with zero fees</Heading>
                <Subtitle style={{color: '#f7f8fa'}} >Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees'</Subtitle>
                <BtnWrap>
                  <Button to = '/about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={true}
                  dark={true}
                  // dark2={dark2 ? 1 : 0}

                  >Get Started</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={require('../../images/svg-4.svg').default} alt='car' />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>




      <InfoContainer id='discover' style={{color: '#010606', background: '#fff'}} >
        <InfoWrapper>
          <InfoRow imgStart={!imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Unlimited Acess</TopLine>
                <Heading style={{color: '#010606'}} >Unlimited Transactions with zero fees</Heading>
                <Subtitle style={{color: '#010606'}} >We have you covered no matter where you are located. All you need is an internet connection and a phone or computer</Subtitle>
                <BtnWrap>
                  <Button to = '/discover'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={false}
                  dark={false}
                  // dark2='true'

                  >Learn More</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={require('../../images/svg-1.svg').default} alt='car' />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>

      <InfoContainer id='signup' style={{color: '#010606', background: '#fff'}} >
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Join Our Team</TopLine>
                <Heading style={{color: '#010606'}} >Creating an account is extremely easy</Heading>
                <Subtitle style={{color: '#010606'}} >Get everything set up and ready in under 10 minutes. All you need to do is add your information and you\'re ready to go</Subtitle>
                <BtnWrap>
                  <Button to = ''
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={false}
                  dark={false}
                  // dark2='true'

                  >Learn More</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={require('../../images/svg-2.svg').default} alt='car' />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>



    </>
  )
}

export default InfoSection;