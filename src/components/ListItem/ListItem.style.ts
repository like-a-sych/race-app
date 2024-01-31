import styled from "styled-components";
import { Color } from "../../interface/Color";

interface IFlexDivProps {
	$alignItems?: string;
	$justifyContent?: string;
	$flexDirection?:string;
	$gap?:string;
}
interface IAvatarProps extends IFlexDivProps{
	$color: Color;
	$checked: boolean;
} 


const FlexDiv = styled.div<IFlexDivProps>`
	display: flex;
	align-items: ${props => props.$alignItems || 'stretch'};
	justify-content: ${props => props.$justifyContent || 'flex-start'};
	flex-direction: ${props => props.$flexDirection || 'row'};
	gap: ${props => props.$gap || '0px'};
`

const Name = styled(FlexDiv)`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`

const Time = styled.div`
	color: purple;
`
const Speed = styled.div`
	color: blue;
`

const Avatar = styled(FlexDiv)<IAvatarProps>`
	border: ${props => {
		if (props.$checked === true) {
			return '3px solid purple;'
		}		
	return '3px solid transparent'}};
	border-radius:50%;
	min-width:80px;
	height:80px;
	path.helmet {
		fill: ${props => {
			if (props.$color === Color.RED) {
				return 'red'
			}
			if (props.$color === Color.GREEN) {
				return 'green'
			}
			if (props.$color === Color.BLUE) {
				return 'blue'
			} 
			
		return undefined}};
	}
`

const Item = styled.li`
		margin-bottom: 0px;
		cursor:pointer;
`

const Counter = styled.span<{$counter:number, $width: number}>`
	width: ${props => props.$width * 8}px;
	font-weight:600;
	position: relative;
	display:block;
	transition: all 0.4s;
	&::before {
		content:'${props => props.$counter}';
		display:block;
		right:0;
		top:0;
		bottom:0;
		margin:auto;
	}
`

export {FlexDiv, Avatar, Item, Counter, Name, Time, Speed}