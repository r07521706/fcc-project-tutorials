import { connect } from 'react-redux'
import SidebarComponent from '../components/Sidebar'

//这个函数的第一个参数就是 Redux 的 store
//state => ({users: state.users})，
//我们从中摘取了 users 属性。
//因为返回了具有 users 属性的对象，所以 MyComp 会有名为 users 的 props 字段。
export const Sidebar = connect(state => ({
	users: state.users
}), {})(SidebarComponent) //透過這個步驟 SidebarComponent 的props有了 users的這個屬性

