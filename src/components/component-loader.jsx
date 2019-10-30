import React , { useState, useEffect } from 'react';

function ComponentLoader(props) {
  const [state, setState] = useState({
    show: '',
    content: '',
    toLoad: null,
    requestedData: null
  });

  const getContent = (mode, toLoad, requestedData) => {
    switch (mode) {
      case 'loading':
        return <div>loading...</div>;
      case 'error':
        return <div>error!</div>;
      case 'content':
        return composeElement(toLoad, requestedData);
      default:
        return '';
    };
  }

  const composeElement = (toLoad, requestedData) => {

    function _getComposedProps(props, data) {
      return props.reduce((acc, prop) => {
        acc[prop.name] = data[prop.dataKey];
        return acc;
      }, {});
    }

    const element = React.cloneElement(
      toLoad.tag,
      _getComposedProps(toLoad.props, requestedData)
    );
    
    return element;
  }

  useEffect(() => {
    if(props.toLoad && (!state.toLoad || props.toLoad.name !== state.toLoad.name)  ) {
      setState({
        show: 'loading'
      });

      props.toLoad.dataFn()
        .then(response => {
          setState({
            show: 'content',
            requestedData: response,
            toLoad: props.toLoad
          });
        })
        .catch(error => {
          setState({
            show: 'error'
          })
        });
    }
  }, [props, state.toLoad]);

  return <>
    { getContent(state.show, state.toLoad, state.requestedData) }
  </>;
}

export default ComponentLoader;
