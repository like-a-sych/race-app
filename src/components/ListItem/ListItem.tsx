import React from "react";

import {
	Avatar,
	Counter,
	FlexDiv,
	Item,
	Name,
	Speed,
	Time,
} from "./ListItem.style";

import { type User } from "../../interface/User";
import { format } from "date-fns";

import { ReactComponent as Helmet } from "../../assets/helmet.svg";

interface IListItemProps extends User {
	counter: number;
	length: string;
	checkedId: string;
	setChecked: React.Dispatch<React.SetStateAction<string>>;
	id: string;
}

function ListItem({
	color,
	name,
	speed,
	time,
	counter,
	length,
	checkedId,
	setChecked,
	id,
}: IListItemProps) {
	return (
		<Item
			id={id}
			onClick={() => {
				setChecked(id);
			}}
		>
			<FlexDiv $alignItems="center" $gap="10px">
				<Counter $width={length.length} $counter={counter}></Counter>
				<FlexDiv $alignItems="center" $gap="10px">
					<Avatar
						$alignItems="center"
						$justifyContent="center"
						$color={color}
						$checked={checkedId === id}
					>
						<Helmet />
					</Avatar>
					<FlexDiv
						$flexDirection="column"
						$justifyContent="space-between"
						$gap="20px"
					>
						<Name>{name}</Name>
						<FlexDiv $gap="20px">
							<Time>{format(time, "mm:ss.SSS")}</Time>
							<Speed>|</Speed>
							<Speed>{speed} км/ч</Speed>
						</FlexDiv>
					</FlexDiv>
				</FlexDiv>
			</FlexDiv>
		</Item>
	);
}

export const ListItems = React.memo(ListItem);
