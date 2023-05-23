import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

const FooterCredits = () => {
  return (
    <div>
      <a data-tooltip-id='credit-tooltip'>Font Credits</a>
      <Tooltip id='credit-tooltip'>
        <div>
          <p>Thanks to Collletttivo for fonts 'Apfel Grotezk' and 'Ignazio'.</p>
        </div>
      </Tooltip>
    </div>
  );
};
export default FooterCredits;
