const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Singapore Institude of Technology',
                degree: 'BS, Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering.",
                year: '2012-2016'
            }
            
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Block Chain Technologies',
                role: 'Block Chain Developer', 
                url: 'https://www.cryptokitties.co/',
                desc: 'I work there as a Block chain developer, there I learned about Block chain and developed 8 projects',
                year: '01/2021 - ',
                location: 'Freelancer'
            },
            {
                id: 2,
                title: 'Full Stack Technologies',
                role:  'Full Stack Developer',
                // url:   'https://www.cryptokitties.co/',
                url:   'https://shopmarthas.com/',
                desc: "I work there as a Full stack developer, developed some Ecomerce sites",
                year: '06/2020 - 11/2017',
                location: 'TYPENT, Singapore'
            },
            {
                id: 3,
                title: 'Front-End Technologies',
                role: 'Front-End Developer',
                url: 'https://Blitz.gg/',
                desc: 'Developed Blitz.gg sites using ReactJS and NodeJS',
                year: '11/2017 - 01/2017',
                location: 'BLITZ GG LOS ANGELES, CALIFORNIA'
            },

            {
                id: 4,
                title: 'Front-End Technologies',
                role: 'Front-End Developer',
                url: 'https://www.youngmoorelaw.com/',
                desc: 'Developed webpages using TypeScript and AngularJS',
                year: '01/2017 - 08/2016',
                location: 'OCTAL INFO SOLUTION, Singapore'
            },




           

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
