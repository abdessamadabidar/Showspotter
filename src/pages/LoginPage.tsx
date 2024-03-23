import {LoginCard} from "../custom/ui/LoginCard.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../state/store.ts";
import LoadingProgress from "../custom/ui/LoadingProgress.tsx";

export default function LoginPage() {
	const  appIsLoading: boolean = useSelector((state: RootState) => state.applicationLoading.isLoading);

	if (appIsLoading) {
		return (
			<LoadingProgress />
		);
	}
	return <div className="w-screen h-[100vh] grid items-center justify-center" >
		<LoginCard />
	</div>
}