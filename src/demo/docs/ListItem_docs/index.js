import React from 'react'
import { NavPageContainer, ListItem } from '../../../lib/src'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ListItemImportCode,ListItemUsageCode,ListItemImageUsageCode,ListItemImageRoundUsageCode } from './codes'
import PropsView from './props-view'
import Img1 from '../../assets/illustration/1.jpg'
import Img2 from '../../assets/illustration/2.jpg'
import Img3 from '../../assets/illustration/3.jpg'
import Img4 from '../../assets/illustration/4.jpg'

class ListItemDocs extends React.Component {

render() {
  return (
  <NavPageContainer
    hasPadding
    animateTransition={false}>
    <h1>ListItem</h1>

    <h2>Import</h2>

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ListItemImportCode}
    </SyntaxHighlighter>

    <h2>Usage</h2>

    <ListItem
      title="Contacts"
      subtitle="5.6 MB"
      info="installed"
    />
    <ListItem
      title="News"
      subtitle="12.0 MB"
      info="install"
    />
    <ListItem
      title="Payments"
      subtitle="24 MB"
      info="install"
    />

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ListItemUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>
    <h2>ListItem with <p className="app-code">Image</p> :</h2>


    <ListItem
      img={Img4}
      imgBorderRadius={8}
      imgAlt="avatar1"
      title="Magenta Riddim"
      subtitle="5.6 MB"
      info="stream now"
    />
    <ListItem
      img={Img3}
      imgBorderRadius={8}
      imgAlt="avatar2"
      title="Different World"
      subtitle="12.0 MB"
      info="stream now"
    />
    <ListItem
      img={Img1}
      imgBorderRadius={8}
      imgAlt="avatar3"
      title="La Familia"
      subtitle="24 MB"
      info="stream now"
    />
   

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ListItemImageUsageCode}
    </SyntaxHighlighter>

  
    <div className="app-hr"></div>
    <h2>ListItem with <p className="app-code">Round Image</p> :</h2>

    <ListItem
      img={Img1}
      imgAlt="avatar1"
      title="User 1"
      subtitle="Web Developer"
      info="online"
    />
    <ListItem
      img={Img2}
      imgAlt="avatar2"
      title="User 2"
      subtitle="Data Anylist"
      info="online"
    />
    <ListItem
      img={Img3}
      imgAlt="avatar3"
      title="User 3"
      subtitle="iOS Developer"
      info="offline"
    />

    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      className="code code-container">
      {ListItemImageRoundUsageCode}
    </SyntaxHighlighter>




    <h2>Props</h2>
    <PropsView />

    <br/><br/><br/><br/><br/><br/>

  </NavPageContainer>
);
}
}

export default ListItemDocs