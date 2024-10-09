import React, { useEffect, useState } from 'react';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Bounce } from 'react-toastify';

const View = () => {
  const [record, setRecord] = useState([]);
  const [filteredRecord, setFilteredRecord] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [mdelete, setMDelete] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users')) || [];
    setRecord(data);
    setFilteredRecord(data);
  }, []);

  const deleteUser = (id) => {
    const updatedRecords = record.filter((val) => val.id !== id);
    localStorage.setItem('users', JSON.stringify(updatedRecords));
    toast.error("User deleted successfully.");
    setRecord(updatedRecords);
    setFilteredRecord(updatedRecords);
  };

  const filterData = (status) => {
    const updatedRecords = record.filter((val) => val.status === status);
    setFilteredRecord(status === '' ? record : updatedRecords);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = record.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
    setFilteredRecord(filtered);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    setFilteredRecord(sortRecords(filteredRecord, value));
  };

  const sortRecords = (records, order) => {
    if (order === 'az') {
      return [...records].sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'za') {
      return [...records].sort((a, b) => b.name.localeCompare(a.name));
    }
    return records;
  };

  const alldelete = (id, checked) => {
    let all = [...mdelete];
    if (checked) {
      all.push(id);
    } else {
      all = all.filter((val) => val !== id);
    }
    setMDelete(all);
  };

  const deletemultiple = () => {
    if (mdelete.length === 0) {
      toast.warn("Minimum 1 row should be selected.");
      return false;
    }
    let md = record.filter((val) => !mdelete.includes(val.id));
    localStorage.setItem('users', JSON.stringify(md));
    setRecord(md);
    setFilteredRecord(md);
    setMDelete([]);
    toast.error("Users deleted successfully.");
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="card shadow mx-auto p-5" style={{ width: '100rem', overflow: 'hidden' }}>
            <form className="mb-3 mt-3 d-flex align-items-center">
              <div className="col-lg-4">
                <select className="p-1 form-select" onChange={(e) => filterData(e.target.value)}>
                  <option value="">--- Select ---</option>
                  <option value="active">Active</option>
                  <option value="unactive">Unactive</option>
                </select>
              </div>
              <div className="col-lg-4 me-3">
                <input
                  type="text"
                  className="ms-3 form-control"
                  placeholder="Search here"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
              <div className="col-lg-4">
                <select className="ms-3 p-1 form-select" onChange={handleSort}>
                  <option value="">--- Select Sort ---</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                </select>
              </div>
            </form>
            <table className="table border mt-3 table">
              <thead>
                <tr align="center">
                  <th scope="col">Sr no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Course</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                  <th scope="col">
                    <button className='btn btn-dark btn-sm' onClick={deletemultiple}>Delete</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredRecord.map((val, index) => (
                  <tr key={val.id} align="center">
                    <td>{index + 1}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.gender}</td>
                    <td>{val.courses.join(', ')}</td>
                    <td>{val.date}</td>
                    <td>{val.status}</td>
                    <td>
                      <button
                        className="btn btn-dark btn-sm me-3"
                        onClick={() => deleteUser(val.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-dark btn-sm ms-1"
                        onClick={() => navigate('/edit', { state: val })}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <input type="checkbox" onChange={(e) => alldelete(val.id, e.target.checked)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default View;