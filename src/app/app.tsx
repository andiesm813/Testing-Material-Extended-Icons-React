import { IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrNavDrawerItemModule, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrNavDrawerItemModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div style={{display: 'contents'}} slot="start" key={uuid()}>
            <IgrIconButton variant="flat" clicked={() => navDrawer?.current?.toggle()}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>menu</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")} key={uuid()}>
            <h6 className={classes("h6")}>
              <span>Testing Material Extended Icons</span>
            </h6>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>search</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>favorite</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>more_vert</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
        </IgrNavbar>
        <div className={classes("row-layout group_1")}>
          <IgrNavDrawer open="true" position="relative" ref={navDrawer} className={classes("nav-drawer")}>
            <IgrNavDrawerHeaderItem key={uuid()}>
              <div slot="content" key={uuid()}>Header</div>
            </IgrNavDrawerHeaderItem>
            <div style={{display: 'contents'}} onClick={() => navigate(`/page1`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("imx-icon imx-usa-party-democratic icon")} key={uuid()}></span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Material Ext Icon</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/page2`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>dashboard</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Nav Item 2</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/page3`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>home</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Nav Item 3</div>
              </IgrNavDrawerItem>
            </div>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
          <IgrNavDrawer position="relative" className={classes("nav-drawer")}>
            <div slot="mini" key={uuid()}>
              <IgrNavDrawerItem key={uuid()}>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>account_circle</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
              </IgrNavDrawerItem>
              <IgrNavDrawerItem key={uuid()}>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>dashboard</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
              </IgrNavDrawerItem>
              <IgrNavDrawerItem key={uuid()}>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon")} key={uuid()}>
                    <span key={uuid()}>home</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
              </IgrNavDrawerItem>
            </div>
            <IgrNavDrawerItem key={uuid()}>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>account_circle</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Nav Item 1</div>
            </IgrNavDrawerItem>
            <IgrNavDrawerItem key={uuid()}>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>dashboard</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Nav Item 2</div>
            </IgrNavDrawerItem>
            <IgrNavDrawerItem key={uuid()}>
              <span slot="icon" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>home</span>
                </span>
                <IgrRipple key={uuid()}></IgrRipple>
              </span>
              <div slot="content" key={uuid()}>Nav Item 3</div>
            </IgrNavDrawerItem>
          </IgrNavDrawer>
        </div>
      </div>
    </>
  );
}
