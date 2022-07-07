import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import {
  StyledForm,
  Input,
  Button,
  ErrorText,
  Header,
} from './Searchbar.styled';

const schema = yup.object().shape({
  searchText: yup.string().min(3).trim().clone().required(),
});

export const Searchbar = ({ onSubmit }) => {
  const handleSumbmit = (values, actions) => {
    const searchName = values.searchText.trim();

    onSubmit(searchName);
    actions.resetForm();
  };

  return (
    <Header as="header">
      <Formik
        initialValues={{ searchText: '' }}
        validationSchema={schema}
        onSubmit={handleSumbmit}
      >
        <StyledForm autoComplete="off">
          <Button type="submit">
            <BsSearch size={22} />
          </Button>

          <Input
            type="text"
            name="searchText"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage component={ErrorText} name="searchText" />
        </StyledForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
