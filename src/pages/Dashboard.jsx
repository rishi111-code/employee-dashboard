import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import SortDropdown from "../components/SortDropdown";
import StatisticsCard from "../components/StatisticsCard";

import useEmployees from "../hooks/useEmployees";
import useDebounce from "../hooks/useDebounce";

import { filterEmployees } from "../utils/filter";
import { sortEmployees } from "../utils/sort";

function Dashboard() {

const {

employees,

loading,

error

}=useEmployees();

const [search,setSearch]=useState("");

const [gender,setGender]=useState("All");

const [age,setAge]=useState("All");

const [sort,setSort]=useState("");

const debouncedSearch=useDebounce(search,400);

const filteredEmployees=useMemo(()=>{

let result=filterEmployees(

employees,

debouncedSearch,

gender,

age

);

result=sortEmployees(result,sort);

return result;

},[

employees,

debouncedSearch,

gender,

age,

sort

]);

const totalEmployees=employees.length;

const activeEmployees=employees.filter(

e=>e.status==="Active"

).length;

const inactiveEmployees=employees.filter(

e=>e.status==="Inactive"

).length;

const maleEmployees=employees.filter(

e=>e.gender==="male"

).length;

const femaleEmployees=employees.filter(

e=>e.gender==="female"

).length;

return(

<>

<Navbar/>

<div className="container">

<h1 className="page-title">

Employee Dashboard

</h1>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px",
marginBottom:"30px"
}}
>

<StatisticsCard

title="Total Employees"

value={totalEmployees}

color="#2563eb"

/>

<StatisticsCard

title="Active"

value={activeEmployees}

color="#16a34a"

/>

<StatisticsCard

title="Inactive"

value={inactiveEmployees}

color="#dc2626"

/>

<StatisticsCard

title="Male"

value={maleEmployees}

color="#9333ea"

/>

<StatisticsCard

title="Female"

value={femaleEmployees}

color="#ec4899"

/>

</div>

<div
style={{
display:"flex",
gap:"20px",
flexWrap:"wrap",
marginBottom:"30px",
alignItems:"center"
}}
>

<SearchBar

value={search}

onChange={setSearch}

/>

<FilterBar

gender={gender}

setGender={setGender}

age={age}

setAge={setAge}

/>

<SortDropdown

sort={sort}

setSort={setSort}

/>

</div>

{
loading?

<Loader/>

:

error?

<h2>{error}</h2>

:

<div className="grid">

{

filteredEmployees.map(employee=>

<EmployeeCard

key={employee.id}

employee={employee}

onDelete={()=>{}}

/>

)

}

</div>

}

</div>

</>

)

}

export default Dashboard;