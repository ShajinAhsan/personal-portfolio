import {
  faInternetExplorer,
  faJsSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faBabyCarriage, faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { PhotoProvider, PhotoView } from "react-photo-view";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import yt2 from "./Images/1.png";
import yt1 from "./Images/2.png";

const timelineContentStyle = {
  background: "#fff",
  color: "#000",
  fontFamily: 400,
  border: "1px solid #777",
  borderRadius: "10px",
};

function Timeline() {
  return (
    <VerticalTimeline lineColor="#fff">
      <VerticalTimelineElement
        className=""
        contentStyle={timelineContentStyle}
        // timelineContentStyle={{ fontWeight: 400 }}
        // contentArrowStyle={{ borderRight: "7px solid #333" }}
        date="9th April 2006"
        dateClassName="min-[1170px]:text-white"
        icon={<FontAwesomeIcon icon={faBabyCarriage}></FontAwesomeIcon>}
        iconStyle={{ background: "#000" }}
      >
        <h3 className="font-medium" style={{ color: "" }}>
          I was born
        </h3>
        <p className="!font-normal">
          I was born on April 9th, 2006, in a very remote area of the Jamalpur
          District, Bangladesh. Growing up in such an isolated place, I
          experienced a unique blend of simplicity and close-knit community
          life, far from the conveniences of urban living.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        dateClassName="min-[1170px]:text-white"
        className="vertical-timeline-element--work"
        contentStyle={timelineContentStyle}
        // contentArrowStyle={{ borderRight: "7px solid #333" }}
        date="2013"
        icon={<FontAwesomeIcon icon={faComputer}></FontAwesomeIcon>}
        iconStyle={{ background: "#000" }}
      >
        <h3 className="font-medium" style={{ color: "" }}>
          Got my first computer
        </h3>
        <p className="!font-normal">
          I got my first computer back in 2013. At the time, I mostly used it to
          play offline games and watch cartoons, spending hours immersed in fun
          and adventure. Those early experiences with my computer were simple
          but filled with excitement, gradually building my interest in
          technology.
        </p>
        <Disclosure>
          <DisclosureButton className="group flex text-left items-center gap-x-1 font-medium bg-emerald-400 px-2 py-4 rounded-md mt-2 text-gray-800 text-sm">
            What were the specs of my first computer?
            <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="text-gray-950 mt-2">
            <p className="!m-0 !font-normal">CPU: Intel Pentium 4 Processor</p>
            <p className="!m-0 !font-normal">Ram: 512MB</p>
            <p className="!m-0 !font-normal">
              {" "}
              Monitor: A CRT Monitor (I forgot which brand)
            </p>
          </DisclosurePanel>
        </Disclosure>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        dateClassName="min-[1170px]:text-white"
        className="vertical-timeline-element--work"
        contentStyle={timelineContentStyle}
        // contentArrowStyle={{ borderRight: "7px solid #333" }}
        date="2016"
        icon={<FontAwesomeIcon icon={faInternetExplorer}></FontAwesomeIcon>}
        iconStyle={{ background: "#000" }}
      >
        <h3 className="font-medium" style={{ color: "" }}>
          Got internet access for the first time
        </h3>
        <p className="!font-normal">
          I got my first internet access in 2016 through WiMax. After that, I
          started exploring websites and diving deeper into the online world. It
          opened up a whole new realm of information and learning for me. I
          became fascinated by how websites are built, and this curiosity led me
          to learn more about web development. Over time, I grew more proficient
          in navigating the internet and using it to expand my knowledge in
          various fields.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        dateClassName="min-[1170px]:text-white"
        className="vertical-timeline-element--work"
        contentStyle={timelineContentStyle}
        // contentArrowStyle={{ borderRight: "7px solid #333" }}
        date="2017-2018"
        icon={<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>}
        iconStyle={{ background: "#000" }}
      >
        <h3 className="font-medium" style={{ color: "" }}>
          Opened my first YouTube Channel
        </h3>
        <p className="!font-normal">
          I opened my first YouTube channel in 2017, where I used to upload tech
          videos, like &quot;How to make a logo for free.&quot; It was a fun way
          for me to share my knowledge and learn new skills in the process.
          Creating those videos gave me a deeper understanding of content
          creation and video editing. I deleted my YouTube channel in 2018.
          Though You can see screenshots below.
        </p>
        <PhotoProvider>
          <PhotoView src={yt1}>
            <button className="block my-2 text-gray-800 py-2 px-4 bg-emerald-400 font-semibold rounded-md">
              Show screenshots
            </button>
          </PhotoView>
          <PhotoView src={yt2}></PhotoView>
        </PhotoProvider>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        dateClassName="min-[1170px]:text-white"
        className="vertical-timeline-element--work"
        contentStyle={timelineContentStyle}
        // contentArrowStyle={{ borderRight: "7px solid #333" }}
        date="2020 - 2021"
        icon={<FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon>}
        iconStyle={{ background: "#000" }}
      >
        <h3 className="font-medium" style={{ color: "" }}>
          Started learning HTML, CSS and JavaScript
        </h3>
        <p className="!font-normal">
          When COVID-19 broke out, I found myself bored during the lockdown in
          2020. With so much free time and limited activities, I decided to
          start learning HTML, CSS, and JavaScript. It was a perfect way to stay
          productive and explore web development. As I dived into coding, I
          realized how much I enjoyed building simple websites and interactive
          features. This newfound interest not only helped me pass the time but
          also sparked a passion for programming that I continue to develop
          today.
        </p>
        <Disclosure>
          <DisclosureButton className="group flex text-left items-center gap-x-1 font-medium bg-emerald-400 px-2 py-4 rounded-md mt-2 text-gray-800 text-sm">
            Below are a few examples
            <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
          </DisclosureButton>

          <Transition
            className="transition-all duration-700 overflow-hidden"
            enterFrom="transform scale-95 max-h-0"
            enterTo="transform scale-100 max-h-96"
            leaveFrom="transform scale-100 max-h-96"
            leaveTo="transform scale-95 max-h-0"
          >
            <DisclosurePanel className="text-gray-950">
              <ul>
                <li>
                  <p>
                    This is the first website I ever built, using only HTML and
                    CSS
                  </p>
                  <a
                    className="inline-block underline"
                    target="_blank"
                    href="https://friendly-duckanoo-c8eb59.netlify.app/"
                  >
                    Copa America 2021
                  </a>
                </li>
                <li>
                  <p>My first website made with Bootstrap</p>
                  <a
                    className="inline-block underline"
                    target="_blank"
                    href="https://nifty-hermann-e91805.netlify.app/"
                  >
                    Honda CBR
                  </a>
                </li>
                <li>
                  <p>Used JavaScript for basic arithmetic in this website</p>
                  <a
                    className="inline-block underline"
                    target="_blank"
                    href="https://quirky-hoover-0f3a24.netlify.app/"
                  >
                    iMac with Apple M1 Chip
                  </a>
                </li>
                <li>
                  <p>Fetching data</p>
                  <a
                    className="inline-block underline"
                    target="_blank"
                    href="https://wonderful-torvalds-569da8.netlify.app/"
                  >
                    Book Archive
                  </a>
                </li>
              </ul>
            </DisclosurePanel>
          </Transition>
        </Disclosure>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        dateClassName="min-[1170px]:text-white"
        className="vertical-timeline-element--work"
        contentStyle={timelineContentStyle}
        // contentArrowStyle={{ borderRight: "7px solid #333" }}
        date="2021"
        icon={<FontAwesomeIcon icon={faReact}></FontAwesomeIcon>}
        iconStyle={{ background: "#000" }}
      >
        <h3 className="font-medium" style={{ color: "" }}>
          Started learning React.js
        </h3>
        <p className="!font-normal">
          In 2021, I started learning React.js and built some websites with it.
          Diving into React opened up new possibilities for creating dynamic,
          interactive web applications. As I progressed, I gained confidence in
          using components, managing state, and working with React&apos;s
          ecosystem. This experience helped me take my web development skills to
          the next level and deepened my passion for front-end development.
        </p>
        <Disclosure>
          <DisclosureButton className="group flex text-left items-center gap-x-1 font-medium bg-emerald-400 px-2 py-4 rounded-md mt-2 text-gray-800 text-sm">
            Below are a few examples
            <ChevronDownIcon className="w-5 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="text-gray-950 mt-2">
            <ul className="list-disc">
              <li>
                <p>This is the first website I built using React.js</p>
                <a
                  className="inline-block underline"
                  target="_blank"
                  href="https://focused-allen-c9f5d5.netlify.app/"
                >
                  Code Learning
                </a>
              </li>
              <li>
                <p>Used Firebase for Authentication</p>
                <a
                  className="inline-block underline"
                  target="_blank"
                  href="https://simple-assignment-10.web.app/"
                >
                  Mofiz Gym
                </a>
              </li>
              <li>
                <p>A weather app that gives you realtime weather data</p>
                <a
                  className="inline-block underline"
                  target="_blank"
                  href="https://shajin-weather.web.app/"
                >
                  Shajin Weather
                </a>
              </li>
            </ul>
          </DisclosurePanel>
        </Disclosure>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
