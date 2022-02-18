import React from 'react';

class News extends React.Component{
  state = {
    count: 0
  }
  
  handleClick = () => {
    this.props.getMsg(1)
  }
  
  handleChildren = () => {
    this.props.getMsg()
  }
  
  
  render() {
    return (
      <div style={{backgroundColor: 'green'}}>
        这是New组件的页面
      </div>
    )
  }
  
}

export default News;