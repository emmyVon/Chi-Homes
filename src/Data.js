import image1 from './assets/pexels-pixabay-208736.jpg'
import image2 from './assets/pexels-pixabay-259593.jpg'
import image3 from './assets/pexels-pixabay-534228.jpg'
import image5 from './assets/new2.jpg'
import image6 from './assets/new3.jpg'


const plans = [
    {Title:'Investment',
    level: [
     
            {
                id:1,
                plan:'Early Bird',
                month: '6months - 3years',
                minAmount:'300k-5M',
                descri:'Invest in properties around Nigeria with as minimum as 50k for duration 1-3 years and get interest of 5%-10% per annu',
                image:image1

            },
           
            {
                id:2,
                 plan:'Diamonds',
                month: '3 - 5 year',
                minAmount:'10M - 50M',
                descri:'Invest in properties around Nigeria with as minimum as 50k for duration 1-3 years and get interest of 13%-15% per annu',
                image:image2

            },
            {
                id:3,
                plan:'Old-Takers',
                month: '5-10 year',
                minAmount:'50M - 120M',
                descri:'Invest in properties around Nigeria with as minimum as 50M for duration 5-10 years and get interest of 15%-20% per annu',
                image:image3
            }
        ]
},
    {Title:'Lease',
    level: [
    
            {
                id:1,
                plan:'Early Bird',
                year: '1 year',
                interest:'600k /yr',
                descri:'Buy a home/ property make 70% initial deposit and spread the balance  within a period of 5 months, get a discount of 100k',
                image:image2
            },      
            {
                id:2,
                 plan:'Diamonds',
                month: '3 years',
                minAmount:'k',
                descri:'we help Lease your Property a minimum of 3 years, opportunity to get paid 50% after 2 years and remaining payment + 150k bonus on the end of stipulated duration',
                image:image5
            },
            {
                id:3,
                 plan:'old Takers',
                month: '5 year',
                minAmount:'300k',
                descri:'we help Lease your Property a minimum of 5 years, opportunity to get paid 50% after 2 years and remaining payment + 250k bonus on the end of stipulated duration',
                image:image6
            },
        ]
},
    {Title:'Purchase',
    level: [
            {
                id:1,
                plan:'Early Bird',
                month: '6months',
                minAmount:'50k',
                descri:'Buy a home/ property make 50% initial deposit and spread the balance  within a period of 5 months',
                image:image1
            },     
            {
                id:2,
                 plan:'Diamonds',
                month: '3 year',
                Pricerange:'20M',
                descri:'Buy a home/ property make 70% initial deposit and spread the balance  within a period of 5 months, get a discount of 100k',
                image:image3
            },
            {
                id:3,
                 plan:'old Takers',
                month: '5 years',
                minAmount:'10M',
                descri:'Buy a home/ property make full payment, get a discount of 500k',
                image:image6
            },
        ]
},

]
export default plans