import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectLinks: React.FC<{ Github: string; Site: string }> = ({
  Github,
  Site,
}) => {
  return (
    <div className='flex gap-2 item text-lg'>
      <a href={Github}>
        GitHub <FaGithub className='inline' />
      </a>
      <a href={Site}>
        View site <FaExternalLinkAlt className='inline' />
      </a>
    </div>
  );
};
export default ProjectLinks;
