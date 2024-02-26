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
  {
    title: 'Data Chart Automation Bot',
    description: `Harnessing the power of Java and Apache Maven, we've crafted a dynamic program designed to revolutionize the way charts, graphs, 
    and tables are updated within PowerPoint presentations. Our innovative solution not only streamlines the process but also ensures unparalleled 
    accuracy and relevance, elevating the quality of your presentations to new heights. Say goodbye to manual updates and hello to efficiency with 
    our cutting-edge automated solution. `,
    imgSrc: '/static/images/powerpoint.png',
    href: 'https://github.com/raywa04/Data-Chart-Automation-Bot',
  },
  {
    title: 'Web Scraping Bot',
    description: `Powered by Python, Beautiful Soup, and the OpenAI API, our innovative tool is designed to streamline the process of gathering and
    summarizing web content. Leveraging the capabilities of Beautiful Soup, we meticulously navigate website structures to retrieve primary content 
    with precision. This content is seamlessly inputted into the OpenAI GPT-3 language model, where it undergoes sophisticated processing to generate 
    comprehensive summaries of websites. Say goodbye to manual content extraction and hello to efficient, automated summarization.`,
    imgSrc: '/static/images/gpt3.png',
    href: 'https://github.com/raywa04/Web-Scraping-Bot',
  },
]

export default projectsData
