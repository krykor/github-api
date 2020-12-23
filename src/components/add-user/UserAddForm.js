import React, { useState } from 'react';
import { useFormik } from 'formik';

import ProjectDescription from './ProjectDescription';

const UserAddForm = ({ getUser }) => {
  const [isProjectDescription, setProjectDescription] = useState(false);
  console.log(isProjectDescription);

  const formik = useFormik({
    initialValues: {
      user: '',
    },
    onSubmit: values => {
      getUser(values.user);
    },
    validate: values => {
      const errors = {};

      if (!values.user) {
        errors.user = 'Podaj użytkownika';
      } else if (!/^[0-9a-zA-Z-]+[0-9a-zA-Z]{1}$/i.test(values.user)) {
        errors.user =
          'Nazwa użytkownika musi składać się minimum z dwóch małych i wielkich liter/cyfr oraz myślnika (myślnik nie może znajdować się na końcu)!';
      }
      console.log(errors);

      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="login">
      {formik.errors.user ? (
        <p className="login__text login__text-error">
          Błąd: {formik.errors.user}
        </p>
      ) : null}
      <input
        className={`login__input ${formik.errors.user && 'login__input-error'}`}
        id="user"
        name="user"
        type="user"
        placeholder="Github login"
        onChange={formik.handleChange}
        value={formik.values.user}
      />
      <button
        type="submit"
        className={formik.errors.user ? 'button button__disabled' : 'button'}
      >
        Znajdź
      </button>
      <button
        className="button button__description"
        onClick={() => setProjectDescription(true)}
      >
        Sprawdź założenia projektu
      </button>
      {isProjectDescription && (
        <ProjectDescription onBack={() => setProjectDescription(false)} />
      )}
    </form>
  );
};

export default UserAddForm;
