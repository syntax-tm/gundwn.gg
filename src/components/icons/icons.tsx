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
import halo3generalBwIcon from "public/image/halo_3_general_bw.png";

const width: number = 150;
const height: number = 150;

export const boxes: ReactElement = (
    <FontAwesomeIcon icon={faBoxesPacking} className="xmb-icon justify-self-center" />
);
export const chart: ReactElement = (
    <FontAwesomeIcon icon={faChartLine} className="xmb-icon justify-self-center" />
);
export const star: ReactElement = (
    <FontAwesomeIcon icon={faStar} className="xmb-icon justify-self-center" />
);
export const code: ReactElement = (
    <FontAwesomeIcon icon={faCode} className="xmb-icon justify-self-center" />
);
export const cog: ReactElement = (
    <FontAwesomeIcon icon={faCog} className="xmb-icon justify-self-center" />
);
export const trophy: ReactElement = (
    <FontAwesomeIcon icon={faTrophy} className="xmb-icon justify-self-center" />
);
export const award: ReactElement = (
    <FontAwesomeIcon icon={faAward} className="xmb-icon justify-self-center" />
);
export const message: ReactElement = (
    <FontAwesomeIcon icon={faMessage} className="xmb-icon justify-self-center" />
);
// export const music: ReactElement = <FontAwesomeIcon icon={faMusic} className='xmb-icon justify-self-center' />
export const c: ReactElement = (
    <FontAwesomeIcon icon={faC} className="xmb-icon justify-self-center" />
);
export const medal: ReactElement = (
    <FontAwesomeIcon icon={faMedal} className="xmb-icon justify-self-center" />
);
//xport const info: ReactElement = <FontAwesomeIcon icon={faInfoCircle} className='xmb-icon justify-self-center' />
export const computer: ReactElement = (
    <FontAwesomeIcon icon={faComputer} className="xmb-icon justify-self-center" />
);
export const computerMouse: ReactElement = (
    <FontAwesomeIcon icon={faComputerMouse} className="xmb-icon justify-self-center" />
);
export const keyboard: ReactElement = (
    <FontAwesomeIcon icon={faKeyboard} className="xmb-icon justify-self-center" />
);
export const headset: ReactElement = (
    <FontAwesomeIcon icon={faHeadset} className="xmb-icon justify-self-center" />
);
export const laptop: ReactElement = (
    <FontAwesomeIcon icon={faLaptop} className="xmb-icon justify-self-center" />
);
export const desktop: ReactElement = (
    <FontAwesomeIcon icon={faDesktop} className="xmb-icon justify-self-center" />
);
// export const video: ReactElement = <FontAwesomeIcon icon={faVideo} className='xmb-icon justify-self-center' />
export const disease: ReactElement = (
    <FontAwesomeIcon icon={faDisease} className="xmb-icon justify-self-center" />
);
export const copy: ReactElement = (
    <FontAwesomeIcon icon={faCopy} className="xmb-icon justify-self-center" />
);
export const github: ReactElement = (
    <FontAwesomeIcon icon={faGithub} className="xmb-icon justify-self-center" />
);
export const githubAlt: ReactElement = (
    <FontAwesomeIcon icon={faGithubAlt} className="xmb-icon justify-self-center" />
);
export const gitlab: ReactElement = (
    <FontAwesomeIcon icon={faGitlab} className="xmb-icon justify-self-center" />
);
export const stackOverflow: ReactElement = (
    <FontAwesomeIcon icon={faStackOverflow} className="xmb-icon justify-self-center" />
);
export const youtube: ReactElement = (
    <FontAwesomeIcon icon={faYoutube} className="xmb-icon justify-self-center" />
);
export const spotify: ReactElement = (
    <FontAwesomeIcon icon={faSpotify} className="xmb-icon justify-self-center" />
);
export const facebook: ReactElement = (
    <FontAwesomeIcon icon={faFacebook} className="xmb-icon justify-self-center" />
);
export const discord: ReactElement = (
    <FontAwesomeIcon icon={faDiscord} className="xmb-icon justify-self-center" />
);
export const xbox: ReactElement = (
    <FontAwesomeIcon icon={faXbox} className="xmb-icon justify-self-center" />
);
export const playstation: ReactElement = (
    <FontAwesomeIcon icon={faPlaystation} className="xmb-icon justify-self-center" />
);
export const steam: ReactElement = (
    <FontAwesomeIcon icon={faSteam} className="xmb-icon justify-self-center" />
);
export const amazon: ReactElement = (
    <FontAwesomeIcon icon={faAmazon} className="xmb-icon justify-self-center" />
);
export const battleNet: ReactElement = (
    <FontAwesomeIcon icon={faBattleNet} className="xmb-icon justify-self-center"  />
);
export const docker: ReactElement = (
    <FontAwesomeIcon icon={faDocker} className="xmb-icon justify-self-center fill-white accent-white" />
);
export const git: ReactElement = (
    <FontAwesomeIcon icon={faGit} className="xmb-icon justify-self-center fill-white accent-white" />
);
export const xTwitter: ReactElement = (
    <FontAwesomeIcon icon={faXTwitter} className="xmb-icon justify-self-center" />
);
export const snapchat: ReactElement = (
    <FontAwesomeIcon icon={faSnapchat} className="xmb-icon justify-self-center" />
);
export const instagram: ReactElement = (
    <FontAwesomeIcon icon={faInstagram} className="xmb-icon justify-self-center" />
);
export const twitch: ReactElement = (
    <FontAwesomeIcon icon={faTwitch} className="xmb-icon justify-self-center" />
);
export const threads: ReactElement = (
    <FontAwesomeIcon icon={faThreads} className="xmb-icon justify-self-center" />
);
export const telegram: ReactElement = (
    <FontAwesomeIcon icon={faTelegram} className="xmb-icon justify-self-center"  />
);
export const home: ReactElement = (
    <Image src={homeIcon} className="xmb-icon justify-self-center" alt="home icon" />
);
export const display: ReactElement = (
    <Image src={displayIcon} className="xmb-icon justify-self-center" alt="display icon" />
);
export const games: ReactElement = (
    <Image src={gamesIcon} className="xmb-icon justify-self-center" alt="games icon" />
);
export const gow3: ReactElement = (
    <Image src={gow3Icon} className="xmb-icon justify-self-center" alt="gow3 icon" />
);
export const info: ReactElement = (
    <FontAwesomeIcon icon={faInfoCircle} className="xmb-icon justify-self-center"  />
);
export const music: ReactElement = (
    <Image src={musicIcon} className="xmb-icon justify-self-center" alt="music icon" />
);
export const photo: ReactElement = (
    <Image src={photoIcon} className="xmb-icon justify-self-center" alt="photo icon" />
);
export const prime: ReactElement = (
    <Image src={primeIcon} className="xmb-icon justify-self-center" alt="prime icon" />
);
export const resume: ReactElement = (
    <Image src={resumeIcon} className="xmb-icon justify-self-center" alt="resume icon" />
);
export const settings: ReactElement = (
    <Image src={settingsIcon} className="xmb-icon justify-self-center" alt="settings icon" />
);
export const uncharted: ReactElement = (
    <Image src={unchartedIcon} className="xmb-icon justify-self-center" alt="uncharted icon" />
);
export const update: ReactElement = (
    <Image src={updateIcon} className="xmb-icon justify-self-center" alt="update icon" />
);
export const user: ReactElement = (
    <Image src={userIcon} className="xmb-icon justify-self-center" alt="user icon" />
);
export const video: ReactElement = (
    <Image src={videoIcon} className="xmb-icon justify-self-center" alt="video icon" />
);
export const h3general: ReactElement = (
    <Image src={halo3generalBwIcon} className="h3-general" alt="h3 general icon" />
);
export const trueachievements: ReactElement = (
    <Image
        src={trueachievementsIcon}
        className="xmb-icon justify-self-center"
        alt="trueachievements icon"
    />
);
export const exophase: ReactElement = (
    <Image src={exophaseIcon} className="xmb-icon justify-self-center" alt="exophase icon" />
);
export const choco: ReactElement = (
    <Image src={chocoIcon} className="xmb-icon justify-self-center" alt="choco icon" />
);
export const nuget: ReactElement = (
    <Image src={nugetIcon} className="xmb-icon justify-self-center" alt="nuget icon" />
);
