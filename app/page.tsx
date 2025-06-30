import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="w-full  h-full border-2  border-red-600 flex flex-col items-center justify-start">
			<div className=" space-y-4">
				<h1>O BAINC</h1>
				<Button variant={"subscribe"}>Inscreva-se</Button>
			</div>
		</div>
	);
}
