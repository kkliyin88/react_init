import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Button , Input,List,Typography} from 'antd';
import store from '../../store'

 class TodoList extends Component {
	 constructor(props) {
	     super(props);
		 this.state = store.getState();
		 this.handleinputChange=this.handleinputChange.bind(this);
		 this.handlestorechange = this.handlestorechange.bind(this)
		 store.subscribe(this.handlestorechange);//订阅store的改变，只要store改变，执行此函数
		 console.log('state',this.state)
	 }
	 handleinputChange(e){
		 console.log('e',e)
		const action = {
			type:'change_input_value',
			value:e.target.value
		}
		store.dispatch(action)
	 }
	 handlestorechange(){
		 console.log('store change');
		 // this.setState(store.getState());
	 }
	 
	render(){
		return (
			<div>
				<div >
				    <p>todoList</p>
					<Input onChange={this.handleinputChange} value={this.state.inputValue}  style={{width:'200px'}}/>
					<Button style={{marginLeft:'10px'}}>提交</Button>
					<List style={{marginTop:'10px'}}
					  bordered
					  dataSource={this.state.list}
					  renderItem={item => (<List.Item>  <Typography.Text mark>[ITEM]</Typography.Text> {item}</List.Item>
					  )}
					/>
				</div>
			</div>
		)
	}
	
}
export default TodoList;