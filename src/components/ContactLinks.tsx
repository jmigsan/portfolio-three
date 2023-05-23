import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const ContactLinks = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col gap-8 text-6xl  '>
        <div>
          <a href='https://www.linkedin.com/in/jmigsan/'>
            <FaLinkedin className='inline' /> LinkedIn
          </a>
        </div>
        <div>
          <a href='https://github.com/jmigsan'>
            <FaGithub className='inline' /> Github
          </a>
        </div>
        <div>
          <a href='mailto:juanmigsanchez@ymail.com'>
            <IoMail className='inline' /> Email
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactLinks;
