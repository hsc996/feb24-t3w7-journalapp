import EntryForm from "../components/EntryForm";
import LastestXPosts from "../components/LatestXPosts";

export default function HomePage(){

	return(
		<>
			<h1>Journal Home Page</h1>
			{/* New post form: */}
			<EntryForm />
            <LastestXPosts />

			{/* Latest X amount of posts: */}
		</>
	);
}