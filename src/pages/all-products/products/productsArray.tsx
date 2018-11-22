import Telegram from '../../../static/images/Telegram.png'
import SlackPro from '../../../static/images/SlackPro.png'
import Whatsapp from '../../../static/images/Whatsapp.png'
import WhatsappIcon from '../../../static/images/whatsappIcon.png'
import SlackIcon from '../../../static/images/slackIcon.png'
import TelegramIcon from '../../../static/images/TelegramIcon.png'
import windowsIcon from '../../../static/images/windowsIcon.png'
import ubuntuIcon from '../../../static/images/ubuntuIcon.png'
import iosIcon from '../../../static/images/iosIcon.png'
import macintoshIcon from '../../../static/images/macintoshIcon.png'
import androidIcon from '../../../static/images/androidIcon.png'

export const products =[
    {
        image: SlackPro,
        icon: SlackIcon,
        name: "Slack Pro",
        rating: "5.0",
        describe: "Slack creates alignment and shared understanding across your team, making you more productive, less stressed, and just a little bit happier ",
        platform: [windowsIcon, macintoshIcon, ubuntuIcon,iosIcon, androidIcon]
    },
    {
        image: Whatsapp,
        icon: WhatsappIcon,
        name: "Whatsapp",
        rating: "4.5",
        describe: "With WhatsApp, you'll get fast, simple, secure messaging and calling for free available on phones all over the world",
        platform: [windowsIcon, iosIcon, androidIcon]
    },
    {
        image: Telegram,
        icon: TelegramIcon,
        name: "Telegram",
        rating: "4.5",
        describe: "Telegram is a cloud-based mobile and desktop messaging app with a focus on security and speed",
        platform: [windowsIcon, iosIcon, androidIcon]
    },
];
