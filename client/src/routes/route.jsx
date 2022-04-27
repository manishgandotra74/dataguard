import * as React from "react"
import { Outlet } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap'
import './route.css'
const Homepage = React.lazy(() => import("../views/homepage/homepage"));
const Finance = React.lazy(() => import("../views/finance/finance"));
const Marketing = React.lazy(() => import("../views/marketing/marketing"));
const Personnel = React.lazy(() => import("../views/personal/personal"));
const Sidebar = React.lazy(() => import("../components/sidebar/sidebar"));

const route = [
    {
        path: "/",
        element: <Layout component={<Homepage />} layout={<Sidebar />} />,
    },
    {
        path: "finance",
        element: <Layout component={<Finance />} layout={<Sidebar />} />,
    },
    {
        path: "marketing",
        element: <Layout component={<Marketing />} layout={<Sidebar />} />,
    },
    {
        path: "personnel",
        element: <Layout component={<Personnel />} layout={<Sidebar />} />,
    },
];
function Layout(props) {

    return (
        <div>
            <Row className="row_width">
                <Col md={2} >{props.layout}</Col>
                <Col md={10}>{props.component}</Col>

            </Row>
            <Outlet />
        </div>
    );
}


export default route
