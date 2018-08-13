export const post = async ({ url, method, body, success, failure, dispatch }) => {
    try {
        const res = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const data = await res.json()
        if (data.exception) {
            dispatch({ type: failure, data })
        } else {
            dispatch({ type: success, data })
        }
    } catch (e) {
        dispatch({ type: failure, e })
    }
}
