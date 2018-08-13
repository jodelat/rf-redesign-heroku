import { widgetConstants } from '../../constants/rfConstants'
import { widgetService } from './service'

const widgetActions = {
    doWidgetGroups,
    doWidgetDetails
}

function doWidgetGroups(id) {
    try {
        return async dispatch => {
            dispatch({ type: widgetConstants.WIDGET_GROUP_REQUEST })
            const payload = await widgetService.fetchWidgetGroups(id)
            dispatch({
                type: widgetConstants.WIDGET_GROUP_SUCCESS,
                payload
            })
        }
    } catch (error) {
        dispatch({
            type: widgetConstants.WIDGET_GROUP_ERROR,
            error
        })
    }
}

function doWidgetDetails(id) {
    try {
        return async dispatch => {
            dispatch({ type: widgetConstants.WIDGET_DETAIL_REQUEST })
            const payload = await widgetService.fetchWidgetDetails(id)
            dispatch({
                type: widgetConstants.WIDGET_DETAIL_SUCCESS,
                payload
            })
        }
    } catch (error) {
        dispatch({
            type: widgetConstants.WIDGET_DETAIL_ERROR,
            error
        })
    }
}

export default widgetActions
