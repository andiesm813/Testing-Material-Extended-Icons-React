import styles from './page3.module.css';
import createClassTransformer from '../style-utils';

export default function Page3() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout page-3-container")}>
        <h1 className={classes("h1")}>
          <span>Page 3</span>
        </h1>
      </div>
    </>
  );
}
