import React from "react"
import { Nav, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from "react-router-dom";
import './sidebar.css'
import allActions from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'
export default function Sidebar(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const location = useLocation()
    const plugin = useSelector((state) => state.plugin)
    const [status, setStatus] = React.useState(true)
  /*
    On change Status of Plugin
  */
    function onStatusChange() {
        setStatus(!status)
        dispatch(allActions.pluginActions.updatePluginStatus(!status))
        window.location.reload()
    }
  /*
    On initialization Tabs and Plugin Status are fetched from API
  */
     React.useEffect(() => {
        dispatch(allActions.pluginActions.getTabs(''))
        dispatch(allActions.pluginActions.pluginStatus())
    }, [])
  /*
    On change Status of plugin its state is updated
  */
    React.useEffect(() => {
        setStatus(plugin.allpluginStatus)
    }, [plugin.allpluginStatus])
 /*
    Navigation is managed to reach selected page
  */

    function navigate_path(path) {
        navigate(`/${path}`);
    }
    return <>
        <Nav className=" d-md-block sidenav"
            activeKey="/"
            onSelect={selectedKey => navigate_path(selectedKey)}
        >
            <div className="sidebar-sticky"></div>
            <Nav.Item key='header'>
                <Nav.Link className="heading" eventKey="">Data<strong>Guard</strong></Nav.Link>
            </Nav.Item>
            {plugin?.tabs ? plugin?.tabs?.map(item =>
                {
                    return (<Nav.Item key={item.path}>
                        <Nav.Link className={location.pathname === '/' + item.path ? 'selected' : 'sider'} eventKey={item.path}>
                        <img className="img" src={`icons/${item.icon}.png`} />

    
                            {item.title}</Nav.Link>
                    </Nav.Item>)
                }) : []}

            <Nav.Item key='key' >
                <Form.Check className="plugin"
                    onChange={() => onStatusChange()}
                    type="switch"
                    disabled={props?.data?.status === "disabled"}
                    isValid={status}
                    label={status ? 'All plugins enabled' : 'All plugins disabled'}
                    checked={status}
                    id="custom-switch"
                />
            </Nav.Item>
        </Nav>
    </>
}