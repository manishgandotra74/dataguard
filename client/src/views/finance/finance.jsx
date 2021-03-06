import React from "react"
import allActions from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
const Card = React.lazy(() => import("../../components/PluginCard/PluginCard"));
export default function Finance() {
    const dispatch = useDispatch()
    const plugin = useSelector((state) => state.plugin)
    /*
        Get Callback from card 
  */
    function cardCallback(value, id) {
        dispatch(allActions.pluginActions.updateStatus(id, value))

    }
    /*
        Get plugins name
  */
    React.useEffect(() => {
        dispatch(allActions.pluginActions.getPlugins('finance'))
    }, [])
     /*
        Get plugins information 
  */
    React.useEffect(() => {
        if (plugin?.plugins && plugin?.plugins.title) {
            let pluginArray = plugin?.plugins?.plugins.sort()
            let arr = ''
            let query_params = pluginArray.map(item => arr = arr + 'id=' + item + '&')
            dispatch(allActions.pluginActions.getFilteredPlugins(query_params))

        }
    }, [plugin?.plugins?.title])
    return <Row>
        {plugin?.filteredPlugins?.map((item, index) => <Col sm={4} key={index}><Card status={plugin.allpluginStatus} data={item} cardCallback={cardCallback}></Card></Col>)}
    </Row>
}