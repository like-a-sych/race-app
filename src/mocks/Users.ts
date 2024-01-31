import { set } from "date-fns";
import { Color } from "../interface/Color";
import { User } from "../interface/User";

const getTime = (time: string): number => {
	const splitedTime = time.split(":");
	const splitedSeconds = splitedTime[1].split(".");
	const minutes = +splitedTime[0];
	const seconds = +splitedSeconds[0];
	const milliseconds = +splitedSeconds[1];
	const newDate = set(new Date(), {minutes, seconds, milliseconds});
	return newDate.valueOf();
};

export const mock: User[] = [
	{
		"name": "Beatrice Macdonald",
		"time": getTime("41:46.4146"),
		"speed": 5,
		"color": Color.RED
	},
	{
		"name": "Lillith Elliott",
		"time": getTime("30:16.3016"),
		"speed": 29,
		"color": Color.BLUE
	},
	{
		"name": "Wallace Cooke",
		"time": getTime("33:47.3347"),
		"speed": 99,
		"color": Color.GREEN
	},
	{
		"name": "Ocean Kent",
		"time": getTime("30:54.3054"),
		"speed": 83,
		"color": Color.RED
	},
	{
		"name": "Hu Hill",
		"time": getTime("12:55.1255"),
		"speed": 53,
		"color": Color.BLUE
	},
	{
		"name": "Francesca Duke",
		"time": getTime("30:49.3049"),
		"speed": 47,
		"color": Color.GREEN
	},
	{
		"name": "Cailin Osborne",
		"time": getTime("08:01.81"),
		"speed": 80,
		"color": Color.RED
	},
	{
		"name": "Erich Stuart",
		"time": getTime("09:31.931"),
		"speed": 70,
		"color": Color.BLUE
	},
	{
		"name": "Kelsey Stout",
		"time": getTime("07:52.752"),
		"speed": 60,
		"color": Color.GREEN
	},
	{
		"name": "Ezra Ray",
		"time": getTime("39:41.3941"),
		"speed": 2,
		"color": Color.RED
	},
	{
		"name": "Elaine Burke",
		"time": getTime("11:26.1126"),
		"speed": 21,
		"color": Color.BLUE
	},
	{
		"name": "Mohammad Butler",
		"time": getTime("00:17.017"),
		"speed": 48,
		"color": Color.GREEN
	},
	{
		"name": "Carter Joseph",
		"time": getTime("45:16.4516"),
		"speed": 69,
		"color": Color.RED
	},
	{
		"name": "Laura Graves",
		"time": getTime("33:24.3324"),
		"speed": 85,
		"color": Color.BLUE
	},
	{
		"name": "Kasper Harris",
		"time": getTime("10:26.1026"),
		"speed": 15,
		"color": Color.GREEN
	},
	{
		"name": "Ralph Frazier",
		"time": getTime("11:42.1142"),
		"speed": 85,
		"color": Color.RED
	},
	{
		"name": "Hillary Mooney",
		"time": getTime("50:20.5020"),
		"speed": 3,
		"color": Color.BLUE
	},
	{
		"name": "Dillon Schwartz",
		"time": getTime("25:23.2523"),
		"speed": 12,
		"color": Color.GREEN
	},
	{
		"name": "Stella Patrick",
		"time": getTime("50:06.506"),
		"speed": 26,
		"color": Color.RED
	},
	{
		"name": "Liberty Cooper",
		"time": getTime("22:16.2216"),
		"speed": 60,
		"color": Color.BLUE
	},
	{
		"name": "Grady Durham",
		"time": getTime("43:09.439"),
		"speed": 40,
		"color": Color.GREEN
	},
	{
		"name": "Hop Walker",
		"time": getTime("57:49.5749"),
		"speed": 1,
		"color": Color.RED
	},
	{
		"name": "Lucy Perez",
		"time": getTime("24:45.2445"),
		"speed": 73,
		"color": Color.BLUE
	},
	{
		"name": "Ian Hurley",
		"time": getTime("40:27.4027"),
		"speed": 90,
		"color": Color.GREEN
	},
	{
		"name": "Leonard Grimes",
		"time": getTime("20:31.2031"),
		"speed": 38,
		"color": Color.RED
	},
	{
		"name": "Otto Caldwell",
		"time": getTime("16:32.1632"),
		"speed": 43,
		"color": Color.BLUE
	},
	{
		"name": "Hilary Nicholson",
		"time": getTime("27:20.2720"),
		"speed": 51,
		"color": Color.GREEN
	},
	{
		"name": "Kennan Marks",
		"time": getTime("30:55.3055"),
		"speed": 88,
		"color": Color.RED
	},
	{
		"name": "Zelenia Velasquez",
		"time": getTime("40:19.4019"),
		"speed": 38,
		"color": Color.BLUE
	},
	{
		"name": "Josiah Bates",
		"time": getTime("09:24.924"),
		"speed": 100,
		"color": Color.GREEN
	},
	{
		"name": "Tyler Morton",
		"time": getTime("59:01.591"),
		"speed": 41,
		"color": Color.RED
	},
	{
		"name": "Medge Zamora",
		"time": getTime("38:12.3812"),
		"speed": 61,
		"color": Color.BLUE
	},
	{
		"name": "Ramona Garner",
		"time": getTime("33:50.3350"),
		"speed": 67,
		"color": Color.GREEN
	},
	{
		"name": "Martena Woods",
		"time": getTime("48:56.4856"),
		"speed": 97,
		"color": Color.RED
	},
	{
		"name": "Roth Delacruz",
		"time": getTime("55:32.5532"),
		"speed": 53,
		"color": Color.BLUE
	},
	{
		"name": "Yvette Hendrix",
		"time": getTime("16:22.1622"),
		"speed": 10,
		"color": Color.GREEN
	},
	{
		"name": "Chloe Sellers",
		"time": getTime("23:10.2310"),
		"speed": 80,
		"color": Color.RED
	},
	{
		"name": "Liberty Paul",
		"time": getTime("45:02.452"),
		"speed": 9,
		"color": Color.BLUE
	},
	{
		"name": "Holly Chase",
		"time": getTime("31:59.3159"),
		"speed": 88,
		"color": Color.GREEN
	},
	{
		"name": "Amethyst Valdez",
		"time": getTime("57:42.5742"),
		"speed": 11,
		"color": Color.RED
	},
	{
		"name": "Brynn Cooke",
		"time": getTime("18:31.1831"),
		"speed": 2,
		"color": Color.BLUE
	},
	{
		"name": "Christen Keller",
		"time": getTime("31:38.3138"),
		"speed": 36,
		"color": Color.GREEN
	},
	{
		"name": "Fulton Berger",
		"time": getTime("11:31.1131"),
		"speed": 17,
		"color": Color.RED
	},
	{
		"name": "Isaiah Mcgowan",
		"time": getTime("30:17.3017"),
		"speed": 83,
		"color": Color.BLUE
	},
	{
		"name": "Hyacinth Mcleod",
		"time": getTime("50:19.5019"),
		"speed": 20,
		"color": Color.GREEN
	},
	{
		"name": "Fuller Dixon",
		"time": getTime("12:20.1220"),
		"speed": 5,
		"color": Color.RED
	},
	{
		"name": "Medge Grimes",
		"time": getTime("30:14.3014"),
		"speed": 90,
		"color": Color.BLUE
	},
	{
		"name": "Iona Lawrence",
		"time": getTime("24:27.2427"),
		"speed": 51,
		"color": Color.GREEN
	},
	{
		"name": "Risa Frazier",
		"time": getTime("17:19.1719"),
		"speed": 92,
		"color": Color.RED
	},
	{
		"name": "Baker Jacobs",
		"time": getTime("36:40.3640"),
		"speed": 34,
		"color": Color.BLUE
	},
	{
		"name": "Abigail Case",
		"time": getTime("54:49.5449"),
		"speed": 93,
		"color": Color.GREEN
	},
	{
		"name": "Dante Gallagher",
		"time": getTime("21:39.2139"),
		"speed": 30,
		"color": Color.RED
	},
	{
		"name": "Simon Fuller",
		"time": getTime("51:34.5134"),
		"speed": 20,
		"color": Color.BLUE
	},
	{
		"name": "Hayden Spence",
		"time": getTime("00:06.06"),
		"speed": 49,
		"color": Color.GREEN
	},
	{
		"name": "Gisela Kirkland",
		"time": getTime("12:05.125"),
		"speed": 81,
		"color": Color.RED
	},
	{
		"name": "Quynn Wyatt",
		"time": getTime("59:45.5945"),
		"speed": 86,
		"color": Color.BLUE
	},
	{
		"name": "Alma Patrick",
		"time": getTime("14:34.1434"),
		"speed": 50,
		"color": Color.GREEN
	},
	{
		"name": "Penelope Rush",
		"time": getTime("41:52.4152"),
		"speed": 55,
		"color": Color.RED
	},
	{
		"name": "Beatrice Guzman",
		"time": getTime("51:44.5144"),
		"speed": 82,
		"color": Color.BLUE
	},
	{
		"name": "Madeline Burks",
		"time": getTime("53:45.5345"),
		"speed": 61,
		"color": Color.GREEN
	},
	{
		"name": "Hammett Hickman",
		"time": getTime("06:17.617"),
		"speed": 40,
		"color": Color.RED
	},
	{
		"name": "Shad Vasquez",
		"time": getTime("12:33.1233"),
		"speed": 88,
		"color": Color.BLUE
	},
	{
		"name": "Orson Hahn",
		"time": getTime("30:49.3049"),
		"speed": 44,
		"color": Color.GREEN
	},
	{
		"name": "Hoyt Patton",
		"time": getTime("56:26.5626"),
		"speed": 40,
		"color": Color.RED
	},
	{
		"name": "Hadley Roman",
		"time": getTime("55:38.5538"),
		"speed": 36,
		"color": Color.BLUE
	},
	{
		"name": "Briar Gibbs",
		"time": getTime("02:22.222"),
		"speed": 40,
		"color": Color.GREEN
	},
	{
		"name": "Zeus Reyes",
		"time": getTime("20:37.2037"),
		"speed": 16,
		"color": Color.RED
	},
	{
		"name": "Seth Gilliam",
		"time": getTime("01:19.119"),
		"speed": 51,
		"color": Color.BLUE
	},
	{
		"name": "Daquan Maddox",
		"time": getTime("35:13.3513"),
		"speed": 39,
		"color": Color.GREEN
	},
	{
		"name": "Hunter Sears",
		"time": getTime("30:42.3042"),
		"speed": 28,
		"color": Color.RED
	},
	{
		"name": "Ezekiel Hamilton",
		"time": getTime("59:30.5930"),
		"speed": 43,
		"color": Color.BLUE
	},
	{
		"name": "Shad Delaney",
		"time": getTime("46:13.4613"),
		"speed": 10,
		"color": Color.GREEN
	},
	{
		"name": "Rachel Doyle",
		"time": getTime("51:26.5126"),
		"speed": 46,
		"color": Color.RED
	},
	{
		"name": "Patience Hoover",
		"time": getTime("03:38.338"),
		"speed": 47,
		"color": Color.BLUE
	},
	{
		"name": "Hilary Suarez",
		"time": getTime("05:18.518"),
		"speed": 21,
		"color": Color.GREEN
	},
	{
		"name": "Lavinia Carney",
		"time": getTime("34:21.3421"),
		"speed": 8,
		"color": Color.RED
	},
	{
		"name": "Anastasia Rowland",
		"time": getTime("27:52.2752"),
		"speed": 44,
		"color": Color.BLUE
	},
	{
		"name": "Quinn Hopkins",
		"time": getTime("24:33.2433"),
		"speed": 12,
		"color": Color.GREEN
	},
	{
		"name": "Victoria Deleon",
		"time": getTime("44:35.4435"),
		"speed": 99,
		"color": Color.RED
	},
	{
		"name": "Daniel O'Neill",
		"time": getTime("07:44.744"),
		"speed": 49,
		"color": Color.BLUE
	},
	{
		"name": "Desirae Kaufman",
		"time": getTime("45:51.4551"),
		"speed": 85,
		"color": Color.GREEN
	},
	{
		"name": "Malachi Daniel",
		"time": getTime("22:34.2234"),
		"speed": 73,
		"color": Color.RED
	},
	{
		"name": "Abdul Cotton",
		"time": getTime("01:46.146"),
		"speed": 52,
		"color": Color.BLUE
	},
	{
		"name": "Xantha Davis",
		"time": getTime("24:36.2436"),
		"speed": 21,
		"color": Color.GREEN
	},
	{
		"name": "Kellie Richardson",
		"time": getTime("44:28.4428"),
		"speed": 59,
		"color": Color.RED
	},
	{
		"name": "Leo Campos",
		"time": getTime("17:50.1750"),
		"speed": 90,
		"color": Color.BLUE
	},
	{
		"name": "Iona Barrett",
		"time": getTime("59:46.5946"),
		"speed": 95,
		"color": Color.GREEN
	},
	{
		"name": "Oprah Shannon",
		"time": getTime("31:04.314"),
		"speed": 23,
		"color": Color.RED
	},
	{
		"name": "Ima Nielsen",
		"time": getTime("38:16.3816"),
		"speed": 85,
		"color": Color.BLUE
	},
	{
		"name": "Carson Byrd",
		"time": getTime("47:31.4731"),
		"speed": 5,
		"color": Color.GREEN
	},
	{
		"name": "Rogan Hopkins",
		"time": getTime("41:18.4118"),
		"speed": 29,
		"color": Color.RED
	},
	{
		"name": "Dominic Osborn",
		"time": getTime("13:40.1340"),
		"speed": 48,
		"color": Color.BLUE
	},
	{
		"name": "Jackson Kidd",
		"time": getTime("12:56.1256"),
		"speed": 52,
		"color": Color.GREEN
	},
	{
		"name": "Imani Merritt",
		"time": getTime("33:18.3318"),
		"speed": 74,
		"color": Color.RED
	},
	{
		"name": "Zane Middleton",
		"time": getTime("52:05.525"),
		"speed": 24,
		"color": Color.BLUE
	},
	{
		"name": "Grace Coffey",
		"time": getTime("32:05.325"),
		"speed": 5,
		"color": Color.GREEN
	},
	{
		"name": "Roanna Curry",
		"time": getTime("43:19.4319"),
		"speed": 50,
		"color": Color.RED
	},
	{
		"name": "Cleo Hobbs",
		"time": getTime("51:52.5152"),
		"speed": 60,
		"color": Color.BLUE
	},
	{
		"name": "Athena Coffey",
		"time": getTime("39:23.3923"),
		"speed": 87,
		"color": Color.GREEN
	},
	{
		"name": "Henry Hood",
		"time": getTime("23:27.2327"),
		"speed": 91,
		"color": Color.RED
	},
	{
		"name": "Troy Gilliam",
		"time": getTime("35:16.3516"),
		"speed": 65,
		"color": Color.BLUE
	},
	{
		"name": "Wynter Rocha",
		"time": getTime("06:34.634"),
		"speed": 46,
		"color": Color.GREEN
	},
	{
		"name": "Mona Barrera",
		"time": getTime("46:56.4656"),
		"speed": 45,
		"color": Color.RED
	},
	{
		"name": "Nomlanga Graves",
		"time": getTime("28:40.2840"),
		"speed": 17,
		"color": Color.BLUE
	},
	{
		"name": "Blake Frazier",
		"time": getTime("11:37.1137"),
		"speed": 30,
		"color": Color.GREEN
	},
	{
		"name": "Byron Sampson",
		"time": getTime("12:05.125"),
		"speed": 6,
		"color": Color.RED
	},
	{
		"name": "Louis Talley",
		"time": getTime("09:04.94"),
		"speed": 62,
		"color": Color.BLUE
	},
	{
		"name": "Quinn Vang",
		"time": getTime("52:27.5227"),
		"speed": 69,
		"color": Color.GREEN
	},
	{
		"name": "Amal Conway",
		"time": getTime("28:18.2818"),
		"speed": 41,
		"color": Color.RED
	},
	{
		"name": "Uriel Alston",
		"time": getTime("58:55.5855"),
		"speed": 28,
		"color": Color.BLUE
	},
	{
		"name": "Ryder Klein",
		"time": getTime("17:42.1742"),
		"speed": 81,
		"color": Color.GREEN
	},
	{
		"name": "Ima Horn",
		"time": getTime("08:01.81"),
		"speed": 57,
		"color": Color.RED
	},
	{
		"name": "Adrienne Sims",
		"time": getTime("45:45.4545"),
		"speed": 83,
		"color": Color.BLUE
	},
	{
		"name": "Tamara Sandoval",
		"time": getTime("02:55.255"),
		"speed": 60,
		"color": Color.GREEN
	},
	{
		"name": "Julian Klein",
		"time": getTime("44:42.4442"),
		"speed": 79,
		"color": Color.RED
	},
	{
		"name": "Colette Mcbride",
		"time": getTime("25:37.2537"),
		"speed": 2,
		"color": Color.BLUE
	},
	{
		"name": "Francis Levine",
		"time": getTime("27:59.2759"),
		"speed": 32,
		"color": Color.GREEN
	},
	{
		"name": "Laura Fischer",
		"time": getTime("38:07.387"),
		"speed": 53,
		"color": Color.RED
	},
	{
		"name": "McKenzie Stafford",
		"time": getTime("05:47.547"),
		"speed": 28,
		"color": Color.BLUE
	},
	{
		"name": "Coby Bowers",
		"time": getTime("03:56.356"),
		"speed": 66,
		"color": Color.GREEN
	},
	{
		"name": "Hilda Marshall",
		"time": getTime("42:04.424"),
		"speed": 69,
		"color": Color.RED
	},
	{
		"name": "Iliana Battle",
		"time": getTime("02:04.24"),
		"speed": 19,
		"color": Color.BLUE
	},
	{
		"name": "Cally Mcbride",
		"time": getTime("40:31.4031"),
		"speed": 46,
		"color": Color.GREEN
	},
	{
		"name": "Kylie Warner",
		"time": getTime("12:33.1233"),
		"speed": 70,
		"color": Color.RED
	},
	{
		"name": "Garrison Dixon",
		"time": getTime("55:42.5542"),
		"speed": 68,
		"color": Color.BLUE
	},
	{
		"name": "Warren Blackburn",
		"time": getTime("06:35.635"),
		"speed": 95,
		"color": Color.GREEN
	},
	{
		"name": "Channing Garcia",
		"time": getTime("25:38.2538"),
		"speed": 51,
		"color": Color.RED
	},
	{
		"name": "Marsden Schmidt",
		"time": getTime("40:01.401"),
		"speed": 28,
		"color": Color.BLUE
	},
	{
		"name": "Anika Norris",
		"time": getTime("29:17.2917"),
		"speed": 44,
		"color": Color.GREEN
	},
	{
		"name": "Amanda Reynolds",
		"time": getTime("49:37.4937"),
		"speed": 75,
		"color": Color.RED
	},
	{
		"name": "Paula Jenkins",
		"time": getTime("31:36.3136"),
		"speed": 73,
		"color": Color.BLUE
	},
	{
		"name": "Flavia Shelton",
		"time": getTime("30:25.3025"),
		"speed": 12,
		"color": Color.GREEN
	},
	{
		"name": "Vance Sargent",
		"time": getTime("00:27.027"),
		"speed": 45,
		"color": Color.RED
	},
	{
		"name": "Dawn Gill",
		"time": getTime("39:46.3946"),
		"speed": 7,
		"color": Color.BLUE
	},
	{
		"name": "Berk Townsend",
		"time": getTime("50:44.5044"),
		"speed": 26,
		"color": Color.GREEN
	},
	{
		"name": "Cassady Mcmahon",
		"time": getTime("31:49.3149"),
		"speed": 34,
		"color": Color.RED
	},
	{
		"name": "Salvador Price",
		"time": getTime("36:29.3629"),
		"speed": 7,
		"color": Color.BLUE
	},
	{
		"name": "Callie Deleon",
		"time": getTime("55:27.5527"),
		"speed": 77,
		"color": Color.GREEN
	},
	{
		"name": "Kameko Rich",
		"time": getTime("23:45.2345"),
		"speed": 7,
		"color": Color.RED
	},
	{
		"name": "Macon Griffith",
		"time": getTime("19:03.193"),
		"speed": 4,
		"color": Color.BLUE
	},
	{
		"name": "Giselle Knight",
		"time": getTime("15:23.1523"),
		"speed": 6,
		"color": Color.GREEN
	},
	{
		"name": "Ashton House",
		"time": getTime("10:08.108"),
		"speed": 59,
		"color": Color.RED
	},
	{
		"name": "Victor Barry",
		"time": getTime("50:41.5041"),
		"speed": 14,
		"color": Color.BLUE
	},
	{
		"name": "Velma Terry",
		"time": getTime("48:25.4825"),
		"speed": 42,
		"color": Color.GREEN
	},
	{
		"name": "Anjolie Warren",
		"time": getTime("08:30.830"),
		"speed": 100,
		"color": Color.RED
	},
	{
		"name": "Ian Davidson",
		"time": getTime("35:55.3555"),
		"speed": 5,
		"color": Color.BLUE
	},
	{
		"name": "Shaeleigh Christensen",
		"time": getTime("39:40.3940"),
		"speed": 12,
		"color": Color.GREEN
	},
	{
		"name": "Cleo Maynard",
		"time": getTime("01:38.138"),
		"speed": 0,
		"color": Color.RED
	},
	{
		"name": "Hall Moss",
		"time": getTime("07:06.76"),
		"speed": 71,
		"color": Color.BLUE
	},
	{
		"name": "Caesar Diaz",
		"time": getTime("33:36.3336"),
		"speed": 17,
		"color": Color.GREEN
	},
	{
		"name": "Stephanie Carson",
		"time": getTime("06:26.626"),
		"speed": 81,
		"color": Color.RED
	},
	{
		"name": "Kai Cooke",
		"time": getTime("01:21.121"),
		"speed": 17,
		"color": Color.BLUE
	},
	{
		"name": "Ursa Ballard",
		"time": getTime("06:47.647"),
		"speed": 95,
		"color": Color.GREEN
	},
	{
		"name": "Kaitlin Baxter",
		"time": getTime("46:06.466"),
		"speed": 12,
		"color": Color.RED
	},
	{
		"name": "Rebekah Tyler",
		"time": getTime("49:01.491"),
		"speed": 3,
		"color": Color.BLUE
	},
	{
		"name": "Kyle Rice",
		"time": getTime("47:21.4721"),
		"speed": 38,
		"color": Color.GREEN
	},
	{
		"name": "Mufutau Blackburn",
		"time": getTime("29:53.2953"),
		"speed": 77,
		"color": Color.RED
	},
	{
		"name": "Myles Cohen",
		"time": getTime("27:10.2710"),
		"speed": 14,
		"color": Color.BLUE
	},
	{
		"name": "Gannon Moreno",
		"time": getTime("14:04.144"),
		"speed": 97,
		"color": Color.GREEN
	},
	{
		"name": "Lucian Schmidt",
		"time": getTime("00:31.031"),
		"speed": 35,
		"color": Color.RED
	},
	{
		"name": "Ima Stanley",
		"time": getTime("29:01.291"),
		"speed": 87,
		"color": Color.BLUE
	},
	{
		"name": "Donna Baker",
		"time": getTime("58:07.587"),
		"speed": 91,
		"color": Color.GREEN
	},
	{
		"name": "Steven Stanley",
		"time": getTime("59:54.5954"),
		"speed": 65,
		"color": Color.RED
	},
	{
		"name": "Perry Randolph",
		"time": getTime("21:08.218"),
		"speed": 41,
		"color": Color.BLUE
	},
	{
		"name": "Rina Case",
		"time": getTime("18:16.1816"),
		"speed": 88,
		"color": Color.GREEN
	},
	{
		"name": "Alexandra Pearson",
		"time": getTime("29:05.295"),
		"speed": 33,
		"color": Color.RED
	},
	{
		"name": "Stephen Finley",
		"time": getTime("26:50.2650"),
		"speed": 85,
		"color": Color.BLUE
	},
	{
		"name": "Nash Sykes",
		"time": getTime("04:11.411"),
		"speed": 29,
		"color": Color.GREEN
	},
	{
		"name": "Ian Wooten",
		"time": getTime("50:49.5049"),
		"speed": 14,
		"color": Color.RED
	},
	{
		"name": "Galvin Hopper",
		"time": getTime("32:05.325"),
		"speed": 41,
		"color": Color.BLUE
	},
	{
		"name": "Kevin Hoover",
		"time": getTime("57:35.5735"),
		"speed": 29,
		"color": Color.GREEN
	},
	{
		"name": "Graiden Morin",
		"time": getTime("55:57.5557"),
		"speed": 65,
		"color": Color.RED
	},
	{
		"name": "Evelyn Finch",
		"time": getTime("37:13.3713"),
		"speed": 52,
		"color": Color.BLUE
	},
	{
		"name": "Bianca Vance",
		"time": getTime("01:19.119"),
		"speed": 16,
		"color": Color.GREEN
	},
	{
		"name": "Desirae Cooke",
		"time": getTime("46:46.4646"),
		"speed": 71,
		"color": Color.RED
	},
	{
		"name": "Hilary Mercer",
		"time": getTime("30:17.3017"),
		"speed": 90,
		"color": Color.BLUE
	},
	{
		"name": "Flavia Wallace",
		"time": getTime("25:02.252"),
		"speed": 12,
		"color": Color.GREEN
	},
	{
		"name": "Hu Rodriguez",
		"time": getTime("41:29.4129"),
		"speed": 97,
		"color": Color.RED
	},
	{
		"name": "Ruth Morgan",
		"time": getTime("45:43.4543"),
		"speed": 56,
		"color": Color.BLUE
	},
	{
		"name": "Yardley Walls",
		"time": getTime("52:21.5221"),
		"speed": 13,
		"color": Color.GREEN
	},
	{
		"name": "Lyle Curry",
		"time": getTime("20:01.201"),
		"speed": 81,
		"color": Color.RED
	},
	{
		"name": "Bertha Schwartz",
		"time": getTime("35:46.3546"),
		"speed": 5,
		"color": Color.BLUE
	},
	{
		"name": "Rhonda Dominguez",
		"time": getTime("41:15.4115"),
		"speed": 5,
		"color": Color.GREEN
	},
	{
		"name": "Murphy Santos",
		"time": getTime("58:00.580"),
		"speed": 26,
		"color": Color.RED
	},
	{
		"name": "Hiram Glover",
		"time": getTime("06:50.650"),
		"speed": 71,
		"color": Color.BLUE
	},
	{
		"name": "Marshall Snyder",
		"time": getTime("44:01.441"),
		"speed": 75,
		"color": Color.GREEN
	},
	{
		"name": "Wing Hodge",
		"time": getTime("54:22.5422"),
		"speed": 1,
		"color": Color.RED
	},
	{
		"name": "Dane Hobbs",
		"time": getTime("24:20.2420"),
		"speed": 70,
		"color": Color.BLUE
	},
	{
		"name": "Orson Rios",
		"time": getTime("51:43.5143"),
		"speed": 51,
		"color": Color.GREEN
	},
	{
		"name": "Myra Francis",
		"time": getTime("03:32.332"),
		"speed": 39,
		"color": Color.RED
	},
	{
		"name": "Mark Berger",
		"time": getTime("45:18.4518"),
		"speed": 60,
		"color": Color.BLUE
	},
	{
		"name": "Kyra Bright",
		"time": getTime("05:50.550"),
		"speed": 70,
		"color": Color.GREEN
	},
	{
		"name": "Hunter Richardson",
		"time": getTime("07:31.731"),
		"speed": 68,
		"color": Color.RED
	},
	{
		"name": "Igor Booth",
		"time": getTime("37:06.376"),
		"speed": 57,
		"color": Color.BLUE
	},
	{
		"name": "Portia Woodard",
		"time": getTime("15:00.150"),
		"speed": 83,
		"color": Color.GREEN
	},
	{
		"name": "Shay Garrett",
		"time": getTime("40:39.4039"),
		"speed": 46,
		"color": Color.RED
	},
	{
		"name": "Illana Parker",
		"time": getTime("29:36.2936"),
		"speed": 9,
		"color": Color.BLUE
	},
	{
		"name": "Shaine Wong",
		"time": getTime("47:50.4750"),
		"speed": 9,
		"color": Color.GREEN
	},
	{
		"name": "Macaulay Koch",
		"time": getTime("42:51.4251"),
		"speed": 51,
		"color": Color.RED
	},
	{
		"name": "Carter Kinney",
		"time": getTime("59:47.5947"),
		"speed": 74,
		"color": Color.BLUE
	},
	{
		"name": "Indigo Kim",
		"time": getTime("23:51.2351"),
		"speed": 65,
		"color": Color.GREEN
	},
	{
		"name": "Liberty Curtis",
		"time": getTime("20:43.2043"),
		"speed": 16,
		"color": Color.RED
	},
	{
		"name": "Marshall Miller",
		"time": getTime("01:32.132"),
		"speed": 42,
		"color": Color.BLUE
	},
	{
		"name": "Keegan Butler",
		"time": getTime("37:44.3744"),
		"speed": 55,
		"color": Color.GREEN
	},
	{
		"name": "Martena Riley",
		"time": getTime("14:22.1422"),
		"speed": 95,
		"color": Color.RED
	},
	{
		"name": "Lani Gordon",
		"time": getTime("55:30.5530"),
		"speed": 1,
		"color": Color.BLUE
	},
	{
		"name": "Jeanette Matthews",
		"time": getTime("51:02.512"),
		"speed": 32,
		"color": Color.GREEN
	},
	{
		"name": "Tara Wilder",
		"time": getTime("31:37.3137"),
		"speed": 37,
		"color": Color.RED
	},
	{
		"name": "Cadman Leach",
		"time": getTime("03:04.34"),
		"speed": 75,
		"color": Color.BLUE
	},
	{
		"name": "Jaquelyn Barrett",
		"time": getTime("09:20.920"),
		"speed": 16,
		"color": Color.GREEN
	},
	{
		"name": "Craig Acevedo",
		"time": getTime("59:01.591"),
		"speed": 76,
		"color": Color.RED
	},
	{
		"name": "Allistair Bentley",
		"time": getTime("06:56.656"),
		"speed": 21,
		"color": Color.BLUE
	},
	{
		"name": "Kevin Baldwin",
		"time": getTime("43:25.4325"),
		"speed": 17,
		"color": Color.GREEN
	},
	{
		"name": "Delilah Gibbs",
		"time": getTime("19:00.190"),
		"speed": 20,
		"color": Color.RED
	},
	{
		"name": "Inez Mcbride",
		"time": getTime("25:11.2511"),
		"speed": 92,
		"color": Color.BLUE
	},
	{
		"name": "Dorian Bowman",
		"time": getTime("33:19.3319"),
		"speed": 34,
		"color": Color.GREEN
	},
	{
		"name": "Seth Burt",
		"time": getTime("53:57.5357"),
		"speed": 57,
		"color": Color.RED
	},
	{
		"name": "Xyla Cochran",
		"time": getTime("53:56.5356"),
		"speed": 22,
		"color": Color.BLUE
	},
	{
		"name": "Erica Norris",
		"time": getTime("11:13.1113"),
		"speed": 41,
		"color": Color.GREEN
	},
	{
		"name": "Hayden Norman",
		"time": getTime("24:58.2458"),
		"speed": 88,
		"color": Color.RED
	},
	{
		"name": "Zorita Heath",
		"time": getTime("52:04.524"),
		"speed": 8,
		"color": Color.BLUE
	},
	{
		"name": "Declan Blanchard",
		"time": getTime("16:53.1653"),
		"speed": 93,
		"color": Color.GREEN
	},
	{
		"name": "Odysseus Rutledge",
		"time": getTime("36:46.3646"),
		"speed": 55,
		"color": Color.RED
	},
	{
		"name": "Unity Holloway",
		"time": getTime("24:41.2441"),
		"speed": 96,
		"color": Color.BLUE
	},
	{
		"name": "Carlos Estes",
		"time": getTime("11:40.1140"),
		"speed": 3,
		"color": Color.GREEN
	},
	{
		"name": "Alexandra Murray",
		"time": getTime("08:37.837"),
		"speed": 77,
		"color": Color.RED
	},
	{
		"name": "Joshua Roy",
		"time": getTime("22:45.2245"),
		"speed": 94,
		"color": Color.BLUE
	},
	{
		"name": "Charlotte Wooten",
		"time": getTime("36:01.361"),
		"speed": 37,
		"color": Color.GREEN
	},
	{
		"name": "Rose Franco",
		"time": getTime("56:36.5636"),
		"speed": 99,
		"color": Color.RED
	},
	{
		"name": "Aristotle Munoz",
		"time": getTime("02:55.255"),
		"speed": 73,
		"color": Color.BLUE
	},
	{
		"name": "Claire Doyle",
		"time": getTime("10:52.1052"),
		"speed": 80,
		"color": Color.GREEN
	},
	{
		"name": "Paula Burnett",
		"time": getTime("56:26.5626"),
		"speed": 88,
		"color": Color.RED
	},
	{
		"name": "Isaiah Joyce",
		"time": getTime("15:39.1539"),
		"speed": 88,
		"color": Color.BLUE
	},
	{
		"name": "Lance Barron",
		"time": getTime("26:02.262"),
		"speed": 70,
		"color": Color.GREEN
	},
	{
		"name": "Logan Jimenez",
		"time": getTime("37:44.3744"),
		"speed": 17,
		"color": Color.RED
	},
	{
		"name": "Michelle Cooke",
		"time": getTime("43:43.4343"),
		"speed": 24,
		"color": Color.BLUE
	},
	{
		"name": "Griffin Morris",
		"time": getTime("38:36.3836"),
		"speed": 30,
		"color": Color.GREEN
	},
	{
		"name": "Keith Trujillo",
		"time": getTime("28:35.2835"),
		"speed": 12,
		"color": Color.RED
	},
	{
		"name": "Murphy Hinton",
		"time": getTime("17:34.1734"),
		"speed": 13,
		"color": Color.BLUE
	},
	{
		"name": "Rudyard Hudson",
		"time": getTime("11:49.1149"),
		"speed": 67,
		"color": Color.GREEN
	},
	{
		"name": "Echo Kaufman",
		"time": getTime("19:08.198"),
		"speed": 13,
		"color": Color.RED
	},
	{
		"name": "Kevin Dodson",
		"time": getTime("58:10.5810"),
		"speed": 48,
		"color": Color.BLUE
	},
	{
		"name": "Natalie King",
		"time": getTime("01:55.155"),
		"speed": 31,
		"color": Color.GREEN
	},
	{
		"name": "Thomas Salas",
		"time": getTime("21:51.2151"),
		"speed": 20,
		"color": Color.RED
	},
	{
		"name": "Germane Fleming",
		"time": getTime("27:03.273"),
		"speed": 37,
		"color": Color.BLUE
	},
	{
		"name": "Tiger Holman",
		"time": getTime("49:34.4934"),
		"speed": 19,
		"color": Color.GREEN
	},
	{
		"name": "Basil Randall",
		"time": getTime("21:09.219"),
		"speed": 85,
		"color": Color.RED
	},
	{
		"name": "Madison Kerr",
		"time": getTime("53:27.5327"),
		"speed": 37,
		"color": Color.BLUE
	},
	{
		"name": "Paul Grimes",
		"time": getTime("32:23.3223"),
		"speed": 27,
		"color": Color.GREEN
	},
	{
		"name": "Tatum Williams",
		"time": getTime("03:27.327"),
		"speed": 39,
		"color": Color.RED
	},
	{
		"name": "Flavia Turner",
		"time": getTime("12:30.1230"),
		"speed": 38,
		"color": Color.BLUE
	},
	{
		"name": "Oren Kirk",
		"time": getTime("43:56.4356"),
		"speed": 73,
		"color": Color.GREEN
	},
	{
		"name": "Kane Dominguez",
		"time": getTime("19:12.1912"),
		"speed": 61,
		"color": Color.RED
	},
	{
		"name": "Blaze Pennington",
		"time": getTime("06:47.647"),
		"speed": 68,
		"color": Color.BLUE
	},
	{
		"name": "Ian Oliver",
		"time": getTime("22:50.2250"),
		"speed": 2,
		"color": Color.GREEN
	},
	{
		"name": "Jared Vega",
		"time": getTime("34:10.3410"),
		"speed": 81,
		"color": Color.RED
	},
	{
		"name": "Madeline Mckenzie",
		"time": getTime("43:17.4317"),
		"speed": 91,
		"color": Color.BLUE
	},
	{
		"name": "Xander Hyde",
		"time": getTime("13:33.1333"),
		"speed": 9,
		"color": Color.GREEN
	},
	{
		"name": "Evangeline Mills",
		"time": getTime("59:25.5925"),
		"speed": 5,
		"color": Color.RED
	},
	{
		"name": "Bryar Monroe",
		"time": getTime("18:08.188"),
		"speed": 0,
		"color": Color.BLUE
	},
	{
		"name": "Peter Scott",
		"time": getTime("40:04.404"),
		"speed": 53,
		"color": Color.GREEN
	},
	{
		"name": "Zorita Estes",
		"time": getTime("11:50.1150"),
		"speed": 8,
		"color": Color.RED
	},
	{
		"name": "Shana Marsh",
		"time": getTime("59:00.590"),
		"speed": 98,
		"color": Color.BLUE
	},
	{
		"name": "Felix Sexton",
		"time": getTime("17:49.1749"),
		"speed": 59,
		"color": Color.GREEN
	},
	{
		"name": "Halee Higgins",
		"time": getTime("11:44.1144"),
		"speed": 88,
		"color": Color.RED
	},
	{
		"name": "Gage Mays",
		"time": getTime("43:33.4333"),
		"speed": 12,
		"color": Color.BLUE
	},
	{
		"name": "Arsenio Workman",
		"time": getTime("32:06.326"),
		"speed": 81,
		"color": Color.GREEN
	},
	{
		"name": "Ryder Gardner",
		"time": getTime("17:59.1759"),
		"speed": 65,
		"color": Color.RED
	},
	{
		"name": "Dai Rojas",
		"time": getTime("10:23.1023"),
		"speed": 30,
		"color": Color.BLUE
	},
	{
		"name": "Iona Wiley",
		"time": getTime("50:17.5017"),
		"speed": 83,
		"color": Color.GREEN
	},
	{
		"name": "Daniel Barr",
		"time": getTime("45:34.4534"),
		"speed": 9,
		"color": Color.RED
	},
	{
		"name": "Alfreda Gonzalez",
		"time": getTime("52:30.5230"),
		"speed": 37,
		"color": Color.BLUE
	},
	{
		"name": "Hermione Kirkland",
		"time": getTime("18:25.1825"),
		"speed": 19,
		"color": Color.GREEN
	},
	{
		"name": "Cassandra Ford",
		"time": getTime("20:59.2059"),
		"speed": 81,
		"color": Color.RED
	},
	{
		"name": "Graham Kirby",
		"time": getTime("11:12.1112"),
		"speed": 88,
		"color": Color.BLUE
	},
	{
		"name": "Yen Ortiz",
		"time": getTime("09:23.923"),
		"speed": 91,
		"color": Color.GREEN
	},
	{
		"name": "Ferdinand Sargent",
		"time": getTime("03:30.330"),
		"speed": 90,
		"color": Color.RED
	},
	{
		"name": "Danielle Goodman",
		"time": getTime("16:03.163"),
		"speed": 65,
		"color": Color.BLUE
	},
	{
		"name": "Jordan Odom",
		"time": getTime("11:48.1148"),
		"speed": 35,
		"color": Color.GREEN
	},
	{
		"name": "Shannon Gonzalez",
		"time": getTime("20:26.2026"),
		"speed": 8,
		"color": Color.RED
	},
	{
		"name": "Matthew Johnston",
		"time": getTime("48:42.4842"),
		"speed": 50,
		"color": Color.BLUE
	},
	{
		"name": "James Lowery",
		"time": getTime("58:45.5845"),
		"speed": 5,
		"color": Color.GREEN
	},
	{
		"name": "Malachi Chan",
		"time": getTime("49:26.4926"),
		"speed": 88,
		"color": Color.RED
	},
	{
		"name": "Germaine Mclean",
		"time": getTime("29:45.2945"),
		"speed": 13,
		"color": Color.BLUE
	},
	{
		"name": "Geoffrey Melton",
		"time": getTime("16:27.1627"),
		"speed": 30,
		"color": Color.GREEN
	},
	{
		"name": "Jameson Ramos",
		"time": getTime("27:50.2750"),
		"speed": 21,
		"color": Color.RED
	},
	{
		"name": "Ray Carver",
		"time": getTime("18:07.187"),
		"speed": 21,
		"color": Color.BLUE
	},
	{
		"name": "Robert Vazquez",
		"time": getTime("14:14.1414"),
		"speed": 15,
		"color": Color.GREEN
	},
	{
		"name": "Leonard Petty",
		"time": getTime("16:07.167"),
		"speed": 88,
		"color": Color.RED
	},
	{
		"name": "Unity Terry",
		"time": getTime("12:11.1211"),
		"speed": 26,
		"color": Color.BLUE
	},
	{
		"name": "Tate Cherry",
		"time": getTime("37:24.3724"),
		"speed": 83,
		"color": Color.GREEN
	},
	{
		"name": "Barrett Molina",
		"time": getTime("19:07.197"),
		"speed": 9,
		"color": Color.RED
	},
	{
		"name": "Nevada Fox",
		"time": getTime("56:32.5632"),
		"speed": 98,
		"color": Color.BLUE
	},
	{
		"name": "Rooney Goff",
		"time": getTime("17:03.173"),
		"speed": 47,
		"color": Color.GREEN
	},
	{
		"name": "Wendy Sykes",
		"time": getTime("49:19.4919"),
		"speed": 70,
		"color": Color.RED
	},
	{
		"name": "Allen Huff",
		"time": getTime("12:57.1257"),
		"speed": 6,
		"color": Color.BLUE
	},
	{
		"name": "Kelly Ballard",
		"time": getTime("09:31.931"),
		"speed": 79,
		"color": Color.GREEN
	},
	{
		"name": "Blossom Perkins",
		"time": getTime("48:57.4857"),
		"speed": 98,
		"color": Color.RED
	},
	{
		"name": "Imani Hayes",
		"time": getTime("24:37.2437"),
		"speed": 43,
		"color": Color.BLUE
	},
	{
		"name": "Tanisha Mckenzie",
		"time": getTime("19:23.1923"),
		"speed": 7,
		"color": Color.GREEN
	},
	{
		"name": "Garrett Combs",
		"time": getTime("37:32.3732"),
		"speed": 58,
		"color": Color.RED
	},
	{
		"name": "Barclay Levine",
		"time": getTime("32:10.3210"),
		"speed": 52,
		"color": Color.BLUE
	},
	{
		"name": "Evangeline Campbell",
		"time": getTime("35:25.3525"),
		"speed": 12,
		"color": Color.GREEN
	},
	{
		"name": "Herman Nieves",
		"time": getTime("38:04.384"),
		"speed": 22,
		"color": Color.RED
	},
	{
		"name": "Eaton Watkins",
		"time": getTime("03:37.337"),
		"speed": 99,
		"color": Color.BLUE
	},
	{
		"name": "Jelani Downs",
		"time": getTime("09:19.919"),
		"speed": 58,
		"color": Color.GREEN
	},
	{
		"name": "Pascale Vang",
		"time": getTime("36:12.3612"),
		"speed": 89,
		"color": Color.RED
	},
	{
		"name": "Caesar Kirby",
		"time": getTime("52:56.5256"),
		"speed": 29,
		"color": Color.BLUE
	},
	{
		"name": "Tatum Franks",
		"time": getTime("57:21.5721"),
		"speed": 19,
		"color": Color.GREEN
	},
	{
		"name": "Xaviera Cummings",
		"time": getTime("45:35.4535"),
		"speed": 78,
		"color": Color.RED
	},
	{
		"name": "Noel Walsh",
		"time": getTime("21:05.215"),
		"speed": 68,
		"color": Color.BLUE
	},
	{
		"name": "Yvette Moreno",
		"time": getTime("41:28.4128"),
		"speed": 79,
		"color": Color.GREEN
	},
	{
		"name": "Miranda Crane",
		"time": getTime("01:39.139"),
		"speed": 88,
		"color": Color.RED
	},
	{
		"name": "Blake Delaney",
		"time": getTime("17:36.1736"),
		"speed": 47,
		"color": Color.BLUE
	},
	{
		"name": "Norman Berry",
		"time": getTime("47:31.4731"),
		"speed": 80,
		"color": Color.GREEN
	},
	{
		"name": "Dylan Bradford",
		"time": getTime("50:28.5028"),
		"speed": 77,
		"color": Color.RED
	},
	{
		"name": "Blythe Odom",
		"time": getTime("27:48.2748"),
		"speed": 98,
		"color": Color.BLUE
	},
	{
		"name": "Nehru Flores",
		"time": getTime("14:22.1422"),
		"speed": 88,
		"color": Color.GREEN
	},
	{
		"name": "Callum Sellers",
		"time": getTime("09:07.97"),
		"speed": 10,
		"color": Color.RED
	},
	{
		"name": "Camilla Thornton",
		"time": getTime("08:12.812"),
		"speed": 89,
		"color": Color.BLUE
	},
	{
		"name": "Addison Brown",
		"time": getTime("55:52.5552"),
		"speed": 8,
		"color": Color.GREEN
	},
	{
		"name": "Austin Weaver",
		"time": getTime("21:53.2153"),
		"speed": 65,
		"color": Color.RED
	},
	{
		"name": "Lunea Burgess",
		"time": getTime("49:34.4934"),
		"speed": 36,
		"color": Color.BLUE
	},
	{
		"name": "Yvonne Chavez",
		"time": getTime("36:23.3623"),
		"speed": 68,
		"color": Color.GREEN
	},
	{
		"name": "Sarah Henson",
		"time": getTime("59:11.5911"),
		"speed": 31,
		"color": Color.RED
	},
	{
		"name": "Charlotte Love",
		"time": getTime("27:33.2733"),
		"speed": 25,
		"color": Color.BLUE
	},
	{
		"name": "Devin Gordon",
		"time": getTime("51:34.5134"),
		"speed": 66,
		"color": Color.GREEN
	},
	{
		"name": "Erich Olson",
		"time": getTime("30:32.3032"),
		"speed": 10,
		"color": Color.RED
	},
	{
		"name": "Angelica Fox",
		"time": getTime("37:57.3757"),
		"speed": 68,
		"color": Color.BLUE
	},
	{
		"name": "Briar Morales",
		"time": getTime("53:44.5344"),
		"speed": 31,
		"color": Color.GREEN
	},
	{
		"name": "Addison Elliott",
		"time": getTime("10:52.1052"),
		"speed": 3,
		"color": Color.RED
	},
	{
		"name": "Hop Sims",
		"time": getTime("06:39.639"),
		"speed": 32,
		"color": Color.BLUE
	},
	{
		"name": "Ayanna Bean",
		"time": getTime("19:48.1948"),
		"speed": 93,
		"color": Color.GREEN
	},
	{
		"name": "Knox Barry",
		"time": getTime("40:47.4047"),
		"speed": 34,
		"color": Color.RED
	},
	{
		"name": "Rigel Moody",
		"time": getTime("28:08.288"),
		"speed": 41,
		"color": Color.BLUE
	},
	{
		"name": "Liberty Wong",
		"time": getTime("50:18.5018"),
		"speed": 14,
		"color": Color.GREEN
	},
	{
		"name": "Wanda Edwards",
		"time": getTime("08:56.856"),
		"speed": 20,
		"color": Color.RED
	},
	{
		"name": "Malachi Duran",
		"time": getTime("41:21.4121"),
		"speed": 58,
		"color": Color.BLUE
	},
	{
		"name": "Slade Wheeler",
		"time": getTime("43:51.4351"),
		"speed": 86,
		"color": Color.GREEN
	},
	{
		"name": "Amber Bean",
		"time": getTime("56:16.5616"),
		"speed": 66,
		"color": Color.RED
	},
	{
		"name": "Cherokee Wolf",
		"time": getTime("10:51.1051"),
		"speed": 67,
		"color": Color.BLUE
	},
	{
		"name": "Kiona Mathews",
		"time": getTime("50:15.5015"),
		"speed": 95,
		"color": Color.GREEN
	},
	{
		"name": "Dawn Turner",
		"time": getTime("00:05.05"),
		"speed": 16,
		"color": Color.RED
	},
	{
		"name": "Kasimir Bush",
		"time": getTime("23:42.2342"),
		"speed": 99,
		"color": Color.BLUE
	},
	{
		"name": "Jeanette Clemons",
		"time": getTime("19:54.1954"),
		"speed": 65,
		"color": Color.GREEN
	},
	{
		"name": "Lucian Schneider",
		"time": getTime("06:40.640"),
		"speed": 13,
		"color": Color.RED
	},
	{
		"name": "Cole Sexton",
		"time": getTime("25:08.258"),
		"speed": 99,
		"color": Color.BLUE
	},
	{
		"name": "Quyn Weber",
		"time": getTime("54:19.5419"),
		"speed": 58,
		"color": Color.GREEN
	},
	{
		"name": "Hanae Dickerson",
		"time": getTime("14:25.1425"),
		"speed": 33,
		"color": Color.RED
	},
	{
		"name": "Jemima Brennan",
		"time": getTime("34:09.349"),
		"speed": 43,
		"color": Color.BLUE
	},
	{
		"name": "Rhiannon Sharp",
		"time": getTime("44:54.4454"),
		"speed": 46,
		"color": Color.GREEN
	},
	{
		"name": "Candace Day",
		"time": getTime("08:47.847"),
		"speed": 5,
		"color": Color.RED
	},
	{
		"name": "Melanie Castro",
		"time": getTime("30:06.306"),
		"speed": 44,
		"color": Color.BLUE
	},
	{
		"name": "Zephania Glass",
		"time": getTime("23:28.2328"),
		"speed": 84,
		"color": Color.GREEN
	},
	{
		"name": "Flynn Thomas",
		"time": getTime("30:09.309"),
		"speed": 9,
		"color": Color.RED
	},
	{
		"name": "Brielle Lawson",
		"time": getTime("31:30.3130"),
		"speed": 48,
		"color": Color.BLUE
	},
	{
		"name": "Macey Morales",
		"time": getTime("25:30.2530"),
		"speed": 25,
		"color": Color.GREEN
	},
	{
		"name": "Halee Salazar",
		"time": getTime("24:08.248"),
		"speed": 90,
		"color": Color.RED
	},
	{
		"name": "Alice Daugherty",
		"time": getTime("20:54.2054"),
		"speed": 64,
		"color": Color.BLUE
	},
	{
		"name": "Unity Spears",
		"time": getTime("04:54.454"),
		"speed": 19,
		"color": Color.GREEN
	},
	{
		"name": "Stone Rocha",
		"time": getTime("15:49.1549"),
		"speed": 12,
		"color": Color.RED
	},
	{
		"name": "Emerald Glenn",
		"time": getTime("41:35.4135"),
		"speed": 24,
		"color": Color.BLUE
	},
	{
		"name": "Magee Pitts",
		"time": getTime("37:11.3711"),
		"speed": 63,
		"color": Color.GREEN
	},
	{
		"name": "Stewart Kelley",
		"time": getTime("25:53.2553"),
		"speed": 30,
		"color": Color.RED
	},
	{
		"name": "Dylan Carpenter",
		"time": getTime("42:54.4254"),
		"speed": 75,
		"color": Color.BLUE
	},
	{
		"name": "Timon Singleton",
		"time": getTime("04:34.434"),
		"speed": 85,
		"color": Color.GREEN
	},
	{
		"name": "Candice Booth",
		"time": getTime("41:18.4118"),
		"speed": 5,
		"color": Color.RED
	},
	{
		"name": "Tara Davenport",
		"time": getTime("58:10.5810"),
		"speed": 22,
		"color": Color.BLUE
	},
	{
		"name": "Libby Stewart",
		"time": getTime("13:29.1329"),
		"speed": 32,
		"color": Color.GREEN
	},
	{
		"name": "Ivan Harrison",
		"time": getTime("53:19.5319"),
		"speed": 51,
		"color": Color.RED
	},
	{
		"name": "Alyssa Mullen",
		"time": getTime("03:53.353"),
		"speed": 100,
		"color": Color.BLUE
	},
	{
		"name": "Lance Salinas",
		"time": getTime("47:33.4733"),
		"speed": 82,
		"color": Color.GREEN
	},
	{
		"name": "Susan Dawson",
		"time": getTime("46:08.468"),
		"speed": 83,
		"color": Color.RED
	},
	{
		"name": "Sheila Humphrey",
		"time": getTime("41:40.4140"),
		"speed": 14,
		"color": Color.BLUE
	},
	{
		"name": "Shelly Williamson",
		"time": getTime("01:33.133"),
		"speed": 48,
		"color": Color.GREEN
	},
	{
		"name": "Dorothy Barlow",
		"time": getTime("18:54.1854"),
		"speed": 72,
		"color": Color.RED
	},
	{
		"name": "Chandler Shepard",
		"time": getTime("01:51.151"),
		"speed": 89,
		"color": Color.BLUE
	},
	{
		"name": "Philip Rivera",
		"time": getTime("49:33.4933"),
		"speed": 86,
		"color": Color.GREEN
	},
	{
		"name": "Donovan Richards",
		"time": getTime("28:31.2831"),
		"speed": 25,
		"color": Color.RED
	},
	{
		"name": "Leah Hobbs",
		"time": getTime("45:56.4556"),
		"speed": 4,
		"color": Color.BLUE
	},
	{
		"name": "Porter Griffin",
		"time": getTime("23:40.2340"),
		"speed": 7,
		"color": Color.GREEN
	},
	{
		"name": "Camden Welch",
		"time": getTime("09:03.93"),
		"speed": 78,
		"color": Color.RED
	},
	{
		"name": "Cadman Gray",
		"time": getTime("32:50.3250"),
		"speed": 72,
		"color": Color.BLUE
	},
	{
		"name": "Hadley Brown",
		"time": getTime("38:21.3821"),
		"speed": 33,
		"color": Color.GREEN
	},
	{
		"name": "Thomas Guerra",
		"time": getTime("24:54.2454"),
		"speed": 36,
		"color": Color.RED
	},
	{
		"name": "Ivor Levy",
		"time": getTime("23:41.2341"),
		"speed": 64,
		"color": Color.BLUE
	},
	{
		"name": "Callie Hancock",
		"time": getTime("19:18.1918"),
		"speed": 50,
		"color": Color.GREEN
	},
	{
		"name": "Hoyt Buchanan",
		"time": getTime("25:17.2517"),
		"speed": 4,
		"color": Color.RED
	},
	{
		"name": "Cherokee Bonner",
		"time": getTime("05:56.556"),
		"speed": 5,
		"color": Color.BLUE
	},
	{
		"name": "Aphrodite Olsen",
		"time": getTime("12:52.1252"),
		"speed": 32,
		"color": Color.GREEN
	},
	{
		"name": "Brendan Thompson",
		"time": getTime("37:32.3732"),
		"speed": 51,
		"color": Color.RED
	},
	{
		"name": "Fritz Flowers",
		"time": getTime("10:32.1032"),
		"speed": 6,
		"color": Color.BLUE
	},
	{
		"name": "Kareem Jefferson",
		"time": getTime("28:33.2833"),
		"speed": 40,
		"color": Color.GREEN
	},
	{
		"name": "George Phillips",
		"time": getTime("23:54.2354"),
		"speed": 59,
		"color": Color.RED
	},
	{
		"name": "Oleg Armstrong",
		"time": getTime("27:25.2725"),
		"speed": 91,
		"color": Color.BLUE
	},
	{
		"name": "Anthony Jackson",
		"time": getTime("26:06.266"),
		"speed": 14,
		"color": Color.GREEN
	},
	{
		"name": "Lila Mcleod",
		"time": getTime("38:52.3852"),
		"speed": 89,
		"color": Color.RED
	},
	{
		"name": "Iliana Hanson",
		"time": getTime("38:57.3857"),
		"speed": 34,
		"color": Color.BLUE
	},
	{
		"name": "Cole Rhodes",
		"time": getTime("13:40.1340"),
		"speed": 17,
		"color": Color.GREEN
	},
	{
		"name": "Desirae Conway",
		"time": getTime("04:27.427"),
		"speed": 19,
		"color": Color.RED
	},
	{
		"name": "Finn Lott",
		"time": getTime("38:40.3840"),
		"speed": 0,
		"color": Color.BLUE
	},
	{
		"name": "Orlando Edwards",
		"time": getTime("54:05.545"),
		"speed": 65,
		"color": Color.GREEN
	},
	{
		"name": "Echo Dunlap",
		"time": getTime("48:24.4824"),
		"speed": 58,
		"color": Color.RED
	},
	{
		"name": "Christian Schwartz",
		"time": getTime("47:53.4753"),
		"speed": 16,
		"color": Color.BLUE
	},
	{
		"name": "Daniel Sanders",
		"time": getTime("51:20.5120"),
		"speed": 57,
		"color": Color.GREEN
	},
	{
		"name": "Gay Mccormick",
		"time": getTime("53:33.5333"),
		"speed": 39,
		"color": Color.RED
	},
	{
		"name": "Kasper Norton",
		"time": getTime("59:30.5930"),
		"speed": 45,
		"color": Color.BLUE
	},
	{
		"name": "Liberty Frye",
		"time": getTime("07:41.741"),
		"speed": 32,
		"color": Color.GREEN
	},
	{
		"name": "Miranda Riddle",
		"time": getTime("58:36.5836"),
		"speed": 6,
		"color": Color.RED
	},
	{
		"name": "Linus Lancaster",
		"time": getTime("58:42.5842"),
		"speed": 77,
		"color": Color.BLUE
	},
	{
		"name": "Damon Stephenson",
		"time": getTime("59:47.5947"),
		"speed": 55,
		"color": Color.GREEN
	},
	{
		"name": "Ella Irwin",
		"time": getTime("48:45.4845"),
		"speed": 82,
		"color": Color.RED
	},
	{
		"name": "Iliana Duke",
		"time": getTime("19:26.1926"),
		"speed": 38,
		"color": Color.BLUE
	},
	{
		"name": "Cally Wheeler",
		"time": getTime("43:58.4358"),
		"speed": 17,
		"color": Color.GREEN
	},
	{
		"name": "Herrod Daniel",
		"time": getTime("43:51.4351"),
		"speed": 14,
		"color": Color.RED
	},
	{
		"name": "Sebastian Thompson",
		"time": getTime("52:48.5248"),
		"speed": 30,
		"color": Color.BLUE
	},
	{
		"name": "Charde Porter",
		"time": getTime("50:56.5056"),
		"speed": 24,
		"color": Color.GREEN
	},
	{
		"name": "Rhonda Emerson",
		"time": getTime("18:10.1810"),
		"speed": 73,
		"color": Color.RED
	},
	{
		"name": "Phyllis Rose",
		"time": getTime("20:14.2014"),
		"speed": 92,
		"color": Color.BLUE
	},
	{
		"name": "Ferris Joseph",
		"time": getTime("00:30.030"),
		"speed": 46,
		"color": Color.GREEN
	},
	{
		"name": "Catherine Dunlap",
		"time": getTime("51:42.5142"),
		"speed": 13,
		"color": Color.RED
	},
	{
		"name": "Graiden Sargent",
		"time": getTime("36:08.368"),
		"speed": 71,
		"color": Color.BLUE
	},
	{
		"name": "Jenette Harrington",
		"time": getTime("57:38.5738"),
		"speed": 31,
		"color": Color.GREEN
	},
	{
		"name": "Vincent Houston",
		"time": getTime("20:51.2051"),
		"speed": 45,
		"color": Color.RED
	},
	{
		"name": "Geraldine Albert",
		"time": getTime("35:12.3512"),
		"speed": 90,
		"color": Color.BLUE
	},
	{
		"name": "Regina Frye",
		"time": getTime("23:35.2335"),
		"speed": 34,
		"color": Color.GREEN
	},
	{
		"name": "Hilary Ashley",
		"time": getTime("25:03.253"),
		"speed": 98,
		"color": Color.RED
	},
	{
		"name": "Lois Avery",
		"time": getTime("16:22.1622"),
		"speed": 10,
		"color": Color.BLUE
	},
	{
		"name": "Aaron Mccall",
		"time": getTime("46:30.4630"),
		"speed": 2,
		"color": Color.GREEN
	},
	{
		"name": "Hiroko Woods",
		"time": getTime("07:37.737"),
		"speed": 76,
		"color": Color.RED
	},
	{
		"name": "Keaton Barnett",
		"time": getTime("14:06.146"),
		"speed": 47,
		"color": Color.BLUE
	},
	{
		"name": "Michael Griffith",
		"time": getTime("40:33.4033"),
		"speed": 91,
		"color": Color.GREEN
	},
	{
		"name": "Ryder Higgins",
		"time": getTime("00:04.04"),
		"speed": 31,
		"color": Color.RED
	},
	{
		"name": "Erich Dunlap",
		"time": getTime("54:41.5441"),
		"speed": 99,
		"color": Color.BLUE
	},
	{
		"name": "Walker Lambert",
		"time": getTime("22:11.2211"),
		"speed": 22,
		"color": Color.GREEN
	},
	{
		"name": "Nevada Banks",
		"time": getTime("06:13.613"),
		"speed": 28,
		"color": Color.RED
	},
	{
		"name": "Aidan Huffman",
		"time": getTime("23:50.2350"),
		"speed": 39,
		"color": Color.BLUE
	},
	{
		"name": "Dorothy Mccall",
		"time": getTime("42:51.4251"),
		"speed": 43,
		"color": Color.GREEN
	},
	{
		"name": "Gay Dunn",
		"time": getTime("26:29.2629"),
		"speed": 16,
		"color": Color.RED
	},
	{
		"name": "Delilah Castaneda",
		"time": getTime("21:20.2120"),
		"speed": 76,
		"color": Color.BLUE
	},
	{
		"name": "Hedwig Fuller",
		"time": getTime("55:12.5512"),
		"speed": 20,
		"color": Color.GREEN
	},
	{
		"name": "Yuli Finch",
		"time": getTime("38:19.3819"),
		"speed": 76,
		"color": Color.RED
	},
	{
		"name": "Jaden Mercer",
		"time": getTime("26:42.2642"),
		"speed": 37,
		"color": Color.BLUE
	},
	{
		"name": "Katelyn Morris",
		"time": getTime("03:04.34"),
		"speed": 91,
		"color": Color.GREEN
	},
	{
		"name": "Timothy Terry",
		"time": getTime("58:46.5846"),
		"speed": 42,
		"color": Color.RED
	},
	{
		"name": "Erin Boyer",
		"time": getTime("56:10.5610"),
		"speed": 72,
		"color": Color.BLUE
	},
	{
		"name": "Melodie Cannon",
		"time": getTime("02:24.224"),
		"speed": 4,
		"color": Color.GREEN
	},
	{
		"name": "Ezra Webb",
		"time": getTime("08:46.846"),
		"speed": 66,
		"color": Color.RED
	},
	{
		"name": "Alana Brewer",
		"time": getTime("59:35.5935"),
		"speed": 2,
		"color": Color.BLUE
	},
	{
		"name": "Michael Cain",
		"time": getTime("44:43.4443"),
		"speed": 69,
		"color": Color.GREEN
	},
	{
		"name": "Karly Durham",
		"time": getTime("18:20.1820"),
		"speed": 87,
		"color": Color.RED
	},
	{
		"name": "Cassady Moses",
		"time": getTime("26:42.2642"),
		"speed": 7,
		"color": Color.BLUE
	},
	{
		"name": "Kai Duke",
		"time": getTime("27:42.2742"),
		"speed": 32,
		"color": Color.GREEN
	},
	{
		"name": "Patricia Wolfe",
		"time": getTime("47:26.4726"),
		"speed": 96,
		"color": Color.RED
	},
	{
		"name": "Shafira Douglas",
		"time": getTime("02:22.222"),
		"speed": 88,
		"color": Color.BLUE
	},
	{
		"name": "Melissa Wagner",
		"time": getTime("40:19.4019"),
		"speed": 77,
		"color": Color.GREEN
	},
	{
		"name": "Tiger Espinoza",
		"time": getTime("02:50.250"),
		"speed": 2,
		"color": Color.RED
	},
	{
		"name": "Justina Ayala",
		"time": getTime("16:56.1656"),
		"speed": 42,
		"color": Color.BLUE
	},
	{
		"name": "Barrett Lloyd",
		"time": getTime("41:53.4153"),
		"speed": 10,
		"color": Color.GREEN
	},
	{
		"name": "William Castaneda",
		"time": getTime("37:52.3752"),
		"speed": 72,
		"color": Color.RED
	},
	{
		"name": "Elizabeth Green",
		"time": getTime("31:35.3135"),
		"speed": 88,
		"color": Color.BLUE
	},
	{
		"name": "Demetrius Hays",
		"time": getTime("52:45.5245"),
		"speed": 1,
		"color": Color.GREEN
	},
	{
		"name": "Conan Maddox",
		"time": getTime("45:58.4558"),
		"speed": 70,
		"color": Color.RED
	},
	{
		"name": "Mikayla Pennington",
		"time": getTime("41:31.4131"),
		"speed": 6,
		"color": Color.BLUE
	},
	{
		"name": "Hasad Jacobs",
		"time": getTime("47:38.4738"),
		"speed": 20,
		"color": Color.GREEN
	},
	{
		"name": "Carissa Roth",
		"time": getTime("19:45.1945"),
		"speed": 29,
		"color": Color.RED
	},
	{
		"name": "Emi Elliott",
		"time": getTime("40:02.402"),
		"speed": 30,
		"color": Color.BLUE
	},
	{
		"name": "Kamal Boyer",
		"time": getTime("25:11.2511"),
		"speed": 88,
		"color": Color.GREEN
	},
	{
		"name": "Plato Pierce",
		"time": getTime("39:00.390"),
		"speed": 12,
		"color": Color.RED
	},
	{
		"name": "Raja Cervantes",
		"time": getTime("31:00.310"),
		"speed": 90,
		"color": Color.BLUE
	},
	{
		"name": "Hyatt Perkins",
		"time": getTime("44:16.4416"),
		"speed": 22,
		"color": Color.GREEN
	},
	{
		"name": "Mercedes Johnston",
		"time": getTime("07:10.710"),
		"speed": 92,
		"color": Color.RED
	},
	{
		"name": "Alden Crane",
		"time": getTime("24:21.2421"),
		"speed": 25,
		"color": Color.BLUE
	},
	{
		"name": "Doris Good",
		"time": getTime("28:13.2813"),
		"speed": 26,
		"color": Color.GREEN
	},
	{
		"name": "Emerson Odom",
		"time": getTime("53:07.537"),
		"speed": 65,
		"color": Color.RED
	},
	{
		"name": "Nell Bird",
		"time": getTime("37:23.3723"),
		"speed": 42,
		"color": Color.BLUE
	},
	{
		"name": "Craig Baxter",
		"time": getTime("55:23.5523"),
		"speed": 88,
		"color": Color.GREEN
	},
	{
		"name": "Kennan Trevino",
		"time": getTime("55:22.5522"),
		"speed": 32,
		"color": Color.RED
	},
	{
		"name": "Odysseus Graham",
		"time": getTime("50:23.5023"),
		"speed": 30,
		"color": Color.BLUE
	},
	{
		"name": "Herman Case",
		"time": getTime("33:26.3326"),
		"speed": 59,
		"color": Color.GREEN
	},
	{
		"name": "Kitra Brooks",
		"time": getTime("38:12.3812"),
		"speed": 23,
		"color": Color.RED
	},
	{
		"name": "Yardley Mills",
		"time": getTime("14:04.144"),
		"speed": 13,
		"color": Color.BLUE
	},
	{
		"name": "Fallon Skinner",
		"time": getTime("57:30.5730"),
		"speed": 78,
		"color": Color.GREEN
	},
	{
		"name": "Larissa Valentine",
		"time": getTime("33:15.3315"),
		"speed": 17,
		"color": Color.RED
	},
	{
		"name": "Erin Mooney",
		"time": getTime("09:00.90"),
		"speed": 95,
		"color": Color.BLUE
	},
	{
		"name": "Aidan Powers",
		"time": getTime("15:28.1528"),
		"speed": 99,
		"color": Color.GREEN
	},
	{
		"name": "Peter Barton",
		"time": getTime("40:28.4028"),
		"speed": 97,
		"color": Color.RED
	},
	{
		"name": "Vanna Elliott",
		"time": getTime("24:54.2454"),
		"speed": 21,
		"color": Color.BLUE
	},
	{
		"name": "Xander Neal",
		"time": getTime("36:28.3628"),
		"speed": 47,
		"color": Color.GREEN
	},
	{
		"name": "Henry Rodriquez",
		"time": getTime("49:38.4938"),
		"speed": 44,
		"color": Color.RED
	},
	{
		"name": "Fletcher Morrow",
		"time": getTime("30:15.3015"),
		"speed": 5,
		"color": Color.BLUE
	},
	{
		"name": "Pearl Page",
		"time": getTime("21:58.2158"),
		"speed": 28,
		"color": Color.GREEN
	},
	{
		"name": "Darrel Rosales",
		"time": getTime("35:14.3514"),
		"speed": 94,
		"color": Color.RED
	},
	{
		"name": "Charles Parks",
		"time": getTime("15:33.1533"),
		"speed": 74,
		"color": Color.BLUE
	},
	{
		"name": "Griffin Herrera",
		"time": getTime("01:54.154"),
		"speed": 74,
		"color": Color.GREEN
	},
	{
		"name": "Herman Simon",
		"time": getTime("07:42.742"),
		"speed": 30,
		"color": Color.RED
	},
	{
		"name": "Norman Burks",
		"time": getTime("55:27.5527"),
		"speed": 59,
		"color": Color.BLUE
	},
	{
		"name": "Tyrone Mcmillan",
		"time": getTime("55:58.5558"),
		"speed": 84,
		"color": Color.GREEN
	},
	{
		"name": "John Bruce",
		"time": getTime("17:44.1744"),
		"speed": 83,
		"color": Color.RED
	},
	{
		"name": "Mariam Hunt",
		"time": getTime("36:56.3656"),
		"speed": 7,
		"color": Color.BLUE
	}
]