import { mock } from "../mocks/Users";

class UserService {
	start = 0;

	async getUsers() {
		try {
			if (this.start === mock.length - 1) {
				return {
					data: [],
				};
			}
			const usersData = mock;
			const startIndex = this.start;
			const endIndex =
				startIndex + 50 >= mock.length ? mock.length : startIndex + 50;
			const data = usersData.slice(startIndex, endIndex);
			this.start = this.start + 50 >= endIndex ? endIndex : this.start + 50;

			return {
				data,
			};
		} catch (error) {
			console.log("error");
			return {
				data: [],
			};
		}
	}
}
export const clientService = new UserService();
