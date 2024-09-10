import "../app/globals.css"
export default function ProfileSection({ profile }) {
    function extractDate(isoString) {
        const date = new Date(isoString);
        return date.toLocaleDateString(); 
    }
    
    return (
    <>
        <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4 grid grid-cols-2">
            <div className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight col-span-1 focus:outline-none focus:shadow-outline">
                Name:{profile.name}
            </div>
            <div className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight col-span-1 focus:outline-none focus:shadow-outline">
                dob:{extractDate(profile.dob)}
            </div>
            <div className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight col-span-2 focus:outline-none focus:shadow-outline">
                1 Thing I can Teach:{profile.teach}
            </div>
            <div className="shadow appearance-none border rounded py-2 px-3 m-2 text-gray-700 leading-tight col-span-2 focus:outline-none focus:shadow-outline">
                1 Thing I want to learn:{profile.learn}
            </div>
            </div>
        </div>
    </>
    
  );
} 