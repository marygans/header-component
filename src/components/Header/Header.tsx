
import * as React from 'react';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import './header.css';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import {NavComponent } from '../Nav/Nav';
import {
  Persona,
  PersonaSize,
  PersonaPresence
} from 'office-ui-fabric-react/lib/Persona';
import { TestImages } from 'office-ui-fabric-react/lib/common/TestImages';



export interface IHeaderProps {
  dashboardTitle?: string;
  dashboardName?: string;
 }
 initializeIcons(/* optional base url */);

class Header extends React.Component<IHeaderProps, {}> {

  public render() {
    return (
      <div>
      <div className="topBar">
        <div className="headerLeft">
          <IconButton
            className={'headerWaffle'}
            menuIconProps={{iconName: 'WaffleOffice365'}}
            // onClick={item.onClick}
            title="Waffle Menu"
            ariaLabel="Waffle Menu"
          />
          <div className="titleLogo">
          App Name
          </div>
        </div>
        <div className="headerCenter">
        <SearchBox
          />
        </div>
        <div className="headerRight">
          <IconButton
            className={'headerRightIcons'}
            menuIconProps={{iconName: 'Message'}}
            title="Messages"
            ariaLabel="Messages"
          />
          <IconButton
            className={'headerRightIcons'}
            menuIconProps={{iconName: 'Ringer'}}
            title="Notification"
            ariaLabel="Notification"
          />
          <IconButton
            className={'headerRightIcons'}
            menuIconProps={{iconName: 'Settings'}}
            title="Settings"
            ariaLabel="Settings"
          />
          <IconButton
            className={'headerRightIcons'}
            menuIconProps={{iconName: 'Help'}}
            title="Help"
            ariaLabel="Help"
          />
          <Persona
            className={'headerRightPersona'}
            imageUrl={TestImages.personaMale}
            size={PersonaSize.size28}
            presence={PersonaPresence.online}
          />
        </div>
      </div>
      <NavComponent/>
      </div>
    );
  }
}

export default Header;