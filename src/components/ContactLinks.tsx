import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const ContactLinks = () => {
  return (
    <div className='flex flex-col'>
      <a href='https://www.linkedin.com/in/jmigsan/'>
        <FaLinkedin className='inline' /> LinkedIn
      </a>
      <a href='https://github.com/jmigsan'>
        <FaGithub className='inline' /> Github
      </a>
      <a href='emailto:juanmigsanchez@ymail.com'>
        <IoMail className='inline' /> Email
      </a>
    </div>
  );
};
export default ContactLinks;
