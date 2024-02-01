import china from './images/tour-1.jpeg'
import indonesia from './images/tour-2.jpeg'
import hongkong from './images/tour-3.jpeg'
import kenya from './images/tour-4.jpeg'

export const pageLinks = [
    {id: 1, href: '#home', text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'},
]

export const socialLinks = [
    {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook'},
    {id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace'},
]

export const services = [
    {id: 1, title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.', icon: 'fas fa-wallet fa-fw'},
    {id: 2, title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.', icon: 'fas fa-tree fa-fw'},
    {id: 3, title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.', icon: 'fas fa-socks fa-fw'},
]

export const tours = [
    {id: 1, title: 'Tibet Adventure', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.', location: 'china', img: china, imgDate: 'august 26th, 2020', duration: '6 days', price: '$2100' },
    {id: 2, title: 'best of java', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.', location: 'indonesia', img: indonesia, imgDate: 'october 1th, 2020', duration: '11 days', price: '$1400' },
    {id: 3, title: 'explore hong kong', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.', location: 'hong kong', img: hongkong, imgDate: 'september 15th, 2020', duration: '8 days', price: '$5000' },
    {id: 4, title: 'kenya highlights', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.', location: 'china', img: kenya, imgDate: 'december 5th, 2019', duration: '20 days', price: '$3300' },
]

