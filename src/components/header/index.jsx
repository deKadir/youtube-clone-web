import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { SvgHeader, SvgSearch } from 'assets/icons';
import { Avatar, Button, Icon } from 'components';
import { getProfile } from 'helpers/file';
import Popup from 'components/popup';
import {
  FileInput,
  Form,
  FormCheckbox,
  FormInput,
  FormResponse,
  FormSelect,
  FormTextarea,
} from 'components/form';
import { UploadVideoSchema } from 'validations/VideoSchema';
import styles from './header.module.scss';
import requests from 'constants/api';
import { useAuthenticate } from 'hooks/access';

export default function Header() {
  const user = useSelector((state) => state?.user?.info);
  const navigate = useNavigate();
  const auth = useAuthenticate();
  const profile = getProfile(user?.image);
  const [active, setActive] = useState(false);
  return (
    <header className={styles.container}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <Icon icon="Menu" />
          <Link to="/">
            <SvgHeader />
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className={styles.headerRight}>
          {auth ? (
            <>
              <Icon icon="Upload" onClick={() => setActive(true)} />
              <Avatar src={profile} />
            </>
          ) : (
            <Button variant="outlined" onClick={() => navigate('/signin')}>
              Login
            </Button>
          )}
        </div>
      </div>
      <VideoUpload active={active} setActive={setActive} />
    </header>
  );
}

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => setSearch(e.target.value.replace(' ', '+'));

  const handleSearch = () =>
    search.length ? navigate(`/search?search=${search}`) : '';
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        onKeyPress={(e) => e.code === 'Enter' && handleSearch()}
      />
      <button
        className={styles.searchButton}
        title="Search"
        onClick={handleSearch}
      >
        <SvgSearch />
      </button>
    </div>
  );
};

const VideoUpload = ({ active, setActive }) => {
  const [response, setResponse] = useState();
  const [categories, setCategories] = useState();
  const [video, setVideo] = useState({ video: '', thumbnail: '' });
  const form = new FormData();

  const FORM = {
    title: '',
    caption: '',
    category: categories ? categories[0]?.value : 'loading...',
    private: false,
    commentSettings: 'Enabled',
  };

  const handleFile = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.files[0] });
  };

  const sendRequest = async (values) => {
    setResponse({ success: true, message: 'Uploading video please wait...' });
    //check fileTypes
    if (video.video?.type.split('/')[0] !== 'video')
      return setResponse({
        success: false,
        message: 'Invalid video file type',
      });
    if (video.thumbnail?.type.split('/')[0] !== 'image')
      return setResponse({
        success: false,
        message: 'Invalid thumbnail file type',
      });

    const allValues = { ...values, ...video };
    //set formdata
    for (const key of Object.keys(allValues)) {
      const value = allValues[key];
      if (!value && typeof value !== 'boolean')
        return setResponse({
          success: false,
          message: `${key} is not provided`,
        });
      form.set(key, value);
    }
    const { data } = await requests.video.upload(form);
    if (data?.success) {
      setResponse({ success: true, message: 'Video uploaded successfully!' });
      setTimeout(() => window.location.reload(), 1000);
    }
  };

  const getCategories = async () => {
    const { data } = await requests.category.list();
    if (data?.success) {
      const result = data.categories.map((c) => ({
        name: c.title,
        value: c._id,
      }));
      setCategories(result);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  const inputs = [
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      Component: FormInput,
    },
    {
      label: 'Caption',
      name: 'caption',
      style: {
        height: '200px',
      },
      Component: FormTextarea,
    },
    {
      label: 'Private',
      name: 'private',
      Component: FormCheckbox,
    },
    {
      label: 'Category',
      name: 'category',
      Component: FormSelect,
      values: categories,
    },
  ];

  return (
    <Popup active={active} handleActive={setActive}>
      <Formik
        onSubmit={sendRequest}
        initialValues={FORM}
        validationSchema={UploadVideoSchema}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <FileInput
              name="thumbnail"
              onChange={handleFile}
              label="Upload thumbnail image"
            />
            <FileInput
              name="video"
              onChange={handleFile}
              label="Upload video"
            />
            {inputs.map(({ Component, ...props }) => (
              <Component
                {...props}
                value={values[props.name]}
                error={errors[props.name]}
                onChange={handleChange}
              />
            ))}
            <FormResponse {...response} />
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              Upload
            </Button>
          </Form>
        )}
      </Formik>
    </Popup>
  );
};
