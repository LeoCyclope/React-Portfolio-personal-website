import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Leo",
    lastName: "Souquet",
    initials: "LS", // the example uses first and last, but feel free to use three or more if you like.
    position: "Lead Data Scientist",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Passionate about AI'
        },
        {
            emoji: '🌎',
            text: 'based in the France'
        },
        {
            emoji: "💼",
            text: "Computer Vision Specialist"
        },
        {
            emoji: "💼",
            text: "Serial Entrepreneur"
        },
        {
            emoji: "📧",
            text: "souquet.leo@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],

    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        },
        {
            title: "Project 6",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ],

    publicationsJournal: [ // This is where your portfolio projects will be detailed
        {
            authors: "L Souquet, N Shvai, A Llanza, A Nakib.",
            title: "Convolutional neural network architecture search based on fractal decomposition optimization algorithm.", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            journal_info: "Expert Systems with Applications 213, 118947., 2023.", // this should be a link to the **repository** of the project, where the code is hosted.
        },
        {
            authors: "L. Souquet, A. Nakib, E-G Talbi.",
            title: "Fractal Decomposition Approach for continuous multi-objective optimization problems.", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            journal_info: "IEEE Access, vol. 8, 167604 - 167619, 2020", // this should be a link to the **repository** of the project, where the code is hosted.
        },
        {
            authors: "A.Nakib, L. Souquet, E-G Talbi.",
            title: "Parallel fractal decomposition based algorithm for big continuous optimization problems.", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            journal_info: "Journal of Parallel and Distributed Computing, vol. 133, pp. 297-306, 2019.", // this should be a link to the **repository** of the project, where the code is hosted.
        },
        {
            authors: "A.Nakib, S. Ouchraa, N. Shvai, L. Souquet, E-G Talbi",
            title: "Deterministic metaheuristic based on Fractal Decomposition for large-scale optimization.", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            journal_info: "Applied Soft Computing, vol. 61, pp. 468-485, 2017.", // this should be a link to the **repository** of the project, where the code is hosted.
        }
    ],

    publicationsConf: [ // This is where your portfolio projects will be detailed
        {
            authors: "L. Souquet, A. Nakib and E. G. Talbi.",
            title: "Algorithme basé sur la décomposition fractale appliqué aux problèmes multi-objectifs.", 
            journal_info: "ROADEF’2020, 19-21 Fév. 2020, Montpellier, France.", 
        }
    ]
}