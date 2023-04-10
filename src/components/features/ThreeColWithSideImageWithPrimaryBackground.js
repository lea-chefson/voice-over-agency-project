import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

const Container = styled.div`
${tw`relative bg-black -mx-8 px-8 text-gray-100 py-16 flex justify-center`}

.description {
  ${tw`mt-2 font-normal text-gray-400 text-lg leading-snug`}
}

.title {
  ${tw`tracking-wider text-primary-500 font-bold text-xl leading-none`}
}

.titleFinal {
  ${tw`tracking-wider text-primary-400 font-bold text-xl leading-none text-2xl p-2 border-2 rounded-md `}
}

svg {
  ${tw`w-4 text-primary-500`}
}
`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col  items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mb-12 mt-6`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full my-10`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300 py-5`;

const VerticalSpacer = tw.div`mt-2 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}

`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

`;

export default ({
  cards = null,
  heading = "How it works",
  subheading = "",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description: "We strictly only deal with vendors that provide top notch security infrastructure."
    },
    { imageSrc: SupportIconImage, title: "24/7 Support" },
    { imageSrc: CustomizeIconImage, title: "Customizable" },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>How it <span tw="text-primary-500">works</span></Heading>
      
      <div tw="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div tw="grid gap-6 gap-10 lg:grid-cols-2">
          <div tw="lg:py-6 lg:pr-32">
            <div tw="flex">
              <div tw="flex flex-col items-center mr-4">
                <div>
                  <div tw="flex items-center justify-center w-10 h-10 border-2 border-primary-500 rounded-full bg-white">
                    <svg
                      tw="w-4 text-primary-500"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div tw="w-px h-full bg-primary-500" />
              </div>
              <div tw="pt-1 pb-8">
                <p className="title">Step 1</p>
                <p className="description">
                Show us what you're looking for.
                </p>
              </div>
            </div>
            <div tw="flex">
              <div tw="flex flex-col items-center mr-4">
                <div>
                  <div tw="flex items-center justify-center w-10 h-10 border-2 border-primary-500 rounded-full bg-white">
                    <svg
                      tw="w-4 text-white"
                      stroke="currentColor"
                     strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div tw="w-px h-full bg-primary-500" />
              </div>
              <div tw="pt-1 pb-8">
                <p className="title">Step 2</p>
                <p className="description">
                Receive a free consultation from our team.
                </p>
              </div>
            </div>
            <div tw="flex">
              <div tw="flex flex-col items-center mr-4">
                <div>
                  <div tw="flex items-center justify-center w-10 h-10 border-2 border-primary-500 rounded-full bg-white">
                    <svg
                      tw="w-4 text-white"
                      stroke="currentColor"
                     strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div tw="w-px h-full bg-primary-500" />
              </div>
              <div tw="pt-1 pb-8">
                <p className="title">Step 3</p>
                <p className="description">
                Get the job done.
                </p>
              </div>
            </div>
            <div tw="flex">
              <div tw="flex flex-col items-center mr-4">
                <div>
                  <div tw="flex items-center justify-center w-10 h-10 border-2 border-primary-500 rounded-full bg-white">
                    <svg
                      tw="w-6 text-white"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <polyline
                        fill="none"
                       strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        points="6,12 10,16 18,8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div tw="pt-1">
                <p className="titleFinal">Success!</p>
                <p className="description" />
              </div>
            </div>
          </div>
          <div tw="relative">
            <img
              tw="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
      </ThreeColumnContainer>
    </Container>
  );
};
