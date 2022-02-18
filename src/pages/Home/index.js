import React, { useState } from 'react'
import { TabBar } from 'antd-mobile';
import News from '../News';
import Profile from '../Profile';
import Index from '../Index';
import HouseList from '../HouseList';
import {Route} from 'react-router-dom'
import './index.css'



class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.location.pathname,
      hidden: false,
    };
  }
  
  
  renderTabBarItem() {
    const tabItems = [
      {
        title: '首页',
        icon: 'icon-ind',
        path: '/home'
      },
      {
        title: '找房',
        icon: 'icon-findHouse',
        path: '/home/houselist'
      },
      {
        title: '资讯',
        icon: 'icon-infom',
        path: '/home/news'
      },
      {
        title: '我的',
        icon: 'icon-myinfo',
        path: '/home/profile'
      },
     ]
    
    
    
    
    
     
    return tabItems.map(item =><TabBar.Item
      title={item.title  }
      key={item.title }
      icon={
        <i className={`iconfont ${item.icon}`}></i>
      }
      selectedIcon={
        <i className={`iconfont ${item.icon}`}></i>
      }
      selected={this.state.selectedTab === item.path}
      onPress={() => {
        this.setState({
          selectedTab: item.path,
        });
        this.props.history.push(item.path)
      }}
    >
    </TabBar.Item>)
    
  }
  
 
  
  render() {
    
    return (
      <div className='home'>
        {/* 配合默认路由，当在home时展示index页面，要使用exact，不然其他页面也会展示*/}
        <Route exact path='/home' component={Index}></Route>
        <Route path='/home/houselist' component={HouseList}></Route>
        <Route path='/home/news' component={News}></Route>
        <Route path='/home/profile' component={Profile}></Route>
       
        
          <TabBar
            tintColor="#21b97a"
            barTintColor="white"
            noRenderContent='true'
          >
            {this.renderTabBarItem() }
          </TabBar>
      </div>
    )
  }
  
}

export default Home;