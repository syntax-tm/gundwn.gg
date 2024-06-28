import { XmbMenu, XmbCategory, XmbItem } from "@/models/menu";
import * as icons from '@components/icons/icons';

function buildHomeCategory(): XmbCategory {
    const welcome = new XmbItem("welcome", "Welcome", icons.star, 'https://google.com');
    welcome.setActive();

    const items: XmbItem[] = [
        welcome,
        new XmbItem("about", "About", icons.info, 'https://google.com'),
        new XmbItem("contact", "Contact", icons.message, 'mailto:info@test.com'),
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
    gh.setActive();

    const items: XmbItem[] = [
        gh,
        new XmbItem("github-gists", "GitHub Gists", icons.githubAlt, 'https://gist.github.com/syntax-tm'),
        new XmbItem("gitlab", "GitLab", icons.gitlab, 'https://gitlab.com/syntax-tm'),
        //new XmbItem("choco", "Chocolatey", icons.choco, 'https://community.chocolatey.org/profiles/syntax-tm'),
        //new XmbItem("nuget", "Nuget.org", icons.nuget, 'https://www.nuget.org/profiles/syntax-tm'),
        //new XmbItem("myget", "MyGet", icons.boxes, 'https://www.myget.org/users/syntax-tm'),
        new XmbItem("dockerhub", "DockerHub", icons.docker, 'https://hub.docker.com/u/syntaxtm'),
        new XmbItem("stackoverflow", "StackOverflow", icons.stackOverflow, 'https://stackoverflow.com/users/6823084/trey'),
    ];
    const category: XmbCategory = new XmbCategory(1, "Dev", icons.code, items);

    return category;
}

function buildGamingCategory(): XmbCategory {
    const src = new XmbItem("speedrun", "Speedrun.com", icons.trophy, 'https://www.speedrun.com/user/Gundwn');
    src.setActive();

    const items: XmbItem[] = [
        src,
        //new XmbItem("youtube", "YouTube", icons.youtube),
        //new XmbItem("steam", "Steam", icons.steam, 'https://s.team/p/dwq-wrkt'),
        new XmbItem("xbox", "Xbox", icons.xbox, 'http://live.xbox.com/Profile?Gamertag=gundwn'),
        //new XmbItem("battlenet", "Battle.net", icons.battleNet, 'Gundwn#11586'),
        new XmbItem("exophase", "Exophase", icons.exophase, 'https://www.exophase.com/user/Gundwn/'),
        //new XmbItem("trueachievements", "TrueAchievements", icons.trueachievements),
        new XmbItem("twitch", "Twitch", icons.twitch, 'https://twitch.tv/Gundwn'),
    ];
    const category: XmbCategory = new XmbCategory(2, "Gaming", icons.games, items);

    return category;
}

function buildSocialCategory(): XmbCategory {
    const discord = new XmbItem("discord", "Discord", icons.discord, 'https://discordapp.com/users/266438959230353409');
    discord.setActive();

    const items: XmbItem[] = [
        discord,
        //new XmbItem("youtube", "YouTube", icons.youtube, 'https://www.youtube.com/@Gundwn'),
        //new XmbItem("facebook", "Facebook", icons.facebook, 'https://www.facebook.com/gundwnsrc'),
        new XmbItem("instagram", "Instagram", icons.instagram, 'https://instagram.com/GundwnSRC'),
        //new XmbItem("x", "X", icons.xTwitter, 'https://x.com/gundwnsrc'),
        //XmbItem.create("snapchat", "Snapchat", icons.snapchat, () => { alert(''); }),
        new XmbItem("spotify", "Spotify", icons.spotify, 'https://open.spotify.com/user/1280499465'),
        new XmbItem("stats.fm", "Stats.fm", icons.chart, 'https://stats.fm/gundwn'),
        //new XmbItem("telegram", "Telegram", icons.telegram, 'https://t.me/Gundwn')
    ];
    const category: XmbCategory = new XmbCategory(3, "Social", icons.user, items);

    return category;
}

function buildSettingsCategory(): XmbCategory {
    const update = XmbItem.create("update", "Update", icons.update, () => { alert('update'); });
    update.setActive();

    const items: XmbItem[] = [update];
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
