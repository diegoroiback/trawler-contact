import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { useForm } from 'react-hook-form';
import { RiMailSendFill } from "react-icons/ri";
import DotLoader from "react-spinners/DotLoader";
import Link from "next/link";

const Form = () => {
  const [loader, setLoader] = useState(false);
  const [sended, setSended] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSended(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {sended ? (
        <div className={styles.div_sended}>
          <RiMailSendFill />
          <h3 className={styles.title}>Message sent!</h3>
          <Link href="/" className={styles.btn_sended}>
            Go back to Home Page
          </Link>
        </div>
      ) : (
        <>
          <h3 className={styles.title}>
            Meet our team and see our <span>software in action.</span>
          </h3>
          <p className={styles.text}>
            Let our integrations experts show you how trawler can work with your products.
          </p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={styles.fieldset}>
              <input
                className={styles.input}
                type="text"
                placeholder="First name"
                {...register("first_name", { required: true })}
              />
              {errors.first_name && <span className={styles.error}>This field is required</span>}
            </fieldset>
            <fieldset className={styles.fieldset}>
              <input
                className={styles.input}
                type="text"
                placeholder="Last name"
                {...register("last_name", { required: true })}
              />
              {errors.last_name && <span className={styles.error}>This field is required</span>}
            </fieldset>
            <fieldset className={styles.fieldset}>
              <input
                className={styles.input}
                type="email"
                placeholder="Work email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className={styles.error}>This field is required</span>}
            </fieldset>
            <fieldset className={styles.fieldset}>
              <input
                className={styles.input}
                type="text"
                placeholder="Company name"
                {...register("company", { required: true })}
              />
              {errors.company && <span className={styles.error}>This field is required</span>}
            </fieldset>
            <fieldset className={styles.fieldset}>
              <textarea
                className={styles.textarea}
                placeholder="What do you hope to achieve with Trawler?"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <span className={styles.error}>This field is required</span>}
            </fieldset>
            <fieldset className={styles.fieldset_last}>
              <span className={styles.span}>
                Our team has decades of experience in reconciliation applied in 15+ industries, and they are here to help you.
              </span>
              <button className={styles.btn} type="submit" disabled={loader}>
                Submit {loader && <DotLoader size={16} color="#fff" />}
              </button>
            </fieldset>
          </form>
        </>
      )}
    </>
  );
};

export default Form;
