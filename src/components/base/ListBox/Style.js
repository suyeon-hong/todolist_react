import styled from 'styled-components'

export const ListBox = styled.ul`
	width: 100%;
	height: 80%;
	padding: 20px 30px;
	border-top: 1px solid #ddd;
	overflow-y: auto;
`

export const List = styled.li`
	width: 100%;
	padding: 10px 0;
	display: flex;
	align-items: center;
	position: relative;
	font: 20px/1 'arial';
`

export const CheckBox = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid #ddd;
	margin-right: 20px;
	cursor: pointer;
`
export const Icon = styled.span`
	color: #ddd;
	cursor: pointer;
	position: absolute;
	top: 50%;
	right: 0px;
	transform: translateY(-50%);

	&:hover{
		color: tomato;
	}
`