import React from "react";
import { useForm } from "react-hook-form";

/**
 * 개발 양식
 - 아이디
 - 비밀번호
 - 비밀번호 확인
 - 닉네임
 */

// typescript type 정의
interface IFormData {
  email: string;
  password: string;
  passwordCheck: string;
  userNickname: string;
  errors: {
    email: {
      message: string;
    };
    password: {
      message: string;
    };
    passwordCheck: {
      message: string;
    };
    userNickname: {
      message: string;
    };
  };
}

const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  // form 제출
  const onSubmit = (data: IFormData) => {
    if (data.password !== data.passwordCheck) {
      setError(
        "passwordCheck",
        { message: "비밀번호가 일치하지 않습니다" },
        { shouldFocus: true }
      );
    }
  };

  return (
    <div>
      <h1>로그인 페이지 입니다</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "350px",
          rowGap: "10px",
        }}
      >
        <input
          placeholder="email"
          {...register("email", {
            required: "email 주소를 입력해주세요",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "오직 네이버 이메일만 가능합니다.",
            },
          })}
        />
        <span>{errors.email?.message}</span>
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: "패스워드를 입력해주세요",
            pattern: {
              value: /[0-9]/,
              message: "숫자만 입력해주세요",
            },
            minLength: {
              value: 4,
              message: "패스워드는 4자리 이상 입력해주세요.",
            },
            maxLength: {
              value: 10,
              message: "패스워드는 10자리 이하로 입력해주세요.",
            },
          })}
        />
        <span>{errors.password?.message}</span>
        <input
          type="password"
          placeholder="password check"
          {...register("passwordCheck", {
            required: "패스워드를 입력해주세요",
            pattern: {
              value: /[0-9]/,
              message: "숫자만 입력해주세요",
            },
            minLength: {
              value: 4,
              message: "패스워드는 4자리 이상 입력해주세요",
            },
            maxLength: {
              value: 10,
              message: "패스워드는 10자리 이하로 입력해주세요",
            },
          })}
        />
        <span>{errors.passwordCheck?.message}</span>
        <input
          placeholder="user nickname"
          {...register("userNickname", {
            required: "닉네임을 입력해주세요",
            minLength: {
              value: 3,
              message: "닉네임은 3자리 이상 입력해주세요",
            },
            maxLength: {
              value: 9,
              message: "닉네임은 9자리 이하로 입력해주세요",
            },
          })}
        />
        <span>{errors.userNickname?.message}</span>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Auth;
