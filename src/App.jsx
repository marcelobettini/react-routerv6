import { Link, Outlet, Route } from 'react-router-dom';
function App() {


  return (
    <>
      <h1>Bookkeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to='/invoices'>Invoices</Link> | {" "}
        <Link to='/expenses'>Expenses</Link> | {" "}
        <Link to='/protected'>Protected</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
