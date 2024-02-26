interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'HackPortal',
    description: `A managerial system used by Hackathon officers and hackers alike. From scheduling events to QR code check ins,
    HackPortal is a versatile, efficient Hackathon management system open to all!`,
    imgSrc: '/static/images/hackportal.png',
    href: 'https://hackportal.hackutd.co',
  },
  {
    title: 'Customer Assistance Chatbot',
    description: `Leveraged Python, Pytorch, and a pre-trained Hugging Face's BERT model to develop a customer friendly chatbot.
    Just feed the assistant pdf files that contains the info you want the chatbot to answer, and you have a customer assistant ready to help
    online visitors with their needs!`,
    imgSrc: '/static/images/epsoft.png',
    href: 'https://github.com/raywa04/Customer-Assistance-Bot',
  },
]

export default projectsData
