import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IAuthRequest } from 'model/typescript';
import AuthInput from 'components/AuthInput';
import AuthSubmit from 'components/AuthSubmit';
import { useAppDispatch, useAppNavigate, useAppSelector } from 'app/hooks';
import { fetchLogin } from 'app/actionCreators/authActionCreators';
import Spinner from 'components/Spinner';

export const SignIn: FC = () => {
  const navigate = useAppNavigate();
  const dispatch = useAppDispatch();
  const { errorText, isError, isLoading } = useAppSelector((state) => state.authReducer);
  const { lang } = useAppSelector((state) => state.langReducer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthRequest>();
  const onSubmit: SubmitHandler<IAuthRequest> = (data) => {
    const { login, password } = data;
    dispatch(fetchLogin({ login, password, navigate }));
  };
  return (
    <div className="min-h-[100%] bg-gray-300">
      <div className="flex min-h-[calc(100vh-200px)] w-full items-center justify-center  bg-login bg-contain bg-no-repeat">
        <form
          className="rounded-xl border-2 border-gray-400 bg-gray-50/90 p-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            {isError && (
              <div className="underline-offset-3 w-full text-center text-base font-medium text-red-500 underline underline-offset-2">
                {errorText}
              </div>
            )}
            {isLoading && <Spinner />}
          </div>
          <AuthInput
            label="login"
            title="Your login:"
            placeholder="Login"
            register={register}
            type="text"
            minLength={2}
            maxLength={20}
            errors={errors}
          />
          <AuthInput
            label="password"
            title="Password:"
            placeholder="Password"
            register={register}
            type="password"
            minLength={6}
            maxLength={20}
            errors={errors}
          />
          <AuthSubmit text="Sign in" />
          <p className="pt-3 text-sm font-light text-gray-600">
            Don’t have an account yet?
            <Link to="/register" className="pl-2 font-bold text-gray-600 hover:text-blue-600">
              Sign up
            </Link>
          </p>
        </form>
      </div>
      <i>
        <a
          className="ml-1 text-blue-900 hover:underline"
          href="https://www.freepik.com/"
          target="blank"
          rel="noreferrer noopener"
        >
          Designed by vectorjuice / Freepik
        </a>
      </i>
    </div>
  );
};

export default SignIn;
