import * as React from "react"
import { Outlet } from "react-router-dom";
import {  Col, Row } from 'react-bootstrap'
import './route.css'
const Finance = React.lazy(() => import("../views/finance/finance"));
const Marketing = React.lazy(() => import("../views/marketing/marketing"));
const Personnel = React.lazy(() => import("../views/personal/personal"));
const Sidebar = React.lazy(() => import("../components/sidebar/sidebar"));
const Header = React.lazy(() => import("../components/header/header"));
 /*
    List of routes path
  */
const route = [
    {
        path: "/",
        element: <Layout component={<Marketing />} layout={<Sidebar />} header={<Header heading = {'Marketing Plugins'}/> } />,
    },
    {
        path: "finance",
        element: <Layout component={<Finance />} layout={<Sidebar />} header={<Header heading = {'Finance Plugins'}/> } />,
    },
    {
        path: "marketing",
        element: <Layout component={<Marketing />} layout={<Sidebar />} header={<Header heading = {'Marketing Plugins'}/> } />,
    },
    {
        path: "personnel",
        element: <Layout component={<Personnel />} layout={<Sidebar />} header={<Header heading = {'Personnel Plugins'} /> } />,
    },
];
 /*
  Layout displayer to view header , sidenav and component as a content
  */
function Layout(props) {

    return (
        <div>
            <Row className="row_width">
                <Col md={2} >{props.layout}</Col>
                <Col md={10}>
                    {props.header}
                    {props.component}
                    
                    </Col>

            </Row>
            <Outlet />
        </div>
    );
}


export default route
