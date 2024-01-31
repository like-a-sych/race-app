import React, { useCallback, useEffect, useState } from "react";
import { ListContainer } from "./List.style";
import { ListItems } from "../ListItem/ListItem";

import { clientService } from "../../services/clientService";
import { User } from "../../interface/User";

export function List() {
	const [checkedId, setCheckedId] = useState("");
	const [users, setUsers] = useState<User[]>([]);

	const fetchData = useCallback(() => {
		const users = clientService.getUsers();
		users.then((data) => {
			setUsers((prev) => {
				return [...prev, ...data.data];
			});
		});
	}, []);

	const scrollHandler = useCallback(() => {
		if (
			document.documentElement.scrollHeight -
				(document.documentElement.scrollTop + window.innerHeight) <
			100
		) {
			fetchData();
		}
	}, [fetchData]);

	useEffect(() => {
		document.addEventListener("scroll", scrollHandler);
		return () => {
			document.removeEventListener("scroll", scrollHandler);
		};
	}, [scrollHandler]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<ListContainer>
			{users.map(({ name, color, speed, time }, index) => (
				<ListItems
					key={`id-${name}`}
					id={`id-${name}`}
					name={name}
					color={color}
					time={time}
					speed={speed as number}
					counter={index + 1}
					length={`${users.length}`}
					checkedId={checkedId}
					setChecked={setCheckedId}
				/>
			))}
		</ListContainer>
	);
}
