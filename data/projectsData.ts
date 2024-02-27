interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'HackPortal',
    description: `Introducing HackPortal - your go-to platform for seamless hackathon event management! Customize your event's interface with ease, offer secure sign-in options via email or Google, and streamline hacker registration. Our dynamic content management system effortlessly handles images, challenges, sponsors, and FAQs, while push notifications keep participants engaged.

    Highlight ongoing events with our spotlight carousel, and simplify logistics with QR code check-in and swag claims. Facilitate communication through report submission and Q&A features. With a built-in schedule and role-based access control, managing your event has never been easier.
    
    Our admin console lets you send announcements, update user roles, and track key metrics. Built with React, NextJS, JavaScript, TypeScript, and deployed on Vercel with Firebase integration, HackPortal ensures a smooth and scalable performance.`,
    imgSrc: '/static/images/hackportal.png',
    href: 'https://hackportal.hackutd.co',
  },
  {
    title: 'Customer Assistance Chatbot',
    description: `Utilizing Python, PyTorch, and the pre-trained Hugging Face's BERT model, we've developed a customer-friendly chatbot that's revolutionizing online customer assistance. Simply feed the assistant PDF files containing the information you want the chatbot to address, and voila! You have a fully equipped customer assistant ready to cater to online visitors' needs.

    Our chatbot seamlessly integrates advanced natural language processing techniques to understand and respond to customer queries effectively. Whether it's product information, troubleshooting assistance, or general inquiries, our chatbot is equipped to provide accurate and timely support.
    
    Experience the future of online customer service with our innovative chatbot solution.`,
    imgSrc: '/static/images/epsoft.png',
    href: 'https://github.com/raywa04/Customer-Assistance-Bot',
  },
  {
    title: 'Data Chart Automation Bot',
    description: `Harnessing the power of Java and Apache Maven, we've crafted a dynamic program designed to revolutionize the way charts, graphs, 
    and tables are updated within PowerPoint presentations. Our innovative solution not only streamlines the process but also ensures unparalleled 
    accuracy and relevance, elevating the quality of your presentations to new heights. Say goodbye to manual updates and hello to efficiency with 
    our cutting-edge automated solution!`,
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
