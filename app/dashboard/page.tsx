import Calendar from '@/app/dashboard/calendar'
import Food from '@/app/dashboard/food'


export default function Page() {
	return (	     
		<>

			<Calendar />

		    <div className="flex h-full w-xl shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
		    <div className="text-xl font-semibold">Calories</div>

		    	{/*Protein*/}
		   		<div className="flex h-15 w-30 rounded-lg bg-red-50">
		   			<div className="text-xl">Protein</div>

		   		</div>


		    	{/*Carbs*/}
		   		<div className="flex h-15 w-30 rounded-lg bg-red-50">
		   			<div className="text-xl">Carbs</div>
		   			
		   		</div>


		    	{/*Fats*/}
		   		<div className="flex h-15 w-30 rounded-lg bg-red-50">
		   			<div className="text-xl">Fats</div>
		   			
		   		</div>
			</div>

			<div className="flex flex-col items-center rounded-md border-4 bg-red-50 h-100 w-xl">
				<Food />
			</div>




		</>
	)
}