const DepartmentsApi = async () => {
  let data = await fetch('http://localhost:3001/departments');
  data = await data.json();

  return data
}

export default DepartmentsApi
