const FooterCredits = () => {
  return (
    <div>
      <button
        data-tooltip-target='tooltip'
        data-tooltip-placement='top'
        type='button'
      >
        Font Credit
      </button>
      <div
        id='tooltip'
        role='tooltip'
        className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
      >
        Thanks to Collletttivo for font 'Apfel Grotezk'.
        <div className='tooltip-arrow' data-popper-arrow></div>
      </div>
    </div>
  );
};
export default FooterCredits;
