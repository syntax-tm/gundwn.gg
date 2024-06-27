/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faCog,
    faTrophy,
    faAward,
    faMusic,
    faC,
    faMedal,
    faInfoCircle,
    faComputer,
    faComputerMouse,
    faKeyboard,
    faHeadset,
    faLaptop,
    faDesktop,
    faDisease,
    faCopy,
    faStar,
    faMessage,
    faChartLine,
    faBoxesPacking
} from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faGithubAlt,
    faGitlab,
    faStackOverflow,
    faYoutube,
    faSpotify,
    faFacebook,
    faDiscord,
    faXbox,
    faPlaystation,
    faSteam,
    faAmazon,
    faBattleNet,
    faDocker,
    faGit,
    faXTwitter,
    faSnapchat,
    faInstagram,
    faTwitch,
    faThreads,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { ReactElement } from "react";
import Image from "next/image";
import homeIcon from "public/image/xmb/home.png";
import displayIcon from "public/image/xmb/display.png";
import gamesIcon from "public/image/xmb/games.png";
import gow3Icon from "public/image/xmb/gow3.png";
//import infoIcon from "public/image/xmb/info.png";
import musicIcon from "public/image/xmb/music.png";
import photoIcon from "public/image/xmb/photo.png";
import primeIcon from "public/image/xmb/prime.png";
import resumeIcon from "public/image/xmb/resume.png";
import settingsIcon from "public/image/xmb/settings.png";
import unchartedIcon from "public/image/xmb/uncharted.png";
import updateIcon from "public/image/xmb/update.png";
import userIcon from "public/image/xmb/social.png";
import videoIcon from "public/image/xmb/video.png";
import trueachievementsIcon from "public/image/xmb/trueachievements.png";
import exophaseIcon from "public/image/xmb/exophase.png";
import chocoIcon from "public/image/xmb/choco.png";
import nugetIcon from "public/image/xmb/nuget.png";

const width: number = 150;
const height: number = 150;

export const boxes: ReactElement = (
    <FontAwesomeIcon icon={faBoxesPacking} className="xmb-icon" />
);
export const chart: ReactElement = (
    <FontAwesomeIcon icon={faChartLine} className="xmb-icon" />
);
export const star: ReactElement = (
    <FontAwesomeIcon icon={faStar} className="xmb-icon" />
);
export const code: ReactElement = (
    <FontAwesomeIcon icon={faCode} className="xmb-icon" />
);
export const cog: ReactElement = (
    <FontAwesomeIcon icon={faCog} className="xmb-icon" />
);
export const trophy: ReactElement = (
    <FontAwesomeIcon icon={faTrophy} className="xmb-icon" />
);
export const award: ReactElement = (
    <FontAwesomeIcon icon={faAward} className="xmb-icon" />
);
export const message: ReactElement = (
    <FontAwesomeIcon icon={faMessage} className="xmb-icon" />
);
// export const music: ReactElement = <FontAwesomeIcon icon={faMusic} className='xmb-icon' />
export const c: ReactElement = (
    <FontAwesomeIcon icon={faC} className="xmb-icon" />
);
export const medal: ReactElement = (
    <FontAwesomeIcon icon={faMedal} className="xmb-icon" />
);
//xport const info: ReactElement = <FontAwesomeIcon icon={faInfoCircle} className='xmb-icon' />
export const computer: ReactElement = (
    <FontAwesomeIcon icon={faComputer} className="xmb-icon" />
);
export const computerMouse: ReactElement = (
    <FontAwesomeIcon icon={faComputerMouse} className="xmb-icon" />
);
export const keyboard: ReactElement = (
    <FontAwesomeIcon icon={faKeyboard} className="xmb-icon" />
);
export const headset: ReactElement = (
    <FontAwesomeIcon icon={faHeadset} className="xmb-icon" />
);
export const laptop: ReactElement = (
    <FontAwesomeIcon icon={faLaptop} className="xmb-icon" />
);
export const desktop: ReactElement = (
    <FontAwesomeIcon icon={faDesktop} className="xmb-icon" />
);
// export const video: ReactElement = <FontAwesomeIcon icon={faVideo} className='xmb-icon' />
export const disease: ReactElement = (
    <FontAwesomeIcon icon={faDisease} className="xmb-icon" />
);
export const copy: ReactElement = (
    <FontAwesomeIcon icon={faCopy} className="xmb-icon" />
);
export const github: ReactElement = (
    <FontAwesomeIcon icon={faGithub} className="xmb-icon" />
);
export const githubAlt: ReactElement = (
    <FontAwesomeIcon icon={faGithubAlt} className="xmb-icon" />
);
export const gitlab: ReactElement = (
    <FontAwesomeIcon icon={faGitlab} className="xmb-icon" />
);
export const stackOverflow: ReactElement = (
    <FontAwesomeIcon icon={faStackOverflow} className="xmb-icon" />
);
export const youtube: ReactElement = (
    <FontAwesomeIcon icon={faYoutube} className="xmb-icon" />
);
export const spotify: ReactElement = (
    <FontAwesomeIcon icon={faSpotify} className="xmb-icon" />
);
export const facebook: ReactElement = (
    <FontAwesomeIcon icon={faFacebook} className="xmb-icon" />
);
export const discord: ReactElement = (
    <FontAwesomeIcon icon={faDiscord} className="xmb-icon" />
);
export const xbox: ReactElement = (
    <FontAwesomeIcon icon={faXbox} className="xmb-icon" />
);
export const playstation: ReactElement = (
    <FontAwesomeIcon icon={faPlaystation} className="xmb-icon" />
);
export const steam: ReactElement = (
    <FontAwesomeIcon icon={faSteam} className="xmb-icon" />
);
export const amazon: ReactElement = (
    <FontAwesomeIcon icon={faAmazon} className="xmb-icon" />
);
export const battleNet: ReactElement = (
    <FontAwesomeIcon icon={faBattleNet} className="xmb-icon"  />
);
export const docker: ReactElement = (
    <FontAwesomeIcon icon={faDocker} className="xmb-icon fill-white accent-white" />
);
export const git: ReactElement = (
    <FontAwesomeIcon icon={faGit} className="xmb-icon fill-white accent-white" />
);
export const xTwitter: ReactElement = (
    <FontAwesomeIcon icon={faXTwitter} className="xmb-icon" />
);
export const snapchat: ReactElement = (
    <FontAwesomeIcon icon={faSnapchat} className="xmb-icon" />
);
export const instagram: ReactElement = (
    <FontAwesomeIcon icon={faInstagram} className="xmb-icon" />
);
export const twitch: ReactElement = (
    <FontAwesomeIcon icon={faTwitch} className="xmb-icon" />
);
export const threads: ReactElement = (
    <FontAwesomeIcon icon={faThreads} className="xmb-icon" />
);
export const telegram: ReactElement = (
    <FontAwesomeIcon icon={faTelegram} className="xmb-icon"  />
);
export const home: ReactElement = (
    <Image src={homeIcon} className="xmb-icon" alt="home icon" />
);
export const display: ReactElement = (
    <Image src={displayIcon} className="xmb-icon" alt="display icon" />
);
export const games: ReactElement = (
    <Image src={gamesIcon} className="xmb-icon" alt="games icon" />
);
export const gow3: ReactElement = (
    <Image src={gow3Icon} className="xmb-icon" alt="gow3 icon" />
);
export const info: ReactElement = (
    <FontAwesomeIcon icon={faInfoCircle} className="xmb-icon"  />
);
export const music: ReactElement = (
    <Image src={musicIcon} className="xmb-icon" alt="music icon" />
);
export const photo: ReactElement = (
    <Image src={photoIcon} className="xmb-icon" alt="photo icon" />
);
export const prime: ReactElement = (
    <Image src={primeIcon} className="xmb-icon" alt="prime icon" />
);
export const resume: ReactElement = (
    <Image src={resumeIcon} className="xmb-icon" alt="resume icon" />
);
export const settings: ReactElement = (
    <Image src={settingsIcon} className="xmb-icon" alt="settings icon" />
);
export const uncharted: ReactElement = (
    <Image src={unchartedIcon} className="xmb-icon" alt="uncharted icon" />
);
export const update: ReactElement = (
    <Image src={updateIcon} className="xmb-icon" alt="update icon" />
);
export const user: ReactElement = (
    <Image src={userIcon} className="xmb-icon" alt="user icon" />
);
export const video: ReactElement = (
    <Image src={videoIcon} className="xmb-icon" alt="video icon" />
);
export const trueachievements: ReactElement = (
    <Image
        src={trueachievementsIcon}
        className="xmb-icon"
        alt="trueachievements icon"
    />
);
export const exophase: ReactElement = (
    <Image src={exophaseIcon} className="xmb-icon" alt="exophase icon" />
);
export const choco: ReactElement = (
    <Image src={chocoIcon} className="xmb-icon" alt="choco icon" />
);
export const nuget: ReactElement = (
    <Image src={nugetIcon} className="xmb-icon" alt="nuget icon" />
);
