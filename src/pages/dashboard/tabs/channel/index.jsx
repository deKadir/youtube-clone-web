import React, { useState } from 'react';
import { Formik } from 'formik';
import { Avatar, Button } from 'components';
import { FileInput, FormInput, FormResponse } from 'components/form';
import { useSelector } from 'react-redux';
import { getProfile } from 'helpers/file';
import styles from './channel.module.scss';
import Schema from 'validations/UpdateSchema';
import requests from 'constants/api';

export default function DashboardChannelTab() {
  const { name, image } = useSelector((state) => state?.user?.info);
  const FORM = { name, image };
  const avatar = getProfile(image);

  const [response, setResponse] = useState();
  const [newProfile, setProfile] = useState();

  const handleProfile = (e) => setProfile(e.target.files[0]);

  const sendRequest = async (values) => {
    if (newProfile && newProfile.type.split('/')[0] !== 'image') {
      return setResponse({
        success: false,
        message: 'Invalid file',
      });
    }
    const formData = new FormData();
    formData.set('name', values.name);
    formData.set('image', newProfile);

    const { data } = await requests.channel.update(formData);
    if (data?.success) {
      setResponse({ success: true, message: 'Updated successfully!' });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Channel </h2>
      <div className={styles.content}>
        <Formik
          initialValues={FORM}
          onSubmit={sendRequest}
          validationSchema={Schema}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form className={styles.channelInfo} onSubmit={handleSubmit}>
              <Avatar size="240" src={avatar} />
              <FileInput
                placeholder="Change channel image"
                onChange={handleProfile}
              />
              {inputs.map((input, key) => (
                <FormInput
                  {...input}
                  key={key}
                  onChange={handleChange}
                  value={values[input.name]}
                  error={errors[input.name]}
                />
              ))}
              <FormResponse {...response} />
              <Button variant="contained" type="submit">
                Update
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

const inputs = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
  },
];
