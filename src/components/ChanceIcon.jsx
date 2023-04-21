import './ChanceIcon.css';

const ChanceIcon = ({ icon, chance }) => {
  return (
    <span className='chance-span'>
      <i
        className='material-icons icon'
        style={{
          background: `linear-gradient(to top, #d6d5d5 0%, #d6d5d5 ${chance}%, #608995 ${chance}%, #608995 100%)`,
        }}
      >
        {icon}
      </i>
      <p>{chance}%</p>
    </span>
  );
};

export default ChanceIcon;
