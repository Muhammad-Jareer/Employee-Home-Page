import React, { useState } from 'react';
import Header from '../components/Header';
import ProfileImage from '../components/ProfileImage';
import EditableField from '../components/EditableField';
import Popup from '../components/Popup';
import ButtonsSection from '../components/ButtonsSection';

const EmployeeHomePage = () => {
  const [employee, setEmployee] = useState({
    firstName: 'Kamran',
    lastName: '',
    username: '',
    email: '',
    address: '',
    mobile: '',
    workStatus: '',
    profileImage: null,
  });

  const [isPermanentBranchPopupOpen, setPermanentBranchPopupOpen] = useState(false);
  const [isTemporaryBranchPopupOpen, setTemporaryBranchPopupOpen] = useState(false);
  const [isRequestForTemporaryBranch, setRequestForTemporaryBranch] = useState(false);
  const [isWorkHoursPopupOpen, setWorkHoursPopupOpen] = useState(false);

  const handleLogout = () => {
    // Logout logic
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setEmployee({
        ...employee,
        profileImage: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <Header firstName={employee.firstName} handleLogout={handleLogout} />
      <section className="mt-6 p-4 bg-white shadow-md rounded-md w-full max-w-2xl flex flex-col items-center">
        <ProfileImage profileImage={employee.profileImage} handleImageChange={handleImageChange} />
        <div className="w-full flex flex-col items-center">
          <EditableField label="First Name" name="firstName" type="text" value={employee.firstName} handleChange={handleChange} />
          <EditableField label="Last Name" name="lastName" type="text" value={employee.lastName} handleChange={handleChange} />
          <EditableField label="Username" name="username" type="text" value={employee.firstName + 123} handleChange={handleChange} />
          <EditableField label="Email" name="email" type="email" value={employee.email} handleChange={handleChange} />
          <EditableField label="Address" name="address" type="text" value={employee.address} handleChange={handleChange} />
          <EditableField label="Mobile" name="mobile" type="number" value={employee.mobile} handleChange={handleChange} />
          <EditableField
            label="Work Status"
            name="workStatus"
            value={employee.workStatus}
            handleChange={handleChange}
            type="select"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </EditableField>
        </div>
      </section>
      <ButtonsSection
        openPermanentBranch={() => setPermanentBranchPopupOpen(true)}
        openTemporaryBranch={() => setTemporaryBranchPopupOpen(true)}
        openRequestBranch={() => setRequestForTemporaryBranch(true)}
        openWorkHours={() => setWorkHoursPopupOpen(true)}
      />

      <Popup
        title="Permanent Branch Details"
        address="KTS, Sector#3, Haripur"
        Phone="Phone: 0300-1234567"
        button="close"
        isOpen={isPermanentBranchPopupOpen}
        onClose={() => setPermanentBranchPopupOpen(false)}
      />
      <Popup
        title="Temporary Branch Details"
        address="G5, Islamabad"
        Phone="Phone: 0300-1234567"
        button="close"
        isOpen={isTemporaryBranchPopupOpen}
        onClose={() => setTemporaryBranchPopupOpen(false)}
      />
      <Popup
        title="Request Temporary Branch"
        address="G5, Islamabad"
        button="Request"
        isOpen={isRequestForTemporaryBranch}
        onClose={() => setRequestForTemporaryBranch(false)}
      />
      <Popup
        title="Add Preferred Work Hours"
        morning="Morning: 9-5"
        evening="Evening: 6-2"
        button="close"
        isOpen={isWorkHoursPopupOpen}
        onClose={() => setWorkHoursPopupOpen(false)}
      />
    </div>
  );
};

export default EmployeeHomePage;
