import SignUpCard from "../custom/ui/SignUpCard.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../state/store.ts";
import LoadingProgress from "../custom/ui/LoadingProgress.tsx";

export default function SignUpPage() : JSX.Element {
	const  appIsLoading: boolean = useSelector((state: RootState) => state.applicationLoading.isLoading);

	if (appIsLoading) {
		return (
			<LoadingProgress />
		);
	}
	return (
		<div className="w-screen h-[100vh] grid items-center justify-center" >
			<SignUpCard />
		</div>
	);
}