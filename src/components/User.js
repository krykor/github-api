import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, cleanUser } from '../store';

import UserAddForm from './add-user/UserAddForm';
import UserInformation from './show-user/UserInformation';
import Loader from './Spinner';
import Error from './Error';

export const User = () => {
  const loading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);
  const userData = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const getUserData = userId => dispatch(fetchUser(userId));
  const cleanUserData = () => dispatch(cleanUser());

  if (error) return <Error onBack={cleanUserData} />;
  if (loading) return <Loader />;

  return userData.userId ? (
    <UserInformation userData={userData} onBack={cleanUserData} />
  ) : (
    <UserAddForm getUser={getUserData} />
  );
};
