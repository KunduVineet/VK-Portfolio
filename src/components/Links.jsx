import React from 'react';

const Links = () => {
  const links = [
    {
      id: 1,
      icon: <img src='./Github.svg ' width="30px" height="30px" alt='Github'/>,
      link: "https://github.com/KunduVineet",
    },
    {
      id: 2,
      icon: <img src='./LinkedIn.svg ' width="30px" height="30px" alt='Linkedin'/>,
      link: "https://www.linkedin.com/in/vineet-kundu-b83407218/",
    },
    {
      id: 3,
      icon: <img src='./Gmail.svg ' width="30px" height="30px" alt='Mail'/>,
      link: "mailto:kunduvineet6@gmail.com",
    },
    {
      id: 4,
      icon: <img src='./Call.svg ' width="30px" height="30px" alt='Call'/>,
      link: 'https://wa.me/918882924671?text=Hello, I would love to connect with you!',
      
    },
    {
      id: 5,
      icon: <img src='./Leetcode.svg ' width="30px" height="30px" alt='LeetCode'/>,
      link: "https://leetcode.com/u/VineetKundu/",
    },
  ];

  return (
    <div className="flex justify-around mt-5">

      {links.map((item) => (
        <div key={item.id} className="flex items-center mb-4">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg text-white hover:text-gray-300"
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Links;
