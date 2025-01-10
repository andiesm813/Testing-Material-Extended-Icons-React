import { IgrButton, IgrButtonModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import styles from './page1.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function Page1() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("row-layout page-1-container")}>
        <div className={classes("row-layout group")}>
          <span className={classes("material-icons icon")}>
            <span key={uuid()}>mail</span>
          </span>
          <span className={classes("imx-icon imx-coronavirus icon")}></span>
          <IgrIconButton variant="flat">
            <span className={classes("material-icons")} key={uuid()}>
              <span key={uuid()}>ac_unit</span>
            </span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrIconButton>
          <IgrButton type="button" className={classes("button")}>
            <span className={classes("imx-icon imx-drop-shipping")} key={uuid()}></span>
            <span key={uuid()}>Button</span>
            <IgrRipple key={uuid()}></IgrRipple>
          </IgrButton>
        </div>
      </div>
    </>
  );
}
