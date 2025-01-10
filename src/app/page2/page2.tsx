import styles from './page2.module.css';
import createClassTransformer from '../style-utils';

export default function Page2() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout page-2-container")}>
        <h1 className={classes("h1")}>
          <span>Page 2</span>
        </h1>
      </div>
    </>
  );
}
