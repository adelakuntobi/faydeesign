import { TextLight } from "./Meet";

import styled from "styled-components";
import { ProjectsList, SideProjects, Skills } from "../utils/projectsList";

import { FiArrowUpRight } from "react-icons/fi";

export default function Homepage() {
  return (
    <main className="container">
      <header className="text-center py-20">
        <h1 className="font-bold text-5xl lg:text-[64px] leading-none">Hey, nice to meet you! <span>I'm Faidat</span></h1>
        <h3 className="font-bold text-3xl lg:text-5xl py-3"><span>Product</span> designer based in Lagos, Nigeria.</h3>
        <p className=" max-w-4xl mx-auto"> I aim to solve user problems by delivering tailored and impactful solutions that enhance their whole experience on the web and beyond.
          Currently working in <a href="https://chekkitapp.com" className="font-bold " target="_blank" rel="noopener noreferrer"
          >Chekkit Technologies.</a></p>
      </header>
      <section>
        <TextLight>
          <span>Portfolio</span>
          <h3>Selected Projects.</h3>
        </TextLight>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 my-12">
          <div className="w-full flex gap-y-10 flex-col">
            {
              ProjectsList.leftSide.map((project, index) => {
                return (
                  <Project key={index} className="">
                    <img src={project.img} alt={project.title} className="w-full" />
                    <div className="project-info p-8">
                      <h4 className="text-lg lg:text-2xl font-bold">{project.title}</h4>
                      <ul className='flex flex-wrap list-disc gap-6 py-4'>
                        {project.features.map((feature, index) => {
                          return <li className='first-of-type:list-none font-bold list' key={index}>{feature}</li>
                        }
                        )}
                      </ul>
                      <p>{project.description}</p>
                      <a href={project.route} className="text-primary text-right flex items-center justify-end gap-2 pt-8">{project.linkText} <FiArrowUpRight /></a>
                    </div>
                  </Project>
                )
              })
            }
          </div>
          <div className="w-full lg:mt-14 flex gap-y-10 flex-col">
            {
              ProjectsList.rightSide.map((project, index) => {
                return (
                  <Project key={index} className="">
                    <img src={project.img} alt={project.title} className="w-full" />
                    <div className="project-info p-8">
                      <h4 className="text-lg lg:text-2xl font-bold">{project.title}</h4>
                      <ul className='flex w-screen list-disc gap-6 py-4'>
                        {project.features.map((feature, index) => {
                          return <li className='first-of-type:list-none font-bold list' key={index}>{feature}</li>
                        }
                        )}
                      </ul>
                      <p>{project.description}</p>
                      <a href={project.route} className="text-primary no-underline text-right flex items-center justify-end gap-2 pt-8">{project.linkText} <FiArrowUpRight /></a>
                    </div>
                  </Project>
                )
              })
            }
          </div>
        </div>
      </section>

      <section>
        <TextLight>
          <span>Skills</span>
          <h3>Niche, Exploration, Passion.</h3>
          <div className="flex gap-5 lg:gap-8 flex-wrap my-8">
            {
              Skills.map((skill, index) => {
                return (
                  <Skill key={index} className="">
                    {skill}
                  </Skill>
                )
              })
            }
          </div>
        </TextLight>
      </section>

      <section className="bg-secondary p-4 md:p-8 lg:p-14 rounded-2xl">
        <TextLight>
          <span className="!bg-white">Socials</span>
          <h3 className="">Ongoing Side Projects.</h3>
          <p className="font-medium">When I am not working, I share design-related stuff to assist budding designers who are just starting out in their careers. Check out my design shots and feel free to contact me; I'd be delighted to connect with you.</p>
        </TextLight>
        <div className="py-6 flex flex-col lg:flex-row gap-6 items-center">
          {
            SideProjects.map((project, index) => {
              return (
                <div key={index} className="bg-white p-4 md:p-9 rounded-lg">
                  <h4 className="text-[#10131A] font-bold text-2xl">{project.title}</h4>
                  <p className="text-lg font-light my-5">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-primary items-center gap-1 text-lg font-bold">View Profile <FiArrowUpRight /></a>
                </div>
              )
            })
          }
        </div>
      </section>
    </main >
  )
}

const Project = styled.div`
  background-color: #ffffff;
  border-radius: 20px;

  img{
    transition-duration: 600ms;
    &:hover{
      transform: scale(1.1);
    }
  }
`;

const Skill = styled.div`
  display: inline-flex;
  text-transform: capitalize;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 22px 40px;
  gap: 10px;
  font-weight: 500;
  color: #242424;
  background: #FFFFFF;
  box-shadow: 0px 0px 50px rgba(151, 151, 151, 0.12);
  border-radius: 100px;


  @media (max-width: 1024px) {
    padding: 13px 26px;
    font-size: 0.9rem;
   border-radius: 100px;

  }
`;