const { useRouter } = require("next/router");

const details = [
  { id: "1", name: "Yash", role: "Senior Developer" },
  { id: "2", name: "Vaibhav", role: "Backend Developer" },
  { id: "3", name: "Suresh", role: "Frontend Developer" },
];

function DeveloperDetail(){
    const router=useRouter();
    const {id}=router.query;
    const dev=details.find((d)=>d.id===id);

    if(!id)return <p>Loading...</p>
    if(!dev)return <h2>Developer doesn't exist</h2>;
    return <>
    <h2>Name:{dev.name}</h2>
    <p>Role:{dev.role}</p>
    </>
}
export default DeveloperDetail;