import { BarLoader, BeatLoader, CircleLoader, FadeLoader, BounceLoader } from 'react-spinners';

const override = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
};

const SpinnerInterface = ({ type, color, loading, size }) => {
  const props = {
    color,
    loading,
    size,
    cssOverride: override,
    'aria-label': 'Loading Spinner',
    'data-testid': 'loader'
  };
  switch (type) {
    case 'bar':
      return <BarLoader {...props} />;
    case 'fade':
      return <FadeLoader {...props} />;
    case 'beat':
      return <BeatLoader {...props} />;
    case 'circle':
      return <CircleLoader {...props} />;
    default:
      return <BounceLoader {...props} />;
  }
};

const Spinners = ({ type = 'beat', loading, size = 25, color = '#36d7b7' }) => {
  console.log(type)
  return (
    <div className="sweet-loading">
      <SpinnerInterface
        color={color}
        loading={loading}
        size={size}
        type={type}
      />
    </div>
  );
};

export default Spinners;
