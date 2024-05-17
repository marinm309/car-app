import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

import { LanguageContext } from './LanguageContext';

const ContactForm = () => {

  const {currentLanguage, toggleLanguage} = useContext(LanguageContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {

    emailjs.init({
      publicKey: 'Xx4a0YdYGcuG8vISf',
    });

    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        'service_f6p8qhc',
        'template_g6lxmrf',
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      // Display success alert
      toggleAlert(currentLanguage == 'bg' ? 'Формата беше изпратена успешно!' : 'Form submitted successfully!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert(currentLanguage == 'bg' ? 'Възникна проблем при изпращането на формата, моля опитайте отново.' : 'There was a problem submitting the form, please try again.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className='ContactForm container'>
      {currentLanguage == 'bg' ? (<>    <h2><b>ПОПЪЛНЕТЕ ДАННИТЕ И НИЕ ЩЕ СЕ СВЪРЖЕМ С ВАС</b></h2>
      <div className='contactForm-wrapper'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form
                id='contact-form'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Моля, въведете име',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Моля, използвайте до 30 символа',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Име'
                    ></input>
                    {errors.name && (
                      <span className='errorMessage'>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row formRow">
                  <div className='col'>
                      <input
                        type='text'
                        name='email'
                        {...register('email', {
                          required: {
                            value: true,
                            message: 'Моля, въведете имейл или телефонен номер',
                          },
                          maxLength: {
                            value: 30,
                            message: 'Моля, използвайте до 30 символа',
                          },
                        })}
                        className='form-control formInput'
                        placeholder='Имейл/Телефонен номер'
                      ></input>
                      {errors.email && (
                        <span className='errorMessage'>
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='number'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Моля, посочете номер на кола',
                        },
                        maxLength: {
                          value: 5,
                          message: 'Моля, използвайте до 5 символа',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Моля, посочете номер на кола'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        maxLength: {
                          value: 100,
                          message: 'Моля, използвайте до 100 символа',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Моля, добавете въпрос, ако имате'
                    ></textarea>
                    {errors.message && (
                      <span className='errorMessage'>
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-buttons-container">
                  <button
                    className='submit-btn btn btn-primary'
                    disabled={disabled}
                    type='submit'
                  >
                    Изпрати
                  </button>
                  <Link to={'/'}><u><i>Начало</i></u></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role='alert'
        >
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            } // Clear the alert when close button is clicked
          ></button>
        </div> //ENGLISH PART
      )}</>) : (<>    <h2><b>FILL IN THE DETAILS AND WE WILL CONTACT YOU</b></h2>
      <div className='contactForm-wrapper'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form
                id='contact-form'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter a name',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use up to 30 characters',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && (
                      <span className='errorMessage'>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row formRow">
                  <div className='col'>
                      <input
                        type='text'
                        name='email'
                        {...register('email', {
                          required: {
                            value: true,
                            message: 'Please enter an email or phone number',
                          },
                          maxLength: {
                            value: 30,
                            message: 'Please use up to 30 characters',
                          },
                        })}
                        className='form-control formInput'
                        placeholder='Email/Phone number'
                      ></input>
                      {errors.email && (
                        <span className='errorMessage'>
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='number'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a car number',
                        },
                        maxLength: {
                          value: 5,
                          message: 'Please use up to 5 characters',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Please enter a car number'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        maxLength: {
                          value: 100,
                          message: 'Please use up to 100 characters',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Please add a question if you have one'
                    ></textarea>
                    {errors.message && (
                      <span className='errorMessage'>
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-buttons-container">
                  <button
                    className='submit-btn btn btn-primary'
                    disabled={disabled}
                    type='submit'
                  >
                    Send
                  </button>
                  <Link to={'/'}><u><i>Home</i></u></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role='alert'
        >
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            } // Clear the alert when close button is clicked
          ></button>
        </div>
      )}</>)}
    </div>
  );
};

export default ContactForm;