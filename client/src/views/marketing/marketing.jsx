import React from "react"
import allActions from '../../redux/actions/index'
import { useSelector, useDispatch } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import './marketing.css'
const Card = React.lazy(() => import("../../components/card/card"));
export default function Marketing() {
  const dispatch = useDispatch()
  const plugin = useSelector((state) => state.plugin)
  function cardCallback( value  ,id) {
      dispatch(allActions.pluginActions.updateStatus(id ,value))

  }
  React.useEffect(() => {
    dispatch(allActions.pluginActions.getPlugins('marketing'))
    if (plugin?.plugins && plugin?.plugins.title){
      let pluginArray = plugin?.plugins?.plugins.sort()
      
      let arr =''
      let query_params = pluginArray.map(item => arr = arr  +'id='+ item+'&')
      dispatch(allActions.pluginActions.getFilteredPlugins(query_params))

    }
  }, [plugin?.plugins?.title])
  return <Row>
  {plugin?.filteredPlugins?.map((item, index)=> <Col sm={4} key = {index}><Card data = {item} cardCallback = {cardCallback}></Card></Col>)}
  </Row>
}