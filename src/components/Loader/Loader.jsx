import ClipLoader from 'react-spinners/ClipLoader';
import css from './Loader.module.css';

const Loader = () => (
  <div className={css.box}>
    <ClipLoader color="#36d7b7" />
  </div>
);

export default Loader;
