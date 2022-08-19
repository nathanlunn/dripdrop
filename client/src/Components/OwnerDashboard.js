import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function OwnerDashboard({state}) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000)
  }, [])

  return (
    <div>
      {(state.user.owner || state.owner.authorized) ? (
        <div>

        </div>
      ) : (
        <div>
          <h1>Sorry, You Are Not Authorized For This Page!</h1>
          <p>Redirecting you to the home page...</p>
        </div>
      )}
    </div>
  );
}

export default OwnerDashboard;