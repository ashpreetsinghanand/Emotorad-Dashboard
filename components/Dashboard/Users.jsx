import { useEffect, useState } from "react";
import Modal from "./Modal";
import UpdateModal from "./UpdateModal";

const Users = () => {
  const [userData, setUserData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal,setShowUpdateModal]=useState(false);
  const [updateId,setUpdateId] = useState();
  const [updateName,setUpdateName] = useState();
  const [updateEmail,setUpdateEmail] = useState();
  const [updateContact,setUpdateContact] = useState();
  const [updateInstagram,setUpdateInstagram] = useState();
  const [updateYoutube,setUpdateYoutube] = useState();

  function closeShowModal(e) {
    e.preventDefault();
    setShowModal(false);
  }

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };
  function closeShowUpdateModal(e) {
    e.preventDefault();
    setShowUpdateModal(false);
  }

  const toggleShowUpdateModal = () => {
    setShowUpdateModal(!showUpdateModal);
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = localStorage.getItem('email');
        const response = await fetch('/api/fetchUserData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userData]);

  const handleEdit = (userId,name,email,contact,ig,yt) => {
    setUpdateId(userId);
    setUpdateName(name);
    setUpdateEmail(email);
    setUpdateContact(contact)
    setUpdateInstagram(ig)
    setUpdateYoutube(yt)
    toggleShowUpdateModal();
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch('/api/deleteUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        // If deletion is successful, reload the page
        window.location.reload();
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='px-5'>
      <h1 className="text-center text-3xl font-[400]">User Details</h1>
      {userData && userData.length > 0 ? (
        <table className='border-collapse w-full mt-4'>
          <thead>
            <tr>
              <th className='border border-gray-400 px-4 py-2'>Name</th>
              <th className='border border-gray-400 px-4 py-2'>Email</th>
              <th className='border border-gray-400 px-4 py-2'>Contact</th>
              <th className='border border-gray-400 px-4 py-2'>Instagram</th>
              <th className='border border-gray-400 px-4 py-2'>YouTube</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.sno}>
                <td className='border text-center border-gray-400 px-4 py-2'>{user.u_name}</td>
                <td className='border text-center border-gray-400 px-4 py-2'>{user.u_email}</td>
                <td className='border text-center border-gray-400 px-4 py-2'>{user.u_contact}</td>
                <td className='border text-center border-gray-400 px-4 py-2'>{user.u_instagram}</td>
                <td className='border text-center border-gray-400 px-4 py-2'>{user.u_youtube}</td>
                <td>
                  <button className='mx-1 border text-center rounded-md border-gray-400 p-1' onClick={() => handleEdit(user.sno,user.u_name,user.u_email,user.u_contact,user.u_instagram,user.u_youtube)}>Edit</button>
                  <button className='border text-center rounded-md bg-red-400 text-white border-gray-400 p-1' onClick={() => handleDelete(user.sno)}>Del</button>
                </td>
              </tr>
            ))}
          </tbody>
          {showUpdateModal && (
                <UpdateModal
                  setShowUpdateModal={setShowUpdateModal}
                  closeShowUpdateModal={closeShowUpdateModal}
                  updateId={updateId}
                  u_name={updateName}
                  u_email={updateEmail}
                  u_contact={updateContact}
                  u_instagram={updateInstagram}
                  u_youtube={updateYoutube}
                />
              )}
        </table>
      ) : (
        <div>
        <p className="text-center mt-4 text-xl font-[400]">No user is added.</p>
        <div className='flex w-full gap-x-10 justify-center mt-5'>
        
        <div className='w-1/2 bg-slate-50 rounded-xl h-60 shadow-lg border-gray-200 border p-5 flex flex-col justify-center align-middle '>
          <div className='flex flex-col gap-y-4'>
            <div className='flex justify-center'>
            <button className='rounded-full w-fit bg-gray-200  py-1 px-5 text-[48px] text-gray-700' onClick={toggleShowModal}>
            +
            </button>
            </div>
            <button className='text-gray-400' onClick={toggleShowModal}>Add Profile</button>

          </div>
        </div>
      </div>
          {showModal && (
                <Modal
                  setShowModal={setShowModal}
                  closeShowModal={closeShowModal}
                />
              )}
             
        </div>
      )}
    </div>
  );
};

export default Users;
