import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaYoutube} from 'react-icons/fa'

import { Button } from '../ButtonElements'

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesP, ServicesIcon } from './ServicesElements';

import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SoicalLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

import {animateScroll as scroll} from 'react-scroll'




const InfoSection = (imgStart) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }



  return (
    <>
      <InfoContainer id='about' style={{color:'#fff', background: '#010606'}} >
        <InfoWrapper>
          <InfoRow imgStart={!imgStart}>
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
          <InfoRow imgStart={!imgStart}>
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




        <ServicesContainer id='services'>
          <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={require('../../images/svg-4.svg').default} alt='dog'>
              
              </ServicesIcon>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>We help reduce your fees and increase your revenue.</ServicesP>
            </ServicesCard>


            <ServicesCard>
              <ServicesIcon src={require('../../images/svg-3.svg').default} alt='dog'>
              
              </ServicesIcon>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>We help reduce your fees and increase your revenue.</ServicesP>
            </ServicesCard>


            <ServicesCard>
              <ServicesIcon src={require('../../images/svg-1.svg').default} alt='dog'>
              
              </ServicesIcon>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>We help reduce your fees and increase your revenue.</ServicesP>
            </ServicesCard>
            
        </ServicesWrapper>
      </ServicesContainer>





      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                  
                  <FooterLink to='/signin'>How it works</FooterLink>
                  <FooterLink to='/signin'>Testimonials</FooterLink>
                  <FooterLink to='/signin'>Careers</FooterLink>
                  <FooterLink to='/signin'>Investors</FooterLink>
                  <FooterLink to='/signin'>Terms of Services</FooterLink>
              </FooterLinkItems>
              
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                  
                  <FooterLink to='/signin'>Contact</FooterLink>
                  <FooterLink to='/signin'>Testimonials</FooterLink>
                  <FooterLink to='/signin'>Support</FooterLink>
                  <FooterLink to='/signin'>Head Office</FooterLink>
                  <FooterLink to='/signin'>Sponsorships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Business</FooterLinkTitle>
                 
                  <FooterLink to='/signin'>Submit Video</FooterLink>
                  <FooterLink to='/signin'>Testimonials</FooterLink>
                  <FooterLink to='/signin'>Ambassadors</FooterLink>
                  <FooterLink to='/signin'>Agency</FooterLink>
                  <FooterLink to='/signin'>Contracts</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                  
                  <FooterLink to='/signin'>Twitter</FooterLink>
                  <FooterLink to='/signin'>Instagram</FooterLink>
                  <FooterLink to='/signin'>Facebook</FooterLink>
                  <FooterLink to='/signin'>Youtube</FooterLink>
                  <FooterLink to='/'>Tiktok</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          
          <SocialMedia>
            <SocialMediaWrap>
              <SoicalLogo to='/' onClick={toggleHome}>
                  myMoney
              </SoicalLogo>
              <WebsiteRights>myMoney &copy; {new Date().getFullYear()} All rights reserved. </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='//www.twitter.com/toheboo' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Tiktok'>
                  <FaTiktok />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>

    </>
  )
}

export default InfoSection;