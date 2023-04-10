import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none `}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500 pt-8 max-w-none`}
  }
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
  
`;

const StyledMenuList=styled(MenuList)`
${tw`bg-black py-2 px-2 my-2 rounded text-gray-100 hover:border-gray-300 z-20`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 backdrop-grayscale backdrop-brightness-90`;
const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-5xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2 text-5xl`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-orange-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-primary-500 text-white font-bold rounded shadow transition duration-300 hocus:bg-black hocus:text-orange-400 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
        <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <NavLink href="#">
      <MenuHandler>
        <Button tw="flex flex-row justify-center items-center" variant="gradient">Home<svg tw="ml-1" xmlns="http://www.w3.org/2000/svg" width="0.66em" height="0.75em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></Button>
      </MenuHandler>
      </NavLink>
      <StyledMenuList>
        <MenuItem><NavLink href="#" >Our services</NavLink></MenuItem>
        <MenuItem><NavLink href="#">How it work</NavLink></MenuItem>
        <MenuItem><NavLink href="#">Our expertise</NavLink></MenuItem>
        <MenuItem><NavLink href="#">Testimonials</NavLink></MenuItem>
        <MenuItem><NavLink href="#">FAQ</NavLink></MenuItem>
        <MenuItem><NavLink href="#">Talent Resources</NavLink></MenuItem>
        <MenuItem><NavLink href="#">Contact Us</NavLink></MenuItem>
      </StyledMenuList>
    </Menu>
            <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
      position="left"
    >
      <NavLink href="#">
      <MenuHandler>
      <Button tw="flex flex-row justify-center items-center" variant="gradient">Services<svg tw="ml-1" xmlns="http://www.w3.org/2000/svg" width="0.66em" height="0.75em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg></Button>
      </MenuHandler>
      </NavLink>
      <StyledMenuList>
        <MenuItem><NavLink href="#" >Voice Services</NavLink></MenuItem>
        <MenuItem><NavLink href="#">Dubbing Services</NavLink></MenuItem>
        <MenuItem><NavLink href="#">Event Hosting Services</NavLink></MenuItem>
        <MenuItem><NavLink href="#">Copywriting & Translating Services</NavLink></MenuItem>
        <MenuItem><NavLink href="#">Other Creative Services</NavLink></MenuItem>
      </StyledMenuList>
    </Menu>
      <NavLink href="#">
        Talent Resources
      </NavLink>
      <NavLink href="#">
        Contact us
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Hire Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>Voice Talents and Solutions</Notification>
            <Heading>
              <span>Connect with</span>
              <br />
              <SlantedBackground>your Audience.</SlantedBackground>
            </Heading>
            <PrimaryAction>Get Started</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
