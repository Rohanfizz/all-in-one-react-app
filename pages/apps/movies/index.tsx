import SearchBar from "../../../Components/Movies/SearchBar";
import AllFavBtn from "../../../Components/Movies/AllFavbtn";
import MoviesContainer from "../../../Components/Movies/MoviesContainer";
import MovieObj from "../../../models/Movie";
import { useEffect, useState } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { fetchMovies, sendMovies } from "../../../store/movies-actions";
import { uiActions } from "../../../store/ui-slice";
import Router  from "next/router";

const DUMMY_MOVIES: MovieObj[] = [
	new MovieObj(
		"1",
		"name1",
		"Ashu",
		"Rohan",
		"nov 3",
		"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
		true
	),
	new MovieObj(
		"2",
		"name2",
		"PP",
		"Rohan",
		"may 3",
		"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
		false
	),
	new MovieObj(
		"3",
		"name3",
		"Elham",
		"Rohan",
		"june 3",
		"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
		false
	),
	new MovieObj(
		"4",
		"name4",
		"Vanshika",
		"Rohan",
		"july 3",
		"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
		false
	),
];

let isInitial = true;

const Movies: React.FC<{ allMovies: any[] }> = (props) => {
	// const router = useRouter();
	const dispatch = useDispatch();
	const movies = useSelector((state: RootStateOrAny) => state.movies);
	
	const email = useSelector((state: RootStateOrAny) => state.auth.email);
	const [finalMovies, setFinalMovies] = useState(props.allMovies);
	
	
	

	const moviesFetcher = async (e: React.MouseEvent) => {
		dispatch(uiActions.showLoading());
		setFinalMovies([]);
		const response = await fetch("https://swapi.dev/api/films/");
		if (!response.ok) {
			throw new Error("movies error");
		}
		const data = await response.json();
		setFinalMovies(data.results);
		dispatch(uiActions.stopLoading());
	};

	const favSelected = (isFav: boolean) => {
		if (isFav) {
			setFinalMovies(
				props.allMovies.filter((item) =>
					movies.fav.includes(item.episode_id)
				)
			);
		} else {
			setFinalMovies(props.allMovies);
		}
	};

	const updateResults = (value: string) => {
		if (value === "") {
			setFinalMovies(props.allMovies);
			return;
		}
		setFinalMovies(
			finalMovies.filter((movie) => movie.title.includes(value))
		);
		console.log(finalMovies);
	};

	
	useEffect(() => {
		dispatch(fetchMovies(email));
		
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}
		if (movies.changed) {
			dispatch(sendMovies(movies.fav, email));
		}
	}, [movies.fav]);


	return (
		<div>
			<SearchBar
				moviesFetcher={moviesFetcher}
				updateResults={updateResults}
			/>
			<AllFavBtn favSelected={favSelected} />
			<MoviesContainer items={finalMovies} />
		</div>
	);
};

export async function getStaticProps() {
	
	const response = await fetch("https://swapi.dev/api/films/");
	if (!response.ok) {
		throw new Error("movies error");
		return [];
	}
	const data = await response.json();

	return {
		props: {
			allMovies: data.results,
		},
	};
}

export default Movies;
