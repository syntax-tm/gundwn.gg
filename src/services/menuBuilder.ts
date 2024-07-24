import { XmbMenu, XmbCategory, XmbItem } from "@/models/menu";
import * as icons from '@components/icons/icons';

function buildHomeCategory(): XmbCategory {
    const welcome = XmbItem.createModal("welcome", "Welcome", icons.star, 'help');
    welcome.description = "Click to view controls";
    welcome.setActive();

    const help = XmbItem.createModal("help", "Help", icons.info, 'help');
    help.description = "Display the help screen";

    const contact = new XmbItem("contact", "Contact", icons.message, 'mailto:info@test.com');
    contact.description = 'Send a message';

    const items: XmbItem[] = [
        //welcome,
        help,
        contact,
    ];
    const category: XmbCategory = new XmbCategory(
        0,
        "Home",
        icons.home,
        items
    );

    category.setActive();

    return category;
}

function buildDevCategory(): XmbCategory {
    const gh = new XmbItem("github", "GitHub", icons.github, 'https://github.com/syntax-tm');
    gh.description = 'View GitHub profile';
    gh.setActive();

    const ghg = new XmbItem("github-gists", "GitHub Gists", icons.githubAlt, 'https://gist.github.com/syntax-tm');
    ghg.description = 'View GitHub Gists';

    const gl = new XmbItem("gitlab", "GitLab", icons.gitlab, 'https://gitlab.com/syntax-tm');
    gl.description = 'View GitLab profile';

    const dh = new XmbItem("dockerhub", "DockerHub", icons.docker, 'https://hub.docker.com/u/syntaxtm');
    dh.description = 'View DockerHub profile';

    const so = new XmbItem("stackoverflow", "StackOverflow", icons.stackOverflow, 'https://stackoverflow.com/users/6823084/trey');
    so.description = 'View StackOverflow profile';

    const items: XmbItem[] = [
        gh,
        ghg,
        gl,
        //new XmbItem("choco", "Chocolatey", icons.choco, 'https://community.chocolatey.org/profiles/syntax-tm'),
        //new XmbItem("nuget", "Nuget.org", icons.nuget, 'https://www.nuget.org/profiles/syntax-tm'),
        //new XmbItem("myget", "MyGet", icons.boxes, 'https://www.myget.org/users/syntax-tm'),
        dh,
        so,
    ];
    const category: XmbCategory = new XmbCategory(1, "Dev", icons.code, items);

    return category;
}

function buildGamingCategory(): XmbCategory {
    const src = new XmbItem("speedrun", "Speedrun.com", icons.trophy, 'https://www.speedrun.com/user/Gundwn');
    src.description = 'View Speedrun.com profile';
    src.setActive();

    const yt = new XmbItem("youtube", "YouTube", icons.youtube, 'https://www.youtube.com/@Gundwn');
    yt.description = 'View YouTube channel';

    const steam = new XmbItem("steam", "Steam", icons.steam, 'https://s.team/p/dwq-wrkt');
    steam.description = 'View Steam profile';

    const xbox = new XmbItem("xbox", "Xbox", icons.xbox, 'http://live.xbox.com/Profile?Gamertag=gundwn');
    xbox.description = 'View Xbox profile';

    const bnet = XmbItem.createModal("bnet", "Battle.Net", icons.battleNet, 'bnet');
    bnet.description = 'View Battle.Net profile';

    const ep = new XmbItem("exophase", "Exophase", icons.exophase, 'https://www.exophase.com/user/Gundwn/');
    ep.description = 'View Exophase profile';

    const ta = new XmbItem("trueachievements", "TrueAchievements", icons.trueachievements, 'https://www.trueachievements.com/gamer/Gundwn');
    ta.description = 'View TrueAchievements profile';

    const ttv = new XmbItem("twitch", "Twitch", icons.twitch, 'https://twitch.tv/Gundwn');
    ttv.description = 'View Twitch.tv profile';

    const items: XmbItem[] = [
        src,
        yt,
        steam,
        xbox,
        bnet,
        ep,
        ta,
        ttv,
    ];
    const category: XmbCategory = new XmbCategory(2, "Gaming", icons.games, items);

    return category;
}

function buildSocialCategory(): XmbCategory {
    const discord = new XmbItem("discord", "Discord", icons.discord, 'https://discordapp.com/users/266438959230353409');
    discord.setActive();

    const yt = new XmbItem("youtube", "YouTube", icons.youtube, 'https://www.youtube.com/@Gundwn');
    yt.description = 'View YouTube channel';

    const fb = new XmbItem("facebook", "Facebook", icons.facebook, 'https://www.facebook.com/gundwnsrc');
    fb.description = 'View Facebook profile';

    const ig = new XmbItem("instagram", "Instagram", icons.instagram, 'https://instagram.com/GundwnSRC');
    ig.description = 'View Instagram profile';

    const x = new XmbItem("x", "X", icons.xTwitter, 'https://x.com/gundwnsrc');
    x.description = 'View X (Twitter) profile';

    const spotify = new XmbItem("spotify", "Spotify", icons.spotify, 'https://open.spotify.com/user/1280499465');
    spotify.description = 'View Spotify profile';

    const stats = new XmbItem("stats.fm", "Stats.fm", icons.statsFm, 'https://stats.fm/gundwn');
    stats.description = 'View stats.fm profile';

    const items: XmbItem[] = [
        discord,
        yt,
        fb,
        ig,
        x,
        //XmbItem.create("snapchat", "Snapchat", icons.snapchat, () => { alert(''); }),
        spotify,
        stats,
        //new XmbItem("telegram", "Telegram", icons.telegram, 'https://t.me/Gundwn')
    ];
    const category: XmbCategory = new XmbCategory(3, "Social", icons.user, items);

    return category;
}

function buildSettingsCategory(): XmbCategory {
    const viewSource = new XmbItem("viewSource", "Source", icons.git, 'https://github.com/syntax-tm/gundwn.gg');
    viewSource.description = 'View this project on GitHub';
    viewSource.setActive();

    const fork = new XmbItem("fork", "Fork", icons.codeFork, 'https://github.com/syntax-tm/gundwn.gg/fork');
    fork.description = 'Fork this project on GitHub';

    const nextJs = new XmbItem("nextjs", "Next.js", icons.nextJs, 'https://nextjs.org/');
    nextJs.description = 'About Next.js';

    const fa = new XmbItem("fa", "FontAwesome", icons.fontAwesome, 'https://fontawesome.com/');
    fa.description = 'About FontAwesome';

    const items: XmbItem[] = [
      viewSource,
      fork,
      nextJs,
      fa
    ];
    const category: XmbCategory = new XmbCategory(
        4,
        "Settings",
        icons.settings,
        items
    );

    return category;
}

export default function build(): XmbMenu {
    const homeCategory = buildHomeCategory();
    const devCategory = buildDevCategory();
    const gamingCategory = buildGamingCategory();
    const socialCategory = buildSocialCategory();
    const settingsCategory = buildSettingsCategory();

    const categories: XmbCategory[] = [
        homeCategory,
        devCategory,
        gamingCategory,
        socialCategory,
        settingsCategory,
    ];

    return new XmbMenu(categories);
}
