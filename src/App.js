import React from 'react';
import './App.css';
import Tab from '@bit/semantic-org.semantic-ui-react.tab'
import { makeStyles } from '@bit/mui-org.material-ui.styles'
import "react-toastify/dist/ReactToastify.css";
import FormAdd from './components/FormAdd/FormAdd';
import FormList from './components/FormList/FormList';
import VideoList from './components/VideoList/VideoList';

const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css' />


const panes = [
  {
    menuItem: "Cadastrar Pressão",
    className: "NavBarStyle",
    render: () => <Tab.Pane attached={false}><FormAdd /></Tab.Pane>
  },
  {
    menuItem: "Histórico",
    className: "NavBarStyle",
    render: () => <Tab.Pane attached={false}><FormList /></Tab.Pane>
  },
  {
    menuItem: "Vídeos",
    className: "NavBarStyle",
    render: () => <Tab.Pane attached={false}><VideoList /></Tab.Pane>
  }
];

const TabExampleAttachedFalse = () => <Tab menu={{ attached: false }} className="NavBarStyle" panes={panes} />

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundColor: '#594a95',
    minWidth: '100%',
    alignItems: 'center',
    padding: '10px',
    height: '100%',
    overflowY: 'scroll'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div id="mainContainer" className={classes.mainContainer}>
        <div id="mainContainer">
          {style}<TabExampleAttachedFalse className={classes.mainContainer} />
        </div>
      </div>
    </div>
  );
}

export default App;
