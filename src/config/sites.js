import {
  sitesInvidious,
  sitesPiped,
  sitesProxiTok,
  sitesPeertube,
} from "./alternativeUrls.js";

const sites = () => {
  return [
    {
      additionalData: "mobile",
      host: "youtube",
      url: "https://youtu.be/",
      match: /^m.youtube.com$/,
      selector: "shorts-video #player",
    },
    {
      additionalData: "mobile",
      host: "youtube",
      url: "https://youtu.be/",
      match: /^m.youtube.com$/,
      selector: ".player-container",
    },
    {
      host: "youtube",
      url: "https://youtu.be/",
      match: /^(www.)?youtube(-nocookie|kids)?.com$/,
      selector: ".html5-video-container:not(#inline-player *)",
    },
    {
      host: "tiktok",
      url: "https://www.tiktok.com/",
      match: /^(www.)?tiktok.com$/,
      selector: null,
    },
    {
      host: "proxitok",
      url: "https://www.tiktok.com/",
      match: sitesProxiTok,
      selector: ".column.has-text-centered",
    },
    {
      host: "twitch",
      url: "https://twitch.tv/",
      match: [
        /^m.twitch.tv$/,
        /^www.twitch.tv$/,
        /^clips.twitch.tv$/,
        /^player.twitch.tv$/,
      ],
      selector: ".video-ref, main > div > section > div > div > div",
    },
    {
      host: "xvideos",
      url: "https://www.xvideos.com/",
      match: /^www.(xvideos|xv-ru).com$/,
      selector: ".video-bg-pic",
    },
    {
      host: "pornhub",
      url: "https://rt.pornhub.com/view_video.php?viewkey=",
      match: /^[a-z]+.pornhub.com$/,
      selector: ".mainPlayerDiv > .video-element-wrapper-js > div",
    },
    {
      additionalData: "embed",
      host: "pornhub",
      url: "https://rt.pornhub.com/view_video.php?viewkey=",
      match: (url) =>
        url.host.includes("pornhub.com") && url.pathname.startsWith("/embed/"),
      selector: "#player",
    },
    {
      additionalData: "mobile",
      host: "vk",
      url: "https://vk.com/video?z=",
      match: /^m.vk.(com|ru)$/,
      selector: "vk-video-player",
      shadowRoot: true,
    },
    {
      additionalData: "clips",
      host: "vk",
      url: "https://vk.com/video?z=",
      match: /^(www.|m.)?vk.(com|ru)$/,
      selector: 'div[data-testid="clipcontainer-video"]',
    },
    {
      host: "vk",
      url: "https://vk.com/video?z=",
      match: /^(www.|m.)?vk.(com|ru)$/,
      selector: ".videoplayer_media",
    },
    {
      host: "vimeo",
      url: "https://vimeo.com/",
      match: /^vimeo.com$/,
      selector: ".player",
    },
    {
      additionalData: "embed",
      host: "vimeo",
      url: "https://player.vimeo.com/",
      match: /^player.vimeo.com$/,
      selector: ".player",
    },
    {
      host: "ok.ru",
      url: "https://ok.ru/video/",
      match: /^ok.ru$/,
      selector: ".html5-vpl_vid",
    },
    {
      host: "nine_gag",
      url: "https://9gag.com/gag/",
      match: /^9gag.com$/,
      selector: ".video-post",
    },
    // {
    //   host: "coub",
    //   url: "https://coub.com/view/",
    //   match: /^coub.com$/,
    //   selector: ".viewer__player",
    // },
    {
      host: "bitchute",
      url: "https://www.bitchute.com/video/",
      match: /^(www.)?bitchute.com$/,
      selector: ".video-js",
    },
    {
      host: "rutube",
      url: "https://rutube.ru/video/",
      match: /^rutube.ru$/,
      selector: ".video-player > div > div > div:nth-child(2)",
    },
    {
      additionalData: "embed",
      host: "rutube",
      url: "https://rutube.ru/video/",
      match: /^rutube.ru$/,
      selector: "#app > div > div",
    },
    {
      host: "bilibili",
      url: "https://www.bilibili.com/video/",
      match: /^(www|m|player).bilibili.com$/,
      selector: ".bpx-player-video-wrap",
    },
    // Добавляет лишние видео в обработчик
    {
      additionalData: "old", // /blackboard/webplayer/embed-old.html
      host: "bilibili",
      url: "https://www.bilibili.com/video/",
      match: /^(www|m).bilibili.com$/,
      selector: null,
    },
    {
      host: "twitter",
      url: "https://twitter.com/i/status/",
      match: /^twitter.com$/,
      selector: 'div[data-testid="videoComponent"] > div:nth-child(1) > div',
    },
    {
      host: "mail_ru",
      url: "https://my.mail.ru/",
      match: /^my.mail.ru$/,
      selector: "#b-video-wrapper",
    },
    {
      // ONLY IF YOU LOGINED TO COURSERA /learn/NAME/lecture/XXXX
      host: "coursera",
      url: "https://www.coursera.org/",
      match: /coursera.org$/,
      selector: ".vjs-v6",
    },
    {
      // ONLY IF YOU LOGINED TO UDEMY /course/NAME/learn/lecture/XXXX
      host: "udemy",
      url: "https://www.udemy.com/",
      match: /udemy.com$/,
      selector:
        'div[data-purpose="curriculum-item-viewer-content"] > section > div > div > div > div:nth-of-type(2)',
    },
    {
      // Sites host Invidious. I tested the performance only on invidious.kevin.rocks, youtu.be and inv.vern.cc
      host: "invidious",
      url: "https://youtu.be/",
      match: sitesInvidious,
      selector: "#player",
    },
    {
      // Sites host Piped. I tested the performance only on piped.video
      host: "piped",
      url: "https://youtu.be/",
      match: sitesPiped,
      selector: ".shaka-video-container",
    },
    {
      host: "rumble",
      url: "https://rumble.com/",
      match: /^rumble.com$/,
      selector: "#videoPlayer > .videoPlayer-Rumble-cls > div",
    },
    {
      host: "eporner",
      url: "https://www.eporner.com/",
      match: /^(www.)?eporner.com$/,
      selector: ".vjs-v7",
    },
    {
      host: "peertube",
      url: "stub", // This is a stub. The present value is set using window.location.origin. Check "src/index.js:videoObserver.onVideoAdded.addListener" to get more info
      match: sitesPeertube,
      selector: ".vjs-v7",
    },
    {
      host: "dailymotion",
      url: "https://dai.ly/", // This is a stub. The present value is set using window.location.origin. Check "src/index.js:videoObserver.onVideoAdded.addListener" to get more info
      match: /^geo.dailymotion.com$/,
      selector: ".player",
    },
    {
      host: "trovo",
      url: "https://trovo.live/s/",
      match: /^trovo.live$/,
      selector: ".player-video",
    },
    {
      host: "yandexdisk",
      url: "https://yadi.sk/i/",
      match: /^disk.yandex.ru$/,
      selector: ".video-player__player > div:nth-child(1)",
    },
    {
      host: "coursehunter",
      url: "https://coursehunter.net/course/",
      match: /^coursehunter.net$/,
      selector: "#oframeplayer > pjsdiv:nth-of-type(1)",
    },
    {
      host: "googledrive",
      url: "https://drive.google.com/file/d/",
      match: /^youtube.googleapis.com$/,
      selector: ".html5-video-container",
    },
    {
      host: "bannedvideo",
      url: "https://banned.video/watch?id=",
      match: /^(www.)?banned.video$/,
      selector: ".vjs-v7",
    },
    {
      host: "facebook",
      url: "https://facebook.com/",
      match: (url) =>
        url.host.includes("facebook.com") && url.pathname.includes("/videos/"),
      selector: 'div[role="main"] div[data-pagelet$="video" i]',
    },
    {
      additionalData: "reels",
      host: "facebook",
      url: "https://facebook.com/",
      match: (url) =>
        url.host.includes("facebook.com") && url.pathname.includes("/reel/"),
      selector: 'div[role="main"]',
    },
    {
      host: "weverse",
      url: "https://weverse.io/",
      match: /^weverse.io$/,
      selector: ".webplayer-internal-source-wrapper",
    },
    {
      host: "newgrounds",
      url: "https://www.newgrounds.com/",
      match: /^www.newgrounds.com$/,
      selector: ".ng-video-player",
    },
    {
      // TODO: Добавить поддержку tips (сделать через m3u8 т.к. обычная ссылка не принимается) и платных курсов
      host: "egghead",
      url: "https://egghead.io/",
      match: /^egghead.io$/,
      selector: ".cueplayer-react-video-holder",
    },
    {
      host: "youku",
      url: "https://v.youku.com/",
      match: /^v.youku.com$/,
      selector: "#ykPlayer",
    },
    {
      host: "archive",
      url: "https://archive.org/details/",
      match: /^archive.org$/,
      selector: ".jw-media",
    },
    {
      host: "directlink",
      url: "stub", // This is a stub. The present value is set using window.location.origin. Check "src/index.js:videoObserver.onVideoAdded.addListener" to get more info
      match: (url) => /([^.]+).mp4/.test(url.pathname),
      selector: null,
    },
    // пока рано
    // {
    //   host: "patreon",
    //   url: "https://www.patreon.com/",
    //   match: /^www.patreon.com$/,
    //   selector:
    //     'div[data-tag="post-card"] div[elevation="subtle"] > div > div > div > div',
    // },
    // {
    //   host: "sibnet",
    //   url: "https://video.sibnet.ru/",
    //   match: /^video.sibnet.ru$/,
    //   selector: ".video-js", // #video_html5_wrapper
    // },
    // Нужно куда-то заливать данные о плейлисте
    // {
    //   host: "epicgames",
    //   url: "https://dev.epicgames.com/community/learning/tutorials/",
    //   match: /^dev.epicgames.com$/,
    //   selector: "#vjs_video_3",
    // },
  ];
};

export default sites();
