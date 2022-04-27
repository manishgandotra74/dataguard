import React from "react"
import { Nav } from 'react-bootstrap'
import { useLocation, useNavigate } from "react-router-dom";
import './sidebar.css'

import allActions from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'

export default function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const location = useLocation()
    const plugin = useSelector((state) => state.plugin)
    React.useEffect(() => {
        dispatch(allActions.pluginActions.getTabs(''))
    }, [])
    function navigate_path(path) {
        navigate(`/${path}`);
    }
    return <>
        <Nav className=" d-md-block sidenav"
            activeKey="/"
            onSelect={selectedKey => navigate_path(selectedKey)}
        >
            <div className="sidebar-sticky"></div>
            <Nav.Item key='key'>
                <Nav.Link className="heading" eventKey="">Data<strong>Guard</strong></Nav.Link>
            </Nav.Item>
            {plugin?.tabs ? plugin?.tabs?.map(item =>
                <Nav.Item key={item.path}>
                    <Nav.Link className={location.pathname === '/'+item.path ? 'selected':'sider'} eventKey={item.path}>{item.title}</Nav.Link>
                </Nav.Item>) : []}

                <Nav.Item key='key'>
                <Nav.Link  eventKey="">Data<strong>Guard</strong></Nav.Link>
            </Nav.Item>
        </Nav>
    </>
}