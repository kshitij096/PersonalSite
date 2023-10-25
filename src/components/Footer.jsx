import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const footer = [
    {
      id: 1,
      name: faSquareGithub,
      link: "https://github.com/kshitij096/",
    },
    {
      id: 2,
      name: faLinkedin,
      link: "https://in.linkedin.com/",
    },
  ];

  return (
    <footer>
      <div
        name="footer"
        className="flex flex-col bg-[#2d2e32] dark:bg-gray-700"
      >
        <div className=" flex flex-col  items-center  justify-between  text-center mt-12 mb-12 mx-20 md:mx-32 lg:mx-72  md:mx-84 lg:mx-84 sm:flex-row ">
          <h3 className="text-white inline-block text-lg  font-bold">
            Copyright © {year}. All rights are reseved
          </h3>

          <div className="flex flex-row gap-1 ">
            {footer.map(({ id, name, link }) => (
              <a
                key={id}
                className=" text-white text-2xl px-2 sm:text-right"
                href={link}
              >
                <FontAwesomeIcon
                  className=" hover:scale-125 duration-200 "
                  icon={name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
